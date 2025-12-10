import './globals.css'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { getLocale, getMessages } from 'next-intl/server'

import { type Locale, type Messages } from '@/const'
import { Providers } from '@/providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Frontend Engineer | Roman Vinokhodov',
  description: 'Portfolio of frontend engineer',
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const locale = (await getLocale()) as Locale
  const messages = (await getMessages()) as Messages

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-background" />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)]"
            style={{ backgroundSize: '20px 20px' }}
          />
        </div>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
