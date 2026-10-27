/**
 * Kitsi Application Bootstrap
 *
 * Responsibilities:
 * 1. Load standard i18n JSON dictionaries from `./locales/{fi,en,no,sv}.json`
 *    (with automatic fallback to `window.KitsiLocaleFallback` when opened via `file://`).
 * 2. Dynamically build the `keys` (Key Inspection Mode) dictionary from the `en`
 *    dictionary tree so every leaf resolves to its exact dot-path key name without
 *    maintaining a separate file.
 * 3. Configure Vue Router 4 in hash mode (`#/`, `#/menu`, `#/about`, `#/visit`).
 * 4. Mount the root Vue 3 application.
 */
(function () {
  const { createApp } = window.Vue;
  const { createRouter, createWebHashHistory } = window.VueRouter;
  const { createI18n } = window.VueI18n;

  /**
   * Recursively walks the English locale object and replaces every string leaf
   * with its dot-separated key path (e.g. `content.menu.items.hand_pour.title`).
   */
  function buildKeysDictionary(node, prefix) {
    const result = {};
    Object.keys(node).forEach((key) => {
      const fullPath = prefix ? prefix + '.' + key : key;
      const value = node[key];
      if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
        result[key] = buildKeysDictionary(value, fullPath);
      } else {
        result[key] = fullPath;
      }
    });
    return result;
  }

  /**
   * Loads `locales/<code>.json` via fetch when served over HTTP(S), or falls back
   * to `window.KitsiLocaleFallback` when opened directly from disk (`file://`).
   */
  async function loadLocaleJson(code) {
    if (window.location.protocol !== 'file:') {
      try {
        const response = await fetch('./locales/' + code + '.json', { cache: 'no-cache' });
        if (response.ok) {
          return await response.json();
        }
      } catch (_err) {
        // Fall through to bundled fallback
      }
    }
    return window.KitsiLocaleFallback[code];
  }

  async function bootstrap() {
    const localeCodes = ['fi', 'en', 'no', 'sv'];
    const loadedEntries = await Promise.all(
      localeCodes.map(async (code) => [code, await loadLocaleJson(code)])
    );

    const messages = Object.fromEntries(loadedEntries);

    // Derive the Key Inspection Mode (`keys`) dictionary dynamically from `en`
    messages.keys = buildKeysDictionary(messages.en, '');
    // Keep the switcher button labels readable in KEYS mode
    messages.keys.ui.locale.fi = 'FI';
    messages.keys.ui.locale.en = 'EN';
    messages.keys.ui.locale.no = 'NO';
    messages.keys.ui.locale.sv = 'SV';
    messages.keys.ui.locale.keys = 'KEYS';

    const i18n = createI18n({
      legacy: false,
      globalInjection: true,
      locale: 'en',
      fallbackLocale: 'en',
      messages
    });

    const routes = [
      { path: '/', component: window.KitsiPages.HomePage },
      { path: '/menu', component: window.KitsiPages.MenuPage },
      { path: '/about', component: window.KitsiPages.AboutPage },
      { path: '/visit', component: window.KitsiPages.VisitPage }
    ];

    const router = createRouter({
      history: createWebHashHistory(),
      routes,
      scrollBehavior() {
        return { top: 0 };
      }
    });

    const RootApp = {
      name: 'KitsiRootApp',
      components: {
        AppHeader: window.KitsiComponents.AppHeader,
        AppFooter: window.KitsiComponents.AppFooter
      },
      template: `
        <AppHeader />
        <main class="main-content">
          <router-view />
        </main>
        <AppFooter />
      `
    };

    const app = createApp(RootApp);
    app.use(i18n);
    app.use(router);
    app.mount('#app');
  }

  bootstrap();
})();
