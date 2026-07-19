# Task 2 — Add promotional features

## Goal
Make the app shareable and promotable across social media and other websites.

## Deliverables

### Social Meta Tags
- Open Graph tags (type, title, description, image, url, site_name, locale)
- Twitter Card tags (summary_large_image)
- OG image 1200x630 (`og-image.png`)

### Share Result (Feature A)
- Share bar with "Share" + "Copy link" buttons below risk banner
- Canvas-based share card generation (1200x630 teal gradient with risk data)
- Web Share API (mobile) with file sharing, clipboard fallback (desktop)
- Toast notification for copy confirmation
- i18n keys across all 14 locales
- Share text includes "ภูมิแพ้อากาศ" context so recipients understand purpose

### QR + Poster (Feature C)
- `poster.html` — standalone printable poster with inline QR code encoder
- Pure JS QR generator (no external deps), verified scannable
- Print button with print-friendly CSS

### Embeddable Widget (Feature D)
- `widget.html` — self-contained for iframe embedding
- Supports `?area=Bangkok` or `?lat=&lon=` params
- Inlined scoring logic matching risk.js
- Compact layout (~320x200), dark mode, loading/error states

## Commits
- `f29a9fa` — Add social sharing, OG tags, QR poster, and embeddable widget
- `ba833e0` — Add allergy context to share text
