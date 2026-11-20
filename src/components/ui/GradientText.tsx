import React from 'react'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'
  variant?: 'primary' | 'purple' | 'cyan'
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  element = 'span',
  variant = 'primary',
}) => {
  const Component = element

  const variantClasses = {
    primary: 'bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500',
    purple: 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500',
    cyan: 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-500',
  }

  return (
    <Component className={`${variantClasses[variant]} font-semibold ${className}`}>
      {children}
    </Component>
  )
}
