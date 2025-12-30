import Container from "../UI/Container.jsx";
import "../../styles/sections/trustedBy.css";
import { hero } from "../../data/siteData.js";

export default function TrustedBy() {
  const { trust } = hero;
  return (
    <section className="trusted">
      <Container>
        <div className="trusted__label">{trust.label}</div>
        <div className="trusted__row" role="list">
          {trust.logos.map((l) => (
            <div key={l.name} className="trusted__logo" role="listitem">
              <img src={l.src} alt={l.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
