"use client";

import { useEffect, useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="section-large relative text-white"
      style={{ backgroundColor: "#314343" }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Number */}
        <div className="reveal mb-16">
          <span className="text-sm font-light tracking-[0.3em] japanese-heading opacity-60">
            01 / ABOUT
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="reveal">
              <h2 className="text-4xl md:text-6xl font-thin mb-12 japanese-heading tracking-tight">
                Philosophy
              </h2>
              <div className="space-y-8 text-lg font-light leading-loose">
                <p>
                  I believe in the power of simplicity. Every line of code
                  should serve a purpose, every interface should feel intuitive,
                  and every solution should be elegant.
                </p>
                <p>
                  My approach combines technical precision with creative
                  thinking, resulting in software that not only works flawlessly
                  but also brings joy to those who use it.
                </p>
              </div>
            </div>

            <div className="reveal">
              <h3 className="text-2xl font-light mb-8 japanese-heading">
                Expertise
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {[
                  "Full-Stack Development",
                  "System Architecture",
                  "API Design",
                  "Database Management",
                  "DevOps & Deployment",
                  "Security Testing",
                  "Project Management",
                  "Version Control",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-sm font-light tracking-wide">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Detailed Skills */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-lg font-light mb-4 japanese-heading">
                  Technical Skills
                </h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-light tracking-widest opacity-60">
                      DEVELOPMENT
                    </span>
                    <p className="text-sm font-light mt-1">
                      JavaScript, TypeScript, Python, React, Next.js, Node.js
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-light tracking-widest opacity-60">
                      DATABASE
                    </span>
                    <p className="text-sm font-light mt-1">
                      MySQL, PostgreSQL, MongoDB, HeidiSQL
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-light tracking-widest opacity-60">
                      DEVOPS & TOOLS
                    </span>
                    <p className="text-sm font-light mt-1">
                      Docker, Git, GitHub, CI/CD, Cloud Deployment
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-light tracking-widest opacity-60">
                      SECURITY & TESTING
                    </span>
                    <p className="text-sm font-light mt-1">
                      Burp Suite, Penetration Testing, Security Auditing
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-light tracking-widest opacity-60">
                      PROJECT MANAGEMENT
                    </span>
                    <p className="text-sm font-light mt-1">
                      ClickUp, Agile, Scrum, Team Collaboration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="reveal">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white p-12 rounded-lg text-black shadow-lg">
                <div className="space-y-8">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { number: "3+", label: "Years" },
                      { number: "30+", label: "Projects" },
                      { number: "100%", label: "Satisfaction" },
                      { number: "24/7", label: "Availability" },
                    ].map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-thin japanese-heading mb-2">
                          {stat.number}
                        </div>
                        <div className="text-xs font-light tracking-widest opacity-60">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Visual */}
                  <div className="pt-8 border-t border-black/10">
                    <div className="text-center mb-6">
                      <span className="text-xs font-light tracking-widest opacity-60">
                        TECH STACK
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                      {["JS", "TS", "React", "Node", "Python", "SQL"].map(
                        (tech, index) => (
                          <div
                            key={index}
                            className="w-12 h-12 border border-black/20 rounded-full flex items-center justify-center text-xs font-light hover-scale"
                          >
                            {tech}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Tools & Software */}
                  <div className="pt-8 border-t border-black/10">
                    <div className="text-center mb-6">
                      <span className="text-xs font-light tracking-widest opacity-60">
                        TOOLS & SOFTWARE
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { name: "Git", icon: "🌿" },
                        { name: "Docker", icon: "🐳" },
                        { name: "ClickUp", icon: "📋" },
                        { name: "Burp Suite", icon: "🔒" },
                        { name: "Claude Code", icon: "🤖" },
                        { name: "VS Code", icon: "💻" },
                      ].map((tool, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center p-3 border border-black/20 rounded-lg hover-scale group"
                        >
                          <span className="text-lg mb-1 group-hover:scale-110 transition-transform duration-300">
                            {tool.icon}
                          </span>
                          <span className="text-xs font-light text-center">
                            {tool.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border border-black/20 rounded-full bg-white shadow-md"></div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-24 text-center reveal">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-thin leading-relaxed japanese-heading">
              "The best code is not just functional, but beautiful."
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-white"></div>
              <span className="text-xs font-light tracking-widest">
                PERSONAL MOTTO
              </span>
              <div className="w-8 h-px bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
