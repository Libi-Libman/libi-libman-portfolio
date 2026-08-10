import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function QuestLog() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-4 border-t-[6px] border-cream bg-forest-dark px-6 py-12 sm:px-12"
    >
      <h2
        id="work-heading"
        className="m-0 mb-1.5 font-pixel text-[28px] font-bold text-cream sm:text-[34px]"
      >
        Quest Log
      </h2>
      <p className="m-0 mb-6 font-body text-base text-cream-muted">
        Six entries. Status shown as text, never colour alone.
      </p>
      <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        <li className="grid place-items-center bg-forest-panelAlt p-4 shadow-[0_0_0_4px_theme(colors.cream.DEFAULT)]">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid -- placeholder until the project archive page exists */}
          <a
            href="#"
            className="
              text-center font-mono text-[13px] font-bold leading-relaxed text-cream underline underline-offset-[5px]
              motion-safe:transition-colors
              hover:text-pink
              focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[6px] focus-visible:outline-pink
            "
          >
            ARCHIVE
            <br />
            +12 MORE
            <span className="sr-only"> (page coming soon)</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
