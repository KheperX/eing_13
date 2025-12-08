"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    longDescription: string;
    tech: string[];
    image: string;
    problemStatement: string;
    solution: string[];
    features: string[];
    challenges: { problem: string; solution: string }[];
    results: { metric: string; value: string; description: string }[];
    timeline: string;
    teamSize: string;
    role: string;
    githubUrl?: string;
    liveUrl?: string;
    images: string[];
  };
  onBack: () => void;
}

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false); // เพิ่ม scroll detection

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="min-h-screen bg-white" ref={sectionRef}>
      {/* Navigation - คัดลอกมาจาก Navbar หลักเป๊ะๆ */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "backdrop-blur-custom bg-white/90 shadow-sm border-b border-neutral-200"
            : "bg-white/80 backdrop-blur-sm"
        }`}
        style={{
          height: isScrolled ? "60px" : "92px", // กำหนดความสูงแน่นอน
        }}
      >
        <div className="max-w-7xl mx-auto px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo/Back Button */}
            <button
              onClick={onBack}
              className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-all duration-300 hover:-translate-x-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-sm font-medium tracking-wide japanese-heading">
                Back to Projects
              </span>
            </button>

            {/* Project Title แทน Logo */}
            <div className="hidden md:block text-lg font-medium tracking-widest japanese-heading text-neutral-900">
              {project.title}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover:border-neutral-900 transition-all duration-300 hover:shadow-md"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover:border-neutral-900 transition-all duration-300 hover:shadow-md"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - ปรับ padding ให้ตรงกับ Navbar หลัก */}
      <section
        className={`pb-16 bg-gradient-to-br from-neutral-50 to-white transition-all duration-700 ${
          isScrolled ? "pt-20" : "pt-28"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="reveal mb-8">
            <span className="text-sm font-light tracking-[0.3em] japanese-heading opacity-60">
              {project.category.toUpperCase()} PROJECT
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="reveal">
                <h1 className="text-5xl md:text-7xl font-thin japanese-heading tracking-tight mb-6">
                  {project.title}
                </h1>
                <p className="text-xl font-light text-neutral-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="reveal flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full text-sm font-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="reveal grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-light text-neutral-500">
                      Timeline
                    </div>
                    <div className="font-light">{project.timeline}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-light text-neutral-500">
                      Team Size
                    </div>
                    <div className="font-light">{project.teamSize}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <div>
                    <div className="text-sm font-light text-neutral-500">
                      My Role
                    </div>
                    <div className="font-light">{project.role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl p-12 flex items-center justify-center">
                <div className="text-8xl font-thin japanese-heading opacity-30">
                  {project.image}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="reveal mb-12">
            <h2 className="text-3xl md:text-4xl font-thin japanese-heading mb-8">
              Problem Statement
            </h2>
            <p className="text-lg font-light text-neutral-700 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Approach */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="reveal mb-12">
            <h2 className="text-3xl md:text-4xl font-thin japanese-heading mb-8">
              Solution Approach
            </h2>
            <div className="space-y-6">
              {project.solution.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-light flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-lg font-light text-neutral-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="reveal mb-12">
            <h2 className="text-3xl md:text-4xl font-thin japanese-heading mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-neutral-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <p className="font-light text-neutral-700 leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-8">
          <div className="reveal mb-12">
            <h2 className="text-3xl md:text-4xl font-thin japanese-heading mb-8">
              Challenges & Solutions
            </h2>
            <div className="space-y-8">
              {project.challenges.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg border border-neutral-200"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-light mb-4 text-red-600">
                        Challenge
                      </h3>
                      <p className="font-light text-neutral-700 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-light mb-4 text-green-600">
                        Solution
                      </h3>
                      <p className="font-light text-neutral-700 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="reveal mb-12">
            <h2 className="text-3xl md:text-4xl font-thin japanese-heading mb-8">
              Results & Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="text-4xl md:text-5xl font-thin japanese-heading text-neutral-900">
                    {result.value}
                  </div>
                  <div className="text-lg font-light text-neutral-700">
                    {result.metric}
                  </div>
                  <div className="text-sm font-light text-neutral-500">
                    {result.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="reveal mb-12">
            <h2 className="text-3xl md:text-4xl font-thin japanese-heading mb-8">
              Visual Showcase
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 border border-neutral-200"
                >
                  <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-4xl font-thin japanese-heading opacity-30">
                      {image}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-16 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="reveal space-y-8">
            <h2 className="text-3xl md:text-4xl font-thin japanese-heading">
              Interested in More Details?
            </h2>
            <p className="text-lg font-light opacity-80">
              Let's discuss how this project approach could work for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-minimal px-12 py-4 bg-white text-neutral-900 hover:bg-neutral-100">
                GET IN TOUCH
              </button>
              <button
                onClick={onBack}
                className="btn-minimal px-12 py-4 bg-transparent text-white border border-white hover:bg-white hover:text-neutral-900"
              >
                VIEW MORE PROJECTS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
