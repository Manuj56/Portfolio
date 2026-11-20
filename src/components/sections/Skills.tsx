import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Terminal,
  FileCode,
  Cpu,
  Layers,
  Server,
  Globe,
  Zap,
  Layout,
  Code,
  Palette,
  Sparkles,
  Database,
  Table,
  HardDrive,
  GitBranch,
  Send,
  Flame,
  Cloud,
  Workflow,
  Box,
  FolderOpen,
  Binary,
} from 'lucide-react'
import { skillCategories } from '../../data/portfolioData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlassCard } from '../ui/GlassCard'
import { GradientText } from '../ui/GradientText'
import { fadeIn } from '../../lib/motion'

// Map string icon names to Lucide icon components
const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Terminal,
  FileCode,
  Cpu,
  Layers,
  Server,
  Globe,
  Zap,
  Layout,
  Code,
  Palette,
  Sparkles,
  Database,
  Table,
  HardDrive,
  GitBranch,
  Send,
  Flame,
  Cloud,
  Workflow,
  Box,
  FolderOpen,
  Binary,
}

export const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" className="relative">
      {/* Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
          02 // Skillset
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
          Technical <GradientText variant="primary">Competencies</GradientText>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
          A collection of languages, frameworks, systems, and tools I use to build scalable products and intelligent services.
        </p>
      </div>

      {/* Grid of skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.name}
            variants={fadeIn('up', 'spring', catIndex * 0.1, 1)}
          >
            <GlassCard
              hoverTilt={true}
              hoverGlow={true}
              className="p-6 h-full border-white/[0.04] bg-white/[0.01]"
            >
              <h3 className="text-lg font-display font-bold text-white mb-6 border-b border-white/5 pb-2 text-left">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const Icon = iconComponents[skill.iconName] || Code2
                  return (
                    <div key={skill.name} className="flex flex-col space-y-1.5 text-left">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="text-slate-400 group-hover:text-primary transition-colors">
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                        </div>
                        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
export default Skills
