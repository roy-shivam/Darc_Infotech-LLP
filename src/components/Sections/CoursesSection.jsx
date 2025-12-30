import Container from "../UI/Container.jsx";
import SectionHeading from "../UI/SectionHeading.jsx";
import Card from "../UI/Card.jsx";
import Button from "../UI/Button.jsx";
import "../../styles/sections/courses.css";
import { courses } from "../../data/siteData.js";

export default function CoursesSection() {
  return (
    <section className="courses">
      <Container>
        <SectionHeading
          title={courses.heading}
          subtitle={courses.subheading}
        />

        <div className="courses__grid">
          {courses.items.map((c) => (
            <Card key={c.title} className="courses__card">
              <div className="courses__thumb">
                <img src={c.image} alt={`${c.title} cover`} loading="lazy" />
                {c.badge ? <div className="courses__badge">{c.badge}</div> : null}
              </div>

              <div className="courses__body">
                <h3 className="courses__title">{c.title}</h3>
                <p className="courses__desc">{c.description}</p>
                <div className="courses__tags">
                  {c.tags.map((t) => (
                    <span className="courses__tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <div className="courses__footer">
                <Button to={c.cta.to} variant="secondary" size="sm">
                  {c.cta.label}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="courses__more">
          <Button to="/courses" variant="primary">
            View all courses →
          </Button>
        </div>
      </Container>
    </section>
  );
}
