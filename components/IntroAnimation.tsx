'use client'

import { useEffect, useState } from 'react'

interface IntroAnimationProps {
  onComplete: () => void
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 500),   // Show name
      setTimeout(() => setStep(2), 1500),  // Show subtitle
      setTimeout(() => setStep(3), 2500),  // Show enter text
      setTimeout(() => setStep(4), 3500),  // Start exit
      setTimeout(() => onComplete(), 4500) // Complete
    ]

    return () => timeouts.forEach(clearTimeout)
  }, [onComplete])

  return (
    <div className={`fixed inset-0 z-40 bg-white transition-all duration-1000 ${
      step >= 4 ? 'opacity-0 scale-95' : 'opacity-100'
    }`}>
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="grid-lines opacity-10"></div>
        <div className="absolute top-1/4 left-12 w-2 h-2 bg-neutral-900 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 right-16 w-1 h-16 bg-neutral-900 opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 border border-neutral-900 opacity-15"></div>
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 max-w-4xl mx-auto px-8">
          
          {/* Main Name */}
          <div className={`transition-all duration-1000 ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-7xl md:text-9xl font-thin japanese-heading tracking-tight">
              NATEETORN
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-300 ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-px bg-neutral-900"></div>
              <span className="text-sm font-light tracking-[0.3em] japanese-heading">
                SOFTWARE DEVELOPER
              </span>
              <div className="w-16 h-px bg-neutral-900"></div>
            </div>
          </div>

          {/* Enter Portfolio */}
          <div className={`transition-all duration-1000 delay-700 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col items-center mt-16">
              <span className="text-xs font-light tracking-widest opacity-60 mb-4">
                ENTER PORTFOLIO
              </span>
              <div className="w-px h-12 bg-gradient-to-b from-neutral-900 to-transparent opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroAnimation
