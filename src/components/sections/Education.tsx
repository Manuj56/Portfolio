import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import { educationList } from '../../data/portfolioData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlassCard } from '../ui/GlassCard'
import { GradientText } from '../ui/GradientText'
import { fadeIn } from '../../lib/motion'

export const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" className="relative">
      {/* Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
          06 // Academic
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
          Academic <GradientText variant="primary">Credentials</GradientText>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
          My academic foundation in Computer Science Engineering, theoretical coursework, and specialization tracks.
        </p>
      </div>

      {/* Education Cards Container */}
      <div className="max-w-3xl mx-auto space-y-6">
        {educationList.map((edu, index) => (
          <motion.div
            key={edu.id}
            variants={fadeIn('up', 'spring', index * 0.15, 1)}
          >
            <GlassCard
              hoverTilt={true}
              hoverGlow={true}
              className="p-8 border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03]"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 text-left">
                {/* Left Side: Major details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mt-1">
                      <GraduationCap className="h-6 w-6 text-primary-light" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white tracking-wide">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm font-semibold text-slate-300 mt-1">
                        {edu.institution}
                      </h4>
                    </div>
                  </div>

                  {/* Course Details list */}
                  <ul className="space-y-2 pl-15">
                    {edu.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Timeline & Score Meta */}
                <div className="flex flex-col gap-2 shrink-0 md:text-right font-mono text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 md:justify-end">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:justify-end">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.score && (
                    <div className="inline-flex items-center gap-1.5 md:justify-end mt-4 p-2 bg-secondary/15 border border-secondary/20 rounded-lg text-secondary-light font-semibold text-xs w-fit md:ml-auto">
                      <Award className="h-4 w-4" />
                      <span>{edu.score}</span>
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
export default Education
