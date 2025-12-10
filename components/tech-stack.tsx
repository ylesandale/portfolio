'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { fadeInUp, techStack } from '@/const'

import { TechStackMarquee } from './tech-stack-marquee'

export const TechStack = () => {
  const t = useTranslations()

  return (
    <section id="tech-stack" className="py-3 sm:py-4 -mx-4 px-4">
      <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6" {...fadeInUp}>
        {t('myTechStack')}
      </motion.h2>
      <motion.div className="relative -mx-4 px-4" {...fadeInUp}>
        <div className="space-y-4 relative">
          <TechStackMarquee
            items={techStack}
            animationClass="animate-marquee"
            keyPrefix="tech"
          />
          <TechStackMarquee
            items={techStack}
            animationClass="animate-marquee-reverse"
            keyPrefix="reverse-tech"
          />
        </div>
      </motion.div>
    </section>
  )
}
