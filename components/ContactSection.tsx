"use client";

import { useEffect, useRef, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section
      id="contact"
      className="section-large relative"
      style={{ backgroundColor: "#f6f6f6" }}
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="reveal mb-16">
          <span className="text-sm font-light tracking-[0.3em] japanese-heading opacity-60">
            03 / CONTACT
          </span>
        </div>

        <div className="reveal mb-24">
          <h2 className="text-4xl md:text-6xl font-thin japanese-heading tracking-tight">
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <div className="reveal">
              <div className="space-y-8">
                <p className="text-xl font-light leading-loose">
                  Currently available for new projects and collaborations.
                  Always interested in discussing innovative solutions.
                </p>
                <p className="text-lg font-light leading-relaxed opacity-80">
                  From concept to deployment, I partner with teams and
                  individuals to create software that makes a difference.
                </p>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="reveal space-y-8">
              <h3 className="text-2xl font-light japanese-heading mb-8">
                Get In Touch
              </h3>

              {[
                {
                  label: "Email",
                  value: "nateetorn13e@outlook.com",
                  href: "mailto:nateetorn13e@outlook.com",
                  description: "For project inquiries and collaborations",
                },
                {
                  label: "LinkedIn",
                  value: "/in/nateetorn-puangbubpa",
                  href: "https://linkedin.com/in/nateetorn-puangbubpa",
                  description: "Professional networking and connections",
                },
                {
                  label: "GitHub",
                  value: "/KheperX",
                  href: "https://github.com/KheperX",
                  description: "Open source contributions and projects",
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.label !== "Email" ? "_blank" : undefined}
                  rel={
                    contact.label !== "Email"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block group hover-fade"
                >
                  <div className="flex items-start justify-between py-6 border-b border-neutral-200 group-hover:border-neutral-400 transition-colors">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-light tracking-widest opacity-60">
                          {contact.label}
                        </span>
                        <span className="text-lg font-light">
                          {contact.value}
                        </span>
                      </div>
                      <p className="text-sm font-light opacity-60 ml-0">
                        {contact.description}
                      </p>
                    </div>
                    <div className="mt-2 group-hover:translate-x-1 transition-transform">
                      <svg
                        className="w-4 h-4 opacity-40"
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
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="reveal">
              <div className="card-minimal p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-light tracking-widest">
                    AVAILABLE NOW
                  </span>
                </div>
                <p className="text-sm font-light opacity-80 leading-relaxed">
                  Currently accepting new projects starting Q3 2025. Response
                  time typically within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="reveal">
            <div className="card-minimal p-12 rounded-lg">
              <h3 className="text-2xl font-light japanese-heading mb-8">
                Quick Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-light tracking-widest opacity-60 mb-3">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pb-3 bg-transparent border-0 border-b border-neutral-200 focus:border-neutral-900 text-neutral-900 font-light transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-light tracking-widest opacity-60 mb-3">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pb-3 bg-transparent border-0 border-b border-neutral-200 focus:border-neutral-900 text-neutral-900 font-light transition-colors duration-300"
                      placeholder="your.email@domain.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-light tracking-widest opacity-60 mb-3">
                      PROJECT DETAILS
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pb-3 bg-transparent border-0 border-b border-neutral-200 focus:border-neutral-900 text-neutral-900 font-light resize-none transition-colors duration-300"
                      placeholder="Tell me about your project, timeline, and requirements..."
                    ></textarea>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="btn-minimal w-full py-4 bg-neutral-900 text-white hover:bg-neutral-800"
                  >
                    <span className="relative z-10 font-light tracking-widest">
                      SEND MESSAGE
                    </span>
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-xs font-light opacity-60">
                    I'll get back to you within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
