'use client'

import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const loadingTexts = [
    'INITIALIZING',
    'LOADING PORTFOLIO',
    'PREPARING EXPERIENCE',
    'READY'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsExiting(true)
          setTimeout(() => {
            onComplete()
          }, 1000)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        if (prev < loadingTexts.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 800)

    return () => clearInterval(textInterval)
  }, [loadingTexts.length])

  return (
    <div className={`fixed inset-0 z-50 bg-neutral-50 flex items-center justify-center transition-all duration-1000 ${
      isExiting ? 'opacity-0 scale-105' : 'opacity-100'
    }`}>
      
      {/* Background Grid */}
      <div className="absolute inset-0 grid-lines opacity-20"></div>
      
      <div className="text-center space-y-12">
        
        {/* Main Logo/Name */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-thin japanese-heading tracking-tight">
            NATEETORN
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-neutral-900"></div>
            <span className="text-xs font-light tracking-[0.3em] japanese-heading opacity-60">
              SOFTWARE DEVELOPER
            </span>
            <div className="w-12 h-px bg-neutral-900"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="h-8">
          <p className="text-sm font-light tracking-widest opacity-80 transition-all duration-500">
            {loadingTexts[currentText]}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full h-px bg-neutral-300 overflow-hidden">
            <div 
              className="h-full bg-neutral-900 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-3 text-xs font-light opacity-60">
            <span>00</span>
            <span>{progress.toString().padStart(2, '0')}</span>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-neutral-900 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 border border-neutral-900 opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-8 bg-neutral-900 opacity-10"></div>
      </div>
    </div>
  )
}

export default LoadingScreen
