import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

function Footer({ profile, navItems }) {
  const year = new Date().getFullYear();
  const [primaryEmail] = profile.emails;

  return (
    <footer className="mt-14 border-t border-gray-200 bg-gradient-to-b from-white to-gray-100 px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-gray-600 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Dr. Priya Surana
          </h3>
          <p className="mt-2 text-sm leading-relaxed">
            Assistant Professor in Computer Engineering at PCCOE Pune, focused
            on teaching, research, mentoring, and innovation-led academic
            outcomes.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-gray-300 p-2 text-gray-700 transition-all duration-300 hover:bg-black hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={profile.links.scholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-gray-300 p-2 text-gray-700 transition-all duration-300 hover:bg-black hover:text-white"
              aria-label="Google Scholar"
            >
              <GraduationCap size={15} />
            </a>
            {profile.links.github ? (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-gray-300 p-2 text-gray-700 transition-all duration-300 hover:bg-black hover:text-white"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
            ) : null}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2">
            <li>
              <Link
                to="/"
                className="transition-all duration-300 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="transition-all duration-300 hover:text-gray-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
            Contact
          </h4>
          <p className="mt-3">PCCOE, Pune</p>
          <p>Maharashtra, India</p>
          <a
            href={`mailto:${primaryEmail}`}
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5 font-medium text-gray-900 transition-all duration-300 hover:bg-black hover:text-white"
          >
            <Mail size={14} />
            {primaryEmail}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-gray-200 pt-4 text-xs text-gray-500">
        © {year} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
