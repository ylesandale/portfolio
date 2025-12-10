import { getRequestConfig } from 'next-intl/server'

import { type Locale,locales, Messages, routing } from './const'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !locales.includes(locale as Locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale: locale as string,
    messages: (await import(`./messages/${locale}.json`)).default as Messages,
  }
})
