// risk.js — pure scoring logic for allergic-rhinitis risk. No DOM, no fetch.

const WEIGHTS = { temp: 1.5, air: 1.5, humidity: 1.0, pollen: 1.0 };
const MAX_POINTS = 3;

function isNum(v) {
  return typeof v === 'number' && Number.isFinite(v);
}

function nums(arr) {
  return (arr || []).filter(isNum);
}

function maxOf(arr) {
  const v = nums(arr);
  return v.length ? Math.max(...v) : null;
}

function minOf(arr) {
  const v = nums(arr);
  return v.length ? Math.min(...v) : null;
}

function meanOf(arr) {
  const v = nums(arr);
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
}

export function scoreTemp(deltaC) {
  if (!isNum(deltaC)) return null;
  if (deltaC < 4) return 0;
  if (deltaC < 7) return 1;
  if (deltaC < 10) return 2;
  return 3;
}

export function scoreHumidity(rh) {
  if (!isNum(rh)) return null;
  if (rh < 20) return 3;
  if (rh < 30) return 2;
  if (rh < 40) return 1;
  if (rh <= 70) return 0;
  if (rh <= 80) return 1;
  if (rh <= 90) return 2;
  return 3;
}

export function scoreAir(pm25, pm10) {
  const s25 = isNum(pm25)
    ? (pm25 <= 15 ? 0 : pm25 <= 37.5 ? 1 : pm25 <= 75 ? 2 : 3)
    : null;
  const s10 = isNum(pm10)
    ? (pm10 <= 50 ? 0 : pm10 <= 80 ? 1 : pm10 <= 120 ? 2 : 3)
    : null;
  if (s25 === null && s10 === null) return null;
  if (s25 === null) return s10;
  if (s10 === null) return s25;
  return Math.max(s25, s10);
}

export function scorePollen(values) {
  const max = maxOf(values);
  if (max === null) return null;
  if (max <= 20) return 0;
  if (max <= 80) return 1;
  if (max <= 200) return 2;
  return 3;
}

export function combine(factors) {
  let sum = 0;
  let denom = 0;
  let hasMax = false;
  for (const key of Object.keys(WEIGHTS)) {
    const points = factors?.[key];
    if (!isNum(points)) continue;
    sum += points * WEIGHTS[key];
    denom += MAX_POINTS * WEIGHTS[key];
    if (points === MAX_POINTS) hasMax = true;
  }
  if (denom === 0) return { level: 'low', pct: 0, factors };
  const pct = sum / denom;
  let level = pct < 0.25 ? 'low' : pct < 0.5 ? 'med' : pct < 0.75 ? 'high' : 'vhigh';
  // Escalation: a single maxed-out factor is dangerous even if the weighted
  // average is diluted by calm factors.
  if (hasMax && (level === 'low' || level === 'med')) level = 'high';
  return { level, pct, factors };
}

export function computeTempDelta(temps, idxNow) {
  if (!Array.isArray(temps) || !isNum(idxNow) || idxNow < 0 || idxNow >= temps.length) return null;
  const start = Math.max(0, idxNow - 24);
  const windowVals = nums(temps.slice(start, idxNow + 1));
  const swing = windowVals.length >= 2 ? Math.max(...windowVals) - Math.min(...windowVals) : null;
  const nowT = temps[idxNow];
  const prevT = idxNow >= 24 ? temps[idxNow - 24] : undefined;
  const dayDiff = isNum(nowT) && isNum(prevT) ? Math.abs(nowT - prevT) : null;
  if (swing === null && dayDiff === null) return null;
  if (swing === null) return dayDiff;
  if (dayDiff === null) return swing;
  return Math.max(swing, dayDiff);
}

export function forwardOutlook(temps, times, idxNow) {
  if (!Array.isArray(temps) || !Array.isArray(times)) return null;
  if (!isNum(idxNow) || idxNow < 0 || idxNow >= temps.length) return null;
  const end = Math.min(temps.length, idxNow + 25);
  const t = temps.slice(idxNow, end);
  const ts = times.slice(idxNow, end);
  if (t.length < 2) return null;
  const min = minOf(t);
  const max = maxOf(t);
  const swing = min !== null && max !== null ? max - min : null;
  let maxIdx = -1;
  for (let i = 0; i < t.length; i++) {
    if (isNum(t[i]) && (maxIdx === -1 || t[i] > t[maxIdx])) maxIdx = i;
  }
  return { temps: t, times: ts, min, max, swing, maxIdx };
}

export function findIdxNow(times, now = new Date()) {
  if (!Array.isArray(times)) return -1;
  const pad = (n) => String(n).padStart(2, '0');
  const key = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:00`;
  return times.indexOf(key);
}

// --- dailyForecast helpers ---

function addDays(dateStr, n) {
  // dateStr is 'YYYY-MM-DD'; do the arithmetic in UTC so local DST can't shift the date.
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + n));
  const pad = (x) => String(x).padStart(2, '0');
  return `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}-${pad(dt.getUTCDate())}`;
}

// Group hourly values by date prefix of their timestamp. The weather and air
// responses cover DIFFERENT ranges (weather: 9 days incl. 2 past days; air:
// 7 days starting today), so hours must be matched by date string, never by index.
function groupByDate(times, values) {
  const map = new Map();
  if (!Array.isArray(times) || !Array.isArray(values)) return map;
  for (let i = 0; i < times.length; i++) {
    const time = times[i];
    if (typeof time !== 'string') continue;
    const date = time.slice(0, 10);
    let bucket = map.get(date);
    if (!bucket) {
      bucket = [];
      map.set(date, bucket);
    }
    bucket.push(values[i]);
  }
  return map;
}

const POLLEN_KEYS = [
  'grass_pollen', 'birch_pollen', 'ragweed_pollen',
  'mugwort_pollen', 'olive_pollen', 'alder_pollen',
];

export function dailyForecast(weather, air, todayStr) {
  const wTimes = weather?.hourly?.time;
  const byDateTemp = groupByDate(wTimes, weather?.hourly?.temperature_2m);
  const byDateRh = groupByDate(wTimes, weather?.hourly?.relative_humidity_2m);

  const aTimes = air?.hourly?.time;
  const byDatePm25 = groupByDate(aTimes, air?.hourly?.pm2_5);
  const byDatePm10 = groupByDate(aTimes, air?.hourly?.pm10);
  const byDatePollen = POLLEN_KEYS.map((k) => groupByDate(aTimes, air?.hourly?.[k]));

  const dailyDates = weather?.daily?.time || [];
  const out = [];
  for (let i = 0; i < 7; i++) {
    const date = addDays(todayStr, i);
    const prevDate = addDays(date, -1);

    const dayTemps = byDateTemp.get(date) || [];
    const prevTemps = byDateTemp.get(prevDate) || [];
    const dayMax = maxOf(dayTemps);
    const dayMin = minOf(dayTemps);
    const within = dayMax !== null && dayMin !== null ? dayMax - dayMin : null;
    const meanNow = meanOf(dayTemps);
    const meanPrev = meanOf(prevTemps);
    const dayShift = meanNow !== null && meanPrev !== null ? Math.abs(meanNow - meanPrev) : null;
    let delta = null;
    if (within !== null || dayShift !== null) {
      delta = Math.max(within ?? -Infinity, dayShift ?? -Infinity);
    }

    const factors = {
      temp: scoreTemp(delta),
      humidity: scoreHumidity(meanOf(byDateRh.get(date))),
      air: scoreAir(maxOf(byDatePm25.get(date)), maxOf(byDatePm10.get(date))),
      pollen: scorePollen(byDatePollen.flatMap((m) => m.get(date) || [])),
    };
    const { level, pct } = combine(factors);

    const di = dailyDates.indexOf(date);
    const tMax = di >= 0 && isNum(weather?.daily?.temperature_2m_max?.[di])
      ? weather.daily.temperature_2m_max[di] : null;
    const tMin = di >= 0 && isNum(weather?.daily?.temperature_2m_min?.[di])
      ? weather.daily.temperature_2m_min[di] : null;

    out.push({ date, tMin, tMax, level, pct });
  }
  return out;
}
