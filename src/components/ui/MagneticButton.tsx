import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  id?: string
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  id,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const { clientX, clientY } = e
    const rect = containerRef.current.getBoundingClientRect()
    
    // Calculate the distance of mouse from the center of the button
    const x = clientX - (rect.left + rect.width / 2)
    const y = clientY - (rect.top + rect.height / 2)

    // Pull intensity factor (adjust for weaker/stronger attraction)
    const strength = 0.35
    setPosition({ x: x * strength, y: y * strength })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.button
        id={id}
        type={type}
        onClick={onClick}
        disabled={disabled}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        className={`relative select-none ${className}`}
      >
        {children}
      </motion.button>
    </div>
  )
}
