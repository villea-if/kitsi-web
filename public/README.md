# Kitsi Coffee Bar — Public Web App

Zero-build Vue 3 website rooted in a **Stark Modern Tokyo Espresso Bar** design system (`tokens.css` + `main.css`) with live multi-locale internationalization (`FI`, `EN`, `NO`, `SV`, and `KEYS`).

## Running Locally

1. **Direct file open (`file://`)**: Double-click `index.html` in your file manager.
2. **Local HTTP server**: Run `npx serve .` or `python -m http.server` inside `public/`.

## Directory Layout

```text
public/
├── index.html                   # Entry HTML (loads design system, vendor libs, and app)
├── assets/
│   └── css/
│       ├── tokens.css           # Design tokens (monochrome & concrete palette, typography, spacing)
│       └── main.css             # Structural grid & component styles
├── vendor/                      # Vendored browser builds (Vue 3, Vue Router 4, Vue I18n 9)
├── locales/                     # Standard i18n JSON dictionaries (fi.json, en.json, no.json, sv.json)
└── app/
    ├── main.js                  # App bootstrap, router, and dynamic `keys` locale generator
    ├── data/
    │   ├── catalog.js           # Language-neutral domain data (IDs, prices, dietary codes)
    │   └── locales-fallback.js  # Mirrors locales/*.json so file:// works without CORS errors
    ├── components/
    │   └── AppShell.js          # AppHeader, AppFooter, and live LocaleSwitcher
    └── pages/
        ├── HomePage.js          # Hero, architectural pillars, featured menu items
        ├── MenuPage.js          # Category filter & localized menu items
        ├── AboutPage.js         # Brand story & single-origin coffee/tea lots
        └── VisitPage.js         # Helsinki & Oslo bar locations + inquiry form
```
