import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiDownload } from 'react-icons/fi';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[80px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[100px] animate-float" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.4] dark:opacity-[0.15] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center justify-center w-full">
          
          {/* Left Column - Information Details */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              OPEN FOR INTERNSHIPS & COLLABORATION
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            >
              Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Osal Geesara</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-medium text-[var(--color-muted)] mb-6 h-[40px] flex items-center justify-center lg:justify-start"
            >
              <span className="mr-2">I am an</span>
              <TypeAnimation
                sequence={[
                  'IT Undergraduate',
                  2000,
                  'Software Engineer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'AI Enthusiast',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-indigo-500 dark:text-indigo-400 font-bold border-b-2 border-indigo-500 dark:border-indigo-400 pb-1"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-[var(--color-muted)] max-w-xl mb-8 leading-relaxed text-balance"
            >
              Undergraduate at the Faculty of Information Technology, University of Moratuwa. 
              Passionate about building scalable, secure, and modern applications while continuously refining my engineering skillset.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn-primary cursor-pointer"
              >
                View Projects <FiArrowRight />
              </Link>

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn-outline cursor-pointer"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center lg:justify-start gap-6 text-[var(--color-muted)]"
            >
              <a
                href="https://github.com/osalhk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/osal-geesara-735132269"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-500 transition-colors"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href="mailto:osalgeesara@gmail.com"
                className="hover:text-indigo-500 transition-colors"
              >
                <FiMail size={24} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Increased Size Circular Photo */}
          <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 75 }}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[350px] lg:h-[350px] rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 p-[4px] sm:p-[6px] flex items-center justify-center shadow-2xl shadow-indigo-500/25 overflow-hidden group cursor-pointer relative"
            >
              {/* Outer soft breathing glow effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              <img 
                src="https://github.com/osalhk.png" 
                alt="Osal Geesara" 
                className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105 z-10 relative"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
