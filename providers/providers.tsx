'use client'

import { usePathname } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { PropsWithChildren, useEffect, useState } from 'react'

import type { Messages } from '@/const/i18n'
import { type Locale, locales } from '@/const/routing'

type ProvidersProps = {
  initialLocale: Locale
  initialMessages: Messages
} & PropsWithChildren

export const Providers = ({
  children,
  initialLocale,
  initialMessages,
}: ProvidersProps) => {
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const [messages, setMessages] = useState<Messages>(initialMessages)

  useEffect(() => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const urlLocale = pathSegments[0]

    if (urlLocale && locales.includes(urlLocale as Locale)) {
      const newLocale = urlLocale as Locale
      if (newLocale !== locale) {
        setLocale(newLocale)
        import(`@/messages/${newLocale}.json`).then((module) => {
          setMessages(module.default as Messages)
        })
      }
    }
  }, [pathname, locale])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <NextIntlClientProvider messages={messages} locale={locale}>
        {children}
      </NextIntlClientProvider>
    </NextThemesProvider>
  )
}
