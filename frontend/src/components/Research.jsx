import { Bot, BrainCircuit, Eye, Network, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";

function Research({
  areas,
  researchProfile,
  milestones,
  innovationHighlights,
}) {
  const descriptions = {
    "Artificial Intelligence":
      "Designing intelligent models for practical decision-support systems.",
    "Machine Learning":
      "Building predictive pipelines using supervised and hybrid approaches.",
    "Deep Learning":
      "Applying neural architectures for robust pattern discovery tasks.",
    "Computer Vision":
      "Developing visual analytics solutions for real-world monitoring use cases.",
    Blockchain:
      "Exploring secure, distributed frameworks for trustworthy digital systems.",
  };

  const icons = {
    "Artificial Intelligence": BrainCircuit,
    "Machine Learning": Workflow,
    "Deep Learning": Bot,
    "Computer Vision": Eye,
    Blockchain: Network,
  };

  const currentFocus = [
    "AI in Healthcare",
    "Predictive Systems",
    "NLP Applications",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-6 py-10">
      <motion.div
        className="mx-auto max-w-7xl space-y-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          variants={fadeUp}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Research
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Research Areas
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Focused on applied intelligence, data-driven systems, and practical
            innovation in computing.
          </p>
        </motion.div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Research Domains
          </h2>
          <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {areas.map((area) => {
              const Icon = icons[area] || BrainCircuit;

              return (
                <motion.article
                  key={area}
                  className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="mb-3 inline-flex rounded-lg border border-gray-200 bg-white p-2 text-gray-700 transition-all duration-300"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#000",
                      color: "#fff",
                    }}
                  >
                    <Icon size={18} />
                  </motion.div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {area}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {descriptions[area] ||
                      "Applied research and innovation in intelligent systems."}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          variants={fadeUp}
        >
          <h2 className="text-xl font-semibold text-gray-900">
            Research Profile
          </h2>
          <div className="mt-4 grid gap-3 text-sm md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Role
              </p>
              <p className="mt-1 text-gray-700">
                {researchProfile.scholarRole}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                SIG
              </p>
              <p className="mt-1 font-medium text-gray-800">
                {researchProfile.sig}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Timeline
              </p>
              <p className="mt-1 font-medium text-gray-800">
                {researchProfile.period}
              </p>
            </div>
          </div>
        </motion.div>

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
                whileHover={{ scale: 1.02 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="space-y-4" variants={fadeUp}>
          <h2 className="text-xl font-semibold text-gray-900">
            Academic Year Milestones
          </h2>
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {milestones.map((item) => (
              <motion.article
                key={item.academicYear}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                variants={staggerItem}
              >
                <h3 className="text-base font-semibold text-gray-900">
                  Academic Year {item.academicYear}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  {item.highlights.map((point) => (
                    <li
                      key={point}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="space-y-4" variants={fadeUp}>
          <h2 className="text-xl font-semibold text-gray-900">
            Innovation, IPR & Consultancy
          </h2>
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {innovationHighlights.map((item) => (
              <motion.article
                key={`${item.title}-${item.detail}`}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                variants={staggerItem}
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.detail}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex rounded-full border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-900 transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Open Link
                  </a>
                )}
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Research;
