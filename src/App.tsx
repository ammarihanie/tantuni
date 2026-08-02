import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { restaurant, heroFood, heroBg } from './data'
import { Gallery3D } from './components/Gallery3D'
import { MenuSection } from './components/MenuSection'
import { StorySection } from './components/StorySection'
import { ContactSection } from './components/ContactSection'
import { LangSwitcher } from './components/LangSwitcher'
import { useLanguage } from './i18n/LanguageContext'

export default function App() {
  const { t, dir } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 600], [0, 120])
  const bgScale = useTransform(scrollY, [0, 600], [1, 1.08])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="noise" aria-hidden />

      <header className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'open' : ''}`}>
        <a href="#top" className="nav-brand" onClick={closeMenu}>
          Tantuni <span>Grill</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#galerie" onClick={closeMenu}>
                {t.nav.gallery}
              </a>
            </li>
            <li>
              <a href="#histoire" onClick={closeMenu}>
                {t.nav.story}
              </a>
            </li>
            <li>
              <a href="#menu" onClick={closeMenu}>
                {t.nav.menu}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav-actions">
          <LangSwitcher />
          <a className="nav-cta" href={restaurant.phoneHref}>
            {t.nav.call}
          </a>
        </div>
        <button
          className="nav-toggle"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-label={t.hero.homeAria}>
          <motion.div className="hero-bg-motion" style={{ y: bgY, scale: bgScale }}>
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${heroBg})` }}
            />
          </motion.div>
          <div className="hero-ember" aria-hidden />

          <div className="hero-content">
            <motion.h1
              className="hero-brand"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Tantuni
              <em>Grill</em>
            </motion.h1>
            <motion.p
              className="hero-lead"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {t.hero.lead}
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a className="btn btn-primary" href="#menu">
                {t.hero.viewMenu}
              </a>
              <a className="btn btn-ghost" href="#contact">
                {t.hero.findUs}
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-float"
            initial={{ opacity: 0, x: dir === 'rtl' ? -60 : 60, rotateY: dir === 'rtl' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          >
            <img src={heroFood} alt="" />
          </motion.div>

          <div className="hero-scroll" aria-hidden>
            {t.hero.discover}
            <i />
          </div>
        </section>

        <Gallery3D />
        <StorySection />
        <MenuSection />
        <ContactSection />
      </main>

      <footer className="footer">
        <div>
          <strong>Tantuni Grill</strong>
          <br />
          {restaurant.owner} · {restaurant.city}
        </div>
        <p>{t.footer.hours}</p>
      </footer>
    </>
  )
}
