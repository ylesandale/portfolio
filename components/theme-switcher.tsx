'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

import { Button } from '@/components/ui/button'

export const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-7 w-7 sm:h-9 sm:w-9 p-1.5 sm:p-2 rounded-full hover:bg-accent transition-colors cursor-pointer"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <LuSun className="h-4 w-4 sm:h-5 sm:w-5" />
      ) : (
        <LuMoon className="h-4 w-4 sm:h-5 sm:w-5" />
      )}
    </Button>
  )
}
