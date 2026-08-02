import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import { motion } from 'framer-motion'
import { gallery } from '../data'

export function Gallery3D() {
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
    if (delta < -50) next()
    else if (delta > 50) prev()
    setPaused(false)
  }

  return (
    <section id="galerie" className="section gallery-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">Galerie</span>
        <h2 className="section-title">Nos plats en lumière</h2>
        <p className="section-desc">
          Faites glisser le carrousel 3D — sandwichs, assiettes et grillades
          préparés chaque jour dans notre cuisine.
        </p>
      </motion.div>

      <div
        className="carousel-wrap"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => setPaused(false)}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-roledescription="carrousel"
        aria-label="Photos des plats"
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
            return (
              <div
                key={item.src}
                className={`carousel-item ${sideClass}`}
                style={{
                  transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                }}
              >
                <figure>
                  <img src={item.src} alt={item.alt} draggable={false} />
                </figure>
              </div>
            )
          })}
        </div>
      </div>

      <p className="carousel-caption" aria-live="polite">
        {gallery[index].label}
      </p>

      <div className="carousel-nav">
        <button className="carousel-btn" onClick={prev} aria-label="Photo précédente">
          ←
        </button>
        <button className="carousel-btn" onClick={next} aria-label="Photo suivante">
          →
        </button>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Navigation galerie">
        {gallery.map((item, i) => (
          <button
            key={item.src}
            className={i === index ? 'active' : ''}
            aria-label={item.label}
            aria-selected={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
