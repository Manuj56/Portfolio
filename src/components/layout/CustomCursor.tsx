import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { stiffness: 350, damping: 25 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      // Update motion values for cursor circles
      cursorX.set(x - 12) // offset half of circle width (24px)
      cursorY.set(y - 12)

      // Update CSS variables for spotlight effects across the site
      document.documentElement.style.setProperty('--mouse-x', `${x}px`)
      document.documentElement.style.setProperty('--mouse-y', `${y}px`)

      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'

      setIsHovered(!!isInteractive)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseover', handleMouseOver)

    // Add active styling class to hide default cursor on large screens
    document.body.classList.add('custom-cursor-active')

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseover', handleMouseOver)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [cursorX, cursorY, isVisible])

  // Check if coarse pointer (touch screen / mobile)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(pointer: coarse)').matches)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)')

    const listener = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [])

  if (isMobile || !isVisible) return null

  return (
    <>
      {/* Outer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-primary/50 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? 'rgba(139, 92, 246, 0.6)' : 'rgba(59, 130, 246, 0.5)',
          backgroundColor: isHovered ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      />
      {/* Inner Spot Glow Spot */}
      <div
        className="fixed inset-0 pointer-events-none z-0 mix-blend-screen"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(59, 130, 246, 0.035) 0%, rgba(139, 92, 246, 0.01) 50%, transparent 100%)`,
        }}
      />
    </>
  )
}
export default CustomCursor
