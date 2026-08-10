const checks = [
  "Skip link is visible, not hidden until focus",
  "4px focus outline with offset on every control",
  "Pixel type used for headings only; body set in Atkinson Hyperlegible at 16px+",
  "Decorative pixel art carries no meaning; status is written out",
  "Nothing animates without a hover or focus",
];

export default function AuditChecklist() {
  return (
    <div>
      <h2
        id="audit-heading"
        className="m-0 mb-5 font-pixel text-[28px] font-bold text-cream sm:text-[34px]"
      >
        This page, audited
      </h2>
      <ul className="m-0 grid list-none gap-2.5 p-0 font-body text-base leading-relaxed text-cream-soft">
        {checks.map((check) => (
          <li
            key={check}
            className="flex gap-3 bg-forest-panel px-4 py-3.5 shadow-[0_0_0_3px_theme(colors.forest.border)]"
          >
            <span className="font-mono text-xs font-bold text-teal-accent">
              [OK]
            </span>
            {check}
          </li>
        ))}
      </ul>
    </div>
  );
}
