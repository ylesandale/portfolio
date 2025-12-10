'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import { fadeInUp } from '@/const/animations'
import { projectsItems } from '@/const/projects'
import { useShowMore } from '@/hooks/use-show-more'

import { ProjectItem } from './project-item'
import { ShowMoreButton } from './show-more-button'

export const Projects = () => {
  const t = useTranslations()
  const { showAll, displayedItems, toggleShowAll, shouldShowButton } =
    useShowMore(projectsItems, 3)

  return (
    <section id="projects" className="py-3 sm:py-4">
      <motion.h2 className="text-2xl sm:text-3xl font-bold mb-6" {...fadeInUp}>
        {t('projects')}
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayedItems.map((project, index) => (
          <ProjectItem key={index} item={project} index={index} />
        ))}
      </div>
      {shouldShowButton && (
        <ShowMoreButton showAll={showAll} onToggle={toggleShowAll} />
      )}
    </section>
  )
}
