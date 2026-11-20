import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../lib/motion'

interface SectionWrapperProps {
  children: React.ReactNode
  id: string
  className?: string
  staggerChildren?: number
  delayChildren?: number
  amount?: number
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
  staggerChildren = 0.1,
  delayChildren = 0,
  amount = 0.1,
}) => {
  return (
    <motion.section
      variants={staggerContainer(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: amount }}
      id={id}
      className={`relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-32 overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  )
}
