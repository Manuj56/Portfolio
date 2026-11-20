import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const Navbar: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      // Background effect trigger
      setIsScrolled(window.scrollY > 20)

      // Scroll spy logic
      const sections = navLinks.map((link) => link.href.substring(1))
      let currentSection = 'home'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the section top is near the top of viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section
            break
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    // Run once initially
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const targetElement = document.getElementById(href.substring(1))
    if (targetElement) {
      const offset = 80 // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = targetElement.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/70 border-b border-white/5 backdrop-blur-md py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group relative flex items-center justify-center font-display text-2xl font-bold tracking-tight text-white focus:outline-none"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-light">
            {personalInfo.avatarPlaceholder}
          </span>
          <span className="absolute -inset-x-3 -inset-y-1 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/5 group-focus-visible:ring-2 group-focus-visible:ring-primary" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.02] p-1.5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/[0.06] rounded-full border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex lg:hidden items-center justify-center p-2 rounded-full border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-b border-white/5 bg-background/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-base font-semibold transition-all duration-300 pl-2 border-l-2 focus:outline-none ${
                      isActive
                        ? 'text-primary-light border-primary'
                        : 'text-slate-400 border-transparent hover:text-white hover:border-slate-600'
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              )}
              <hr className="border-white/5 my-2" />
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent-light origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.header>
  )
}
export default Navbar
