import Research from "../components/Research";
import SEO from "../components/SEO";

function ResearchPage({
  areas,
  researchProfile,
  milestones,
  innovationHighlights,
}) {
  return (
    <>
      <SEO
        title="Research | Dr. Priya Surana"
        description="Browse Dr. Priya Surana&apos;s research interests, milestones, and innovation highlights in AI, machine learning, deep learning, and computer vision."
        path="/research"
        image="/og-image.svg"
      />
      <Research
        areas={areas}
        researchProfile={researchProfile}
        milestones={milestones}
        innovationHighlights={innovationHighlights}
      />
    </>
  );
}

export default ResearchPage;
