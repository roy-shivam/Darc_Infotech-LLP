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
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" fill="currentColor"/>
      <path d="M6 10h4v8H6z" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 10c1.66 0 3 1.34 3 3v5h-4v-5c0-.55-.45-1-1-1s-1 .45-1 1v5h-4v-5c0-2.21 1.79-4 4-4z" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <rect x="2" y="3" width="20" height="18" rx="2.18" ry="2.18" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 12l5 3v-6l-5 3z" fill="currentColor"/>
      <path d="M12 9v6m5-6v6" fill="none" stroke="currentColor" strokeWidth="1"/>
    </svg>
  ),
};

export default function InlineIcon({ name }) {
  return <span className="icon">{icons[name] || icons.code}</span>;
}
