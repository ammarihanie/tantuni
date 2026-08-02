import { useRef, useState, type PointerEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { menuCategories, type MenuItem } from '../data'

function ProductCard({ item, index }: { item: MenuItem; index: number }) {
  const cardRef = useRef<HTMLLIElement>(null)

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
          <img src={item.image} alt={item.name} loading="lazy" />
        </div>
      )}
      <div className="product-card-body">
        <div className="product-card-top">
          <h3 className="product-card-name">{item.name}</h3>
          <span className="product-card-price">{item.price}</span>
        </div>
        {item.desc && <p className="product-card-desc">{item.desc}</p>}
        {item.priceAlt && (
          <span className="product-card-alt">{item.priceAlt}</span>
        )}
      </div>
    </motion.li>
  )
}

export function MenuSection() {
  const [active, setActive] = useState(menuCategories[0].id)
  const category = menuCategories.find((c) => c.id === active)!

  return (
    <section id="menu" className="section menu-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">La carte</span>
        <h2 className="section-title">Notre menu</h2>
        <p className="section-desc">
          Sandwichs, assiettes, entrées et desserts — une cuisine turque
          généreuse à prix accessibles.
        </p>
      </motion.div>

      <div className="menu-tabs" role="tablist" aria-label="Catégories du menu">
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            className={`menu-tab ${active === cat.id ? 'active' : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.title}
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
          {category.note && <p className="menu-note">{category.note}</p>}
          <ul className="product-grid">
            {category.items.map((item, i) => (
              <ProductCard key={item.name} item={item} index={i} />
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
