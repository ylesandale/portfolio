'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLocale } from 'next-intl'

import { fadeInUpWithDelay } from '@/const/animations'
import type { Certification } from '@/const/certifications'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface CertificationItemProps {
  item: Certification
}

export const CertificationItem = ({ item }: CertificationItemProps) => {
  const { company, name, year, cerficateImage, getUrl } = item
  const locale = useLocale()

  return (
    <motion.div {...fadeInUpWithDelay}>
      <Card
        className="cursor-pointer hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
        onClick={() => window.open(getUrl(locale), '_blank')}
      >
        <div className="relative w-full h-48 overflow-hidden bg-muted/30">
          <Image
            src={cerficateImage}
            alt={name}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {company} • {year}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
