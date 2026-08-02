import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import { motion } from 'framer-motion'
import { gallery } from '../data'
import { useLanguage } from '../i18n/LanguageContext'

export function Gallery3D() {
  const { t, dir } = useLanguage()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const dragX = useRef(0)
  const n = gallery.length
  const angle = 360 / n
  const radius = 340

  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n])
  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n])

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(next, 3800)
    return () => window.clearInterval(id)
  }, [next, paused])

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragX.current = e.clientX
    setPaused(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const delta = e.clientX - dragX.current
    const goNext = dir === 'rtl' ? delta > 50 : delta < -50
    const goPrev = dir === 'rtl' ? delta < -50 : delta > 50
    if (goNext) next()
    else if (goPrev) prev()
    setPaused(false)
  }

  const current = gallery[index]
  const copy = t.gallery.items[current.key]

  return (
    <section id="galerie" className="section gallery-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">{t.gallery.label}</span>
        <h2 className="section-title">{t.gallery.title}</h2>
        <p className="section-desc">{t.gallery.desc}</p>
      </motion.div>

      <div
        className="carousel-wrap"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => setPaused(false)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label={t.gallery.aria}
      >
        <div
          className="carousel-stage"
          style={{
            transform: `translateZ(-${radius}px) rotateY(${-index * angle}deg)`,
          }}
        >
          {gallery.map((item, i) => {
            const offset = ((i - index) % n + n) % n
            const dist = Math.min(offset, n - offset)
            const sideClass =
              dist === 0 ? '' : dist === 1 ? 'is-side' : 'is-far'
            const itemCopy = t.gallery.items[item.key]
            return (
              <div
                key={item.src}
                className={`carousel-item ${sideClass}`}
                style={{
                  transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                }}
              >
                <figure>
                  <img
                    src={item.src}
                    alt={itemCopy.alt}
                    draggable={false}
                  />
                </figure>
              </div>
            )
          })}
        </div>
      </div>

      <p className="carousel-caption" aria-live="polite">
        {copy.label}
      </p>

      <div className="carousel-nav">
        <button className="carousel-btn" onClick={prev} aria-label={t.gallery.prev}>
          {dir === 'rtl' ? '→' : '←'}
        </button>
        <button className="carousel-btn" onClick={next} aria-label={t.gallery.next}>
          {dir === 'rtl' ? '←' : '→'}
        </button>
      </div>

      <div className="carousel-dots" role="tablist" aria-label={t.gallery.nav}>
        {gallery.map((item, i) => (
          <button
            key={item.src}
            className={i === index ? 'active' : ''}
            aria-label={t.gallery.items[item.key].label}
            aria-selected={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
