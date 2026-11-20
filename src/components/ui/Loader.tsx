import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface LoaderProps {
  onComplete: () => void
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 1000 // 1 second total loading time
    const intervalTime = 20
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 150)
          return 100
        }
        return prev + step
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#05050A]"
    >
      <div className="flex flex-col items-center gap-6 max-w-[240px] w-full">
        {/* Animated Brand Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-display text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent-light"
        >
          MS
        </motion.div>

        {/* Loading Progress Bar Container */}
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent-light rounded-full transition-all duration-75"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Percentage Tracker */}
        <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
          Scaffolding Dev Mode / {Math.min(Math.round(progress), 100)}%
        </span>
      </div>
    </motion.div>
  )
}
export default Loader
