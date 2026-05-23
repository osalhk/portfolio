import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Navbar({ darkMode, setDarkMode }) {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Education', to: 'education' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-light shadow-md py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* No Logo Branding - Centered Navigation and Actions layout */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
              className="nav-link cursor-pointer text-sm font-semibold tracking-wide uppercase transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-xl border border-[var(--color-border)] hover:bg-indigo-50 dark:hover:bg-dark-600 transition-colors text-indigo-500 dark:text-indigo-400"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <a
            href="https://github.com/osalhk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-[var(--color-border)] hover:bg-indigo-50 dark:hover:bg-dark-600 transition-colors text-[var(--color-text)]"
            aria-label="GitHub Profile"
          >
            <FiGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/osal-geesara-735132269"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-[var(--color-border)] hover:bg-indigo-50 dark:hover:bg-dark-600 transition-colors text-[var(--color-text)]"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin size={20} />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl border border-[var(--color-border)] text-indigo-500 dark:text-indigo-400"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="p-2 rounded-xl border border-[var(--color-border)] text-[var(--color-text)]"
            aria-label="Toggle menu"
          >
            {navOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full glass-light border-b border-[var(--color-border)] transition-all duration-300 ease-in-out ${
        navOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="active"
              onClick={() => setNavOpen(false)}
              className="text-base font-semibold tracking-wide uppercase py-2 cursor-pointer text-[var(--color-text)] hover:text-indigo-500"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 pt-4 border-t border-[var(--color-border)]">
            <a
              href="https://github.com/osalhk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]"
            >
              <FiGithub size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/osal-geesara-735132269"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text)]"
            >
              <FiLinkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
