import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";

function About({ content, profile }) {
  const expertise = [
    "AI",
    "Machine Learning",
    "Computer Vision",
    "Deep Learning",
  ];
  const roles = [
    {
      title: "Assistant Professor",
      detail:
        "Teaching undergraduate engineering courses with focus on AI-driven applications.",
    },
    {
      title: "Research Coordinator",
      detail:
        "Leading publication, project, and innovation initiatives within the department.",
    },
    {
      title: "Mentor",
      detail:
        "Guiding student teams for research projects, competitions, and career development.",
    },
  ];

  const timeline = [
    { year: "2024", role: "Research Coordinator" },
    { year: "2022", role: "Assistant Professor" },
  ];

  return (
    <section className="bg-linear-to-b from-white to-gray-50 px-6 py-10">
      <motion.div
        className="mx-auto max-w-7xl space-y-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="grid gap-6 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md lg:grid-cols-[1.25fr_1fr]"
          variants={fadeUp}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Academic Overview
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Academic Profile
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-500 sm:text-base">
              {content}
            </p>
          </div>

          <motion.div
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-base font-semibold text-gray-900">
              Profile Card
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="text-gray-500">Name</dt>
                <dd className="font-medium text-gray-900">{profile.name}</dd>
              </div>
              <div>
                <dt className="text-gray-500">Role</dt>
                <dd className="font-medium text-gray-900">
                  {profile.subtitle}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">Department</dt>
                <dd className="font-medium text-gray-900">
                  Computer Engineering
                </dd>
              </div>
              <div>
                <dt className="text-gray-500">College</dt>
                <dd className="font-medium text-gray-900">
                  {profile.organization}
                </dd>
              </div>
            </dl>
          </motion.div>
        </motion.div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Experience & Roles
          </h2>
          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {roles.map((role) => (
              <motion.article
                key={role.title}
                className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {role.detail}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            variants={fadeUp}
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Areas of Expertise
            </h2>
            <motion.div
              className="mt-4 flex flex-wrap gap-2"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {expertise.map((item) => (
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

          <motion.div
            className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            variants={fadeUp}
          >
            <h2 className="text-xl font-semibold text-gray-900">
              Career Timeline
            </h2>
            <motion.div
              className="mt-4 space-y-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {timeline.map((item) => (
                <motion.div
                  key={item.year}
                  className="flex items-center gap-3"
                  variants={staggerItem}
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-black" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500">
                      {item.year}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
