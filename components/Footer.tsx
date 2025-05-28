"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-2xl font-light japanese-heading tracking-widest">
              Eing
            </div>
            <p className="text-sm font-light leading-relaxed opacity-80">
              Software developer crafting digital experiences with precision and
              purpose. Based in Thailand, working worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-xs font-light tracking-widest opacity-60">
              NAVIGATION
            </h4>
            <div className="space-y-3">
              {["Home", "About", "Work", "Contact"].map((item, index) => (
                <button
                  key={index}
                  className="block text-sm font-light hover-fade transition-opacity text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="text-xs font-light tracking-widest opacity-60">
              CONNECT
            </h4>
            <div className="space-y-3">
              {[
                { name: "GitHub", href: "https://github.com/eing-codes" },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/in/eing-dev",
                },
                { name: "Email", href: "mailto:hello@eing.dev" },
                { name: "Twitter", href: "https://twitter.com/eing_dev" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={
                    link.name !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="block text-sm font-light hover-fade transition-opacity"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-xs font-light opacity-60">
              © {currentYear} Eing. All rights reserved.
            </div>

            {/* Status */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-light tracking-widest">
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-xs font-light tracking-widest hover-fade transition-opacity group"
            >
              <span>BACK TO TOP</span>
              <div className="w-4 h-4 border border-neutral-400 rounded-full flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <svg
                  className="w-2 h-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Final Touch */}
        <div className="mt-12 pt-8 border-t border-neutral-100 text-center">
          <p className="text-xs font-light opacity-40">
            Crafted with attention to detail and love for clean code
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
