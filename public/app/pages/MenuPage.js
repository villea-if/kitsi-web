window.KitsiPages = window.KitsiPages || {};

window.KitsiPages.MenuPage = {
  name: 'MenuPage',
  setup() {
    const { ref, computed } = window.Vue;
    const { useI18n } = window.VueI18n;
    const { t } = useI18n();

    const activeCategory = ref('all');
    const categories = window.KitsiCatalog.menuCategories;
    const items = window.KitsiCatalog.menuItems;

    const visibleCategories = computed(() => {
      if (activeCategory.value === 'all') {
        return categories;
      }
      return categories.filter((c) => c === activeCategory.value);
    });

    function itemsByCategory(categoryKey) {
      return items.filter((item) => item.category === categoryKey);
    }

    return {
      t,
      activeCategory,
      categories,
      visibleCategories,
      itemsByCategory
    };
  },
  template: `
    <div class="shell-container">
      <header class="page-header">
        <p class="mono-label">{{ t('ui.nav.menu') }}</p>
        <h1 class="page-title">{{ t('content.menu.heading') }}</h1>
        <p class="page-lead">{{ t('content.menu.lead') }}</p>
      </header>

      <!-- Category Filter Controls (UI Text) -->
      <div class="filter-bar" role="toolbar" :aria-label="t('ui.labels.category')">
        <button
          type="button"
          class="filter-chip"
          :class="{ 'is-active': activeCategory === 'all' }"
          @click="activeCategory = 'all'"
        >
          {{ t('ui.actions.filterAll') }}
        </button>
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="filter-chip"
          :class="{ 'is-active': activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ t('content.menu.categories.' + cat) }}
        </button>
      </div>

      <!-- Categorized Menu Items (Content Text + Catalog Data) -->
      <section
        v-for="cat in visibleCategories"
        :key="cat"
        class="menu-category-block"
      >
        <h2 class="menu-category-title">{{ t('content.menu.categories.' + cat) }}</h2>

        <div class="menu-grid">
          <article
            v-for="item in itemsByCategory(cat)"
            :key="item.id"
            class="menu-item-card"
          >
            <div>
              <div class="menu-item-top">
                <h3 class="menu-item-title">{{ t('content.menu.items.' + item.id + '.title') }}</h3>
                <span class="menu-item-price">{{ item.priceEur }} {{ t('ui.labels.currency') }}</span>
              </div>
              <p class="menu-item-desc">{{ t('content.menu.items.' + item.id + '.description') }}</p>
            </div>

            <div class="tag-list" :aria-label="t('ui.labels.dietary')">
              <span v-for="tag in item.dietary" :key="tag" class="dietary-tag">
                {{ t('ui.dietary.' + tag) }}
              </span>
            </div>
          </article>
        </div>
      </section>
    </div>
  `
};
