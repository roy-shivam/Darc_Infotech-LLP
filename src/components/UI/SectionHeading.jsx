import "../../styles/components/sectionHeading.css";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <div className="section-heading__eyebrow">{eyebrow}</div> : null}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle ? <p className="section-heading__subtitle">{subtitle}</p> : null}
    </div>
  );
}
