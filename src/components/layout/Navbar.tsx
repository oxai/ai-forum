import { useState, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV_LINKS } from '@/content';
import type { NavLink } from '@/types';

function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function linkProps(link: NavLink) {
  if (link.external) {
    return {
      href: link.href,
      target: '_blank' as const,
      rel: 'noopener noreferrer',
    };
  }
  return { href: link.href };
}

function desktopClasses(link: NavLink) {
  return link.emphasis
    ? 'nav-ticket text-turquoise px-4 py-1.5 hover:text-black transition-all duration-300 relative'
    : 'hover:text-turquoise transition-all duration-300 border-b border-transparent hover:border-turquoise';
}

function mobileClasses(link: NavLink) {
  return link.emphasis
    ? 'text-turquoise hover:text-white transition-colors'
    : 'text-white hover:text-turquoise transition-colors';
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-rich-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Back to top"
          >
            <img
              src="/branding/oxai-full-logo.png"
              alt="OXAI Logo"
              className="h-14 md:h-20 w-auto object-contain mix-blend-screen"
            />
          </a>

          <nav className="hidden md:flex items-center font-mono text-sm tracking-widest gap-12 text-white/50">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                {...linkProps(link)}
                className={desktopClasses(link)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-rich-black flex flex-col p-6"
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="text-white p-2"
                onClick={closeMobileMenu}
                aria-label="Close navigation menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-10 font-mono text-xl tracking-widest">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  {...linkProps(link)}
                  onClick={closeMobileMenu}
                  className={mobileClasses(link)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
