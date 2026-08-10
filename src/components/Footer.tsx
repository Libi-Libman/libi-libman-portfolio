export default function Footer() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-5 bg-forest-darker px-6 py-5 font-body text-[15px] text-cream-muted sm:px-12">
      <span>&copy; {new Date().getFullYear()} Libi Libman</span>
      <span>
        WCAG 2.2 AA ·{" "}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- placeholder until the accessibility-statement page exists */}
        <a
          href="#"
          className="
            text-pink motion-safe:transition-colors
            hover:text-pink-hover
            focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-teal-accent
          "
        >
          Accessibility statement
          <span className="sr-only"> (page coming soon)</span>
        </a>
      </span>
    </div>
  );
}
