import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'Cloud Storage Management Platform',
      description: 'An ongoing second-year group software engineering project focused on building a cost-effective cloud storage platform similar to Google Drive and iCloud. The system enables secure file storage, user authentication, real-time communication, and support management while providing an affordable alternative for users. Built with a React frontend and a Django REST Framework backend, with Dockerized deployment for scalable development workflows. Contributed to the development of the chat system and ticket submission module.',
      tech: ['React', 'Python', 'Django REST Framework', 'Docker', 'PostgreSQL'],
      github: 'https://github.com/chirath1231/Software-Project-Storage-Solution.git',
      featured: true,
      category: 'Cloud Systems / Full Stack'
    },

    {
      title: 'Sweet Surrender',
      description: 'A modern full-stack bakery e-commerce platform developed as an academic group project for learning enterprise-level web application development. The system provides an online marketplace for bakeries to manage and sell products efficiently through features such as order management, invoice generation, secure authentication, and online payment integration using PayHere. Built with a responsive React frontend and a Laravel backend, the platform was designed to simulate real-world business workflows and modern SaaS-style application architecture.',
      tech: ['React.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'PayHere'],
      github: 'https://github.com/chirath1231/sweet-surrender.git',
      featured: true,
      category: 'E-Commerce / Full Stack Web Application',
    },

    {
      title: 'EyeVMouse',
      description: 'An innovative virtual mouse interface leveraging computer vision. Designed to control mouse pointers through eye tracking and hand gestures, enabling an assistive hands-free device management framework.',
      tech: ['Python', 'OpenCV'],
      github: 'https://github.com/osalhk/EyeVMouse.git',
      featured: true,
      category: 'Computer Vision',
    },

    {
      title: 'Smart Railway Trolley System',
      description: 'A first-year group hardware project focused on designing and developing a smart railway trolley system capable of transporting items between locations through an electrically powered rail track. The trolley was controlled through a custom web-based interface, enabling remote operation and movement control. Built using Arduino and C++, the system utilized electrical current supplied directly through the railway track as the primary power and movement mechanism, demonstrating embedded systems integration, hardware-software communication, and real-time control concepts.',
      tech: ['Arduino', 'C++', 'Embedded Systems', 'Web Control Interface'],
      github: '',
      featured: true,
      category: 'Hardware / IoT Systems',
    },

    {
      title: 'DengueShield',
      description: 'An end-to-end disease surveillance and community alert platform. Includes a mobile frontend application for geolocation-based dengue case reporting and dynamic outbreak hazard heatmaps, supported by a secure Node.js/Express.js backend utilizing Firebase Authentication, Cloud Firestore for real-time database management, and Firebase Cloud Messaging for instant community safety alerts.',
      tech: ['React Native', 'Node.js', 'Express.js', 'Firebase', 'Firestore', 'Firebase Auth'],
      github: 'https://github.com/osalhk/dengueshield-backend',
      featured: true,
      category: 'Mobile App / Backend API',
    }
  ];

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
