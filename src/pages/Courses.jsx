import Container from "../components/UI/Container.jsx";
import SectionHeading from "../components/UI/SectionHeading.jsx";
import CoursesSection from "../components/Sections/CoursesSection.jsx";

export default function Courses() {
  return (
    <div className="page">
      <Container>
        <SectionHeading
          eyebrow="Courses"
          title="Structured learning paths"
          subtitle="Longer programs designed to make you job-ready with projects and mentorship."
          align="left"
        />
      </Container>
      <CoursesSection />
    </div>
  );
}
