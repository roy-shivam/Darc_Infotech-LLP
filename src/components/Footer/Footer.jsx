import { Link } from "react-router-dom";
import "../../styles/components/footer.css";
import { brand, contactInfo } from "../../data/siteData.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">
            <img src="/assets/logo.png" alt={`${brand.name} logo`} className="footer__logo" />
            <div>
              <div className="footer__name">{brand.name}</div>
              <div className="footer__tag">{brand.tagline}</div>
            </div>
          </div>
          <p className="footer__about">
            A modern learning platform providing workshops and courses designed for real-world outcomes.
          </p>
          <div className="footer__social">
            {contactInfo.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label} className="footer__socialLink">
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer__heading">Quick Links</div>
          <ul className="footer__list">
            {contactInfo.quickLinks.map((l) => (
              <li key={l.label}>
                {l.to ? <Link to={l.to}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer__heading">Contact</div>
          <ul className="footer__list">
            <li><span className="muted">Address:</span> {contactInfo.address}</li>
            <li><span className="muted">Email:</span> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
            <li><span className="muted">Phone:</span> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
          </ul>
        </div>

        <div>
          <div className="footer__heading">Help & Support</div>
          <ul className="footer__list">
            <li><Link to="/contact#faq">Frequently Asked Questions</Link></li>
            <li><Link to="/contact#privacy">Privacy Policy</Link></li>
            <li><Link to="/contact#terms">Terms & Conditions</Link></li>
            <li><Link to="/contact">Contact Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottomInner">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span className="footer__miniLinks">
            <Link to="/contact#privacy">Privacy</Link>
            <span aria-hidden="true"> · </span>
            <Link to="/contact#terms">Terms</Link>
            <span aria-hidden="true"> · </span>
            <Link to="/contact#cookies">Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
