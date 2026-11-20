import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experiences } from '../../data/portfolioData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlassCard } from '../ui/GlassCard'
import { GradientText } from '../ui/GradientText'
import { Badge } from '../ui/Badge'
import { fadeIn } from '../../lib/motion'

export const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" className="relative">
      {/* Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
          04 // Timeline
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
          Work <GradientText variant="primary">Experience</GradientText>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
          My professional history, internships, and contract roles illustrating how I put code into production.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative mx-auto max-w-4xl">
        {/* Timeline Spine Line (Visible on Desktop) */}
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-white/5 -translate-x-1/2 hidden md:block" />
        
        {/* Timeline Spine Line (Visible on Mobile) */}
        <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-white/5 md:hidden" />

        {/* Timeline Nodes */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0
            
            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full`}
              >
                {/* Node Center Dot (Desktop) */}
                <div className="absolute left-4 md:left-1/2 top-6 h-4 w-4 rounded-full border-2 border-primary bg-background -translate-x-1/2 z-20 hidden md:block" />
                
                {/* Node Center Dot (Mobile) */}
                <div className="absolute left-6 top-6 h-4 w-4 rounded-full border-2 border-primary bg-background -translate-x-1/2 z-20 md:hidden" />

                {/* Left/Right empty box for grid spacing on desktop */}
                <div className={`w-full md:w-[45%] hidden md:block ${isEven ? 'order-last' : ''}`} />

                {/* Card Wrapper */}
                <motion.div
                  variants={fadeIn(isEven ? 'left' : 'right', 'spring', index * 0.15, 1)}
                  className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}
                >
                  <GlassCard
                    hoverTilt={true}
                    hoverGlow={true}
                    className="p-6 border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03]"
                  >
                    {/* Metadata: Role + Company */}
                    <div className="flex flex-col gap-1 text-left">
                      <div className="flex flex-wrap items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary-light" />
                        <h3 className="text-lg font-display font-bold text-white tracking-wide">
                          {exp.role}
                        </h3>
                      </div>
                      
                      <h4 className="text-sm font-semibold text-slate-300">
                        {exp.company}
                      </h4>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono mt-1.5 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Work bullet details */}
                    <ul className="space-y-2 text-left mb-4">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-xs text-slate-400 flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack chips */}
                    <div className="flex flex-wrap gap-1.5 justify-start">
                      {exp.tags.map((t) => (
                        <Badge key={t} text={t} variant="glass" />
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>

              </div>
            )
          })}
        </div>

      </div>
    </SectionWrapper>
  )
}
export default Experience
