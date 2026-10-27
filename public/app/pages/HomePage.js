window.KitsiPages = window.KitsiPages || {};

window.KitsiPages.HomePage = {
  name: 'HomePage',
  setup() {
    const { useI18n } = window.VueI18n;
    const { t } = useI18n();
    const featuredItems = window.KitsiCatalog.menuItems.filter((item) => item.featured);
    const pillarKeys = ['precision', 'space', 'sourcing'];

    return {
      t,
      featuredItems,
      pillarKeys
    };
  },
  template: `
    <div>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="shell-container hero-grid">
          <div>
            <p class="mono-label">{{ t('content.hero.eyebrow') }}</p>
            <h1 class="page-title">{{ t('content.hero.title') }}</h1>
            <p class="page-lead">{{ t('content.hero.subtitle') }}</p>

            <div class="hero-note-box">
              {{ t('content.hero.featuredNote') }}
            </div>

            <div class="btn-row">
              <router-link to="/menu" class="btn btn-primary">
                {{ t('ui.actions.exploreMenu') }}
              </router-link>
              <router-link to="/about" class="btn btn-secondary">
                {{ t('ui.actions.ourPhilosophy') }}
              </router-link>
              <router-link to="/visit" class="btn btn-secondary">
                {{ t('ui.actions.findUs') }}
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Three Architectural Pillars -->
      <section class="shell-container">
        <div class="pillars-grid">
          <article v-for="key in pillarKeys" :key="key" class="pillar-card">
            <span class="pillar-index">{{ t('content.highlights.' + key + '.index') }}</span>
            <h2 class="pillar-title">{{ t('content.highlights.' + key + '.title') }}</h2>
            <p class="pillar-body">{{ t('content.highlights.' + key + '.body') }}</p>
          </article>
        </div>
      </section>

      <!-- Featured Menu Items Preview -->
      <section class="section-block">
        <div class="shell-container">
          <div class="section-bar">
            <h2 class="section-heading">{{ t('content.menu.heading') }}</h2>
            <router-link to="/menu" class="btn btn-secondary">
              {{ t('ui.actions.exploreMenu') }} →
            </router-link>
          </div>

          <div class="menu-grid">
            <article v-for="item in featuredItems" :key="item.id" class="menu-item-card">
              <div>
                <div class="menu-item-top">
                  <h3 class="menu-item-title">{{ t('content.menu.items.' + item.id + '.title') }}</h3>
                  <span class="menu-item-price">{{ item.priceEur }} {{ t('ui.labels.currency') }}</span>
                </div>
                <p class="menu-item-desc">{{ t('content.menu.items.' + item.id + '.description') }}</p>
              </div>
              <div class="tag-list">
                <span v-for="tag in item.dietary" :key="tag" class="dietary-tag">
                  {{ t('ui.dietary.' + tag) }}
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  `
};
