import Container from "../components/UI/Container.jsx";
import SectionHeading from "../components/UI/SectionHeading.jsx";
import Card from "../components/UI/Card.jsx";
import Button from "../components/UI/Button.jsx";

const plans = [
  { name: "Starter", price: "₹0", desc: "Free orientation + roadmap", perks: ["Roadmap call", "Workshop recommendations", "Community access"] },
  { name: "Pro", price: "₹9,999", desc: "Mentorship + projects", perks: ["Weekly mentorship", "Project reviews", "Mock interviews"] },
  { name: "Career", price: "₹19,999", desc: "Everything + placement prep", perks: ["Everything in Pro", "Resume + LinkedIn", "Placement guidance"] },
];

export default function Enroll() {
  return (
    <div className="page">
      <Container>
        <SectionHeading
          eyebrow="Enroll"
          title="Choose a plan"
          subtitle="Pick a starting point. You can upgrade later as you progress."
          align="left"
        />

        <div className="grid-3">
          {plans.map((p) => (
            <Card key={p.name} className="p-18">
              <div className="planTop">
                <div className="h3">{p.name}</div>
                <div className="price">{p.price}</div>
              </div>
              <div className="muted">{p.desc}</div>
              <ul className="list mt-12">
                {p.perks.map((x) => <li key={x}>• {x}</li>)}
              </ul>
              <div className="mt-16">
                <Button to="/contact" variant="primary" size="sm">Get started</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
