'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

import { getBasePath } from '@/utils/get-base-path'
import { getBrowserLocale } from '@/utils/get-browser-locale'

export const RedirectLoader = () => {
  useEffect(() => {
    const locale = getBrowserLocale()
    const basePath = getBasePath()
    window.location.replace(`${basePath}/${locale}`)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <motion.div
            className="h-12 w-12 rounded-full border-4 border-muted border-t-primary"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
