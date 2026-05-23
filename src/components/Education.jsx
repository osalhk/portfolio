import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

export default function Education() {
  const educationData = [
    {
      institution: 'University of Moratuwa',
      degree: 'BSc (Hons) in Information Technology',
      faculty: 'Faculty of Information Technology',
      period: '2023 - Present',
      location: 'Moratuwa, Sri Lanka',
      details: [
        'Specializing in Information Technology core streams including Software Engineering, Algorithms, Database Management, and Computer Networks.',
        'Actively engaged in academic collaborating development projects and hands-on system designs.',
      ],
      icon: <FiAward size={20} />,
      badge: 'Academic Undergraduate',
    },
    {
      institution: 'Rahula College',
      degree: 'GCE Advanced Level (Physical Science Stream)',
      faculty: 'Primary and Secondary Schooling',
      period: 'Completed',
      location: 'Matara, Sri Lanka',
      details: [
        'Studied Advanced Physical Science stream including Combined Mathematics, Physics, and Chemistry.',
        'Engaged in various extracurricular, leadership, and club activities.',
      ],
      icon: <FiBookOpen size={20} />,
      badge: 'High School',
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/3 left-10 w-[200px] h-[200px] bg-indigo-500/5 rounded-full blur-[60px]" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-bold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-2">Qualifications</p>
            <h2 className="section-heading">Education History</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--color-muted)] leading-relaxed text-lg"
          >
            My academic timeline highlighting institutions, streams of study, and qualifications.
          </motion.p>
        </div>

        {/* Timeline Path Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent -translate-x-1/2 z-0" />

          {/* Timeline Cards */}
          <div className="flex flex-col gap-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col sm:flex-row relative z-10 w-full ${
                    isEven ? 'sm:justify-start' : 'sm:justify-end'
                  }`}
                >
                  {/* Timeline indicator node */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full border-4 border-[var(--color-bg)] bg-indigo-500 -translate-x-1/2 flex items-center justify-center text-white shadow-glow-sm z-20">
                    {item.icon}
                  </div>

                  {/* Card wrapper */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className={`pl-12 sm:pl-0 w-full sm:w-[calc(50%-2rem)] ${
                      isEven ? 'sm:pr-0' : 'sm:pl-0'
                    }`}
                  >
                    <div className="card glass-light relative hover:border-indigo-500/30">
                      {/* Floating Badge */}
                      <span className="tag text-[10px] uppercase font-bold tracking-wider mb-3 block w-fit">
                        {item.badge}
                      </span>

                      {/* Header */}
                      <h3 className="text-xl font-bold text-[var(--color-text)] mb-1">
                        {item.institution}
                      </h3>
                      
                      <h4 className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mb-2">
                        {item.degree}
                      </h4>
                      
                      <p className="text-xs text-[var(--color-muted)] font-medium mb-4">
                        {item.faculty}
                      </p>

                      {/* Info lines */}
                      <div className="flex flex-wrap gap-4 text-xs text-[var(--color-muted)] mb-4 border-b border-[var(--color-border)] pb-4">
                        <span className="flex items-center gap-1">
                          <FiCalendar /> {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiMapPin /> {item.location}
                        </span>
                      </div>

                      {/* Details lines */}
                      <ul className="flex flex-col gap-2 list-disc list-inside text-xs text-[var(--color-muted)] leading-relaxed">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="list-none relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-indigo-500 font-medium">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
