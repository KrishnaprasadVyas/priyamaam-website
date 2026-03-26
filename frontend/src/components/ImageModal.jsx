import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

function ImageModal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [certificate, onClose])

  if (!certificate) {
    return null
  }

  const lowerPath = certificate.file.toLowerCase()
  const isPdf = lowerPath.endsWith('.pdf')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
        className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={certificate.title}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-[#111111] shadow transition-all duration-300 ease-in-out hover:bg-white"
          aria-label="Close certificate preview"
        >
          <X size={18} />
        </button>

        <div className="border-b border-gray-200 bg-gray-50 px-5 py-3 pr-14">
          <p className="text-sm font-semibold text-gray-900">{certificate.title}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
            {isPdf ? 'PDF Document' : 'Image Preview'}
          </p>
        </div>

        {isPdf ? (
          <iframe
            src={certificate.file}
            title={certificate.title}
            className="h-[80vh] w-full bg-white"
          />
        ) : (
          <img
            src={certificate.file}
            alt={certificate.title}
            className="max-h-[80vh] w-full object-contain bg-[#F9FAFB]"
          />
        )}
      </motion.div>
    </motion.div>
  )
}

export default ImageModal
