export default function SkipLink() {
  return (
    // Deliberately visible at all times, not just on focus — the page's
    // own accessibility audit calls this out as a checked item below.
    <a
      href="#main"
      className="
        inline-block shrink-0 bg-pink px-3 py-2
        font-mono text-[11px] font-bold text-forest-dark no-underline
        motion-safe:transition-colors
        hover:bg-pink-hover
        focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-teal-accent
      "
    >
      Skip to content
    </a>
  );
}
