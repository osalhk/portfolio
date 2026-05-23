import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] py-12 overflow-hidden bg-slate-500/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* Left column info */}
        <div className="text-center md:text-left">
          <p className="text-xs text-[var(--color-muted)] font-medium">
            IT Undergraduate & Software Developer based in Sri Lanka
          </p>
        </div>

        {/* Central copyright */}
        <div className="text-xs text-[var(--color-muted)] text-center">
          &copy; {currentYear} Osal Geesara. All rights reserved.
        </div>

        {/* Right column social icons & scroll-up button */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a
              href="https://github.com/osalhk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-indigo-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/osal-geesara-735132269"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-muted)] hover:text-indigo-500 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:osalgeesara@gmail.com"
              className="text-[var(--color-muted)] hover:text-indigo-500 transition-colors"
              aria-label="Send Email"
            >
              <FiMail size={20} />
            </a>
          </div>

          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="p-2.5 rounded-xl border border-[var(--color-border)] hover:bg-indigo-500 hover:text-white hover:border-indigo-500 text-[var(--color-muted)] transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
