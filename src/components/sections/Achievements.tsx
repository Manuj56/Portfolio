import React from 'react'
import { motion } from 'framer-motion'
import { achievements } from '../../data/portfolioData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlassCard } from '../ui/GlassCard'
import { GradientText } from '../ui/GradientText'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { fadeIn } from '../../lib/motion'

export const Achievements: React.FC = () => {
  return (
    <SectionWrapper id="achievements" className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="h-72 w-72 rounded-full bg-secondary/5 blur-[120px]" />
      </div>

      {/* Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
          05 // Milestones
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
          Key <GradientText variant="primary">Achievements</GradientText>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
          Quantitative milestones showing problem-solving depth, project execution, and credential validation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            variants={fadeIn('up', 'spring', index * 0.1, 1)}
          >
            <GlassCard
              hoverTilt={true}
              hoverGlow={true}
              className="p-8 flex flex-col justify-center items-center text-center h-full border-white/[0.04] bg-white/[0.01]"
            >
              {/* Animated Big Stat Number */}
              <div className="font-display font-extrabold tracking-tight text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 mb-4 select-none">
                <AnimatedCounter to={item.number} suffix={item.suffix} duration={2.2} />
              </div>

              {/* Label */}
              <h3 className="text-base font-semibold text-slate-200 tracking-wide mb-2 uppercase font-mono text-[11px]">
                {item.label}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-normal max-w-[200px]">
                {item.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
export default Achievements
