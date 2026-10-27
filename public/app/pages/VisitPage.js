window.KitsiPages = window.KitsiPages || {};

window.KitsiPages.VisitPage = {
  name: 'VisitPage',
  setup() {
    const { reactive, ref } = window.Vue;
    const { useI18n } = window.VueI18n;
    const { t } = useI18n();

    const coffeeBars = window.KitsiCatalog.coffeeBars;
    const submitted = ref(false);

    const form = reactive({
      name: '',
      email: '',
      topic: 'general',
      message: ''
    });

    function submitForm() {
      submitted.value = true;
    }

    function resetForm() {
      form.name = '';
      form.email = '';
      form.topic = 'general';
      form.message = '';
      submitted.value = false;
    }

    return {
      t,
      coffeeBars,
      form,
      submitted,
      submitForm,
      resetForm
    };
  },
  template: `
    <div class="shell-container">
      <header class="page-header">
        <p class="mono-label">{{ t('ui.nav.visit') }}</p>
        <h1 class="page-title">{{ t('content.visit.heading') }}</h1>
        <p class="page-lead">{{ t('content.visit.lead') }}</p>
      </header>

      <div class="visit-layout">
        <!-- Physical Coffee Bars -->
        <div>
          <article v-for="bar in coffeeBars" :key="bar.id" class="location-card">
            <div class="location-header">
              <div>
                <span class="lot-code">{{ bar.code }} · {{ bar.coordinates }}</span>
                <h2 class="location-name">{{ t('content.visit.locations.' + bar.id + '.name') }}</h2>
              </div>
              <span class="dietary-tag">{{ t('ui.labels.statusOpen') }}</span>
            </div>

            <div class="spec-row">
              <span class="spec-label">{{ t('ui.labels.address') }}</span>
              <span class="spec-value">{{ t('content.visit.locations.' + bar.id + '.address') }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">{{ t('ui.labels.hours') }}</span>
              <span class="spec-value">{{ t('content.visit.locations.' + bar.id + '.hours') }}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">{{ t('ui.labels.transit') }}</span>
              <span class="spec-value">{{ t('content.visit.locations.' + bar.id + '.transit') }}</span>
            </div>

            <p class="location-note">{{ t('content.visit.locations.' + bar.id + '.note') }}</p>
          </article>
        </div>

        <!-- Direct Inquiry Form (UI Text Labels & Placeholders) -->
        <div>
          <form class="inquiry-panel" @submit.prevent="submitForm">
            <h2 class="section-heading" style="margin-bottom: var(--space-5);">
              {{ t('ui.form.heading') }}
            </h2>

            <div class="form-group">
              <label class="form-label" for="inquiry-name">{{ t('ui.form.nameLabel') }}</label>
              <input
                id="inquiry-name"
                v-model="form.name"
                type="text"
                required
                class="form-control"
                :placeholder="t('ui.form.namePlaceholder')"
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="inquiry-email">{{ t('ui.form.emailLabel') }}</label>
              <input
                id="inquiry-email"
                v-model="form.email"
                type="email"
                required
                class="form-control"
                :placeholder="t('ui.form.emailPlaceholder')"
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="inquiry-topic">{{ t('ui.form.topicLabel') }}</label>
              <select id="inquiry-topic" v-model="form.topic" class="form-control">
                <option value="general">{{ t('ui.form.topicGeneral') }}</option>
                <option value="wholesale">{{ t('ui.form.topicWholesale') }}</option>
                <option value="events">{{ t('ui.form.topicEvents') }}</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="inquiry-message">{{ t('ui.form.messageLabel') }}</label>
              <textarea
                id="inquiry-message"
                v-model="form.message"
                rows="4"
                required
                class="form-control"
                :placeholder="t('ui.form.messagePlaceholder')"
              ></textarea>
            </div>

            <div class="btn-row" style="margin-top: var(--space-4);">
              <button type="submit" class="btn btn-primary">
                {{ t('ui.actions.sendMessage') }}
              </button>
              <button type="button" class="btn btn-secondary" @click="resetForm">
                {{ t('ui.actions.resetForm') }}
              </button>
            </div>

            <div v-if="submitted" class="form-notice" role="status">
              {{ t('ui.form.submittedNotice') }}
            </div>
          </form>
        </div>
      </div>
    </div>
  `
};
