export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="m-0 font-pixel text-[56px] font-bold leading-[0.92] tracking-[-0.01em] text-cream sm:text-[72px] lg:text-[96px]">
        LIBI
        <br />
        LIBMAN
      </h1>
      <p className="mx-auto mt-6 max-w-[52ch] text-balance font-body text-lg leading-relaxed text-cream-soft sm:text-xl lg:text-[21px]">
        Frontend & Accessibility Engineer. With over eight years of
        experience as a frontend engineer, I&rsquo;ve contributed to building
        high-performance, accessible web applications. My work
        focuses on architecting and implementing WCAG 2.1-compliant web
        components, conducting accessibility audits, and fostering a culture
        of inclusivity through mentoring and cross-department collaboration.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3.5">
        <a href="#work" className="btn-pixel-primary">
          OPEN QUEST LOG
        </a>
        <a
          href="/Libi Libman - resume.pdf"
          className="btn-pixel-secondary"
          aria-describedby="resume-note"
        >
          RESUME (PDF)
        </a>
      </div>
      <p id="resume-note" className="sr-only">
        Placeholder link — résumé coming soon.
      </p>
      <div
        aria-hidden="true"
        className="mt-11 h-4 bg-[repeating-linear-gradient(90deg,#f4efec_0_16px,transparent_16px_32px)]"
      />
    </div>
  );
}
