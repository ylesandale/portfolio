'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { type Locale, locales } from '@/const/routing'
import { getBrowserLocale } from '@/utils/get-browser-locale'

export const LocaleRedirect = () => {
  const pathname = usePathname()

  useEffect(() => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const urlLocale = pathSegments[0]

    if (urlLocale && !locales.includes(urlLocale as Locale)) {
      const validLocale = getBrowserLocale()
      const newPath = `/${validLocale}${pathname.replace(`/${urlLocale}`, '')}`
      window.location.replace(newPath)
    }
  }, [pathname])

  return null
}
