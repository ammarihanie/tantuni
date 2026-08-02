export const restaurant = {
  name: 'Tantuni Grill',
  owner: 'M. Fuat Yıldırım',
  address: '2 bis avenue de Quincy',
  city: '77380 Combs-la-Ville',
  country: 'France',
  mobile: '06 74 75 35 47',
  phone: '01 60 62 80 54',
  mobileHref: 'tel:+33674753547',
  phoneHref: 'tel:+33160628054',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Tantuni+Grill+2+bis+avenue+de+Quincy+Combs-la-Ville',
}

const img = {
  kebab: '/images/22cac9_7329e7063daa47a28c7ec6283ae99113.png',
  adanaPlate: '/images/22cac9_f568a8902dc14566b8416e53c111790c.jpg',
  grillSandwich: '/images/22cac9_8c17ec9700a841268d36796390c23f2f.png',
  kofteSandwich: '/images/22cac9_1d5e18f9e1044b55af901975fb509641.png',
  kebabGrille: '/images/22cac9_7cfba04b64e64a8db223ee4b7e902f34.png',
  poulet: '/images/22cac9_2e90d8abb4bb494594baa16c28a24aa5.png',
  tantuni: '/images/22cac9_5bce4889545d45e58a7b7bf0d88e799e.png',
  brochette: '/images/22cac9_7a1e7d77bd7947608ddb6c762fb79359.png',
  mixte: '/images/22cac9_e928c8911f98408da5f60bcc91b5646f.jpg',
  grillades: '/images/22cac9_d04fc70ee2ab4bea85bc57d3b4e0a9b1.jpg',
  steakSandwich: '/images/22cac9_0d34b7fcdc24498fb9e5dcfb93dde509.png',
  merguezSandwich: '/images/22cac9_c569054b4a6f44b0996ea811d49820c9.png',
  kebabPlate: '/images/22cac9_b928ab07480044c7b313faf1fca01f1c.jpg',
  koftePlate: '/images/22cac9_d96649eac5c0446a8f81f13745b474a7.jpg',
  cotelette: '/images/22cac9_f2c6802f88f44bce9e5381c1e4b3d50b.jpg',
  coffee: '/images/22cac9_c563bbc097c54041b32312f17aa12e37.png',
  salad: '/images/salad.jpg',
  greekSalad: '/images/greek-salad.jpg',
  baklava: '/images/baklava.jpg',
  dessert: '/images/dessert.jpg',
  drink: '/images/ayran.jpg',
  fries: '/images/fries-menu.jpg',
} as const

export type GalleryKey =
  | 'kebab'
  | 'adanaPlate'
  | 'grillSandwich'
  | 'kofteSandwich'
  | 'kebabGrille'
  | 'poulet'
  | 'tantuni'
  | 'brochette'
  | 'mixte'
  | 'cotelette'

export const gallery: { key: GalleryKey; src: string }[] = [
  { key: 'kebab', src: img.kebab },
  { key: 'adanaPlate', src: img.adanaPlate },
  { key: 'grillSandwich', src: img.grillSandwich },
  { key: 'kofteSandwich', src: img.kofteSandwich },
  { key: 'kebabGrille', src: img.kebabGrille },
  { key: 'poulet', src: img.poulet },
  { key: 'tantuni', src: img.tantuni },
  { key: 'brochette', src: img.brochette },
  { key: 'mixte', src: img.mixte },
  { key: 'cotelette', src: img.cotelette },
]

export const heroFood = img.kebab
export const heroBg = '/images/AF1QipNhN-zh-a5wHDkXclI32IKGmNe00PgC22_b84xG.jpg'

export type MenuItem = {
  id: string
  price: string
  image?: string
  cutout?: boolean
}

export type MenuCategory = {
  id: string
  noteKey?: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'tantuni',
    noteKey: 'tantuni',
    items: [
      { id: 'tantuniGalette', price: '5,00 €', image: img.tantuni, cutout: true },
      { id: 'menuTantuniGalette', price: '7,00 €', image: img.fries },
      { id: 'tantuniSomun', price: '5,50 €', image: img.grillSandwich, cutout: true },
      {
        id: 'menuTantuniSomun',
        price: '7,50 €',
        image: img.kebab,
        cutout: true,
      },
    ],
  },
  {
    id: 'menus',
    items: [
      { id: 'menu12', price: '12,00 €', image: img.kebabPlate },
      { id: 'menu14', price: '14,00 €', image: img.mixte },
      { id: 'menuEnfant', price: '7,50 €', image: img.fries },
    ],
  },
  {
    id: 'sandwichs',
    noteKey: 'sandwichs',
    items: [
      { id: 'kebab', price: '5,00 €', image: img.kebab, cutout: true },
      { id: 'adana', price: '5,50 €', image: img.kebabGrille, cutout: true },
      { id: 'kofte', price: '5,00 €', image: img.kofteSandwich, cutout: true },
      {
        id: 'brochetteAgneau',
        price: '5,50 €',
        image: img.brochette,
        cutout: true,
      },
      {
        id: 'brochettePoulet',
        price: '5,00 €',
        image: img.poulet,
        cutout: true,
      },
      {
        id: 'chickenChika',
        price: '5,00 €',
        image: img.poulet,
        cutout: true,
      },
      {
        id: 'steakHache',
        price: '5,00 €',
        image: img.steakSandwich,
        cutout: true,
      },
      {
        id: 'merguez',
        price: '5,00 €',
        image: img.merguezSandwich,
        cutout: true,
      },
      {
        id: 'kebabPainEntier',
        price: '8,50 €',
        image: img.grillSandwich,
        cutout: true,
      },
      { id: 'fromage', price: '0,50 €' },
    ],
  },
  {
    id: 'assiettes',
    noteKey: 'assiettes',
    items: [
      { id: 'assietteAdana', price: '9,00 €', image: img.adanaPlate },
      { id: 'assietteKebab', price: '8,00 €', image: img.kebabPlate },
      { id: 'assietteKofte', price: '8,00 €', image: img.koftePlate },
      { id: 'assietteMixte', price: '12,00 €', image: img.mixte },
      { id: 'assietteMerguez', price: '8,00 €', image: img.grillades },
      { id: 'assietteSteak', price: '8,00 €', image: img.grillades },
      { id: 'assietteCotelette', price: '10,00 €', image: img.cotelette },
      { id: 'assietteBrochettePoulet', price: '9,00 €', image: img.mixte },
      { id: 'assietteBrochetteAgneau', price: '10,00 €', image: img.cotelette },
      { id: 'assietteChickenChika', price: '8,00 €', image: img.grillades },
    ],
  },
  {
    id: 'entrees',
    items: [
      { id: 'saladeBergere', price: '5,50 €', image: img.salad },
      { id: 'saladeFermiere', price: '5,50 €', image: img.greekSalad },
      { id: 'saladeGrecque', price: '5,50 €', image: img.greekSalad },
      { id: 'feuillesVigne', price: '4,50 €', image: img.salad },
      { id: 'tzatziki', price: '4,50 €', image: img.drink },
    ],
  },
  {
    id: 'desserts',
    items: [
      { id: 'baklava', price: '4,00 €', image: img.baklava },
      { id: 'cremeBrulee', price: '4,00 €', image: img.dessert },
      { id: 'ileFlottante', price: '4,00 €', image: img.dessert },
      { id: 'saladeFruits', price: '4,00 €', image: img.salad },
      { id: 'fromageBlanc', price: '4,00 €', image: img.dessert },
      { id: 'glace', price: '1,50 €', image: img.dessert },
      { id: 'magnum', price: '2,00 €', image: img.dessert },
      { id: 'boisson33', price: '1,50 €', image: img.drink },
      { id: 'eau', price: '1,00 €', image: img.drink },
      { id: 'boisson15', price: '3,00 €', image: img.drink },
      { id: 'oasis2l', price: '3,50 €', image: img.drink },
      { id: 'cafe', price: '1,30 €', image: img.coffee, cutout: true },
    ],
  },
]
