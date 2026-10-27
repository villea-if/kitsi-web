/**
 * Shared UI Components:
 * - LocaleSwitcher: switches live between FI, EN, NO, SV, and KEYS (Key Inspection Mode)
 * - AppHeader: top navigation bar + LocaleSwitcher + active Key Inspection banner
 * - AppFooter: minimal monochrome colophon
 */
window.KitsiComponents = window.KitsiComponents || {};

window.KitsiComponents.LocaleSwitcher = {
  name: 'LocaleSwitcher',
  setup() {
    const { useI18n } = window.VueI18n;
    const { locale, t } = useI18n();
    const locales = window.KitsiCatalog.supportedLocales;

    function selectLocale(code) {
      locale.value = code;
      document.documentElement.setAttribute('lang', code === 'keys' ? 'en' : code);
    }

    return {
      locale,
      locales,
      selectLocale,
      t
    };
  },
  template: `
    <div class="locale-switcher" role="group" :aria-label="t('ui.locale.label')">
      <button
        v-for="code in locales"
        :key="code"
        type="button"
        class="locale-btn"
        :class="{
          'is-active': locale === code,
          'is-keys': code === 'keys'
        }"
        @click="selectLocale(code)"
      >
        {{ t('ui.locale.' + code) }}
      </button>
    </div>
  `
};

window.KitsiComponents.AppHeader = {
  name: 'AppHeader',
  components: {
    LocaleSwitcher: window.KitsiComponents.LocaleSwitcher
  },
  setup() {
    const { useI18n } = window.VueI18n;
    const { locale, t } = useI18n();
    return { locale, t };
  },
  template: `
    <header class="site-header">
      <div v-if="locale === 'keys'" class="keys-banner">
        [KEYS] {{ t('ui.locale.keysHint') }}
      </div>
      <div class="shell-container header-inner">
        <router-link to="/" class="brand-block">
          <span class="brand-name">{{ t('ui.brand.name') }}</span>
          <span class="brand-code">{{ t('ui.brand.code') }}</span>
        </router-link>

        <div class="nav-controls">
          <nav class="site-nav" aria-label="Primary">
            <router-link to="/" class="nav-link" exact>{{ t('ui.nav.home') }}</router-link>
            <router-link to="/menu" class="nav-link">{{ t('ui.nav.menu') }}</router-link>
            <router-link to="/about" class="nav-link">{{ t('ui.nav.about') }}</router-link>
            <router-link to="/visit" class="nav-link">{{ t('ui.nav.visit') }}</router-link>
          </nav>

          <LocaleSwitcher />
        </div>
      </div>
    </header>
  `
};

window.KitsiComponents.AppFooter = {
  name: 'AppFooter',
  setup() {
    const { useI18n } = window.VueI18n;
    const { t } = useI18n();
    return { t };
  },
  template: `
    <footer class="site-footer">
      <div class="shell-container footer-inner">
        <span>{{ t('ui.footer.colophon') }}</span>
        <span>{{ t('ui.footer.copyright') }}</span>
      </div>
    </footer>
  `
};
