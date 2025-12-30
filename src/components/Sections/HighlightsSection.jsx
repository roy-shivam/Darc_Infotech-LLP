import Container from "../UI/Container.jsx";
import SectionHeading from "../UI/SectionHeading.jsx";
import "../../styles/sections/highlights.css";
import { highlights } from "../../data/siteData.js";

export default function HighlightsSection() {
  return (
    <section className="highlights">
      <Container>
        <SectionHeading title={highlights.heading} />
        <div className="highlights__grid">
          {highlights.items.map((h, i) => (
            <figure key={i} className="highlights__item">
              <img src={h.src} alt={h.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
