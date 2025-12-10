import { getRequestConfig } from 'next-intl/server'

import type { Messages } from './const/i18n'
import { type Locale, locales, routing } from './const/routing'

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as Locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default as Messages,
  }
})
