"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ProjectDetail from "./project/ProjectDetail";
import { projectsData } from "./project/projectsData";

const WorkSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [workSectionPosition, setWorkSectionPosition] = useState(0); // เก็บตำแหน่ง work section

  useEffect(() => {
    console.log("useEffect triggered, selectedProject:", selectedProject);
    // Only setup observer when not showing project detail
    if (selectedProject) return;

    // บันทึกตำแหน่ง work section
    if (sectionRef.current) {
      const position = sectionRef.current.offsetTop - 30; // ลงมา 50px จากหัวข้อ
      setWorkSectionPosition(position);
      console.log("Saved work section position:", position);
    }

    // Force remove active class first, then setup observer
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    console.log("Found reveal elements:", elements?.length);
    elements?.forEach((el) => el.classList.remove("active"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Adding active class to:", entry.target);
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Setup observer with a small delay to ensure DOM is ready
    setTimeout(() => {
      const elements = sectionRef.current?.querySelectorAll(".reveal");
      console.log("Setting up observer for elements:", elements?.length);
      elements?.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      console.log("Disconnecting observer");
      observer.disconnect();
    };
  }, [selectedProject]); // Add selectedProject as dependency

  const projects = projectsData.map((project) => ({
    id: project.id,
    title: project.title,
    category: project.category,
    year: project.year,
    description: project.description,
    tech: project.tech,
    image: project.image,
  }));

  const handleReadMore = useCallback(
    (projectId: number) => {
      console.log("Opening project:", projectId);

      // Switch to project detail immediately
      setSelectedProject(projectId);

      // ใช้ตำแหน่งที่บันทึกไว้แทน
      setTimeout(() => {
        console.log("Scrolling to saved position:", workSectionPosition);
        window.scrollTo({ top: workSectionPosition, behavior: "instant" });
      }, 100);
    },
    [workSectionPosition]
  ); // เพิ่ม workSectionPosition เป็น dependency

  const handleBackToProjects = useCallback(() => {
    console.log("Going back to projects list");
    setSelectedProject(null);

    // กลับมาทันทีโดยไม่มี scroll animation
    setTimeout(() => {
      console.log(
        "Moving back to saved position instantly:",
        workSectionPosition
      );
      window.scrollTo({ top: workSectionPosition, behavior: "instant" }); // เปลี่ยนจาก "smooth" เป็น "instant"

      // Reset and trigger animations manually
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => {
        el.classList.remove("active");
      });

      // Trigger animations after a short delay
      setTimeout(() => {
        elements.forEach((el) => {
          el.classList.add("active");
        });
      }, 200); // ลด delay เป็น 200ms เพราะไม่ต้องรอ scroll
    }, 50); // ลด delay เป็น 50ms
  }, [workSectionPosition]); // เพิ่ม workSectionPosition เป็น dependency

  // Alternative approach - use state to control visibility
  const showProjectDetail = selectedProject !== null;
  const currentProject = selectedProject
    ? projectsData.find((p) => p.id === selectedProject)
    : null;

  return (
    <>
      {showProjectDetail && currentProject ? (
        <ProjectDetail project={currentProject} onBack={handleBackToProjects} />
      ) : (
        <section
          id="work"
          className="section-large bg-neutral-50 relative"
          ref={sectionRef}
        >
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
                    activeProject === index ? "bg-white" : "hover:bg-white/50"
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
                          <button className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover-scale group-hover:border-neutral-900 transition-all duration-300 ease-in-out hover:shadow-md">
                            <svg
                              className="w-4 h-4 transition-transform duration-300 group-hover:scale-105"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleReadMore(project.id)}
                            className="w-10 h-10 border border-neutral-300 rounded-full flex items-center justify-center hover-scale group-hover:border-neutral-900 transition-all duration-300 ease-in-out hover:shadow-md"
                          >
                            <svg
                              className="w-4 h-4 transition-transform duration-300 group-hover:scale-105"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
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
                  {
                    number: "100+",
                    label: "Commits this year",
                    sublabel: "Active development",
                  },
                  {
                    number: "95%",
                    label: "Code coverage",
                    sublabel: "Quality assurance",
                  },
                  {
                    number: "< 50ms",
                    label: "Response time",
                    sublabel: "Performance focus",
                  },
                  {
                    number: "0",
                    label: "Critical bugs",
                    sublabel: "Reliability first",
                  },
                ].map((stat, index) => (
                  <div key={index} className="space-y-3">
                    <div className="text-4xl font-thin japanese-heading">
                      {stat.number}
                    </div>
                    <div className="text-sm font-light tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-xs font-light opacity-60">
                      {stat.sublabel}
                    </div>
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
      )}
    </>
  );
};

export default WorkSection;
