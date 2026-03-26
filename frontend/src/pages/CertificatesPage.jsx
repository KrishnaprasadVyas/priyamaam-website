import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import CertificateCard from '../components/CertificateCard'
import FilterBar from '../components/FilterBar'
import { certificates } from '../data/certificate'
import { fadeUp, staggerContainer, staggerItem } from '../utils/animations'

const filters = ['All', 'FDP', 'Workshop', 'Conference', 'Certification', 'Publication']

function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const sortedCertificates = useMemo(
    () => [...certificates].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title)),
    [],
  )

  const filteredCertificates = useMemo(() => {
    if (activeFilter === 'All') {
      return sortedCertificates
    }

    return sortedCertificates.filter((certificate) => certificate.type === activeFilter)
  }, [activeFilter, sortedCertificates])

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-6 py-12">
      <motion.div
        className="mx-auto max-w-7xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          className="mb-7 border-b border-gray-200 pb-6 transition-all duration-300"
          variants={fadeUp}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Achievements</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Certificates & Professional Milestones
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Explore trainings, workshops, publications, and certifications across academic years.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <FilterBar
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            visibleCount={filteredCertificates.length}
            totalCount={sortedCertificates.length}
          />
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={`${certificate.file}-${certificate.year}`}
              variants={staggerItem}
            >
              <CertificateCard certificate={certificate} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CertificatesPage
