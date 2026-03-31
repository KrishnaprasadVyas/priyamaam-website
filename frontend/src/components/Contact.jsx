import {
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  SendHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";

function Contact({ emails, links }) {
  const [primaryEmail, secondaryEmail] = emails;

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-6 py-10">
      <motion.div
        className="mx-auto grid max-w-7xl items-center gap-8 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md lg:grid-cols-2"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            Get In Touch
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Feel free to reach out for collaborations or academic queries.
          </p>

          <motion.div
            className="mt-7 space-y-4 text-sm"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-start gap-3"
              variants={staggerItem}
            >
              <Mail size={16} className="mt-0.5 text-gray-500" />
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Primary Email
                </p>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="font-medium text-gray-900 transition-all duration-300 hover:text-black hover:scale-105 inline-block"
                >
                  {primaryEmail}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-3"
              variants={staggerItem}
            >
              <Mail size={16} className="mt-0.5 text-gray-500" />
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Secondary Email
                </p>
                <a
                  href={`mailto:${secondaryEmail}`}
                  className="font-medium text-gray-900 transition-all duration-300 hover:text-black hover:scale-105 inline-block"
                >
                  {secondaryEmail}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start gap-3"
              variants={staggerItem}
            >
              <MapPin size={16} className="mt-0.5 text-gray-500" />
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Location
                </p>
                <p className="font-medium text-gray-900">Pune, India</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg"
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-lg font-semibold text-gray-900">Contact Card</h2>

          <motion.div
            className="mt-4 grid gap-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href={`mailto:${primaryEmail}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-black hover:text-white"
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={15} />
              Email
            </motion.a>
            <motion.a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-black hover:text-white"
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={15} />
              LinkedIn
            </motion.a>
            <motion.a
              href={links.scholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-black hover:text-white"
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <GraduationCap size={15} />
              Google Scholar
            </motion.a>
          </motion.div>

          <motion.form
            className="mt-6 space-y-3 border-t border-gray-200 pt-4"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <p className="text-sm font-medium text-gray-900">Quick Message</p>
            <motion.input
              type="text"
              placeholder="Name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:shadow-md"
              variants={staggerItem}
            />
            <motion.input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:shadow-md"
              variants={staggerItem}
            />
            <motion.textarea
              placeholder="Message"
              rows={4}
              className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:shadow-md"
              variants={staggerItem}
            />
            <motion.button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-900 hover:shadow-lg"
              variants={staggerItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <SendHorizontal size={15} />
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
