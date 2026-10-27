window.KitsiPages = window.KitsiPages || {};

window.KitsiPages.AboutPage = {
  name: 'AboutPage',
  setup() {
    const { useI18n } = window.VueI18n;
    const { t } = useI18n();
    const originLots = window.KitsiCatalog.originLots;

    return {
      t,
      originLots
    };
  },
  template: `
    <div class="shell-container">
      <header class="page-header">
        <p class="mono-label">{{ t('ui.nav.about') }}</p>
        <h1 class="page-title">{{ t('content.about.heading') }}</h1>
        <p class="page-lead">{{ t('content.about.lead') }}</p>
      </header>

      <!-- Narrative Story Section -->
      <section class="story-grid">
        <div>
          <h2 class="section-heading">{{ t('content.about.storyTitle') }}</h2>
        </div>
        <div>
          <p class="story-paragraph">{{ t('content.about.storyP1') }}</p>
          <p class="story-paragraph">{{ t('content.about.storyP2') }}</p>
        </div>
      </section>

      <!-- Origin Lots Showcase -->
      <section class="section-block">
        <div class="section-bar">
          <div>
            <h2 class="section-heading">{{ t('content.about.lotsHeading') }}</h2>
            <p class="story-paragraph">{{ t('content.about.lotsLead') }}</p>
          </div>
        </div>

        <div class="lots-grid">
          <article v-for="lot in originLots" :key="lot.id" class="lot-card">
            <div style="display:flex; justify-content:space-between; align-items:baseline;">
              <span class="lot-code">{{ lot.code }}</span>
              <span class="menu-item-price">{{ lot.bagPriceEur }} {{ t('ui.labels.currency') }} / 250g</span>
            </div>
            <h3 class="lot-name">{{ t('content.about.lots.' + lot.id + '.name') }}</h3>

            <div class="spec-row">
              <span class="spec-label">{{ t('ui.labels.origin') }}</span>
              <span class="spec-value">{{ t('content.about.lots.' + lot.id + '.origin') }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">{{ t('ui.labels.process') }}</span>
              <span class="spec-value">{{ t('content.about.lots.' + lot.id + '.process') }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">{{ t('ui.labels.roast') }}</span>
              <span class="spec-value">{{ t('content.about.lots.' + lot.id + '.roast') }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">{{ t('ui.labels.notes') }}</span>
              <span class="spec-value">{{ t('content.about.lots.' + lot.id + '.notes') }}</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  `
};
