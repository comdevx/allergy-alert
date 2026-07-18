// i18n layer for Allergy Alert (vanilla ES modules, no build step).
// No document/localStorage access at module top level so this file can be
// imported in non-browser environments (e.g. node) without crashing.

export const SUPPORTED = [
  { code: 'th', label: 'ไทย' }, { code: 'en', label: 'English' }, { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' }, { code: 'ko', label: '한국어' }, { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' }, { code: 'de', label: 'Deutsch' }, { code: 'pt', label: 'Português' },
  { code: 'ru', label: 'Русский' }, { code: 'ar', label: 'العربية' }, { code: 'hi', label: 'हिन्दी' },
  { code: 'id', label: 'Bahasa Indonesia' }, { code: 'vi', label: 'Tiếng Việt' }
];

const STORAGE_KEY = 'allergyAlert.lang';
const SUPPORTED_CODES = SUPPORTED.map((s) => s.code);

let currentLang = 'en';
let dict = {};
let enDict = {};

function readStoredLang() {
  try {
    return globalThis.localStorage ? globalThis.localStorage.getItem(STORAGE_KEY) : null;
  } catch {
    return null;
  }
}

function writeStoredLang(code) {
  try {
    if (globalThis.localStorage) globalThis.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    /* private mode / quota — ignore */
  }
}

function normalize(tag) {
  return String(tag || '').toLowerCase();
}

// ?lang= URL param > localStorage > navigator.languages (full tag, then base) > 'en'
function resolveLang() {
  try {
    const param = new URLSearchParams(globalThis.location ? globalThis.location.search : '').get('lang');
    if (param && SUPPORTED_CODES.includes(normalize(param))) return normalize(param);
  } catch {
    /* no location — ignore */
  }

  const stored = readStoredLang();
  if (stored && SUPPORTED_CODES.includes(normalize(stored))) return normalize(stored);

  const nav = globalThis.navigator;
  const tags = (nav && (nav.languages && nav.languages.length ? nav.languages : [nav.language])) || [];
  for (const tag of tags) {
    const full = normalize(tag);
    if (SUPPORTED_CODES.includes(full)) return full;
    const base = full.split('-')[0];
    if (SUPPORTED_CODES.includes(base)) return base;
  }

  return 'en';
}

async function loadDicts(code) {
  enDict = (await import('./locales/en.js')).default;
  if (code === 'en') {
    dict = enDict;
    return;
  }
  try {
    dict = (await import(`./locales/${code}.js`)).default;
  } catch {
    // Locale file missing or broken — fall back to English silently.
    dict = enDict;
  }
}

function applyDocumentLang(code) {
  const doc = globalThis.document;
  if (!doc || !doc.documentElement) return;
  doc.documentElement.lang = code;
  doc.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
}

export async function initI18n() {
  const code = resolveLang();
  await loadDicts(code);
  currentLang = code;
  applyDocumentLang(code);
  return code;
}

export async function setLang(code) {
  writeStoredLang(code);
  await loadDicts(code);
  currentLang = code;
  applyDocumentLang(code);
  return code;
}

export function getLang() {
  return currentLang;
}

// current dict → en dict → the key itself.
// Values may be strings or arrays (advice lists) — returned as-is.
export function t(key) {
  if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
  if (Object.prototype.hasOwnProperty.call(enDict, key)) return enDict[key];
  return key;
}

export function fmt(key, vars) {
  const template = t(key);
  if (typeof template !== 'string' || !vars) return template;
  return template.replace(/\{(\w+)\}/g, (match, name) =>
    Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match
  );
}

export function applyStatic() {
  const doc = globalThis.document;
  if (!doc) return;
  for (const el of doc.querySelectorAll('[data-i18n]')) {
    const value = t(el.getAttribute('data-i18n'));
    if (typeof value === 'string') el.textContent = value;
  }
  for (const el of doc.querySelectorAll('[data-i18n-aria]')) {
    const value = t(el.getAttribute('data-i18n-aria'));
    if (typeof value === 'string') el.setAttribute('aria-label', value);
  }
}

// dateStr: 'YYYY-MM-DD'. Parsed as local time to avoid UTC day-shift.
function parseLocalDate(dateStr) {
  return new Date(`${dateStr}T00:00:00`);
}

export function formatDay(dateStr) {
  return new Intl.DateTimeFormat(currentLang, { weekday: 'short' }).format(parseLocalDate(dateStr));
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat(currentLang, { day: 'numeric', month: 'short' }).format(parseLocalDate(dateStr));
}

export function formatDateTime(date) {
  return new Intl.DateTimeFormat(currentLang, {
    day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
  }).format(date);
}
