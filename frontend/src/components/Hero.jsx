import { ArrowRight, GraduationCap, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";

function Hero({
  profile,
  researchAreas,
  publicationsCount,
  certificationsCount,
}) {
  const [imageFallback, setImageFallback] = useState(false);

  const yearsOfExperience = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const assumedStartYear = 2020;
    return Math.max(1, currentYear - assumedStartYear + 1);
  }, []);

  const highlights = [
    { label: "Publications", value: `${publicationsCount}+` },
    { label: "Workshops", value: `${researchAreas.length}+` },
    { label: "Years of Experience", value: `${yearsOfExperience}+` },
    { label: "Certifications", value: `${certificationsCount}+` },
  ];

  const profileImage = imageFallback
    ? "https://ui-avatars.com/api/?name=Priya+Surana&background=f3f4f6&color=111111&size=720"
    : "/assets/priya-surana/profile/priya-surana.jpg";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-6 py-16">
      <div className="pointer-events-none absolute -right-16 top-10 h-64 w-64 rounded-full bg-black/5 blur-3xl" />

      <motion.div
        className="mx-auto max-w-7xl space-y-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div variants={fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              {profile.organization}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-gray-700 sm:text-xl">
              {profile.subtitle}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/research"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  View Research
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-black hover:text-white"
                >
                  Contact
                  <Mail size={15} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="mt-5 flex flex-wrap gap-4 text-sm"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href={profile.links.linkedin || "https://www.linkedin.com/"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:scale-105"
                variants={staggerItem}
              >
                <Linkedin size={15} /> LinkedIn
              </motion.a>
              <motion.a
                href={profile.links.scholar || "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 transition-all duration-300 hover:text-gray-900 hover:scale-105"
                variants={staggerItem}
              >
                <GraduationCap size={15} /> Google Scholar
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-md lg:ml-auto lg:mr-0"
            variants={fadeUp}
          >
            <motion.div
              className="animate-float rounded-xl border border-gray-200 bg-white/70 p-2 shadow-lg backdrop-blur-sm transition-all duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <img
                src={profileImage}
                alt={profile.name}
                className="h-[360px] w-full rounded-xl object-cover transition-all duration-300 sm:h-[420px] hover:brightness-105"
                onError={() => setImageFallback(true)}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="space-y-4 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          variants={fadeUp}
        >
          <h2 className="text-lg font-semibold text-gray-900">
            Research Interests
          </h2>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {researchAreas.map((area) => (
              <motion.span
                key={area}
                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
              >
                {area}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Highlights</h2>
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {highlights.map((item) => (
              <motion.article
                key={item.label}
                className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-2xl font-bold tracking-tight text-gray-900">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-gray-500">{item.label}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
