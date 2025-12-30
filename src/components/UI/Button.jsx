import { Link } from "react-router-dom";
import "../../styles/components/button.css";

export default function Button({ to, href, onClick, variant = "primary", size = "md", children }) {
  const className = `btn btn--${variant} btn--${size}`;
  if (to) return <Link className={className} to={to}>{children}</Link>;
  if (href) return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
  return <button className={className} onClick={onClick} type="button">{children}</button>;
}
