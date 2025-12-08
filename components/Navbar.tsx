"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // ไปตรงหัวข้อของ section เลย
      const elementTop = element.offsetTop;
      
      window.scrollTo({
        top: elementTop,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "backdrop-blur-custom bg-white/90 py-4 shadow-sm border-b border-neutral-200"
            : "py-8 bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-lg font-medium tracking-widest japanese-heading text-neutral-900">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium tracking-wide hover:text-neutral-600 transition-all duration-300 japanese-heading text-neutral-800 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-neutral-800 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors relative z-50"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <div
                    className={`w-full h-px bg-neutral-900 transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-full h-px bg-neutral-900 transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-full h-px bg-neutral-900 transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="p-8 border-b border-neutral-200">
            <div className="text-lg font-medium tracking-widest japanese-heading text-neutral-900">
              MENU
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-8 space-y-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-xl font-light tracking-wide text-neutral-800 hover:text-neutral-600 transition-all duration-300 japanese-heading ${
                  index === 0 ? "mt-0" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between py-4 border-b border-neutral-100 group">
                  <span>{item.label}</span>
                  <span className="text-xs opacity-40 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="text-xs font-light tracking-widest opacity-60 text-center">
              NATEETORN PORTFOLIO
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
