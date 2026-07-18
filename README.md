# Allergy Alert — เตือนภูมิแพ้อากาศ

A static web app that warns about allergic rhinitis risk when the weather changes suddenly. Open the page and see your risk level immediately — no account, no backend, no API key.

**Data:** [Open-Meteo](https://open-meteo.com) Forecast + Air Quality APIs (free, no key).

## Features

- Instant color-coded risk banner (Low / Moderate / High / Very high) with the reason
- Risk factors: sudden temperature swing, humidity extremes, PM2.5/PM10 (Thai AQI 2023 bands), pollen where available
- 7-day daily risk forecast + 24-hour temperature outlook strip
- Multiple saved areas (GPS + Thai provinces, up to 5) with per-area risk dots
- 14 languages with device-language auto-detect (Thai, English, 中文, 日本語, 한국어, Español, Français, Deutsch, Português, Русский, العربية with RTL, हिन्दी, Bahasa Indonesia, Tiếng Việt)
- Works when the API is unreachable — shows the last cached result with a stale notice
- Light/dark theme, mobile-first, accessible (levels always shown as text, never color alone)

## Run locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

A local HTTP server is required (ES modules don't load over `file://`).

### Mock mode (for testing)

- `?mock=low|med|high|vhigh|nopollen|offline` — canned scenarios for every risk level
- `?lang=xx` — force a language (e.g. `?lang=ar` for RTL)

## Stack

Pure HTML/CSS/JS (ES modules), no build step, no dependencies.

```
index.html          css/style.css
js/app.js           orchestration + mock mode
js/api.js           Open-Meteo fetches
js/risk.js          pure scoring functions
js/ui.js            DOM rendering
js/i18n.js          language detect/switch + js/locales/*.js (14)
js/provinces.js     77 Thai provinces
js/storage.js       localStorage (areas, language, result cache)
```

> ข้อมูลนี้เป็นเพียงการประเมินเบื้องต้น ไม่ใช่คำวินิจฉัยทางการแพทย์ — This is a preliminary assessment, not medical advice.
