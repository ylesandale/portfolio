'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { fadeInUp } from '@/const/animations'
import { navItems } from '@/const/nav-menu'
import { socialLinks } from '@/const/social-links'

import { NavItem } from './nav-item'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const Hero = () => {
  const t = useTranslations()

  return (
    <section
      id="hero-section"
      className="flex flex-col items-center gap-4 sm:gap-6 py-8 sm:py-12 md:py-16 px-4 relative"
    >
      <motion.div {...fadeInUp}>
        <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-2 border-border">
          <AvatarImage src="/avatar.jpg" alt="Profile" />
          <AvatarFallback className="text-xl sm:text-2xl">PM</AvatarFallback>
        </Avatar>
      </motion.div>

      <motion.div className="text-center" {...fadeInUp}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          {t('fio')}
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          {t('position')}
        </p>
      </motion.div>

      <motion.div className="flex gap-4 items-center" {...fadeInUp}>
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
          </Link>
        ))}
      </motion.div>

      <motion.p
        className="text-muted-foreground text-sm sm:text-base underline"
        {...fadeInUp}
      >
        {t('location')}
      </motion.p>

      <motion.nav className="flex gap-6 sm:gap-8" {...fadeInUp}>
        {navItems.map((item) => (
          <NavItem key={item.key} item={item} />
        ))}
      </motion.nav>
    </section>
  )
}
