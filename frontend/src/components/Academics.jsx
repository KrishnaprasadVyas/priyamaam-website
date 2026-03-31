import { BookOpenCheck, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";

function Academics({ academics, profile }) {
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
            Academics
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Teaching & Academic Profile
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Subject expertise, teaching responsibilities, and academic
            contributions in computer engineering.
          </p>

          <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Faculty Name
              </p>
              <p className="mt-1 font-semibold text-gray-900">
                {profile.fullName || profile.name}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Institution
              </p>
              <p className="mt-1 font-semibold text-gray-900">
                {profile.location || profile.organization}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.article
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            variants={staggerItem}
          >
            <div className="mb-4 inline-flex rounded-lg border border-gray-200 bg-gray-50 p-2 text-gray-700">
              <BookOpenCheck size={18} />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Subjects Taught
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {academics.subjectAreas.map((subject) => (
                <li
                  key={subject}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2"
                >
                  {subject}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            variants={staggerItem}
          >
            <div className="mb-4 inline-flex rounded-lg border border-gray-200 bg-gray-50 p-2 text-gray-700">
              <Briefcase size={18} />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Academic Roles
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {academics.roles.map((role) => (
                <li
                  key={role}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2"
                >
                  {role}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
                <GraduationCap size={16} />
                Academic Focus
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Applied teaching in AI, machine learning, architecture, and
                data-driven systems with practical student outcomes.
              </p>
            </div>
          </motion.article>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Academics;
