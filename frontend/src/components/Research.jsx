import { Bot, BrainCircuit, Eye, Network, Workflow } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations'

function Research({ areas }) {
  const descriptions = {
    'Artificial Intelligence': 'Designing intelligent models for practical decision-support systems.',
    'Machine Learning': 'Building predictive pipelines using supervised and hybrid approaches.',
    'Deep Learning': 'Applying neural architectures for robust pattern discovery tasks.',
    'Computer Vision': 'Developing visual analytics solutions for real-world monitoring use cases.',
    Blockchain: 'Exploring secure, distributed frameworks for trustworthy digital systems.',
  }

  const icons = {
    'Artificial Intelligence': BrainCircuit,
    'Machine Learning': Workflow,
    'Deep Learning': Bot,
    'Computer Vision': Eye,
    Blockchain: Network,
  }

  const currentFocus = ['AI in Healthcare', 'Predictive Systems', 'NLP Applications']

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-6 py-10">
      <motion.div
        className="mx-auto max-w-7xl space-y-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          variants={fadeUp}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Research</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Research Areas
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Focused on applied intelligence, data-driven systems, and practical innovation in computing.
          </p>
        </motion.div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Research Domains</h2>
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {areas.map((area) => {
              const Icon = icons[area] || BrainCircuit

              return (
                <motion.article
                  key={area}
                  className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="mb-3 inline-flex rounded-lg border border-gray-200 bg-white p-2 text-gray-700 transition-all duration-300"
                    whileHover={{ scale: 1.1, backgroundColor: '#000', color: '#fff' }}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <h3 className="text-base font-semibold text-gray-900">{area}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {descriptions[area] || 'Applied research and innovation in intelligent systems.'}
                  </p>
                </motion.article>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          variants={fadeUp}
        >
          <h2 className="text-xl font-semibold text-gray-900">Current Focus</h2>
          <motion.div
            className="mt-4 flex flex-wrap gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {currentFocus.map((item) => (
              <motion.span
                key={item}
                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Research

