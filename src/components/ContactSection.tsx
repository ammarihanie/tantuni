import { motion } from 'framer-motion'
import { restaurant } from '../data'
import { useLanguage } from '../i18n/LanguageContext'

export function ContactSection() {
  const { t, dir } = useLanguage()

  return (
    <section id="contact" className="section contact-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">{t.contact.label}</span>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-desc">{t.contact.desc}</p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          initial={{ opacity: 0, x: dir === 'rtl' ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-block">
            <h3>{t.contact.address}</h3>
            <p>
              <strong style={{ color: 'var(--bone)', fontWeight: 500 }}>
                {restaurant.name}
              </strong>
              <br />
              {restaurant.owner}
              <br />
              {restaurant.address}
              <br />
              {restaurant.city}, {restaurant.country}
            </p>
          </div>

          <div className="contact-block">
            <h3>{t.contact.hours}</h3>
            <p>{t.contact.hoursValue}</p>
            <p style={{ marginTop: '0.5rem' }}>{t.contact.access}</p>
          </div>

          <div className="contact-block">
            <h3>{t.contact.phone}</h3>
            <p>
              {t.contact.mobile}&nbsp;
              <a href={restaurant.mobileHref}>{restaurant.mobile}</a>
              <br />
              {t.contact.landline}&nbsp;
              <a href={restaurant.phoneHref}>{restaurant.phone}</a>
            </p>
          </div>

          <div className="contact-actions">
            <a className="btn btn-primary" href={restaurant.phoneHref}>
              {t.contact.callRestaurant}
            </a>
            <a
              className="btn btn-ghost"
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t.contact.directions}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="contact-map"
          initial={{ opacity: 0, rotateX: 8, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ transformPerspective: 900 }}
        >
          <iframe
            title={t.contact.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Tantuni+Grill+2+bis+avenue+de+Quincy+Combs-la-Ville&output=embed"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
