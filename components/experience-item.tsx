'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { fadeInUpWithDelay } from '@/const/animations'
import type { Experience } from '@/const/experience'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

type ExperienceItemProps = {
  item: Experience
}

export const ExperienceItem = ({ item }: ExperienceItemProps) => {
  const { position, company, yearFrom, yearTo, description } = item
  const t = useTranslations()

  return (
    <motion.div {...fadeInUpWithDelay}>
      <Card>
        <CardHeader>
          <CardTitle>{position}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {company} • {yearFrom} - {yearTo ? yearTo : t('present')}
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-2">{t(description)}</p>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline transition-colors"
          >
            {t('moreInResume')}
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}
