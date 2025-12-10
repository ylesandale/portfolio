'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'

import { fadeInUpWithDelay } from '@/const/animations'

import { Button } from './ui/button'

type ShowMoreButtonProps = {
  showAll: boolean
  onToggle: () => void
}

export const ShowMoreButton = ({ showAll, onToggle }: ShowMoreButtonProps) => {
  const t = useTranslations()

  return (
    <motion.div className="flex justify-center mt-6" {...fadeInUpWithDelay}>
      <Button
        variant="outline"
        onClick={onToggle}
        className="gap-2 cursor-pointer"
      >
        {showAll ? (
          <>
            {t('showLess')} <LuChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            {t('showMore')} <LuChevronDown className="h-4 w-4" />
          </>
        )}
      </Button>
    </motion.div>
  )
}
