# Kitsi

Kitsi is a specialty coffee bar website and web-development training project that demonstrates component-based page architecture, a Stark Modern Tokyo Espresso Bar design system, and live multi-locale internationalization without a build pipeline.

## Language

### Catalog & Café Domain

**Menu Item**:
A drink or food offering sold at the coffee bar, identified by a stable slug and paired with a base price, category, and localized name, description, and dietary tags.
_Avoid_: Product, SKU, article, dish

**Menu Category**:
A grouping of Menu Items on the menu (such as Filter & Espresso, Matcha & Tea, or Seasonal Pastries).
_Avoid_: Section, department, group, type

**Dietary Tag**:
A standardized code attached to a Menu Item indicating allergens or dietary properties (such as vegan, oat-default, or gluten), rendered in the active Locale.
_Avoid_: Allergen warning, badge, label

**Origin Lot**:
A featured coffee bean selection highlighting its origin, process, and tasting notes within the Philosophy / About section.
_Avoid_: Bean item, roast SKU

**Coffee Bar**:
A physical Kitsi café location with its street address, opening hours, and contact details.
_Avoid_: Store, branch, outlet, shop

### Localization Domain

**Locale**:
An active language or inspection mode in the application (`fi`, `en`, `no`, `sv`, or `keys`).
_Avoid_: Language, region, translation

**UI Text**:
Short, functional interface strings belonging to application chrome—navigation links, buttons, filter controls, form labels, and status messages—stored under the `ui.*` namespace in each Locale JSON file.
_Avoid_: System string, label text, static copy

**Content Text**:
Editorial and domain-specific narrative copy—hero statements, story paragraphs, Menu Item descriptions, Origin Lot tasting notes, and Coffee Bar notes—stored under the `content.*` namespace in each Locale JSON file.
_Avoid_: Body text, dynamic text, marketing copy

**Key Inspection Mode**:
A synthetic Locale (`keys`) generated at runtime from the English (`en`) dictionary tree that displays the dot-path key name (e.g., `ui.nav.menu` or `content.menu.items.cortado.title`) in place of translated text.
_Avoid_: Debug mode, raw mode, developer locale
