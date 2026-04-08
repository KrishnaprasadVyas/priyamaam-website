import Projects from "../components/Projects";
import SEO from "../components/SEO";

function ProjectsPage({ projects }) {
  return (
    <>
      <SEO
        title="Projects | Dr. Priya Surana"
        description="Explore Dr. Priya Surana&apos;s selected projects in intelligent systems, mobile applications, and secure computing."
        path="/projects"
        image="/og-image.svg"
      />
      <Projects projects={projects} />
    </>
  )
}

export default ProjectsPage
