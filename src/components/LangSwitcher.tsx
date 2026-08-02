import { useLanguage } from '../i18n/LanguageContext'
import { locales } from '../i18n/translations'

export function LangSwitcher() {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div className="lang-switcher" role="group" aria-label={t.lang.label}>
      {locales.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className={`lang-btn ${locale === lang.code ? 'active' : ''}`}
          onClick={() => setLocale(lang.code)}
          aria-pressed={locale === lang.code}
          title={lang.label}
        >
          {lang.native}
        </button>
      ))}
    </div>
  )
}
