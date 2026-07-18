// api.js — Open-Meteo fetchers. No DOM access.

const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';
const AIR_URL = 'https://air-quality-api.open-meteo.com/v1/air-quality';
const TIMEOUT_MS = 8000;

async function getJson(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

// timezone=auto so hourly/daily times are local to the queried point
// (works for saved provinces and for GPS positions abroad alike).
export async function fetchWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,relative_humidity_2m',
    hourly: 'temperature_2m,relative_humidity_2m',
    daily: 'temperature_2m_max,temperature_2m_min',
    past_days: '2',
    forecast_days: '7',
    timezone: 'auto',
  });
  return getJson(`${WEATHER_URL}?${params}`);
}

export async function fetchAirQuality(lat, lon) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'pm2_5,pm10',
    hourly: 'pm2_5,pm10,grass_pollen,birch_pollen,ragweed_pollen,mugwort_pollen,olive_pollen,alder_pollen',
    forecast_days: '7',
    timezone: 'auto',
  });
  return getJson(`${AIR_URL}?${params}`);
}

export async function fetchBoth(lat, lon) {
  const [weather, air] = await Promise.allSettled([
    fetchWeather(lat, lon),
    fetchAirQuality(lat, lon),
  ]);
  return {
    weather: weather.status === 'fulfilled' ? weather.value : null,
    air: air.status === 'fulfilled' ? air.value : null,
  };
}
