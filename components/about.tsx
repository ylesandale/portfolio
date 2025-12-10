'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { Card, CardContent } from '@/components/ui/card'
import { fadeInUp, fadeInUpWithDelay } from '@/const'

export const About = () => {
  const t = useTranslations()

  return (
    <section id="about" className="py-3 sm:py-4">
      <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6" {...fadeInUp}>
        {t('about')}
      </motion.h2>
      <motion.div {...fadeInUpWithDelay}>
        <Card className="overflow-hidden">
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {t('about-info')}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
