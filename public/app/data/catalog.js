/**
 * Language-neutral domain catalog for Kitsi.
 *
 * Notice how structural facts (IDs, category keys, prices, dietary tag codes,
 * featured flags) live here once, while human-readable UI Text (`ui.*`) and
 * Content Text (`content.*`) live in `locales/*.json`.
 */
window.KitsiCatalog = {
  supportedLocales: ['fi', 'en', 'no', 'sv', 'keys'],

  menuCategories: ['espresso', 'matcha', 'pastry'],

  menuItems: [
    {
      id: 'hand_pour',
      category: 'espresso',
      priceEur: '5.50',
      featured: true,
      dietary: ['vegan']
    },
    {
      id: 'double_espresso',
      category: 'espresso',
      priceEur: '3.80',
      featured: false,
      dietary: ['vegan']
    },
    {
      id: 'oat_cortado',
      category: 'espresso',
      priceEur: '4.40',
      featured: true,
      dietary: ['vegan', 'oat']
    },
    {
      id: 'cold_brew_tonic',
      category: 'espresso',
      priceEur: '5.20',
      featured: false,
      dietary: ['vegan']
    },
    {
      id: 'ceremonial_matcha',
      category: 'matcha',
      priceEur: '5.80',
      featured: true,
      dietary: ['vegan']
    },
    {
      id: 'hojicha_latte',
      category: 'matcha',
      priceEur: '5.00',
      featured: false,
      dietary: ['vegan', 'oat']
    },
    {
      id: 'black_sesame_financier',
      category: 'pastry',
      priceEur: '4.20',
      featured: false,
      dietary: ['gluten', 'dairy']
    },
    {
      id: 'cardamom_knot',
      category: 'pastry',
      priceEur: '4.50',
      featured: true,
      dietary: ['vegan', 'gluten']
    }
  ],

  originLots: [
    { id: 'worka', code: 'LOT // ETH-04', bagPriceEur: '19.00' },
    { id: 'huila', code: 'LOT // COL-02', bagPriceEur: '21.00' },
    { id: 'uji', code: 'LOT // JPN-01', bagPriceEur: '29.00' }
  ],

  coffeeBars: [
    { id: 'punavuori', code: 'BAR // HEL-01', coordinates: '60.1588° N, 24.9384° E' },
    { id: 'grunerlokka', code: 'BAR // OSL-02', coordinates: '59.9226° N, 10.7594° E' }
  ]
};
