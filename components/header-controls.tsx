'use client'

import { motion } from 'framer-motion'

import { fadeInUp } from '@/const/animations'

import { LanguageSwitcher } from './language-switcher'
import { ThemeSwitcher } from './theme-switcher'

export const HeaderControls = () => {
  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 flex justify-end py-4 w-full">
      <motion.div className="flex items-center gap-1 sm:gap-2" {...fadeInUp}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </motion.div>
    </div>
  )
}
