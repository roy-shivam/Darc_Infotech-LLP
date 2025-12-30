import { useMemo, useState } from "react";
import Container from "../UI/Container.jsx";
import SectionHeading from "../UI/SectionHeading.jsx";
import Card from "../UI/Card.jsx";
import "../../styles/sections/testimonials.css";
import { testimonials } from "../../data/siteData.js";

const Stars = ({ rating }) => {
  const stars = useMemo(() => Array.from({ length: 5 }, (_, i) => i < rating), [rating]);
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {stars.map((on, i) => (
        <span key={i} className={`star ${on ? "is-on" : ""}`} aria-hidden="true">★</span>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const items = testimonials.items;

  const prev = () => setIdx((v) => (v - 1 + items.length) % items.length);
  const next = () => setIdx((v) => (v + 1) % items.length);

  const current = items[idx];

  return (
    <section className="testimonials">
      <Container>
        <SectionHeading title={testimonials.heading} subtitle={testimonials.subheading} />

        <div className="testimonials__wrap">
          <button className="tbtn" onClick={prev} aria-label="Previous review" type="button">‹</button>

          <Card className="testimonials__card">
            <div className="testimonials__top">
              <div className="avatar" aria-hidden="true">{current.name.slice(0, 1)}</div>
              <div>
                <div className="tname">{current.name}</div>
                <div className="trole">{current.role}</div>
              </div>
            </div>
            <Stars rating={current.rating} />
            <p className="tquote">“{current.quote}”</p>

            <div className="tdots" role="tablist" aria-label="Select testimonial">
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`tdot ${i === idx ? "is-active" : ""}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  type="button"
                />
              ))}
            </div>
          </Card>

          <button className="tbtn" onClick={next} aria-label="Next review" type="button">›</button>
        </div>
      </Container>
    </section>
  );
}
