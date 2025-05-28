'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import IntroAnimation from '@/components/IntroAnimation'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import WorkSection from '@/components/WorkSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)
  const [showContent, setShowContent] = useState(false)

  // Check if user has visited before
  useEffect(() => {
    const hasVisited = localStorage.getItem('eing-portfolio-visited')
    if (hasVisited) {
      setLoadingComplete(true)
      setIntroComplete(true)
      setShowContent(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    setLoadingComplete(true)
  }

  const handleIntroComplete = () => {
    setIntroComplete(true)
    // Mark as visited
    localStorage.setItem('eing-portfolio-visited', 'true')
    
    // Reveal content with delay
    setTimeout(() => {
      setShowContent(true)
    }, 300)
  }

  return (
    <div className="relative">
      
      {/* Loading Screen */}
      {!loadingComplete && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Intro Animation */}
      {loadingComplete && !introComplete && (
        <IntroAnimation onComplete={handleIntroComplete} />
      )}

      {/* Main Content */}
      <div className={`transition-all duration-1000 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}>
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Sections */}
        <main>
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>

      {/* Skip Intro Button (for returning visitors) */}
      {(!loadingComplete || !introComplete) && (
        <button
          onClick={() => {
            setLoadingComplete(true)
            setIntroComplete(true)
            setShowContent(true)
            localStorage.setItem('eing-portfolio-visited', 'true')
          }}
          className="fixed bottom-8 right-8 z-50 text-xs font-light tracking-widest opacity-60 hover:opacity-100 transition-opacity bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-200"
        >
          SKIP INTRO
        </button>
      )}
    </div>
  )
}
