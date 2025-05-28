'use client'

import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['CODE', 'CREATE', 'CRAFT']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 grid-lines opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        
        {/* Main Heading */}
        <div className="mb-16">
          <h1 className="large-heading japanese-heading mb-8 tracking-tight">
            EING
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-neutral-900"></div>
            <span className="text-sm font-light tracking-[0.3em] japanese-heading">
              SOFTWARE DEVELOPER
            </span>
            <div className="w-16 h-px bg-neutral-900"></div>
          </div>
        </div>

        {/* Animated Word */}
        <div className="mb-24">
          <div className="text-6xl md:text-8xl font-thin tracking-wider japanese-heading opacity-60">
            {words[currentWord]}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="btn-minimal px-12 py-4 bg-transparent text-neutral-900 relative z-10">
            VIEW PROJECTS
          </button>
          <button className="btn-minimal px-12 py-4 bg-transparent text-neutral-900 relative z-10">
            DOWNLOAD CV
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-xs font-light tracking-widest mb-4 japanese-heading">SCROLL</div>
        <div className="w-px h-12 bg-gradient-to-b from-neutral-900 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-12 w-2 h-2 bg-neutral-900 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 right-12 w-1 h-12 bg-neutral-900 opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 border border-neutral-900 opacity-30"></div>
    </section>
  )
}

export default HeroSection
