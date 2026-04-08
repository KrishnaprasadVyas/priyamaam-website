import Hero from "../components/Hero";
import SEO from "../components/SEO";
import { buildAbsoluteUrl, buildSameAsLinks, siteName } from "../utils/siteMetadata";

function HomePage({ profile, researchAreas, publicationsCount, certificationsCount }) {
  const sameAs = buildSameAsLinks(profile.links);
  const heroImage = "/assets/priya-surana/profile/hero-portrait.svg";
  const personSchema = {
    "@type": "Person",
    name: "Dr. Priya Surana",
    alternateName: profile.name,
    jobTitle: profile.title,
    description: profile.tagline,
    url: buildAbsoluteUrl("/"),
    image: buildAbsoluteUrl(heroImage),
    sameAs,
    worksFor: {
      "@type": "Organization",
      name: profile.organization,
    },
  };

  const websiteSchema = {
    "@type": "WebSite",
    name: siteName,
    url: buildAbsoluteUrl("/"),
    description:
      "Official website of Dr. Priya Surana, Assistant Professor, researcher, and AI practitioner.",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${buildAbsoluteUrl("/")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <SEO
        title="Dr. Priya Surana | Assistant Professor, Researcher & AI Expert"
        description="Dr. Priya Surana is an Assistant Professor in Computer Engineering focused on AI, machine learning, research mentoring, and academic innovation at PCCOE, Pune."
        path="/"
        image={heroImage}
        keywords={[
          "Dr. Priya Surana",
          "Assistant Professor",
          "AI",
          "Machine Learning",
          "Computer Engineering",
          "PCCOE Pune",
        ]}
        schema={[personSchema, websiteSchema]}
      />
      <Hero
        profile={profile}
        researchAreas={researchAreas}
        publicationsCount={publicationsCount}
        certificationsCount={certificationsCount}
      />
    </>
  )
}

export default HomePage
