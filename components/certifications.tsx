'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { fadeInUp } from '@/const'
import { certificationsItems } from '@/const/certifications'
import { useShowMore } from '@/hooks'

import { CertificationItem } from './certification-item'
import { ShowMoreButton } from './show-more-button'

export const Certifications = () => {
  const t = useTranslations()
  const { showAll, displayedItems, toggleShowAll, shouldShowButton } =
    useShowMore(certificationsItems, 2)

  return (
    <section id="certifications" className="py-3 sm:py-4">
      <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6" {...fadeInUp}>
        {t('certifications')}
      </motion.h2>
      <div className="grid gap-4 md:grid-cols-2">
        {displayedItems.map((item) => (
          <CertificationItem key={item.name} item={item} />
        ))}
      </div>
      {shouldShowButton && (
        <ShowMoreButton showAll={showAll} onToggle={toggleShowAll} />
      )}
    </section>
  )
}
