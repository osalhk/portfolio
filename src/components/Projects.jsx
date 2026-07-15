import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

export default function Projects() {
  const projects = [];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-500/5">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[90px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-2">My Work</p>
            <h2 className="section-heading">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--color-muted)] leading-relaxed text-lg"
          >
            A compilation of project repositories displaying academic research, collaborating software applications, and assistive computer vision software.
          </motion.p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between card glass-light overflow-hidden"
            >
              {/* Top Section */}
              <div>
                {/* Header elements */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                    <FiFolder size={22} />
                  </div>

                  {/* Action link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-indigo-500/10 hover:text-indigo-500 transition-colors text-[var(--color-muted)]"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <FiGithub size={20} />
                  </a>
                </div>

                {/* Tag Category */}
                <span className="text-[10px] uppercase tracking-wider font-bold text-purple-500 dark:text-purple-400 mb-2 block">
                  {project.category}
                </span>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--color-muted)] mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom Section */}
              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500/5 text-indigo-500 dark:text-indigo-400 border border-indigo-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visual mock image/demo area 
                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-900/20 dark:to-purple-900/20 border border-[var(--color-border)] flex items-center justify-center relative overflow-hidden group-hover:border-indigo-500/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-dots opacity-[0.2]" />
                  <span className="text-xs font-mono text-[var(--color-muted)] opacity-60">
                    [Future Image/Demo Placeholder]
                  </span>

                
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </div>*/}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
