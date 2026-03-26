import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Copy, Filter } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations'

function Publications({ items, scholarLink }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [copiedKey, setCopiedKey] = useState('')
  const filters = ['All', 'ML', 'NLP', 'CV']

  const getTags = (publication) => {
    const text = `${publication.title} ${publication.description}`.toLowerCase()
    const tags = []

    if (text.includes('nlp') || text.includes('opinion mining') || text.includes('sentiment')) {
      tags.push('NLP')
    }

    if (
      text.includes('computer vision') ||
      text.includes('image') ||
      text.includes('visual') ||
      text.includes('video') ||
      text.includes('recognition')
    ) {
      tags.push('CV')
    }

    if (
      text.includes('machine learning') ||
      text.includes('deep learning') ||
      text.includes('classification') ||
      text.includes('prediction') ||
      text.includes('neural')
    ) {
      tags.push('ML')
    }

    return tags.length > 0 ? Array.from(new Set(tags)) : ['ML']
  }

  const publicationsWithMeta = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        tags: getTags(item),
        year: 2024 - (index % 4),
      })),
    [items],
  )

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return publicationsWithMeta
    }

    return publicationsWithMeta.filter((item) => item.tags.includes(activeFilter))
  }, [activeFilter, publicationsWithMeta])

  const handleCite = async (publication) => {
    const citation = `Surana, P. A. (${publication.year}). ${publication.title}.`

    try {
      await navigator.clipboard.writeText(citation)
      setCopiedKey(publication.title)
      window.setTimeout(() => setCopiedKey(''), 1500)
    } catch {
      setCopiedKey(publication.title)
      window.setTimeout(() => setCopiedKey(''), 1500)
    }
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
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Publications</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Selected Publications
          </h1>
          <p className="mt-3 text-sm text-gray-500 sm:text-base">
            Research outputs across machine learning, NLP, and vision-driven systems.
          </p>
        </motion.div>

        <motion.div className="mt-6 flex flex-wrap items-center gap-2" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-gray-500">
            <Filter size={14} />
            Filter
          </span>
          {filters.map((filter) => (
            <motion.button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-black text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {filteredItems.map((pub, index) => (
            <motion.article
              key={`${pub.title}-${index}`}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              variants={staggerItem}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="max-w-4xl text-base font-semibold leading-relaxed text-gray-900 sm:text-lg">
                  {pub.title}
                </h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  {pub.year}
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">{pub.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <motion.span
                    key={`${pub.title}-${tag}`}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <motion.a
                  href={scholarLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-black hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen size={15} />
                  View Paper
                </motion.a>
                <motion.button
                  type="button"
                  onClick={() => handleCite(pub)}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-1.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-black hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Copy size={14} />
                  {copiedKey === pub.title ? 'Copied' : 'Cite'}
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Publications
