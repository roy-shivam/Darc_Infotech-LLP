import Container from "../UI/Container.jsx";
import Button from "../UI/Button.jsx";
import Badge from "../UI/Badge.jsx";
import "../../styles/sections/hero.css";
import { hero } from "../../data/siteData.js";

export default function Hero() {
  return (
    <section className="hero">
      <Container className="hero__grid">
        <div className="hero__content">
          <div className="hero__eyebrow">{hero.eyebrow}</div>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__badges" aria-label="Highlights">
            {hero.badges.map((b) => (
              <Badge key={b.label} title={b.hint}>{b.label}</Badge>
            ))}
          </div>

          <div className="hero__cta">
            {hero.ctas.map((c) => (
              <Button key={c.label} to={c.to} variant={c.variant}>
                {c.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="hero__media" aria-label="Hero image">
          <div className="hero__imgWrap">
            <img src={hero.image.src} alt={hero.image.alt} loading="lazy" />
            <div className="hero__chip hero__chip--top">Inquiry approved</div>
            <div className="hero__chip hero__chip--bottom">Industry mentors</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
