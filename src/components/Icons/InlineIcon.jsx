import "../../styles/components/icons.css";

const icons = {
  code: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 6l-4 12" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0-16 0" />
      <path d="M12 12l6-6M12 12v-8" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.5 6L20 10l-6.5 2L12 18l-1.5-6L4 10l6.5-2L12 2z" />
    </svg>
  ),
  cap: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l10 5-10 5L2 8l10-5z" />
      <path d="M6 10v6c0 2 3 4 6 4s6-2 6-4v-6" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <path d="M3 8h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z" />
      <path d="M3 13h18" />
    </svg>
  ),
  hand: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 11V6a1 1 0 0 1 2 0v5" />
      <path d="M9 11V5a1 1 0 0 1 2 0v6" />
      <path d="M11 11V6a1 1 0 0 1 2 0v5" />
      <path d="M13 11V7a1 1 0 0 1 2 0v7c0 4-2 7-6 7-3 0-5-2-5-5v-3a1 1 0 0 1 2 0v1" />
    </svg>
  ),
};

export default function InlineIcon({ name }) {
  return <span className="icon">{icons[name] || icons.code}</span>;
}
