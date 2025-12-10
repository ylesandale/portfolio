'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { startTransition } from 'react'
import { LuLanguages } from 'react-icons/lu'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { locales } from '@/const'

const languageNames: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
}

export const LanguageSwitcher = () => {
  const locale = useLocale()
  const router = useRouter()

  const switchLocale = (newLocale: string) => {
    const newPath = `/${newLocale}`

    startTransition(() => {
      router.push(newPath)
      router.refresh()
    })
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
