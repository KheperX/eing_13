'use client'

import { useState, useEffect } from 'react'
import { useIsClient, useLocalStorage } from '@/hooks/useClient'
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
  const isClient = useIsClient()
  const [hasVisited, setHasVisited] = useLocalStorage('nateetorn-portfolio-visited')

  // Check if user has visited before
  useEffect(() => {
    if (isClient && hasVisited) {
      setLoadingComplete(true)
      setIntroComplete(true)
      setShowContent(true)
    }
  }, [isClient, hasVisited])

  const handleLoadingComplete = () => {
    setLoadingComplete(true)
  }

  const handleIntroComplete = () => {
    setIntroComplete(true)
    setHasVisited('true')
    
    // Reveal content with delay
    setTimeout(() => {
      setShowContent(true)
    }, 300)
  }

  const handleSkipIntro = () => {
    setLoadingComplete(true)
    setIntroComplete(true)
    setShowContent(true)
    setHasVisited('true')
  }

  // Show loading state until client-side
  if (!isClient) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="animate-pulse text-neutral-400">Loading...</div>
      </div>
    )
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
          onClick={handleSkipIntro}
          className="fixed bottom-8 right-8 z-50 text-xs font-light tracking-widest opacity-60 hover:opacity-100 transition-opacity bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-200"
        >
          SKIP INTRO
        </button>
      )}
    </div>
  )
}
