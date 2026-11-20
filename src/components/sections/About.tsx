import React from 'react'
import { motion } from 'framer-motion'
import { Server, BrainCircuit, BookOpen } from 'lucide-react'
import { aboutNarrative } from '../../data/portfolioData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlassCard } from '../ui/GlassCard'
import { GradientText } from '../ui/GradientText'
import { fadeIn } from '../../lib/motion'

const iconMap: Record<string, React.ReactNode> = {
  'Backend Excellence': <Server className="h-6 w-6 text-blue-400" />,
  'AI & RAG Integrations': <BrainCircuit className="h-6 w-6 text-violet-400" />,
  'Continuous Learning': <BookOpen className="h-6 w-6 text-teal-400" />,
}

export const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Professional Narrative */}
        <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
          <motion.div variants={fadeIn('up', 'tween', 0.1, 0.5)}>
            <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
              01 // Background
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
              Engineering <GradientText variant="primary">Scalable Systems</GradientText>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl"
          >
            {aboutNarrative.text}
          </motion.p>

          <motion.div
            variants={fadeIn('up', 'tween', 0.3, 0.5)}
            className="p-4 border-l-2 border-primary/20 bg-white/[0.01] rounded-r-xl"
          >
            <p className="text-xs text-slate-500 font-mono italic">
              "Focusing on the intersections of systems engineering and artificial intelligence to design software that adapts, scales, and empowers."
            </p>
          </motion.div>
        </div>

        {/* Right Side: Visual Pillars Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 gap-4 w-full">
          {aboutNarrative.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={fadeIn('left', 'spring', 0.1 + index * 0.15, 1)}
            >
              <GlassCard
                hoverTilt={true}
                hoverGlow={true}
                className="p-6 flex items-start gap-4 text-left border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 shadow-inner">
                  {iconMap[pillar.title]}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-white tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-normal">
                    {pillar.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}
export default About
