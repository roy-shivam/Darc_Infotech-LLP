import Container from "../UI/Container.jsx";
import SectionHeading from "../UI/SectionHeading.jsx";
import Card from "../UI/Card.jsx";
import InlineIcon from "../Icons/InlineIcon.jsx";
import Button from "../UI/Button.jsx";
import "../../styles/sections/ecosystem.css";
import { ecosystem } from "../../data/siteData.js";

export default function EcosystemSection() {
  return (
    <section className="ecosystem">
      <Container>
        <SectionHeading
          eyebrow={ecosystem.eyebrow}
          title={ecosystem.heading}
          subtitle={ecosystem.subheading}
        />

        <div className="ecosystem__pill">
          <InlineIcon name="spark" />
          <span>{ecosystem.highlight}</span>
        </div>

        <div className="ecosystem__grid">
          {ecosystem.cards.map((c) => (
            <Card key={c.title} className="ecosystem__card">
              <div className="ecosystem__icon">
                <InlineIcon name={c.icon} />
              </div>
              <h3 className="ecosystem__title">{c.title}</h3>
              <p className="ecosystem__desc">{c.description}</p>
              <div className="ecosystem__action">
                <Button to="/training" variant="ghost" size="sm">
                  Explore →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
