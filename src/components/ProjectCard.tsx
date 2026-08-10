import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="bg-forest-panel p-4 shadow-[0_0_0_4px_theme(colors.cream.DEFAULT)]">
      <div
        role="img"
        aria-label="Placeholder for a project screenshot"
        className="grid h-[140px] place-items-center bg-[repeating-linear-gradient(45deg,#1d7568_0_8px,#175f55_8px_16px)] shadow-[0_0_0_3px_theme(colors.cream.DEFAULT)]"
      >
        <span className="bg-forest-dark px-[7px] py-[5px] font-mono text-[10px] text-cream">
          shot 720&times;420
        </span>
      </div>
      <h3 className="mb-2 mt-3.5 font-pixel text-[19px] font-bold leading-tight">
        <a
          href={project.href}
          className="
            text-cream underline decoration-[3px] underline-offset-4
            motion-safe:transition-colors
            hover:text-pink
            focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-pink
          "
        >
          {project.title}
          <span className="sr-only"> (case study coming soon)</span>
        </a>
      </h3>
      <p className="mb-3 font-body text-[15px] leading-relaxed text-cream-soft">
        {project.description}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <p className="m-0 font-mono text-[11px] text-cream-muted">
          {project.tags}
        </p>
        <span
          className={
            "px-2 py-1.5 font-mono text-[10px] font-bold text-forest-dark " +
            (project.status === "Shipped" ? "bg-teal-accent" : "bg-pink")
          }
        >
          {project.status === "Shipped" ? "SHIPPED" : "IN PROGRESS"}
        </span>
      </div>
    </li>
  );
}
