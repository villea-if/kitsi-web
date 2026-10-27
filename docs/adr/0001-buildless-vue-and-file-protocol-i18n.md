# Buildless Vue 3 Architecture with File-Protocol Support

Kitsi is a web fundamentals training project that must run by opening `public/index.html` directly from the filesystem (`file://`) as well as over a local HTTP server, with zero build or compilation tools. We vendor Vue 3, Vue Router 4 (hash history), and Vue I18n 9 as global browser builds under `public/vendor/`, and keep canonical translation dictionaries in standard `public/locales/*.json` files while providing a `file://`-compatible fallback so browsers that block `fetch()` on local files still load every locale seamlessly.
