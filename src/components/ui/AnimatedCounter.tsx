import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  className?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return

    const start = from
    const end = to
    if (start === end) return

    const totalMiliseconds = duration * 1000
    const incrementTime = Math.max(Math.floor(totalMiliseconds / (end - start)), 15)
    
    const startTime = Date.now()
    
    const timer = setInterval(() => {
      const timePassed = Date.now() - startTime
      const progress = Math.min(timePassed / totalMiliseconds, 1)
      
      // Easing function (easeOutQuad) for smoother feel
      const easeProgress = progress * (2 - progress)
      
      const currentCount = Math.floor(start + easeProgress * (end - start))
      setCount(currentCount)
      
      if (progress >= 1) {
        setCount(end)
        clearInterval(timer)
      }
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isInView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}
