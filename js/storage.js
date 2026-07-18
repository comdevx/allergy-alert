// storage.js — guarded localStorage wrappers. No top-level document/localStorage
// access so the module can be imported in non-browser environments.

const LOCATIONS_KEY = 'allergyAlert.locations';
const SELECTED_KEY = 'allergyAlert.selectedIndex';
const RESULT_KEY = 'allergyAlert.lastResult';

function read(key) {
  try {
    const raw = globalThis.localStorage ? globalThis.localStorage.getItem(key) : null;
    return raw === null || raw === undefined ? null : JSON.parse(raw);
  } catch {
    return null;
  }
}

function write(key, value) {
  try {
    if (globalThis.localStorage) globalThis.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private mode / quota — ignore */
  }
}

// Entries: { type: 'geo' } or { type: 'province', nameTh, nameEn, lat, lon }.
export function getLocations() {
  const v = read(LOCATIONS_KEY);
  return Array.isArray(v) && v.length ? v : [{ type: 'geo' }];
}

export function setLocations(arr) {
  write(LOCATIONS_KEY, arr);
}

export function getSelectedIndex() {
  const v = read(SELECTED_KEY);
  const len = getLocations().length;
  const i = Number.isInteger(v) ? v : 0;
  return Math.min(Math.max(i, 0), len - 1);
}

export function setSelectedIndex(i) {
  write(SELECTED_KEY, i);
}

export function locationKey(loc) {
  return loc && loc.type === 'province' ? `p:${loc.nameEn}` : 'geo';
}

// One JSON object under RESULT_KEY, keyed by locationKey.
export function getLastResult(locKey) {
  const all = read(RESULT_KEY);
  if (!all || typeof all !== 'object' || Array.isArray(all)) return null;
  return Object.prototype.hasOwnProperty.call(all, locKey) ? all[locKey] : null;
}

export function setLastResult(locKey, obj) {
  const all = read(RESULT_KEY);
  const map = all && typeof all === 'object' && !Array.isArray(all) ? all : {};
  map[locKey] = obj;
  write(RESULT_KEY, map);
}
