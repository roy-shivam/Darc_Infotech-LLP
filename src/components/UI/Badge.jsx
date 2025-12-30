import "../../styles/components/badge.css";

export default function Badge({ children, title }) {
  return (
    <span className="badge" title={title}>
      {children}
    </span>
  );
}
