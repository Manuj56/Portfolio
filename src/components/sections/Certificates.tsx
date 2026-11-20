import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar, KeyRound } from 'lucide-react'
import { certificates } from '../../data/portfolioData'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlassCard } from '../ui/GlassCard'
import { GradientText } from '../ui/GradientText'
import { fadeIn } from '../../lib/motion'

export const Certificates: React.FC = () => {
  return (
    <SectionWrapper id="certificates" className="relative">
      {/* Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
          07 // Credentials
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
          Licensing & <GradientText variant="primary">Certifications</GradientText>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
          Completed professional examinations, specializations, and industry credentials.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            variants={fadeIn('up', 'spring', index * 0.1, 1)}
            className="h-full"
          >
            <GlassCard
              hoverTilt={true}
              hoverGlow={true}
              className="p-6 flex flex-col justify-between h-full border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03]"
            >
              <div className="space-y-4 text-left">
                {/* Header Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 border border-secondary/20">
                  <Award className="h-5 w-5 text-secondary-light" />
                </div>

                {/* Name */}
                <h3 className="text-base font-display font-bold text-white tracking-wide">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <h4 className="text-sm font-semibold text-slate-300">
                  {cert.issuer}
                </h4>

                {/* Date & ID Metadata */}
                <div className="flex flex-col gap-2 font-mono text-xs text-slate-500 pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-2">
                      <KeyRound className="h-3.5 w-3.5" />
                      <span>ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Verify Link */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-primary-light hover:text-white transition-colors duration-300"
                >
                  Verify Credential
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
export default Certificates
