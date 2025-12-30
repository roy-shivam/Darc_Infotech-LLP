import Container from "../components/UI/Container.jsx";
import SectionHeading from "../components/UI/SectionHeading.jsx";
import Card from "../components/UI/Card.jsx";
import Button from "../components/UI/Button.jsx";

const blocks = [
  {
    title: "Mentorship",
    desc: "Weekly guidance to unblock you, review projects, and keep you accountable.",
  },
  {
    title: "Projects",
    desc: "Build portfolio-ready projects with real-world constraints and best practices.",
  },
  {
    title: "Interview Prep",
    desc: "Mock interviews, resume review, and role-specific question practice.",
  },
];

export default function Training() {
  return (
    <div className="page">
      <Container>
        <SectionHeading
          eyebrow="Training"
          title="Mentorship + projects + interview prep"
          subtitle="A complete support system to help you progress consistently."
          align="left"
        />

        <div className="grid-3">
          {blocks.map((b) => (
            <Card key={b.title} className="p-18">
              <h3 className="h3">{b.title}</h3>
              <p className="muted">{b.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <Button to="/contact" variant="primary">Talk to us</Button>
        </div>
      </Container>
    </div>
  );
}
