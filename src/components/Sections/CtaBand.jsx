import Container from "../UI/Container.jsx";
import Button from "../UI/Button.jsx";
import "../../styles/sections/ctaBand.css";
import { ctaBand } from "../../data/siteData.js";

export default function CtaBand() {
  return (
    <section className="ctaBand">
      <Container className="ctaBand__inner">
        <div>
          <h3 className="ctaBand__title">{ctaBand.heading}</h3>
          <p className="ctaBand__sub">{ctaBand.subheading}</p>
        </div>
        <div className="ctaBand__actions">
          {ctaBand.actions.map((a) => (
            <Button key={a.label} to={a.to} variant={a.variant}>
              {a.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
