'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import type { NavItem as NavItemType } from '@/const/nav-menu'
import { getStaticPath } from '@/utils/get-static-path'
import { scrollToSection } from '@/utils/scroll-to-section'

type NavItemProps = {
  item: NavItemType
  index?: number
  className?: string
  withAnimation?: boolean
}

export const NavItem = ({
  item,
  index = 0,
  className,
  withAnimation = false,
}: NavItemProps) => {
  const t = useTranslations()

  const baseClassName =
    className ||
    'text-sm sm:text-base font-medium text-muted-foreground transition-colors hover:text-foreground'

  const animationVariants: Variants | undefined = withAnimation
    ? {
        hidden: { opacity: 0, y: -10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            delay: index * 0.05,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        },
      }
    : undefined

  const content = (
    <>
      {'href' in item && item.href ? (
        <Link
          href={getStaticPath(item.href)}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClassName}
        >
          {t(item.key)}
        </Link>
      ) : 'targetId' in item ? (
        <button
          onClick={() => scrollToSection(item.targetId)}
          className={`${baseClassName} cursor-pointer`}
        >
          {t(item.key)}
        </button>
      ) : null}
    </>
  )

  if (withAnimation && animationVariants) {
    return <motion.div variants={animationVariants}>{content}</motion.div>
  }

  return content
}

export const StickyNavItem = ({
  item,
  index,
}: {
  item: NavItemType
  index: number
}) => (
  <NavItem
    item={item}
    index={index}
    withAnimation
    className="text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer whitespace-nowrap"
  />
)
