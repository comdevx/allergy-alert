# Task 1: Build Allergy Alert website

## Description
Static HTML/CSS/JS website that assesses allergic rhinitis risk from sudden weather changes using Open-Meteo APIs (no key, no backend). Shows an immediate color-coded warning, factor breakdown, 7-day daily risk forecast, multiple saved areas, and a 14-language i18n system with device-language auto-detect.

## Context
- User wants an instant on-load warning for allergy sufferers when weather shifts suddenly (temp swing, humidity extremes, PM2.5/PM10, pollen when available).
- Approved plan: /Users/x/.claude/plans/sunny-bouncing-sonnet.md (Thai)
- Approved mockup: docs/mockups/index.html (published as Artifact)

## Acceptance Criteria
- [x] index.html + css/style.css adopted from approved mockup (RTL-safe logical properties, dark mode)
- [x] js/provinces.js — 77 Thai provinces {nameTh, nameEn, lat, lon}
- [x] js/risk.js — pure scoring (scoreTemp/scoreHumidity/scoreAir/scorePollen/combine/dailyForecast), escalation rule, missing-factor exclusion
- [x] js/i18n.js + js/locales/en.js + th.js working (detect → localStorage → fallback en; dynamic import)
- [x] js/api.js — both Open-Meteo endpoints, Promise.allSettled, 8s AbortController timeout, idxNow helpers
- [x] js/storage.js + js/ui.js + js/app.js wired: location flow (GPS → province picker), multi-area chips (max 5), banner, factor cards, 7-day cards, 24h outlook strip, advice, cache fallback with stale banner
- [x] Mock mode ?mock=low|med|high|vhigh|nopollen|offline and ?lang=xx override
- [x] Remaining 12 locales (zh, ja, ko, es, fr, de, pt, ru, ar, hi, id, vi) — all keys match en.js
- [x] RTL layout correct for Arabic (verified via screenshot: full mirror, no overlap/clipping)

## Implementation Notes
- Key files: index.html, css/style.css, js/* per plan structure
- Dependencies: none external; Open-Meteo endpoints per plan (forecast_days=7, past_days=2)
- Gotchas: ES modules need HTTP server (not file://); pollen null in Thailand → exclude from score; risk.js returns level KEYS, ui translates via t()

## Testing Checklist
- [x] Automated tests run and passed (node assertion suite for risk.js — all band edges, escalation rule, null exclusion, dailyForecast date matching; locale key/placeholder parity checks for all 14 languages)
- [x] Manual testing completed — verified functionality works correctly end-to-end (Playwright: real Bangkok data via GPS, all mock levels, GPS denied → picker → persist, multi-area add/switch/remove/max-5, API-offline → stale cache, Arabic RTL screenshot, ja auto-detect → de switch → persist)
- [x] No console errors (0 errors/warnings across all verification sessions)

## Commits
- 968fa4f — Initial release: Allergy Alert static web app (full app, docs, README; pushed to https://github.com/comdevx/allergy-alert)

## Completion Notes
- Completed 2026-07-19. All acceptance criteria met. Remaining items: none.
- Adversarial verification round found 1 real bug (geo chip inert after geolocation denial) — fixed with a minimal change in app.js targeting the exact diagnosed swallowed-rejection path, re-verified.
- Scoping note: offline support is API-level (localStorage cache + stale banner). No service worker, so a true offline page reload shows the browser error page — accepted design for a static site.
- Wave-2 agent found and fixed 2 HTML/i18n key mismatches (pickerConfirm/pickerCancel → confirm/cancel; hardcoded aria-labels → data-i18n-aria).
- Pollen data is null in Thailand (CAMS Europe only) — card shows "not included in score" as designed; pollen will light up automatically if the API ever covers Thailand.
- docs/mockups/ kept for reference; can be deleted per mockup lifecycle policy once the user confirms.
