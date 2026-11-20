import React from 'react'
import { Mail } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/BrandIcons'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <GithubIcon className="h-5 w-5" />, href: personalInfo.github, label: 'GitHub', id: 'footer-github' },
    { icon: <LinkedinIcon className="h-5 w-5" />, href: personalInfo.linkedin, label: 'LinkedIn', id: 'footer-linkedin' },
    { icon: <LeetcodeIcon className="h-5 w-5" />, href: personalInfo.leetcode, label: 'LeetCode', id: 'footer-leetcode' },
    { icon: <Mail className="h-5 w-5" />, href: `mailto:${personalInfo.email}`, label: 'Email', id: 'footer-email' },
  ]

  return (
    <footer className="relative border-t border-white/5 bg-background py-12 z-20">
      {/* Background Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand/Credits */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Manuj Saxena. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with React, Vite, Tailwind CSS, & Framer Motion
          </p>
        </div>

        {/* Social Icons with Interactive Shines */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              id={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/15 hover:bg-white/5 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
export default Footer
