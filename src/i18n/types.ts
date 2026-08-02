export type Locale = 'fr' | 'en' | 'ar' | 'tr'

export type MenuItemCopy = {
  name: string
  desc?: string
  priceAlt?: string
}

export type Dictionary = {
  meta: { description: string }
  nav: {
    gallery: string
    story: string
    menu: string
    contact: string
    call: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    lead: string
    viewMenu: string
    findUs: string
    discover: string
    homeAria: string
  }
  gallery: {
    label: string
    title: string
    desc: string
    aria: string
    prev: string
    next: string
    nav: string
    items: Record<string, { alt: string; label: string }>
  }
  story: {
    label: string
    title: string
    body: string
    tantuniTitle: string
    tantuniBody: string
    chefs: string
    terraceAlt: string
    years: string
    origin: string
    openDaily: string
  }
  menu: {
    label: string
    title: string
    desc: string
    tabsAria: string
    categories: Record<string, string>
    notes: Record<string, string>
    items: Record<string, MenuItemCopy>
  }
  contact: {
    label: string
    title: string
    desc: string
    address: string
    hours: string
    hoursValue: string
    access: string
    phone: string
    mobile: string
    landline: string
    callRestaurant: string
    directions: string
    mapTitle: string
  }
  footer: {
    hours: string
  }
  lang: {
    label: string
  }
}
