import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react';

const PortfolioFooter = () => {
    return (
       <motion.footer
        className="relative border-t border-border/20 bg-Secondary/5 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        role="contentinfo"
        aria-label="Portfolio footer information"
      >
        <div className="max-w-xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div
              className="space-y-4"
              role="region"
              aria-labelledby="about-heading"
            >
              <h3
                id="about-heading"
                className="text-lg font-semibold text-Text"
              >
                Mohammed Awad
              </h3>
              <p className="text-Muted text-sm leading-relaxed">
                Full-Stack Developer passionate about creating innovative web
                solutions and exploring cutting-edge technologies.
              </p>
              <div
                className="flex items-center gap-2"
                role="status"
                aria-live="polite"
              >
                <div className="relative" aria-hidden="true">
                  <div className="w-2 h-2 bg-green-500 rounded-full z-10 absolute inset-0"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping relative"></div>
                </div>
                <span className="text-xs text-Muted">
                  Available for opportunities
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <nav
              className="space-y-4"
              role="navigation"
              aria-labelledby="footer-nav"
            >
              <h3 id="footer-nav" className="text-lg font-semibold text-Text">
                Explore
              </h3>
              <div className="space-y-2" role="list">
                <Link
                  href="#projects"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                  role="listitem"
                  aria-label="View featured projects"
                >
                  Projects
                </Link>
                <Link
                  href="#skills"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                  role="listitem"
                  aria-label="View technical skills"
                >
                  Skills
                </Link>
                <Link
                  href="#contact"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                  role="listitem"
                  aria-label="View contact information"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="block text-Muted hover:text-Text transition-colors text-sm"
                  role="listitem"
                  aria-label="Read technical blog posts"
                >
                  Blog
                </Link>
              </div>
            </nav>

            {/* Tech Stack */}
            <div
              className="space-y-4"
              role="region"
              aria-labelledby="tech-stack"
            >
              <h3 id="tech-stack" className="text-lg font-semibold text-Text">
                Built With
              </h3>
              <div
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Technologies used"
              >
                {["Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(
                  (tech) => (
                    <span
                      key={tech}
                      role="listitem"
                      className="px-2 py-1 text-xs bg-Secondary/20 text-Muted rounded-md border border-border/20"
                      aria-label={`Built with ${tech}`}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mb-8 border-t border-border/10">
            <p
              className="text-xs text-Muted/70 order-2 sm:order-1 mt-4 sm:mt-0"
              role="contentinfo"
            >
              © {new Date().getFullYear()} Mohammed Awad. Crafted with care and
              lots of coffee ☕
            </p>
            <div
              className="flex items-center gap-2 order-1 sm:order-2"
              aria-hidden="true"
            >
              <div className="w-1 h-1 bg-Muted/30 rounded-full"></div>
              <span className="text-xs text-Muted/50 font-mono">
                ~ portfolio.exe
              </span>
            </div>
          </div>
        </div>
      </motion.footer>
    );
}

export default PortfolioFooter;
