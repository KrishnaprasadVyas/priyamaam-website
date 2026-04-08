import Academics from "../components/Academics";
import SEO from "../components/SEO";

function AcademicsPage({ academics, profile }) {
  return (
    <>
      <SEO
        title="Academics | Dr. Priya Surana"
        description="Explore Dr. Priya Surana&apos;s teaching areas, academic roles, and mentoring focus in computer engineering."
        path="/academics"
        image="/og-image.svg"
      />
      <Academics academics={academics} profile={profile} />
    </>
  );
}

export default AcademicsPage;
