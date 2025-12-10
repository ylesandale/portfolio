'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { fadeInUp } from '@/const/animations'
import { getStaticPath } from '@/utils/get-static-path'

export const Footer = () => {
  const t = useTranslations()

  return (
    <footer className="border-t py-6 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <motion.div className="flex flex-col items-center gap-6" {...fadeInUp}>
          <Link
            href={getStaticPath('/resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-base sm:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('resume')}
            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            {t('builtBy')} {t('creator')} | {t('lastUpdated')}: 09.12.2025
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
