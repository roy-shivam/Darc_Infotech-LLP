import Container from "../UI/Container.jsx";
import SectionHeading from "../UI/SectionHeading.jsx";
import Card from "../UI/Card.jsx";
import Button from "../UI/Button.jsx";
import "../../styles/sections/workshops.css";
import { workshops } from "../../data/siteData.js";

export default function WorkshopsSection() {
  return (
    <section className="workshops">
      <Container>
        <SectionHeading
          title={workshops.heading}
          subtitle={workshops.subheading}
          align="center"
        />
        <div className="workshops__grid">
          {workshops.items.map((w) => (
            <Card key={w.title} className="workshops__card">
              <div className="workshops__thumb">
                <img src={w.image} alt={`${w.title} cover`} loading="lazy" />
                <div className="workshops__tag">{w.tag}</div>
              </div>
              <div className="workshops__body">
                <h3 className="workshops__title">{w.title}</h3>
                <div className="workshops__level">{w.level}</div>
                <p className="workshops__desc">{w.description}</p>
              </div>
              <div className="workshops__footer">
                <Button to={w.to} variant="secondary" size="sm">
                  Learn more →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="workshops__more">
          <Button to="/workshops" variant="primary">
            View all workshops →
          </Button>
        </div>
      </Container>
    </section>
  );
}
