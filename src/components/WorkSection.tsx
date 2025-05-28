'use client'

import { useEffect, useRef, useState } from 'react'

const WorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full-Stack',
      year: '2024',
      description: 'Modern e-commerce solution with microservices architecture',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
      image: '01'
    },
    {
      id: 2,
      title: 'Financial Dashboard',
      category: 'Frontend',
      year: '2024',
      description: 'Real-time trading dashboard with advanced analytics',
      tech: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
      image: '02'
    },
    {
      id: 3,
      title: 'API Gateway',
      category: 'Backend',
      year: '2023',
      description: 'Scalable API gateway with automated deployment',
      tech: ['Node.js', 'Express', 'Redis', 'Kubernetes'],
      image: '03'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      category: 'Mobile',
      year: '2023',
      description: 'Secure banking application with biometric authentication',
      tech: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
      image: '04'
    }
  ]

  return (
    <section id="work" className="section-large bg-neutral-50 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="reveal mb-16">
          <span className="text-sm font-light tracking-[0.3em] japanese-heading opacity-60">
            02 / SELECTED WORK
          </span>
        </div>

        <div className="reveal mb-24">
          <h2 className="text-4xl md:text-6xl font-thin japanese-heading tracking-tight">
            Recent Projects
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-2 reveal">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${
                activeProject === index ? 'bg-white' : 'hover:bg-white/50'
              }`}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  
                  {/* Project Number */}
                  <div className="md:col-span-1">
                    <span className="text-6xl font-thin japanese-heading opacity-30 group-hover:opacity-60 transition-opacity">
                      {project.image}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl md:text-3xl font-light japanese-heading group-hover:translate-x-2 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <span className="text-xs font-light tracking-widest bg-neutral-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-neutral-600 font-light leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-light border border-neutral-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Year & Actions */}
                  <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-8">
                    <span className="text-neutral-500 font-light tracking-wider">
                      {project.year}
                    </span>
                    <div className="flex items-center gap-4">
                      <button className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover-scale group-hover:border-neutral-900 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </button>
                      <button className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover-scale group-hover:border-neutral-900 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 reveal">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { number: '100+', label: 'Commits this year', sublabel: 'Active development' },
              { number: '95%', label: 'Code coverage', sublabel: 'Quality assurance' },
              { number: '< 50ms', label: 'Response time', sublabel: 'Performance focus' },
              { number: '0', label: 'Critical bugs', sublabel: 'Reliability first' }
            ].map((stat, index) => (
              <div key={index} className="space-y-3">
                <div className="text-4xl font-thin japanese-heading">{stat.number}</div>
                <div className="text-sm font-light tracking-wide">{stat.label}</div>
                <div className="text-xs font-light opacity-60">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center reveal">
          <div className="space-y-8">
            <p className="text-lg font-light opacity-80">
              Interested in seeing more detailed case studies?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-minimal px-12 py-4 bg-transparent text-neutral-900">
                VIEW ALL PROJECTS
              </button>
              <button className="btn-minimal px-12 py-4 bg-transparent text-neutral-900">
                GITHUB PROFILE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkSection
