import { motion } from 'framer-motion'
import { heroBg } from '../data'
import { useLanguage } from '../i18n/LanguageContext'

export function StorySection() {
  const { t, dir } = useLanguage()

  return (
    <section id="histoire" className="section story-section">
      <div className="story-grid">
        <motion.div
          className="story-visual"
          initial={{ opacity: 0, rotateY: dir === 'rtl' ? 12 : -12, x: dir === 'rtl' ? 40 : -40 }}
          whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1000 }}
        >
          <img src={heroBg} alt={t.story.terraceAlt} />
          <span className="story-badge">Combs-la-Ville</span>
        </motion.div>

        <motion.div
          className="story-copy"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="section-label">{t.story.label}</span>
          <h2 className="section-title">{t.story.title}</h2>
          <p>{t.story.body}</p>
          <div className="story-highlight">
            <strong>{t.story.tantuniTitle}</strong>
            <p style={{ margin: 0 }}>{t.story.tantuniBody}</p>
          </div>
          <p>{t.story.chefs}</p>
          <div className="story-facts">
            <div>
              <strong>20+</strong>
              <span>{t.story.years}</span>
            </div>
            <div>
              <strong>Mersin</strong>
              <span>{t.story.origin}</span>
            </div>
            <div>
              <strong>7/7</strong>
              <span>{t.story.openDaily}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
