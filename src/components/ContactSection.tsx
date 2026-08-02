import { motion } from 'framer-motion'
import { restaurant } from '../data'

export function ContactSection() {
  return (
    <section id="contact" className="section contact-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">Contact</span>
        <h2 className="section-title">Nous vous attendons</h2>
        <p className="section-desc">
          Passez nous voir à Combs-la-Ville ou appelez pour commander. Accès
          facile via le RER D.
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-block">
            <h3>Adresse</h3>
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
            <h3>Horaires</h3>
            <p>{restaurant.hours}</p>
            <p style={{ marginTop: '0.5rem' }}>{restaurant.access}</p>
          </div>

          <div className="contact-block">
            <h3>Téléphone</h3>
            <p>
              Mob.&nbsp;
              <a href={restaurant.mobileHref}>{restaurant.mobile}</a>
              <br />
              Tél.&nbsp;
              <a href={restaurant.phoneHref}>{restaurant.phone}</a>
            </p>
          </div>

          <div className="contact-actions">
            <a className="btn btn-primary" href={restaurant.phoneHref}>
              Appeler le restaurant
            </a>
            <a
              className="btn btn-ghost"
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Itinéraire
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
            title="Carte Tantuni Grill Combs-la-Ville"
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
