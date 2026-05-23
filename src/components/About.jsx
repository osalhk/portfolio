import { motion } from 'framer-motion';
import { FiActivity } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[250px] h-[250px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[80px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-2">Who I Am</p>
            <h2 className="section-heading">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--color-muted)] leading-relaxed text-lg mb-8 text-balance"
          >
            I am a second-year Information Technology undergraduate student at the Faculty of Information Technology, 
            University of Moratuwa, Sri Lanka. I possess a strong passion for software engineering, algorithmic problem solving, 
            and learning advanced emerging technologies.
          </motion.p>
        </div>

        {/* Detailed About Text Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card glass-light text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start gap-2 text-indigo-500">
              <FiActivity /> Engineering Mindset
            </h3>
            <p className="text-[var(--color-muted)] leading-relaxed text-sm mb-4">
              I thrive in settings that demand analytical problem-solving and rapid learning. My studies and personal projects focus on software architectural design patterns, optimization, and software project management lifecycle.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed text-sm">
              I strongly believe in a continuous learning mindset. Every challenge in coding is an opportunity to adapt and write cleaner, more efficient, and maintainable software.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
