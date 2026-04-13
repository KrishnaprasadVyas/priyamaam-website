import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { certificates } from "./data/certificate";
import {
  academics,
  aboutText,
  featuredPublications,
  innovationHighlights,
  navItems,
  profile,
  projects,
  publications,
  researchAreas,
  researchMilestones,
  researchProfile,
} from "./data/portfolioData";
const AcademicsPage = lazy(() => import("./pages/AcademicsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CertificatesPage = lazy(() => import("./pages/CertificatesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const PublicationsPage = lazy(() => import("./pages/PublicationsPage"));
const ResearchPage = lazy(() => import("./pages/ResearchPage"));

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <MotionConfig transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
      <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-white text-[#111111]">
        <ScrollToTopOnRouteChange />
        <CursorGlow />
        <Navbar items={navItems} />

        <main>
          <Suspense
            fallback={
              <div className="flex min-h-[55vh] items-center justify-center px-6 text-sm text-gray-500">
                Loading route...
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    profile={profile}
                    researchAreas={researchAreas}
                    publicationsCount={publications.length}
                    certificationsCount={certificates.length}
                  />
                }
              />
              <Route
                path="/about"
                element={<AboutPage content={aboutText} profile={profile} />}
              />
              <Route
                path="/academics"
                element={
                  <AcademicsPage academics={academics} profile={profile} />
                }
              />
              <Route
                path="/research"
                element={
                  <ResearchPage
                    areas={researchAreas}
                    researchProfile={researchProfile}
                    milestones={researchMilestones}
                    innovationHighlights={innovationHighlights}
                  />
                }
              />
              <Route
                path="/publications"
                element={
                  <PublicationsPage
                    items={publications}
                    scholarLink={profile.links.scholar}
                    featuredItems={featuredPublications}
                  />
                }
              />
              <Route path="/achievements" element={<CertificatesPage />} />
              <Route
                path="/projects"
                element={<ProjectsPage projects={projects} />}
              />
              <Route
                path="/contact"
                element={
                  <ContactPage emails={profile.emails} links={profile.links} />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer profile={profile} navItems={navItems} />
      </div>
    </MotionConfig>
  );
}

export default App;
