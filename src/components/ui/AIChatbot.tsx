import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User, Sparkles, HelpCircle } from 'lucide-react'
import { personalInfo, skillCategories, projects, experiences, educationList } from '../../data/portfolioData'

interface Message {
  sender: 'ai' | 'user'
  text: string
  timestamp: Date
}

const QUICK_PROMPTS = [
  "Tell me about your projects",
  "What are your technical skills?",
  "Tell me about your education",
  "How can I contact you?"
]

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: `Hi! I am Manuj's AI Assistant. Ask me anything about his skills, projects, education, or training!`,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100)
    }
  }, [messages, isOpen, isTyping])

  const getAIResponse = (query: string): string => {
    const q = query.toLowerCase().trim()

    // 1. GREETINGS
    if (q.match(/\b(hi|hello|hey|greetings|hola)\b/)) {
      return "Hello! How can I help you today? You can ask me about Manuj's programming skills, projects, certifications, or educational background."
    }

    // 2. PROJECTS
    if (q.includes('project') || q.includes('work') || q.includes('build') || q.includes('develop')) {
      const projectList = projects.map(p => `- **${p.title}** (${p.tech.join(', ')}): ${p.description}`).join('\n\n')
      return `Manuj has built several production-grade projects. Here are the key ones:\n\n${projectList}\n\nWould you like more details on any of these?`
    }

    // 3. SKILLS
    if (q.includes('skill') || q.includes('tech') || q.includes('language') || q.includes('java') || q.includes('python') || q.includes('react') || q.includes('node') || q.includes('database')) {
      const skillsSummary = skillCategories.map(cat => `* **${cat.name}**: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')
      return `Here are Manuj's technical competencies across categories:\n\n${skillsSummary}\n\nHe specializes in building scalable backend systems and integrating AI APIs like Gemini.`
    }

    // 4. EDUCATION
    if (q.includes('education') || q.includes('study') || q.includes('college') || q.includes('university') || q.includes('gla') || q.includes('school')) {
      const primaryEdu = educationList[0]
      return `Manuj is currently pursuing a **${primaryEdu.degree}** at **${primaryEdu.institution}** (${primaryEdu.location}).\n\n- **Period**: ${primaryEdu.period}\n- **Grade**: ${primaryEdu.score}\n- **Coursework**: Data Structures, OOPs, DBMS, Operating Systems.`
    }

    // 5. EXPERIENCE & TRAINING
    if (q.includes('experience') || q.includes('intern') || q.includes('training') || q.includes('job') || q.includes('coding blocks')) {
      const exp = experiences[0]
      return `Manuj recently completed an **Industrial Training in Full Stack Web Development** from **${exp.company}** (June - July 2025).\n\nHe gained hands-on experience in MERN stack deployment, database management, and built a **Smart Bus Booking System** as his capstone project.`
    }

    // 6. CONTACT & EMAIL
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('linkedin') || q.includes('github')) {
      return `You can reach out to Manuj directly using the following channels:\n\n- 📧 **Email**: ${personalInfo.email}\n- 💼 **LinkedIn**: [LinkedIn](${personalInfo.linkedin})\n- 💻 **GitHub**: [GitHub](${personalInfo.github})\n- 📞 **Phone**: 7355090463\n\nOr feel free to send a message via the Contact Form at the bottom of the page!`
    }

    // 7. LEETCODE
    if (q.includes('leetcode') || q.includes('dsa') || q.includes('problem') || q.includes('code')) {
      return `Manuj is active on LeetCode under the handle **manuj56**. He has solved **250+ Data Structures & Algorithms (DSA) problems** using Java to sharpen his algorithmic reasoning.`
    }

    // 8. RESUME
    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return `You can download his official resume PDF using the 'Download Resume' button at the top header or in the Hero section, or directly [here](${personalInfo.resumeUrl}).`
    }

    // 9. IDENTITY / WHO ARE YOU
    if (q.includes('who are you') || q.includes('your name') || q.includes('what are you')) {
      return `I am an AI Assistant created to showcase Manuj's portfolio. Ask me anything about his profile, and I will extract the details from his official records!`
    }

    // 10. DEFAULT
    return "I'm not sure I fully understand that query. Could you ask about his projects, technical skills, university education, or contact details? Alternatively, select one of the quick prompts above."
  }

  const handleSend = (text: string) => {
    if (!text.trim()) return

    const newUserMessage: Message = {
      sender: 'user',
      text,
      timestamp: new Date()
    }

    setMessages((prev) => [...prev, newUserMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking delay
    setTimeout(() => {
      const responseText = getAIResponse(text)
      const newAIMessage: Message = {
        sender: 'ai',
        text: responseText,
        timestamp: new Date()
      }
      setMessages((prev) => [...prev, newAIMessage])
      setIsTyping(false)
    }, 850)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat bubble button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background relative"
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white border border-background animate-pulse">
                !
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="absolute bottom-16 right-0 w-[90vw] sm:w-[380px] h-[500px] rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                    Manuj's Assistant
                    <Sparkles className="h-3 w-3 text-accent-light animate-pulse" />
                  </h3>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Online & Ready
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2.5 max-w-[85%] ${
                    msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                  }`}
                >
                  <div
                    className={`flex h-7.5 w-7.5 shrink-0 select-none items-center justify-center rounded-lg text-xs ${
                      msg.sender === 'user'
                        ? 'bg-primary/20 text-primary-light border border-primary/30'
                        : 'bg-secondary/20 text-secondary-light border border-secondary/30'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-xs text-left leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white font-medium rounded-tr-none'
                        : 'bg-white/[0.03] border border-white/5 text-slate-300 rounded-tl-none markdown-chat'
                    }`}
                  >
                    {/* Render basic custom markdown bullet points and bolding */}
                    {msg.text.split('\n').map((line, lIdx) => {
                      let processed = line;
                      // Replace markdown bold
                      processed = processed.replace(/\*\*(.*?)\*\*/g, '$1');
                      // Check for bullet lists
                      const isBullet = processed.startsWith('* ') || processed.startsWith('- ');
                      const content = isBullet ? processed.substring(2) : processed;

                      return (
                        <p key={lIdx} className={`${isBullet ? 'pl-3 relative before:absolute before:left-0 before:top-1.5 before:h-1 before:w-1 before:bg-primary-light before:rounded-full' : ''} ${lIdx > 0 ? 'mt-1.5' : ''}`}>
                          {content}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 mr-auto max-w-[85%]">
                  <div className="flex h-7.5 w-7.5 items-center justify-center rounded-lg bg-secondary/20 border border-secondary/30 text-secondary-light">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-white/[0.03] border border-white/5 px-4 py-2.5 flex items-center justify-center gap-1 h-8">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Panel */}
            <div className="px-4 pb-2 pt-1 border-t border-white/5 bg-slate-950">
              <span className="text-[10px] text-slate-500 font-semibold flex items-center gap-1.5 mb-1.5 text-left">
                <HelpCircle className="h-3 w-3 text-primary-light" />
                Suggested Questions:
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-[72px] overflow-y-auto">
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    className="text-[10px] text-slate-400 hover:text-white bg-white/[0.02] border border-white/5 rounded-lg px-2.5 py-1 text-left transition-colors hover:bg-white/5 focus:outline-none"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend(input)
              }}
              className="p-3 border-t border-white/5 bg-slate-950 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-grow bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-md disabled:opacity-40 disabled:pointer-events-none hover:scale-105 active:scale-95 transition-transform"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default AIChatbot
