import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import confetti from 'canvas-confetti'
import { personalInfo } from '../../data/portfolioData'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../ui/BrandIcons'
import { SectionWrapper } from '../ui/SectionWrapper'
import { GlassCard } from '../ui/GlassCard'
import { GradientText } from '../ui/GradientText'
import { MagneticButton } from '../ui/MagneticButton'
import { fadeIn } from '../../lib/motion'

// CONFIGURATION: Set up your Formspree Form ID here
// Register for a free account at https://formspree.io/ to create a form and obtain your ID.
const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_FORM_ID"

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = (): boolean => {
    const tempErrors: FormErrors = {}
    if (!form.name.trim()) tempErrors.name = 'Name is required'
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Please provide a valid email'
    }
    if (!form.subject.trim()) tempErrors.subject = 'Subject is required'
    if (!form.message.trim()) {
      tempErrors.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error for field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        
        // Fire premium confetti explosion
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#3B82F6', '#8B5CF6', '#2DD4BF'],
        })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactDetails = [
    {
      icon: <Mail className="h-5 w-5 text-primary-light" />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      id: 'contact-email',
    },
    {
      icon: <LinkedinIcon className="h-5 w-5 text-secondary-light" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedin,
      id: 'contact-linkedin',
    },
    {
      icon: <GithubIcon className="h-5 w-5 text-accent-light" />,
      label: 'GitHub',
      value: 'View my repositories',
      href: personalInfo.github,
      id: 'contact-github',
    },
    {
      icon: <LeetcodeIcon className="h-5 w-5 text-amber-500" />,
      label: 'LeetCode',
      value: 'Solve problems with me',
      href: personalInfo.leetcode,
      id: 'contact-leetcode',
    },
    {
      icon: <MapPin className="h-5 w-5 text-slate-400" />,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      id: 'contact-location',
    },
  ]

  return (
    <SectionWrapper id="contact" className="relative">
      {/* Header */}
      <div className="text-left mb-16">
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
          08 // Connection
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
          Get In <GradientText variant="primary">Touch</GradientText>
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
          Have an opportunity, an interesting project to discuss, or just want to connect? Drop a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Contact details */}
        <div className="lg:col-span-5 space-y-6 text-left">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.label}
              variants={fadeIn('right', 'spring', index * 0.1, 1)}
            >
              <a
                id={detail.id}
                href={detail.href}
                target={detail.href !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="block group"
              >
                <GlassCard className="p-5 flex items-center gap-4 border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {detail.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500 uppercase">
                      {detail.label}
                    </span>
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-300">
                      {detail.value}
                    </span>
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Contact Form */}
        <motion.div
          variants={fadeIn('left', 'spring', 0.2, 1.2)}
          className="lg:col-span-7 w-full"
        >
          <GlassCard className="p-8 border-white/[0.04] bg-white/[0.01] text-left">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`rounded-xl border bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name
                        ? 'border-red-500/50 focus:ring-red-500/30'
                        : 'border-white/5 focus:border-primary/50 focus:ring-primary/20'
                    }`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-400 font-medium flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="contact-email-input" className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email-input"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`rounded-xl border bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email
                        ? 'border-red-500/50 focus:ring-red-500/30'
                        : 'border-white/5 focus:border-primary/50 focus:ring-primary/20'
                    }`}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 font-medium flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="contact-subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`rounded-xl border bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.subject
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-white/5 focus:border-primary/50 focus:ring-primary/20'
                  }`}
                  placeholder="Inquiry / Partnership / Hello"
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <span className="text-xs text-red-400 font-medium flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Message Content
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`rounded-xl border bg-slate-950/40 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    errors.message
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-white/5 focus:border-primary/50 focus:ring-primary/20'
                  }`}
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <span className="text-xs text-red-400 font-medium flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Alert Status Banners */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-400 text-sm font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>Thank you! Your message was sent successfully. (Confetti fired!)</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-red-400 text-sm font-medium"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>Oops, something went wrong. Please check your network and try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="pt-2 text-right">
                <MagneticButton
                  id="contact-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 disabled:opacity-50 disabled:pointer-events-none">
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </span>
                </MagneticButton>
              </div>
            </form>
          </GlassCard>
        </motion.div>

      </div>
    </SectionWrapper>
  )
}
export default Contact
