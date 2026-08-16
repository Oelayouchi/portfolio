// ============================================================================
// Shared UI components
// ============================================================================

/**
 * Displays a list of technologies as small visual tags.
 */
export function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

/**
 * Small uppercase label used at the beginning of each section.
 */
export function SectionLabel({ children }) {
  return <p className="eyebrow">{children}</p>;
}
