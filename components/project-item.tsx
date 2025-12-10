'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { fadeInUpWithDelay } from '@/const/animations'
import { GITHUB_LINK } from '@/const/link'
import type { Project } from '@/const/projects'
import { getStaticPath } from '@/utils/get-static-path'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

type ProjectItemProps = {
  item: Project
  index: number
}

export const ProjectItem = ({ item, index }: ProjectItemProps) => {
  const t = useTranslations()

  return (
    <motion.div
      {...fadeInUpWithDelay}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="flex flex-col h-full hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        onClick={() =>
          window.open(`${GITHUB_LINK}/${item.githubProjectName}`, '_blank')
        }
      >
        <div className="relative w-full h-48 overflow-hidden bg-muted/30">
          <Image
            src={getStaticPath(item.previewImageUrl)}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription className="text-sm leading-relaxed">
            {t(item.description)}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-xs px-2 py-1 bg-muted rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
