import Container from "../components/UI/Container.jsx";
import SectionHeading from "../components/UI/SectionHeading.jsx";
import TestimonialsSection from "../components/Sections/TestimonialsSection.jsx";

export default function Reviews() {
  return (
    <div className="page">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="Learner feedback"
          subtitle="A snapshot of what people liked about the experience."
          align="left"
        />
      </Container>
      <TestimonialsSection />
    </div>
  );
}
