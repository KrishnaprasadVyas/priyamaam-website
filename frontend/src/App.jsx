import { Navigate, Route, Routes } from "react-router-dom";
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
import AcademicsPage from "./pages/AcademicsPage";
import AboutPage from "./pages/AboutPage";
import CertificatesPage from "./pages/CertificatesPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import PublicationsPage from "./pages/PublicationsPage";
import ResearchPage from "./pages/ResearchPage";

function App() {
  return (
    <MotionConfig transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-[#111111]">
        <CursorGlow />
        <Navbar items={navItems} />

        <main>
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer profile={profile} navItems={navItems} />
      </div>
    </MotionConfig>
  );
}

export default App;
