'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { experienceItems, fadeInUp } from '@/const'
import { useShowMore } from '@/hooks'

import { ExperienceItem } from './experience-item'
import { ShowMoreButton } from './show-more-button'

export const Experience = () => {
  const t = useTranslations()
  const { showAll, displayedItems, toggleShowAll, shouldShowButton } =
    useShowMore(experienceItems, 2)

  return (
    <section id="experience" className="py-3 sm:py-4">
      <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6" {...fadeInUp}>
        {t('experience')}
      </motion.h2>
      <div className="space-y-4">
        {displayedItems.map((item) => (
          <ExperienceItem key={item.company} item={item} />
        ))}
      </div>
      {shouldShowButton && (
        <ShowMoreButton showAll={showAll} onToggle={toggleShowAll} />
      )}
    </section>
  )
}
