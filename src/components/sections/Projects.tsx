import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, GraduationCap, MessageSquareText, HeartPulse } from 'lucide-react'
import { projects } from '../../data/portfolioData'
import { GithubIcon } from '../ui/BrandIcons'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GradientText } from '../ui/GradientText'
import { fadeIn } from '../../lib/motion'

import lmsImg from '../../assets/lms_project.jpg'
import ragImg from '../../assets/rag_project.jpg'
import diagnoImg from '../../assets/diagno_project.jpg'

const projectImages: Record<string, string> = {
  'ai-lms': lmsImg,
  'rag-ta': ragImg,
  'disease-prediction': diagnoImg,
}

type FilterTag = 'All' | 'Full-Stack' | 'AI / LLM' | 'Python'

const filterTags: FilterTag[] = ['All', 'Full-Stack', 'AI / LLM', 'Python']

// Map project to its filter tags
const projectTagsMap: Record<string, FilterTag[]> = {
  'ai-lms': ['Full-Stack', 'AI / LLM'],
  'rag-ta': ['AI / LLM', 'Python'],
  'disease-prediction': ['Python', 'Full-Stack'],
}

// Icon component for each project visual header
const projectIcons: Record<string, React.ReactNode> = {
  'ai-lms': <GraduationCap className="h-10 w-10" />,
  'rag-ta': <MessageSquareText className="h-10 w-10" />,
  'disease-prediction': <HeartPulse className="h-10 w-10" />,
}

interface ProjectStyle {
  accentColor: string
  borderColor: string
  hoverBorder: string
  iconColor: string
}

const projectStylesMap: Record<string, ProjectStyle> = {
  'ai-lms': {
    accentColor: '#3B82F6',
    borderColor: 'border-blue-500/10',
    hoverBorder: 'hover:border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  'rag-ta': {
    accentColor: '#A855F7',
    borderColor: 'border-purple-500/10',
    hoverBorder: 'hover:border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  'disease-prediction': {
    accentColor: '#14B8A6',
    borderColor: 'border-teal-500/10',
    hoverBorder: 'hover:border-teal-500/30',
    iconColor: 'text-teal-400',
  }
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTag>('All')

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true
    return projectTagsMap[project.id]?.includes(activeFilter)
  })

  return (
    <SectionWrapper id="projects" className="relative">
      {/* Header */}
      <div className="text-left mb-12">
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
          03 // Portfolio
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
          Selected <GradientText variant="primary">Projects</GradientText>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
          A showcase of full-stack systems, machine learning utilities, and production-ready applications built to solve real-world problems.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12 justify-start">
        {filterTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary ${
              activeFilter === tag
                ? 'text-white shadow-md'
                : 'text-slate-400 hover:text-white bg-white/[0.01] border border-white/5 hover:bg-white/5'
            }`}
          >
            {activeFilter === tag && (
              <motion.span
                layoutId="activeFilterBg"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary -z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            {tag}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const styles = projectStylesMap[project.id] || projectStylesMap['ai-lms']
            const projectImgSrc = projectImages[project.id] || project.image

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                variants={fadeIn('up', 'spring', index * 0.1, 1)}
                className="h-full"
              >
                <div
                  className={`flex flex-col h-full border rounded-2xl bg-card/40 backdrop-blur-md transition-all duration-300 ${styles.borderColor} ${styles.hoverBorder} hover:shadow-[0_0_20px_rgba(255,255,255,0.015)]`}
                >
                  {/* Visual Header / Image Placeholder with Ambient Glow */}
                  <div className="relative h-48 w-full bg-slate-950/80 overflow-hidden flex items-center justify-center border-b border-white/5 group rounded-t-2xl">
                    {projectImgSrc ? (
                      /* Render real project screenshot if provided */
                      <img
                        src={projectImgSrc}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Fallback abstract icon/illustration placeholder */
                      <>
                        {/* Ambient Accent Radial Glow */}
                        <div
                          className="absolute inset-0 opacity-45 mix-blend-screen transition-opacity duration-500 group-hover:opacity-65"
                          style={{
                            background: `radial-gradient(circle at center, ${styles.accentColor}26 0%, transparent 65%)`
                          }}
                        />

                        {/* Subtle grid pattern background */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                        {/* Central Icon Container with drop shadow */}
                        <div className="relative z-10 transition-transform duration-500 group-hover:scale-105 p-3 rounded-full bg-white/[0.01] border border-white/5 shadow-inner">
                          <div className={`${styles.iconColor} filter drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]`}>
                            {projectIcons[project.id]}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Mock browser dots */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 opacity-40 group-hover:opacity-75 transition-opacity z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    </div>

                    {/* Fake config tag */}
                    <div className="absolute top-4 right-4 font-mono text-[8px] text-slate-700 select-none uppercase tracking-wider z-10">
                      {project.id}.config
                    </div>

                    {/* Sub text label */}
                    <div className="absolute bottom-3 left-4 text-[8px] font-mono tracking-widest text-slate-600 uppercase select-none opacity-50 group-hover:opacity-70 transition-opacity z-10">
                      Interactive Showcase
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col flex-grow text-left space-y-4 justify-between">
                    <div className="space-y-4">
                      {/* Technology Badges with fixed min-height for row alignment */}
                      <div className="flex flex-wrap gap-1.5 min-h-[52px] items-start content-start">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-semibold bg-white/[0.02] border border-white/5 rounded-full px-2.5 py-0.5 text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-display font-bold text-white tracking-wide">
                        {project.title}
                      </h3>

                      {/* Description with fixed height limit */}
                      <p className="text-[13px] text-slate-400 leading-relaxed min-h-[54px] line-clamp-3">
                        {project.description}
                      </p>

                      {/* Features Bullet List with fixed height for card alignment */}
                      <ul className="space-y-2.5 pt-2 min-h-[106px]">
                        {project.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                            <span
                              className="h-1.5 w-1.5 rounded-full shrink-0 mt-1.5"
                              style={{ backgroundColor: styles.accentColor }}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] py-2.5 text-[13px] font-semibold text-slate-300 hover:text-white hover:bg-white/5 hover:border-white/10 transition-all duration-300"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Code
                      </a>
                      {project.liveDemo && project.liveDemo !== '#' ? (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:brightness-110"
                          style={{
                            background: `linear-gradient(to right, ${styles.accentColor} 85%, ${styles.accentColor}cc)`
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      ) : (
                        <button
                          disabled
                          className="flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-[13px] font-semibold text-slate-500 bg-white/[0.02] border border-white/5 cursor-not-allowed opacity-50"
                        >
                          <ExternalLink className="h-4 w-4 text-slate-600" />
                          Demo Soon
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  )
}
export default Projects
