'use client'

import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

import { type Locale, type Messages } from '@/const'

type ProvidersProps = {
  messages: Messages
  locale: Locale
} & PropsWithChildren

export const Providers = ({ children, messages, locale }: ProvidersProps) => {
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
