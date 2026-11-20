import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverGlow?: boolean
  hoverTilt?: boolean
  onClick?: () => void
  delay?: number
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverGlow = true,
  hoverTilt = false,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for smooth transitions
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig)

  // Spotlight coordinates for radial glow gradient
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // Calculate relative mouse coordinates inside card [0, 1]
    const relativeX = (event.clientX - rect.left) / width
    const relativeY = (event.clientY - rect.top) / height

    if (hoverTilt) {
      x.set(relativeX - 0.5)
      y.set(relativeY - 0.5)
    }

    if (hoverGlow) {
      setSpotlightPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (hoverTilt) {
      x.set(0)
      y.set(0)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: hoverTilt ? rotateX : 0,
        rotateY: hoverTilt ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden rounded-2xl glass-effect transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${isHovered && hoverGlow ? 'shadow-[0_0_30px_rgba(59,130,246,0.15)] border-white/15' : 'border-white/5'} ${className}`}
    >
      {/* Radial Spot Light Glow */}
      {hoverGlow && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.03) 50%, transparent 100%)`,
          }}
        />
      )}

      {/* Content wrapper inside preserving 3D for tilt depth */}
      <div style={{ transform: hoverTilt ? 'translateZ(20px)' : 'none' }} className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  )
}
