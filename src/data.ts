export const restaurant = {
  name: 'Tantuni Grill',
  owner: 'M. Fuat Yıldırım',
  tagline: 'Grillades · Tantuni · Kebab',
  address: '2 bis avenue de Quincy',
  city: '77380 Combs-la-Ville',
  country: 'France',
  mobile: '06 74 75 35 47',
  phone: '01 60 62 80 54',
  mobileHref: 'tel:+33674753547',
  phoneHref: 'tel:+33160628054',
  hours: 'Du lundi au dimanche · 11h00 – 22h30',
  access: 'RER D — Combs-la-Ville',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Tantuni+Grill+2+bis+avenue+de+Quincy+Combs-la-Ville',
  story:
    "Après 20 ans d'expérience dans la restauration spécialisée dans le Tantuni, les grillades et le kebab en Turquie puis en France, nous sommes ici pour vous faire découvrir le Tantuni — ce sandwich phénoménal originaire de Mersin, réputé pour son goût unique.",
  tantuni:
    '100% bœuf, persil, oignon, tomate et épices magiques. Une préparation maison, découpée et cuite selon le savoir-faire de nos chefs.',
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

export const gallery = [
  { src: img.kebab, alt: 'Kebab maison', label: 'Kebab' },
  { src: img.adanaPlate, alt: 'Assiette Adana', label: 'Assiette Adana' },
  { src: img.grillSandwich, alt: 'Sandwich grillade', label: 'Grillade' },
  { src: img.kofteSandwich, alt: 'Sandwich Köfte', label: 'Köfte' },
  { src: img.kebabGrille, alt: 'Kebab grillé', label: 'Kebab grillé' },
  { src: img.poulet, alt: 'Sandwich poulet', label: 'Poulet' },
  { src: img.tantuni, alt: 'Tantuni', label: 'Tantuni' },
  { src: img.brochette, alt: 'Brochette grillée', label: 'Brochette' },
  { src: img.mixte, alt: 'Assiette mixte', label: 'Assiette mixte' },
  { src: img.cotelette, alt: 'Assiette côtelette', label: 'Côtelette' },
]

export const heroFood = img.kebab
export const heroBg = '/images/AF1QipNhN-zh-a5wHDkXclI32IKGmNe00PgC22_b84xG.jpg'
export const coffeeImg = img.coffee

export type MenuItem = {
  name: string
  desc?: string
  price: string
  priceAlt?: string
  image?: string
  cutout?: boolean
}

export type MenuCategory = {
  id: string
  title: string
  note?: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'tantuni',
    title: 'Tantuni',
    note: 'La spécialité de Mersin',
    items: [
      {
        name: 'Tantuni Galette',
        price: '5,00 €',
        image: img.tantuni,
        cutout: true,
      },
      {
        name: 'Menu Tantuni Galette',
        desc: 'Tantuni + frites + boisson',
        price: '7,00 €',
        image: img.fries,
      },
      {
        name: 'Tantuni Somun',
        price: '5,50 €',
        image: img.grillSandwich,
        cutout: true,
      },
      {
        name: 'Menu Tantuni Somun',
        desc: 'Tantuni + frites + boisson',
        price: '7,50 €',
        image: img.kebab,
        cutout: true,
      },
    ],
  },
  {
    id: 'menus',
    title: 'Menus',
    items: [
      {
        name: 'Menu 12 €',
        desc: 'Entrée + plat + café ou plat + dessert + café',
        price: '12,00 €',
        image: img.kebabPlate,
      },
      {
        name: 'Menu 14 €',
        desc: 'Entrée + plat + dessert + café',
        price: '14,00 €',
        image: img.mixte,
      },
      {
        name: 'Menu enfant',
        desc: 'Dessert + boisson 33cl + Tantuni, Kebab ou Steak salade',
        price: '7,50 €',
        image: img.fries,
      },
    ],
  },
  {
    id: 'sandwichs',
    title: 'Sandwichs',
    note: 'Salade, tomate, oignon, choux rouge, sauce au choix',
    items: [
      { name: 'Kebab', price: '5,00 €', image: img.kebab, cutout: true },
      {
        name: 'Adana',
        price: '5,50 €',
        image: img.kebabGrille,
        cutout: true,
      },
      {
        name: 'Köfte',
        price: '5,00 €',
        image: img.kofteSandwich,
        cutout: true,
      },
      {
        name: "Brochette d'agneau",
        price: '5,50 €',
        image: img.brochette,
        cutout: true,
      },
      {
        name: 'Brochette poulet',
        price: '5,00 €',
        image: img.poulet,
        cutout: true,
      },
      {
        name: 'Chicken Chika',
        price: '5,00 €',
        image: img.poulet,
        cutout: true,
      },
      {
        name: 'Steak haché',
        price: '5,00 €',
        image: img.steakSandwich,
        cutout: true,
      },
      {
        name: 'Merguez',
        price: '5,00 €',
        image: img.merguezSandwich,
        cutout: true,
      },
      {
        name: 'Kebab pain entier',
        price: '8,50 €',
        image: img.grillSandwich,
        cutout: true,
      },
      {
        name: 'Supplément fromage',
        price: '0,50 €',
      },
    ],
  },
  {
    id: 'assiettes',
    title: 'Assiettes',
    note: 'Salade, frites, blé rouge, sauce au choix',
    items: [
      { name: 'Assiette Adana', price: '9,00 €', image: img.adanaPlate },
      { name: 'Assiette Kebab', price: '8,00 €', image: img.kebabPlate },
      { name: 'Assiette Köfte', price: '8,00 €', image: img.koftePlate },
      { name: 'Assiette mixte', price: '12,00 €', image: img.mixte },
      { name: 'Assiette Merguez', price: '8,00 €', image: img.grillades },
      {
        name: 'Assiette steak haché',
        price: '8,00 €',
        image: img.grillades,
      },
      {
        name: 'Assiette côtelette',
        price: '10,00 €',
        image: img.cotelette,
      },
      {
        name: 'Assiette brochette poulet',
        price: '9,00 €',
        image: img.mixte,
      },
      {
        name: "Assiette brochette d'agneau",
        price: '10,00 €',
        image: img.cotelette,
      },
      {
        name: 'Assiette Chicken Chika',
        price: '8,00 €',
        image: img.grillades,
      },
    ],
  },
  {
    id: 'entrees',
    title: 'Entrées',
    items: [
      {
        name: 'Salade Bergère',
        desc: 'Concombre, persil, oignon, huile d’olive, citron, tomate',
        price: '5,50 €',
        priceAlt: 'Grande 8 €',
        image: img.salad,
      },
      {
        name: 'Salade Fermière',
        desc: 'Salade, tomate, concombre, maïs, olive, poulet',
        price: '5,50 €',
        priceAlt: 'Grande 8 €',
        image: img.greekSalad,
      },
      {
        name: 'Salade Grecque',
        desc: 'Salade, tomate, concombre, feta, persil, échalote, olive',
        price: '5,50 €',
        priceAlt: 'Grande 8 €',
        image: img.greekSalad,
      },
      {
        name: 'Feuilles de vigne farcies',
        desc: 'Oignon, riz, citron, persil, huile d’olive',
        price: '4,50 €',
        priceAlt: 'Grande 8 €',
        image: img.salad,
      },
      {
        name: 'Tzatziki',
        desc: 'Fromage blanc, concombre, menthe, ail',
        price: '4,50 €',
        priceAlt: 'Grande 8 €',
        image: img.drink,
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts & Boissons',
    items: [
      { name: 'Baklava', price: '4,00 €', image: img.baklava },
      { name: 'Crème brûlée', price: '4,00 €', image: img.dessert },
      { name: 'Île flottante', price: '4,00 €', image: img.dessert },
      { name: 'Salade de fruits', price: '4,00 €', image: img.salad },
      { name: 'Fromage blanc', price: '4,00 €', image: img.dessert },
      { name: '1 boule de glace', price: '1,50 €', image: img.dessert },
      { name: 'Magnum / Cornetto', price: '2,00 €', image: img.dessert },
      {
        name: 'Boisson 33cl',
        desc: 'Coca, Oasis, Ayran, Fanta, Ice Tea…',
        price: '1,50 €',
        image: img.drink,
      },
      { name: 'Eau', price: '1,00 €', image: img.drink },
      { name: 'Boisson 1,5 L', price: '3,00 €', image: img.drink },
      { name: 'Oasis 2 L', price: '3,50 €', image: img.drink },
      { name: 'Café', price: '1,30 €', image: img.coffee, cutout: true },
    ],
  },
]
