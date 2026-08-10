import SkipLink from "./SkipLink";

const navLinks = [
  { href: "#work", label: "Quests" },
  { href: "#stats", label: "Stats" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-forest-dark px-5 py-2.5">
      <SkipLink />
      <span className="font-pixel text-[13px] font-bold tracking-[0.04em]">
        L.LIBMAN
      </span>
      <nav
        aria-label="Main"
        className="ml-auto flex flex-wrap gap-5 font-body text-[15px]"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="
              text-cream underline decoration-1 underline-offset-4
              motion-safe:transition-colors
              hover:text-pink
              focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-teal-accent
            "
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
