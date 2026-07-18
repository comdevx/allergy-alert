// ui.js — pure rendering. Takes computed data, touches the DOM, never fetches.
// All dynamic text goes through textContent (no innerHTML with data).

import { t, fmt, formatDay, formatDate, formatDateTime, getLang } from './i18n.js';

const LEVEL_KEY = { low: 'levelLow', med: 'levelMed', high: 'levelHigh', vhigh: 'levelVhigh' };
const ADVICE_KEY = { low: 'adviceLow', med: 'adviceMed', high: 'adviceHigh', vhigh: 'adviceVhigh' };

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function isNum(v) {
  return typeof v === 'number' && Number.isFinite(v);
}

function levelText(level) {
  return String(t(LEVEL_KEY[level] || LEVEL_KEY.low));
}

function hourLabel(timeStr) {
  // 'YYYY-MM-DDTHH:MM' → 'HH:00'
  return typeof timeStr === 'string' ? `${timeStr.slice(11, 13)}:00` : '';
}

export function renderLangSelect(selectEl, supported, current) {
  selectEl.textContent = '';
  for (const { code, label } of supported) {
    const opt = el('option', '', label);
    opt.value = code;
    selectEl.append(opt);
  }
  selectEl.value = current;
}

export function renderChips(container, locations, selectedIndex, chipRisks, handlers) {
  container.textContent = '';
  locations.forEach((loc, i) => {
    const chip = el('button', 'chip');
    chip.type = 'button';
    chip.setAttribute('role', 'tab');
    chip.setAttribute('aria-selected', String(i === selectedIndex));
    if (i === selectedIndex) chip.classList.add('chip--active');

    const name = loc.type === 'geo'
      ? String(t('currentLocation'))
      : (getLang() === 'th' ? loc.nameTh : loc.nameEn);
    chip.append(el('span', '', name));

    const level = chipRisks ? chipRisks[i] : null;
    if (level) {
      chip.append(el('span', `dot dot--${level}`));
      chip.append(el('span', '', levelText(level)));
    }

    if (loc.type !== 'geo') {
      // <button> cannot nest a <button>; use a span acting as a button.
      const x = el('span', 'chip-x', '×');
      x.setAttribute('role', 'button');
      x.setAttribute('tabindex', '0');
      x.setAttribute('aria-label', String(t('removeArea')));
      x.addEventListener('click', (e) => {
        e.stopPropagation();
        handlers.onRemove(i);
      });
      x.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          handlers.onRemove(i);
        }
      });
      chip.append(x);
    }

    chip.addEventListener('click', () => handlers.onSelect(i));
    container.append(chip);
  });

  if (locations.length < 5) {
    const add = el('button', 'chip chip--add', String(t('addArea')));
    add.type = 'button';
    add.addEventListener('click', () => handlers.onAdd());
    container.append(add);
  }
}

// result: { level, factors, tempDelta, rh } (factors from risk.combine input).
export function renderBanner(result) {
  const banner = document.getElementById('riskBanner');
  const levelEl = document.getElementById('bannerLevel');
  const reasonEl = document.getElementById('bannerReason');
  banner.className = `banner banner--${result.level}`;

  const warn = result.level === 'high' || result.level === 'vhigh' ? '⚠️ ' : '';
  levelEl.textContent = warn + levelText(result.level);

  const f = result.factors || {};
  const reasons = [];
  if (isNum(f.temp) && f.temp >= 2 && isNum(result.tempDelta)) {
    reasons.push(fmt('reasonTemp', { n: result.tempDelta.toFixed(1) }));
  }
  if (isNum(f.air) && f.air >= 2) reasons.push(String(t('reasonAir')));
  if (isNum(f.humidity) && f.humidity >= 2) reasons.push(String(t('reasonHumidity')));
  if (isNum(f.pollen) && f.pollen >= 2) reasons.push(String(t('reasonPollen')));
  reasonEl.textContent = reasons.length ? reasons.join(String(t('reasonJoin'))) : String(t('reasonNone'));
}

function factorCard(nameKey, valueText, unitKey, score, opts = {}) {
  const card = el('div', 'card');
  if (opts.muted) card.classList.add('card--muted');
  card.append(el('div', 'name', String(t(nameKey))));

  const value = el('div', 'value', valueText);
  if (unitKey) value.append(' ', el('small', '', String(t(unitKey))));
  card.append(value);

  const grade = el('div', 'grade');
  const dots = el('span', 'dots');
  for (let k = 1; k <= 3; k++) {
    const dot = document.createElement('i');
    if (isNum(score) && k <= score) dot.className = `on-${k}`;
    dots.append(dot);
  }
  grade.append(dots);
  const gradeText = opts.gradeText !== undefined
    ? opts.gradeText
    : (isNum(score) ? String(t(`grade${score}`)) : String(t('gradeNoData')));
  grade.append(el('span', '', gradeText));
  card.append(grade);
  return card;
}

// factorData: {
//   temp: { score, delta }, humidity: { score, rh },
//   air: { score, pm25, pm10 }, pollen: { score, max }
// } — score null means no data for that factor.
export function renderFactors(container, factorData) {
  container.textContent = '';
  const { temp, humidity, air, pollen } = factorData;

  container.append(isNum(temp.delta)
    ? factorCard('factorTemp', temp.delta.toFixed(1), 'unitC', temp.score)
    : factorCard('factorTemp', String(t('insufficientData')), null, null));

  container.append(isNum(humidity.rh)
    ? factorCard('factorHumidity', String(Math.round(humidity.rh)), 'unitPct', humidity.score)
    : factorCard('factorHumidity', '—', null, null));

  container.append(isNum(air.pm25)
    ? factorCard('factorAir', String(Math.round(air.pm25)), 'unitPm', air.score)
    : factorCard('factorAir', '—', null, air.score));

  container.append(isNum(pollen.score)
    ? factorCard('factorPollen', String(Math.round(pollen.max)), null, pollen.score)
    : factorCard('factorPollen', String(t('noPollenData')), null, null, {
        muted: true,
        gradeText: String(t('gradeExcluded')),
      }));
}

export function renderDays(container, days) {
  container.textContent = '';
  days.forEach((d, i) => {
    const card = el('div', `day day--${d.level}`);
    const name = i === 0 ? String(t('today')) : i === 1 ? String(t('tomorrow')) : formatDay(d.date);
    card.append(el('div', 'd-name', name));
    card.append(el('div', 'd-date', formatDate(d.date)));
    const temps = isNum(d.tMin) && isNum(d.tMax)
      ? `${Math.round(d.tMin)}–${Math.round(d.tMax)}°`
      : '—';
    card.append(el('div', 'd-temp', temps));
    card.append(el('div', 'd-level', levelText(d.level)));
    container.append(card);
  });
}

export function renderOutlook(stripEl, labelsEl, noteEl, outlook) {
  const section = stripEl.closest('section');
  if (!outlook) {
    if (section) section.hidden = true;
    return;
  }
  if (section) section.hidden = false;

  const { temps, times, min, max, swing, maxIdx } = outlook;
  stripEl.textContent = '';
  const range = isNum(min) && isNum(max) ? max - min : 0;
  for (const temp of temps) {
    const bar = el('div', 'h');
    const v = isNum(temp) ? temp : min;
    // 30–100% between min and max; flat series → all 60%.
    const pct = range > 0 ? 30 + ((v - min) / range) * 70 : 60;
    bar.style.height = `${pct}%`;
    // Hot = top quartile of the range (covers the hours around the peak).
    if (range > 0 && isNum(temp) && temp >= max - range / 4) bar.classList.add('hot');
    stripEl.append(bar);
  }

  labelsEl.textContent = '';
  for (let k = 0; k < 5; k++) {
    const idx = Math.round((k * (times.length - 1)) / 4);
    labelsEl.append(el('span', '', hourLabel(times[idx])));
  }

  noteEl.textContent = isNum(swing) && maxIdx >= 0
    ? fmt('outlookNote', { n: swing.toFixed(1), time: hourLabel(times[maxIdx]) })
    : '';
}

// result: same object as renderBanner, plus rh for humidity direction.
export function renderAdvice(listEl, result) {
  const items = [];
  const base = t(ADVICE_KEY[result.level] || ADVICE_KEY.low);
  if (Array.isArray(base)) items.push(...base);
  else items.push(String(base));

  const f = result.factors || {};
  if (isNum(f.temp) && f.temp >= 2) items.push(String(t('adviceTemp')));
  if (isNum(f.humidity) && f.humidity >= 2) {
    items.push(String(t(isNum(result.rh) && result.rh > 70 ? 'adviceHumidityHigh' : 'adviceHumidityLow')));
  }
  if (isNum(f.air) && f.air >= 2) items.push(String(t('adviceAir')));
  if (isNum(f.pollen) && f.pollen >= 2) items.push(String(t('advicePollen')));

  listEl.textContent = '';
  for (const text of new Set(items)) listEl.append(el('li', '', text));
}

export function renderProvincePicker(selectEl, provinces) {
  const useTh = getLang() === 'th';
  selectEl.textContent = '';
  for (const p of provinces) {
    const opt = el('option', '', useTh ? p.nameTh : p.nameEn);
    opt.value = p.nameEn;
    selectEl.append(opt);
  }
}

export function setUpdatedAt(el2, date) {
  el2.textContent = fmt('updatedAt', { time: formatDateTime(date) });
}

export function showStale(el2, date) {
  el2.textContent = fmt('staleNotice', { time: formatDateTime(date) });
  el2.hidden = false;
}

export function hideStale(el2) {
  el2.hidden = true;
}

export function showError() {
  document.getElementById('errorState').hidden = false;
}

export function hideError() {
  document.getElementById('errorState').hidden = true;
}

export function showLoading() {
  document.getElementById('loadingState').hidden = false;
}

export function hideLoading() {
  document.getElementById('loadingState').hidden = true;
}
