'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  navItems,
  slideFromLeftVariants,
  slideFromRightVariants,
  slideFromRightWithDelayVariants,
  staggerContainerVariants,
  stickyHeaderAnimation,
} from '@/const'
import { useMainBlock } from '@/hooks'

import { LanguageSwitcher } from './language-switcher'
import { StickyNavItem } from './nav-item'
import { ThemeSwitcher } from './theme-switcher'

export const StickyHeader = () => {
  const { isMainBlockHidden } = useMainBlock()

  return (
    <AnimatePresence>
      {isMainBlockHidden && (
        <motion.header
          {...stickyHeaderAnimation}
          className="fixed top-0 left-0 right-0 z-50 border-b bg-background/40 backdrop-blur-xl backdrop-saturate-150"
        >
          <div className="max-w-4xl mx-auto px-2 sm:px-4">
            <motion.div
              className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4"
              initial="hidden"
              animate="visible"
              variants={staggerContainerVariants}
            >
              <motion.div
                className="flex items-center gap-2 sm:gap-4"
                variants={slideFromLeftVariants}
              >
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-border">
                  <AvatarImage src="/avatar.jpg" alt="avatar" />
                  <AvatarFallback className="text-xs sm:text-sm">
                    PM
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              <div className="flex items-center gap-1 sm:gap-4">
                <motion.nav
                  className="flex gap-2 sm:gap-6"
                  variants={slideFromRightVariants}
                >
                  {navItems.map((item, index) => (
                    <StickyNavItem key={item.key} item={item} index={index} />
                  ))}
                </motion.nav>
                <motion.div
                  className="flex items-center gap-1 sm:gap-2"
                  variants={slideFromRightWithDelayVariants}
                >
                  <LanguageSwitcher />
                  <ThemeSwitcher />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
