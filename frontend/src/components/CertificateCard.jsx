import { motion } from "framer-motion";
import { useState } from "react";

function CertificateCard({ certificate }) {
  const [open, setOpen] = useState(false);

  const lowerPath = (certificate.file || "").toLowerCase();
  const isImage =
    lowerPath.endsWith(".jpg") ||
    lowerPath.endsWith(".png") ||
    lowerPath.endsWith(".jpeg");

  return (
    <>
      <motion.div
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
        onClick={() => setOpen(true)}
      >
        <div className="relative h-40 overflow-hidden">
          {isImage ? (
            <img
              src={certificate.file}
              alt={certificate.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
              <div className="flex h-[80%] w-[70%] flex-col justify-between rounded-md bg-white p-2 shadow transition group-hover:scale-105">
                <div className="space-y-1">
                  <div className="h-1.5 w-3/4 rounded bg-gray-300" />
                  <div className="h-1.5 w-1/2 rounded bg-gray-200" />
                </div>

                <div className="mt-2 space-y-1">
                  <div className="h-1 rounded bg-gray-200" />
                  <div className="h-1 w-5/6 rounded bg-gray-200" />
                  <div className="h-1 w-4/6 rounded bg-gray-200" />
                </div>

                <div className="mt-2 h-5 rounded bg-gray-100" />
              </div>

              <span className="absolute right-2 top-2 rounded-full bg-black px-2 py-1 text-xs text-white">
                PDF
              </span>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 rounded-full bg-white px-5 py-2 text-black shadow-lg transition-all duration-300"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setOpen(true);
              }}
            >
              View Certificate
            </motion.button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-sm font-semibold leading-snug text-gray-900">
            {certificate.title}
          </h3>

          <p className="mt-2 text-xs text-gray-500">Year: {certificate.year}</p>

          <motion.button
            type="button"
            className="mt-3 rounded-full border border-gray-300 px-3 py-1 text-sm transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={(event) => {
              event.stopPropagation();
              setOpen(true);
            }}
          >
            View
          </motion.button>
        </div>
      </motion.div>

      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-4xl rounded-xl bg-white p-4"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={certificate.title}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 text-gray-500 transition-all duration-300 hover:text-gray-900 hover:scale-110"
            >
              X
            </button>

            {isImage ? (
              <img
                src={certificate.file}
                alt={certificate.title}
                className="h-auto w-full rounded-l rounded-lg"
              />
            ) : (
              <iframe
                src={certificate.file}
                title={certificate.title}
                className="h-96 w-full rounded-lg"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default CertificateCard;
