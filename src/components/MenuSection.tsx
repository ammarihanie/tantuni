import { useRef, useState, type PointerEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { menuCategories, type MenuItem } from '../data'
import { useLanguage } from '../i18n/LanguageContext'

function ProductCard({ item, index }: { item: MenuItem; index: number }) {
  const { t } = useLanguage()
  const cardRef = useRef<HTMLLIElement>(null)
  const copy = t.menu.items[item.id]

  const onMove = (e: PointerEvent<HTMLLIElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`
  }

  const onLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)'
  }

  if (!copy) return null

  return (
    <motion.li
      ref={cardRef}
      className={`product-card ${item.image ? '' : 'product-card--text'} ${item.cutout ? 'product-card--cutout' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onPointerMove={item.image ? onMove : undefined}
      onPointerLeave={item.image ? onLeave : undefined}
    >
      {item.image && (
        <div className="product-card-media">
          <img src={item.image} alt={copy.name} loading="lazy" />
        </div>
      )}
      <div className="product-card-body">
        <div className="product-card-top">
          <h3 className="product-card-name">{copy.name}</h3>
          <span className="product-card-price">{item.price}</span>
        </div>
        {copy.desc && <p className="product-card-desc">{copy.desc}</p>}
        {copy.priceAlt && (
          <span className="product-card-alt">{copy.priceAlt}</span>
        )}
      </div>
    </motion.li>
  )
}

export function MenuSection() {
  const { t } = useLanguage()
  const [active, setActive] = useState(menuCategories[0].id)
  const category = menuCategories.find((c) => c.id === active)!
  const note =
    category.noteKey && t.menu.notes[category.noteKey]
      ? t.menu.notes[category.noteKey]
      : undefined

  return (
    <section id="menu" className="section menu-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">{t.menu.label}</span>
        <h2 className="section-title">{t.menu.title}</h2>
        <p className="section-desc">{t.menu.desc}</p>
      </motion.div>

      <div className="menu-tabs" role="tablist" aria-label={t.menu.tabsAria}>
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            className={`menu-tab ${active === cat.id ? 'active' : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {t.menu.categories[cat.id]}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {note && <p className="menu-note">{note}</p>}
          <ul className="product-grid">
            {category.items.map((item, i) => (
              <ProductCard key={item.id} item={item} index={i} />
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
