import Research from "../components/Research";

function ResearchPage({
  areas,
  researchProfile,
  milestones,
  innovationHighlights,
}) {
  return (
    <Research
      areas={areas}
      researchProfile={researchProfile}
      milestones={milestones}
      innovationHighlights={innovationHighlights}
    />
  );
}

export default ResearchPage;
