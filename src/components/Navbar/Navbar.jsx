import { NavLink, Link } from "react-router-dom";
import { brand, navLinks } from "../../data/siteData.js";
import Button from "../UI/Button.jsx";
import "../../styles/components/navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link to="/" className="nav__brand" aria-label={`${brand.name} home`}>
          <div className="nav__logo" aria-hidden="true">E</div>
          <div className="nav__brandText">
            <div className="nav__brandName">{brand.name}</div>
            <div className="nav__brandTag">{brand.tagline}</div>
          </div>
        </Link>

        <button
          className="nav__burger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open ? "true" : "false"}
          aria-label="Toggle navigation"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="nav__cta">
            <Button to={brand.primaryCta.to} variant="primary" size="sm">
              {brand.primaryCta.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
