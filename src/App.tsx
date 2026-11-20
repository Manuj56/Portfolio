import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/layout/CustomCursor'
import ScrollToTop from './components/ui/ScrollToTop'
import Loader from './components/ui/Loader'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import AIChatbot from './components/ui/AIChatbot'

// Static imports to prevent loading spinner flashing
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Achievements from './components/sections/Achievements'
import Education from './components/sections/Education'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Premium Loader Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Spotlight cursor logic */}
          <CustomCursor />

          {/* Nav Header */}
          <Navbar />

          {/* Main sections layout */}
          <main className="relative min-h-screen">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <Education />
            <Certificates />
            <Contact />
          </main>

          {/* Footer credentials */}
          <Footer />

          {/* Scroll back trigger button */}
          <ScrollToTop />

          {/* AI Chatbot Virtual Assistant */}
          <AIChatbot />
        </>
      )}
    </>
  )
}

export default App
