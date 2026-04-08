import About from "../components/About";
import SEO from "../components/SEO";

function AboutPage({ content, profile }) {
  return (
    <>
      <SEO
        title="About Dr. Priya Surana | Academic Profile"
        description="Learn about Dr. Priya Surana&apos;s academic background, teaching focus, research mentoring, and work in AI, machine learning, and computer vision."
        path="/about"
        image="/og-image.svg"
        keywords={[
          "Dr. Priya Surana",
          "Academic Profile",
          "AI",
          "Machine Learning",
          "Computer Vision",
        ]}
      />
      <About content={content} profile={profile} />
    </>
  )
}

export default AboutPage
