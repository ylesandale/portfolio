import type { Variants } from 'framer-motion'

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
} as const

export const fadeInUpWithDelay = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: 0.2 },
} as const

const commonTransition = {
  duration: 0.4,
  ease: [0.16, 1, 0.3, 1] as const,
}

export const stickyHeaderAnimation = {
  initial: { y: -80, opacity: 0, scale: 0.95 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { y: -80, opacity: 0, scale: 0.95 },
  transition: commonTransition,
} as const

export const staggerContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const slideFromLeftVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: commonTransition,
  },
}

export const slideFromRightVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: commonTransition,
  },
}

export const slideFromRightWithDelayVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ...commonTransition,
      delay: 0.2,
    },
  },
}
