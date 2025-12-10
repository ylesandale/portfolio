'use client'

import { useLocale } from 'next-intl'
import { LuLanguages } from 'react-icons/lu'

import { locales } from '@/const/routing'
import { getBasePath } from '@/utils/get-base-path'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const languageNames: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
}

export const LanguageSwitcher = () => {
  const locale = useLocale()

  const switchLocale = (newLocale: string) => {
    const basePath = getBasePath()
    const newPath = `${basePath}/${newLocale}`
    window.location.replace(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 sm:h-9 sm:w-9 p-1.5 sm:p-2 rounded-full hover:bg-accent transition-colors cursor-pointer"
        >
          <LuLanguages className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => switchLocale(code)}
            className={locale === code ? 'bg-accent' : ''}
          >
            {languageNames[code]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
