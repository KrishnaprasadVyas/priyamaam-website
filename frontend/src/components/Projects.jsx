import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations'

function Projects({ projects }) {
  const getTags = (project) => {
    const text = `${project.title} ${project.description}`.toLowerCase()
    const tags = []

    if (
      text.includes('ai') ||
      text.includes('machine learning') ||
      text.includes('deep learning') ||
      text.includes('image')
    ) {
      tags.push('AI')
    }

    if (text.includes('android') || text.includes('app')) {
      tags.push('Android')
    }

    if (text.includes('security') || text.includes('intrusion') || text.includes('honeywords')) {
      tags.push('Security')
    }

    return tags.length > 0 ? Array.from(new Set(tags)) : ['AI']
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-6 py-10">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          variants={fadeUp}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Projects</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Selected Projects
          </h1>
          <p className="mt-3 text-sm text-gray-500 sm:text-base">
            Practical implementations across intelligent systems, mobile applications, and secure computing.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {getTags(project).map((tag) => (
                  <motion.span
                    key={`${project.title}-${tag}`}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <motion.a
                  href="#"
                  className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-black hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
                <motion.a
                  href="#"
                  className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-black hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects

