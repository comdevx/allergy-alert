// app.js — orchestration: boot, data loading, event wiring, mock mode.

import { SUPPORTED, initI18n, setLang, getLang, applyStatic, t } from './i18n.js';
import {
  scoreTemp, scoreHumidity, scoreAir, scorePollen, combine,
  computeTempDelta, forwardOutlook, findIdxNow, dailyForecast,
} from './risk.js';
import { fetchBoth } from './api.js';
import { PROVINCES } from './provinces.js';
import * as storage from './storage.js';
import * as ui from './ui.js';
import { initShare, showShareBar, hideShareBar } from './share.js';

const LEVEL_KEY = { low: 'levelLow', med: 'levelMed', high: 'levelHigh', vhigh: 'levelVhigh' };
const CHIP_CACHE_MS = 30 * 60 * 1000;
const MAX_AREAS = 5;
const POLLEN_KEYS = [
  'grass_pollen', 'birch_pollen', 'ragweed_pollen',
  'mugwort_pollen', 'olive_pollen', 'alder_pollen',
];

const $ = (id) => document.getElementById(id);
const pad = (n) => String(n).padStart(2, '0');

function localDateStr(d) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function localHourStr(d) {
  return `${localDateStr(d)}T${pad(d.getHours())}:00`;
}

const state = {
  locations: [],
  selectedIndex: 0,
  chipRisks: [],   // level string | null per location
  payload: null,   // last rendered payload, re-rendered on language change
  staleAt: null,
  mock: null,
};

const chipHandlers = {
  onSelect: (i) => selectArea(i),
  onRemove: (i) => removeArea(i),
  onAdd: () => showPicker(),
};

// ── Geolocation ──

function getPosition() {
  return new Promise((resolve, reject) => {
    const geo = globalThis.navigator && globalThis.navigator.geolocation;
    if (!geo) {
      reject(new Error('geolocation unavailable'));
      return;
    }
    geo.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
      reject,
      { timeout: 8000, maximumAge: 600000 }
    );
  });
}

// ── Compute ──

function computePayload(weather, air) {
  const now = new Date();
  const wTimes = (weather && weather.hourly && weather.hourly.time) || [];
  const idxNow = findIdxNow(wTimes, now);

  let tempDelta = null;
  let rhNow = null;
  if (idxNow >= 0) {
    tempDelta = computeTempDelta(weather.hourly.temperature_2m, idxNow);
    rhNow = weather.hourly.relative_humidity_2m?.[idxNow] ?? null;
  }
  // Current hour missing from the hourly series — fall back to `current`
  // observation (temp delta stays null: not enough history to compare).
  if (rhNow === null && weather?.current) {
    rhNow = weather.current.relative_humidity_2m ?? null;
  }

  const aTimes = (air && air.hourly && air.hourly.time) || [];
  const airIdx = findIdxNow(aTimes, now);

  let pm25 = air?.current?.pm2_5 ?? null;
  let pm10 = air?.current?.pm10 ?? null;
  if (pm25 === null && airIdx >= 0) pm25 = air.hourly.pm2_5?.[airIdx] ?? null;
  if (pm10 === null && airIdx >= 0) pm10 = air.hourly.pm10?.[airIdx] ?? null;

  const todayStr = localDateStr(now);
  const pollenVals = [];
  if (air?.hourly) {
    if (airIdx >= 0) {
      for (const k of POLLEN_KEYS) pollenVals.push(air.hourly[k]?.[airIdx]);
    } else {
      // Device hour not in the point-local series — use today's values.
      for (let i = 0; i < aTimes.length; i++) {
        if (typeof aTimes[i] === 'string' && aTimes[i].startsWith(todayStr)) {
          for (const k of POLLEN_KEYS) pollenVals.push(air.hourly[k]?.[i]);
        }
      }
    }
  }
  const pollenNums = pollenVals.filter((v) => typeof v === 'number' && Number.isFinite(v));
  const pollenMax = pollenNums.length ? Math.max(...pollenNums) : null;

  const factors = {
    temp: scoreTemp(tempDelta),
    humidity: scoreHumidity(rhNow),
    air: scoreAir(pm25, pm10),
    pollen: scorePollen(pollenVals),
  };
  const combined = combine(factors);

  return {
    result: { level: combined.level, pct: combined.pct, factors, tempDelta, rh: rhNow },
    factorData: {
      temp: { score: factors.temp, delta: tempDelta },
      humidity: { score: factors.humidity, rh: rhNow },
      air: { score: factors.air, pm25, pm10 },
      pollen: { score: factors.pollen, max: pollenMax },
    },
    days: dailyForecast(weather, air, todayStr),
    outlook: idxNow >= 0 ? forwardOutlook(weather.hourly.temperature_2m, wTimes, idxNow) : null,
    updatedAt: now.getTime(),
  };
}

// ── Render ──

function renderChipsNow() {
  ui.renderChips($('areaChips'), state.locations, state.selectedIndex, state.chipRisks, chipHandlers);
}

function renderPayload(payload) {
  ui.renderBanner(payload.result);
  ui.renderFactors($('factorCards'), payload.factorData);
  ui.renderDays($('daysForecast'), payload.days);
  ui.renderOutlook($('outlookStrip'), $('outlookLabels'), $('outlookNote'), payload.outlook);
  ui.renderAdvice($('adviceList'), payload.result);
  ui.setUpdatedAt($('updatedAt'), new Date(payload.updatedAt));
  showShareBar();
}

// ── Load flow ──

async function load({ bypassCache = false, revertIndexOnGeoFail = null } = {}) {
  ui.hideError();
  ui.hideStale($('staleNotice'));
  state.staleAt = null;
  ui.showLoading();
  hideShareBar();
  hidePicker();
  renderChipsNow();

  let loc = state.locations[state.selectedIndex];
  let weather = null;
  let air = null;

  if (state.mock) {
    const make = MOCKS[state.mock] || MOCKS.med;
    ({ weather, air } = make());
  } else {
    let coords = loc;
    if (loc.type === 'geo') {
      try {
        coords = await getPosition();
      } catch {
        if (revertIndexOnGeoFail !== null) {
          // Geo chip clicked but geolocation failed: keep the previously
          // selected area (its data is still rendered underneath) and open
          // the province picker instead of silently swallowing the failure.
          state.selectedIndex = revertIndexOnGeoFail;
          storage.setSelectedIndex(revertIndexOnGeoFail);
          ui.hideLoading();
          renderChipsNow();
          showPicker();
          return;
        }
        const provIdx = state.locations.findIndex((l) => l.type === 'province');
        if (provIdx === -1) {
          ui.hideLoading();
          showPicker();
          return;
        }
        // Geo unavailable: fall back to the first saved province; the geo
        // chip keeps a null risk (no dot) to signal unavailability.
        state.selectedIndex = provIdx;
        storage.setSelectedIndex(provIdx);
        loc = state.locations[provIdx];
        coords = loc;
        renderChipsNow();
      }
    }
    ({ weather, air } = await fetchBoth(coords.lat, coords.lon));
  }

  const locKey = storage.locationKey(loc);

  if (!weather && !air) {
    ui.hideLoading();
    const cached = storage.getLastResult(locKey);
    if (cached && cached.payload) {
      state.payload = cached.payload;
      renderPayload(cached.payload);
      state.staleAt = cached.assessedAt;
      ui.showStale($('staleNotice'), new Date(cached.assessedAt));
      state.chipRisks[state.selectedIndex] = cached.payload.result.level;
      renderChipsNow();
    } else {
      ui.showError();
    }
    return;
  }

  const payload = computePayload(weather, air);
  state.payload = payload;
  renderPayload(payload);
  ui.hideLoading();
  state.chipRisks[state.selectedIndex] = payload.result.level;
  renderChipsNow();
  if (!state.mock) {
    storage.setLastResult(locKey, { assessedAt: Date.now(), payload });
    refreshChips(bypassCache);
  }
}

// Background refresh of non-selected chips; failures only leave the dot absent.
async function refreshChips(bypassCache) {
  const jobs = state.locations.map(async (loc, i) => {
    if (i === state.selectedIndex) return;
    const key = storage.locationKey(loc);
    if (!bypassCache) {
      const cached = storage.getLastResult(key);
      if (cached && cached.payload && Date.now() - cached.assessedAt < CHIP_CACHE_MS) {
        state.chipRisks[i] = cached.payload.result.level;
        return;
      }
    }
    try {
      let coords = loc;
      if (loc.type === 'geo') coords = await getPosition();
      const { weather, air } = await fetchBoth(coords.lat, coords.lon);
      if (!weather && !air) {
        state.chipRisks[i] = null;
        return;
      }
      const payload = computePayload(weather, air);
      storage.setLastResult(key, { assessedAt: Date.now(), payload });
      state.chipRisks[i] = payload.result.level;
    } catch {
      state.chipRisks[i] = null;
    }
  });
  await Promise.allSettled(jobs);
  renderChipsNow();
}

// ── Area management ──

function selectArea(i) {
  if (i === state.selectedIndex || i < 0 || i >= state.locations.length) return;
  const prevIndex = state.selectedIndex;
  state.selectedIndex = i;
  storage.setSelectedIndex(i);
  const cached = storage.getLastResult(storage.locationKey(state.locations[i]));
  if (!state.mock && cached && cached.payload && Date.now() - cached.assessedAt < CHIP_CACHE_MS) {
    ui.hideError();
    ui.hideStale($('staleNotice'));
    state.staleAt = null;
    ui.hideLoading();
    state.payload = cached.payload;
    renderPayload(cached.payload);
    state.chipRisks[i] = cached.payload.result.level;
    renderChipsNow();
  } else {
    load({ revertIndexOnGeoFail: prevIndex });
  }
}

function removeArea(i) {
  if (i < 0 || i >= state.locations.length || state.locations[i].type === 'geo') return;
  const wasSelected = i === state.selectedIndex;
  state.locations.splice(i, 1);
  state.chipRisks.splice(i, 1);
  if (!state.locations.length) {
    state.locations = [{ type: 'geo' }];
    state.chipRisks = [null];
  }
  if (i < state.selectedIndex) state.selectedIndex -= 1;
  state.selectedIndex = Math.min(Math.max(state.selectedIndex, 0), state.locations.length - 1);
  storage.setLocations(state.locations);
  storage.setSelectedIndex(state.selectedIndex);
  if (wasSelected) load();
  else renderChipsNow();
}

function showPicker() {
  const select = $('provinceSelect');
  ui.renderProvincePicker(select, PROVINCES);
  $('provincePicker').hidden = false;
}

function hidePicker() {
  $('provincePicker').hidden = true;
}

function confirmPicker() {
  const nameEn = $('provinceSelect').value;
  hidePicker();
  const existing = state.locations.findIndex((l) => l.type === 'province' && l.nameEn === nameEn);
  if (existing >= 0) {
    selectArea(existing);
    return;
  }
  if (state.locations.length >= MAX_AREAS) return;
  const p = PROVINCES.find((x) => x.nameEn === nameEn);
  if (!p) return;
  state.locations.push({ type: 'province', nameTh: p.nameTh, nameEn: p.nameEn, lat: p.lat, lon: p.lon });
  state.chipRisks.push(null);
  state.selectedIndex = state.locations.length - 1;
  storage.setLocations(state.locations);
  storage.setSelectedIndex(state.selectedIndex);
  load();
}

// ── Language ──

async function changeLang(code) {
  await setLang(code);
  applyStatic();
  renderChipsNow();
  if (state.payload) renderPayload(state.payload);
  if (state.staleAt) ui.showStale($('staleNotice'), new Date(state.staleAt));
  const picker = $('provincePicker');
  if (!picker.hidden) {
    const select = $('provinceSelect');
    const keep = select.value;
    ui.renderProvincePicker(select, PROVINCES);
    if (keep) select.value = keep;
  }
}

// ── Mock mode (?mock=low|med|high|vhigh|nopollen|offline) ──

function startOfDay(offsetDays) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + offsetDays);
  return d;
}

// Sine over the day, peak at 16:00; full-day swing = 2 * amp.
function tempAt(hour, base, amp) {
  return Math.round((base + amp * Math.sin(((hour - 10) / 24) * Math.PI * 2)) * 10) / 10;
}

function mockData({ amp, base = 30, rh, pm25, pm10, pollen }) {
  const now = new Date();

  const wStart = startOfDay(-2);
  const wTime = [];
  const wTemp = [];
  const wRh = [];
  for (let i = 0; i < 216; i++) {
    const dt = new Date(wStart.getTime() + i * 3600e3);
    wTime.push(localHourStr(dt));
    wTemp.push(tempAt(dt.getHours(), base, amp));
    wRh.push(rh);
  }
  const dTime = [];
  const dMax = [];
  const dMin = [];
  for (let d = 0; d < 9; d++) {
    dTime.push(localDateStr(new Date(wStart.getTime() + d * 86400e3)));
    dMax.push(base + amp);
    dMin.push(base - amp);
  }

  const aStart = startOfDay(0);
  const aTime = [];
  const aPm25 = [];
  const aPm10 = [];
  const pollenArrays = {};
  for (const k of POLLEN_KEYS) pollenArrays[k] = [];
  for (let i = 0; i < 168; i++) {
    const dt = new Date(aStart.getTime() + i * 3600e3);
    aTime.push(localHourStr(dt));
    aPm25.push(pm25);
    aPm10.push(pm10);
    for (const k of POLLEN_KEYS) pollenArrays[k].push(pollen);
  }

  return {
    weather: {
      hourly: { time: wTime, temperature_2m: wTemp, relative_humidity_2m: wRh },
      daily: { time: dTime, temperature_2m_max: dMax, temperature_2m_min: dMin },
      current: {
        time: localHourStr(now),
        interval: 900,
        temperature_2m: tempAt(now.getHours(), base, amp),
        relative_humidity_2m: rh,
      },
    },
    air: {
      hourly: { time: aTime, pm2_5: aPm25, pm10: aPm10, ...pollenArrays },
      current: { time: localHourStr(now), interval: 3600, pm2_5: pm25, pm10: pm10 },
    },
  };
}

const MOCKS = {
  low: () => mockData({ amp: 1, rh: 55, pm25: 8, pm10: 20, pollen: null }),
  med: () => mockData({ amp: 4, rh: 75, pm25: 20, pm10: 30, pollen: 50 }),
  // PM2.5 maxed (score 3) while all other factors are calm: weighted pct is
  // 4.5/12 = 0.375 (med band) — proves the single-max escalation to 'high'.
  high: () => mockData({ amp: 1, rh: 55, pm25: 100, pm10: 40, pollen: null }),
  vhigh: () => mockData({ amp: 6, rh: 85, pm25: 150, pm10: 130, pollen: 300 }),
  nopollen: () => mockData({ amp: 4, rh: 75, pm25: 20, pm10: 30, pollen: null }),
  offline: () => ({ weather: null, air: null }),
};

// ── Boot ──

function wireEvents() {
  $('refreshBtn').addEventListener('click', () => {
    load({ bypassCache: true }).catch(() => {
      ui.hideLoading();
      ui.showError();
    });
  });
  $('retryBtn').addEventListener('click', () => {
    load().catch(() => {
      ui.hideLoading();
      ui.showError();
    });
  });
  $('langSelect').addEventListener('change', (e) => {
    changeLang(e.target.value).catch(() => {});
  });
  $('pickerConfirm').addEventListener('click', confirmPicker);
  $('pickerCancel').addEventListener('click', hidePicker);
  window.addEventListener('online', () => {
    load().catch(() => {});
  });

  initShare(() => {
    if (!state.payload) return null;
    const p = state.payload;
    const loc = state.locations[state.selectedIndex];
    const locationName = loc.type === 'geo'
      ? String(t('currentLocation'))
      : (getLang() === 'th' ? loc.nameTh : loc.nameEn);
    return {
      level: p.result.level,
      levelText: String(t(LEVEL_KEY[p.result.level] || 'levelLow')),
      locationName,
      reasons: document.getElementById('bannerReason')?.textContent || '',
      factors: {
        tempDelta: p.factorData.temp.delta,
        rh: p.factorData.humidity.rh,
        pm25: p.factorData.air.pm25,
        pollenMax: p.factorData.pollen.max,
      },
    };
  });
}

async function boot() {
  state.mock = new URLSearchParams(globalThis.location.search).get('mock');
  await initI18n();
  applyStatic();
  ui.renderLangSelect($('langSelect'), SUPPORTED, getLang());
  state.locations = storage.getLocations();
  state.selectedIndex = storage.getSelectedIndex();
  state.chipRisks = state.locations.map(() => null);
  wireEvents();
  renderChipsNow();
  await load();
}

boot().catch(() => {
  ui.hideLoading();
  ui.showError();
});
