import Container from "../components/UI/Container.jsx";
import SectionHeading from "../components/UI/SectionHeading.jsx";
import WorkshopsSection from "../components/Sections/WorkshopsSection.jsx";

export default function Workshops() {
  return (
    <div className="page">
      <Container>
        <SectionHeading
          eyebrow="Workshops"
          title="Hands-on technical workshops"
          subtitle="Pick a short sprint to learn a skill fast and build a mini-project."
          align="left"
        />
      </Container>
      <WorkshopsSection />
    </div>
  );
}
