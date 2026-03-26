import { Navigate, Route, Routes } from 'react-router-dom'
import CursorGlow from './components/CursorGlow'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { certificates } from './data/certificate'
import {
  aboutText,
  navItems,
  profile,
  projects,
  publications,
  researchAreas,
} from './data/portfolioData'
import AboutPage from './pages/AboutPage'
import CertificatesPage from './pages/CertificatesPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import PublicationsPage from './pages/PublicationsPage'
import ResearchPage from './pages/ResearchPage'

function App() {
  return (
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
          <Route path="/about" element={<AboutPage content={aboutText} profile={profile} />} />
          <Route path="/research" element={<ResearchPage areas={researchAreas} />} />
          <Route
            path="/publications"
            element={<PublicationsPage items={publications} scholarLink={profile.links.scholar} />}
          />
          <Route path="/achievements" element={<CertificatesPage />} />
          <Route path="/projects" element={<ProjectsPage projects={projects} />} />
          <Route path="/contact" element={<ContactPage emails={profile.emails} links={profile.links} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer name={profile.name} />
    </div>
  )
}

export default App
