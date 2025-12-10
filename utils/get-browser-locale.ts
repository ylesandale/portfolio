import { type Locale, locales, routing } from '@/const/routing'

export const getBrowserLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return routing.defaultLocale
  }

  const browserLang =
    navigator.language ||
    (navigator as typeof navigator & { userLanguage?: string }).userLanguage ||
    ''
  const langCode = browserLang.split('-')[0].toLowerCase()

  if (locales.includes(langCode as Locale)) {
    return langCode as Locale
  }

  return routing.defaultLocale
}

