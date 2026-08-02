import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Dictionary, Locale } from './types'
import {
  defaultLocale,
  dictionaries,
  isLocale,
} from './translations'

const STORAGE_KEY = 'tantuni-lang'

type LanguageContextValue = {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function resolveInitialLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && isLocale(stored)) return stored
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('ar')) return 'ar'
  if (nav.startsWith('tr')) return 'tr'
  if (nav.startsWith('en')) return 'en'
  return defaultLocale
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    setLocaleState(resolveInitialLocale())
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const dir: 'ltr' | 'rtl' = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', dictionaries[locale].meta.description)
  }, [locale, dir])

  const value = useMemo(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale,
      dir,
    }),
    [locale, setLocale, dir],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
