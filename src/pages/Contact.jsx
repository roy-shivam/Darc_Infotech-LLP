import { useMemo, useState } from "react";
import Container from "../components/UI/Container.jsx";
import SectionHeading from "../components/UI/SectionHeading.jsx";
import Button from "../components/UI/Button.jsx";
import Card from "../components/UI/Card.jsx";
import { contactInfo } from "../data/siteData.js";

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });

  const canSubmit = useMemo(() => {
    return form.name.trim() && isEmail(form.email) && form.message.trim().length >= 10;
  }, [form]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo-only; hook this to your backend later.
    setStatus({ type: "success", text: "Thanks! We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setStatus({ type: "", text: "" }), 2500);
  };

  return (
    <div className="page">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          subtitle="Share your requirements and we’ll suggest the right plan."
          align="left"
        />

        <div className="contact-grid">
          <Card className="p-18">
            <h3 className="h3">Send a message</h3>

            {status.text ? (
              <div className={`alert ${status.type === "success" ? "alert--success" : "alert--error"}`}>
                {status.text}
              </div>
            ) : null}

            <form className="form" onSubmit={onSubmit}>
              <label className="field">
                <span>Name</span>
                <input name="name" value={form.name} onChange={onChange} placeholder="Your name" />
              </label>

              <label className="field">
                <span>Email</span>
                <input name="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
              </label>

              <label className="field">
                <span>Phone (optional)</span>
                <input name="phone" value={form.phone} onChange={onChange} placeholder="+91..." />
              </label>

              <label className="field">
                <span>Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us what you want to build…"
                  rows="5"
                />
              </label>

              <div className="form-actions">
                <Button variant="primary" to={null} href={null} onClick={canSubmit ? undefined : (e)=>e.preventDefault()}>
                  Submit
                </Button>
                <span className="muted">Minimum 10 characters in message.</span>
              </div>
            </form>
          </Card>

          <Card className="p-18">
            <h3 className="h3">Reach us</h3>
            <ul className="list">
              <li><span className="muted">Address:</span> {contactInfo.address}</li>
              <li><span className="muted">Email:</span> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
              <li><span className="muted">Phone:</span> <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></li>
            </ul>

            <div className="mt-16">
              <h4 className="h4">FAQs</h4>
              <div id="faq" className="muted">
                Add your frequently asked questions here.
              </div>
            </div>

            <div className="mt-16" id="privacy">
              <h4 className="h4">Privacy Policy</h4>
              <div className="muted">
                Link your privacy policy here. Keep it short, clear, and user-friendly.
              </div>
            </div>

            <div className="mt-16" id="terms">
              <h4 className="h4">Terms</h4>
              <div className="muted">
                Add your terms & conditions here.
              </div>
            </div>

            <div className="mt-16" id="cookies">
              <h4 className="h4">Cookies</h4>
              <div className="muted">
                Mention how your site uses cookies (if applicable).
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
