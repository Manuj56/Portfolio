import type { Variants } from 'framer-motion'

export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  type: 'tween' | 'spring' | 'inertia' = 'tween',
  delay = 0,
  duration = 0.5
): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  }
}

export const scaleUp = (delay = 0, duration = 0.5): Variants => {
  return {
    hidden: {
      scale: 0.85,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: delay,
        duration: duration,
      },
    },
  }
}

export const slideIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  type: 'tween' | 'spring' | 'inertia' = 'tween',
  delay = 0,
  duration = 0.5
): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const textVariant = (delay = 0): Variants => {
  return {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

export const textContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
}

export const textVariant2: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
}
