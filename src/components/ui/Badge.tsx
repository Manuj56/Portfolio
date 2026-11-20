import React from 'react'

interface BadgeProps {
  text: string
  className?: string
  variant?: 'primary' | 'secondary' | 'accent' | 'glass'
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  className = '',
  variant = 'glass',
}) => {
  const variantStyles = {
    primary: 'bg-primary/10 text-primary-light border-primary/20',
    secondary: 'bg-secondary/10 text-secondary-light border-secondary/20',
    accent: 'bg-accent/10 text-accent-light border-accent/20',
    glass: 'bg-white/[0.03] text-slate-300 border-white/[0.08]',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-300 ${variantStyles[variant]} ${className}`}
    >
      {text}
    </span>
  )
}
