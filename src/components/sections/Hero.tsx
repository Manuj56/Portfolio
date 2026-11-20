import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/BrandIcons'
import { personalInfo } from '../../data/portfolioData'
import { GradientText } from '../ui/GradientText'
import { MagneticButton } from '../ui/MagneticButton'
import { fadeIn, staggerContainer } from '../../lib/motion'
import profileImg from '../../assets/profile.jpg'

const roles = [
  'Java Developer',
  'MERN Stack Developer',
  'Backend Engineer',
  'AI Developer',
  'Open Source Learner',
]

// Floating particles setup
const particles = [
  { text: '</>', x: '10%', y: '20%', size: 'text-2xl', delay: 0 },
  { text: '{ }', x: '80%', y: '15%', size: 'text-3xl', delay: 1.5 },
  { text: '=>', x: '75%', y: '75%', size: 'text-xl', delay: 3 },
  { text: '()', x: '15%', y: '80%', size: 'text-2xl', delay: 0.5 },
  { text: '[]', x: '85%', y: '45%', size: 'text-lg', delay: 2.2 },
  { text: 'const', x: '5%', y: '45%', size: 'text-sm font-mono', delay: 1.8 },
]

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentRoleText, setCurrentRoleText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect logic
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const currentFullText = roles[roleIndex]
    const typingSpeed = isDeleting ? 40 : 80

    const handleType = () => {
      if (!isDeleting) {
        // Typing text
        setCurrentRoleText((prev) => currentFullText.substring(0, prev.length + 1))
        if (currentRoleText === currentFullText) {
          // Pause when done typing
          timer = setTimeout(() => setIsDeleting(true), 2000)
          return
        }
      } else {
        // Deleting text
        setCurrentRoleText((prev) => currentFullText.substring(0, prev.length - 1))
        if (currentRoleText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          return
        }
      }

      timer = setTimeout(handleType, typingSpeed)
    }

    timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentRoleText, isDeleting, roleIndex])

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = projectsSection.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Animated Background Mesh */}
      <div className="gradient-mesh absolute inset-0 -z-10" />

      {/* Floating Subtle Code Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            className={`absolute text-slate-700/20 font-bold ${p.size}`}
            style={{ left: p.x, top: p.y }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          >
            {p.text}
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
        
        {/* Left Side: Photo Placeholder with Glow Ring */}
        <motion.div
          variants={fadeIn('right', 'spring', 0.2, 1.2)}
          initial="hidden"
          animate="show"
          className="lg:col-span-5 flex justify-center items-center order-first lg:order-last"
        >
          <div className="relative group">
            {/* Outer Glow Ring 1 */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent-light opacity-50 blur-lg group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />
            
            {/* Outer Glow Ring 2 */}
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 animate-gradient-xy" />

            {/* Inner Circular Frame */}
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full bg-card overflow-hidden border border-white/10 flex items-center justify-center">
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="h-full w-full object-cover object-center relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle theme gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-[#0E0E18]/40 to-secondary/15 z-20 pointer-events-none" />
              {/* Interactive Grid Shimmer */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] z-20 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Right Side: Copy/Text */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col justify-center items-start space-y-6 text-left"
        >
          {/* Welcome Tag */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary-light"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
            Available for Opportunities
          </motion.div>

          {/* Heading */}
          <div className="space-y-2">
            <motion.p
              variants={fadeIn('up', 'tween', 0.2, 0.5)}
              className="text-base font-semibold tracking-wide text-slate-400 font-mono"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              variants={fadeIn('up', 'tween', 0.3, 0.5)}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white leading-none"
            >
              <GradientText variant="primary">Manuj Saxena</GradientText>
            </motion.h1>
          </div>

          {/* Role Cycler */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.4, 0.5)}
            className="flex items-center h-8"
          >
            <span className="text-xl md:text-2xl text-slate-400 font-medium">
              A&nbsp;
            </span>
            <span className="text-xl md:text-2xl font-bold font-mono text-white border-r-2 border-primary-light pr-1 min-w-[20px]">
              {currentRoleText}
            </span>
          </motion.div>

          {/* Subline tag line */}
          <motion.p
            variants={fadeIn('up', 'tween', 0.5, 0.5)}
            className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Actions CTA */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 0.6)}
            className="flex flex-wrap items-center gap-4 pt-4 w-full"
          >
            <MagneticButton onClick={handleScrollToProjects}>
              <span className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition duration-300 hover:scale-105 active:scale-95">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </span>
            </MagneticButton>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 hover:border-white/10 transition duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <FileText className="h-4 w-4" />
              Download Resume
            </a>

            <div className="flex items-center gap-3 ml-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/10 hover:bg-white/5 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/10 hover:bg-white/5 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/10 hover:bg-white/5 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <LeetcodeIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
export default Hero
