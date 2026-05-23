import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-500/5">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-2">Get in touch</p>
            <h2 className="section-heading">Contact Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--color-muted)] leading-relaxed text-lg"
          >
            Feel free to contact me for collaborations, inquiries, or just to say hello!
          </motion.p>
        </div>

        {/* Centered Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card glass-light p-8 md:p-12 text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4">Let's connect</h3>
            <p className="text-sm text-[var(--color-muted)] mb-8 max-w-md leading-relaxed">
              I am interested in internship opportunities, open-source projects, and new technology developments. Please reach out to me through my email or social channels.
            </p>

            {/* Details List */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-8 w-full justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider font-bold mb-1">Email Address</p>
                  <a href="mailto:osalgeesara@gmail.com" className="text-sm font-semibold hover:text-indigo-500 transition-colors">
                    osalgeesara@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider font-bold mb-1">Location</p>
                  <p className="text-sm font-semibold">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Channels link */}
            <div className="border-t border-[var(--color-border)] pt-8 w-full flex flex-col items-center">
              <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider font-bold mb-4">Follow My Channels</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/osal-geesara-735132269"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-[var(--color-border)] flex items-center justify-center hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all text-[var(--color-text)] animate-float"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/osalhk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-[var(--color-border)] flex items-center justify-center hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all text-[var(--color-text)] animate-float"
                  style={{ animationDelay: '0.2s' }}
                >
                  <FiGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
