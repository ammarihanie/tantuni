import { motion } from 'framer-motion'
import { heroBg, restaurant } from '../data'

export function StorySection() {
  return (
    <section id="histoire" className="section story-section">
      <div className="story-grid">
        <motion.div
          className="story-visual"
          initial={{ opacity: 0, rotateY: -12, x: -40 }}
          whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1000 }}
        >
          <img src={heroBg} alt="Terrasse de Tantuni Grill à Combs-la-Ville" />
          <span className="story-badge">Combs-la-Ville</span>
        </motion.div>

        <motion.div
          className="story-copy"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="section-label">Notre histoire</span>
          <h2 className="section-title">Du feu de Mersin à votre table</h2>
          <p>{restaurant.story}</p>
          <div className="story-highlight">
            <strong>Le Tantuni</strong>
            <p style={{ margin: 0 }}>{restaurant.tantuni}</p>
          </div>
          <p>
            Nos chefs partagent leur expérience à travers la préparation, la
            découpe et la cuisson de nos plats et de nos viandes 100&nbsp;%
            maison.
          </p>
          <div className="story-facts">
            <div>
              <strong>20+</strong>
              <span>Ans d&apos;expérience</span>
            </div>
            <div>
              <strong>Mersin</strong>
              <span>Origine du Tantuni</span>
            </div>
            <div>
              <strong>7j/7</strong>
              <span>Ouvert pour vous</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
