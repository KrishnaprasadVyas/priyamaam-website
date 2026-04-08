import Publications from "../components/Publications";
import SEO from "../components/SEO";

function PublicationsPage({ items, scholarLink, featuredItems }) {
  return (
    <>
      <SEO
        title="Publications | Dr. Priya Surana"
        description="View Dr. Priya Surana&apos;s research publications, featured conference work, and scholarly output in AI, machine learning, and applied computing."
        path="/publications"
        image="/og-image.svg"
      />
      <Publications
        items={items}
        scholarLink={scholarLink}
        featuredItems={featuredItems}
      />
    </>
  );
}

export default PublicationsPage;
