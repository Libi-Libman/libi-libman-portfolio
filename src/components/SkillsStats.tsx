import { skills, SKILL_BAR_MAX } from "../data/skills";

export default function SkillsStats() {
  return (
    <div>
      <h2
        id="stats-heading"
        className="m-0 mb-5 font-pixel text-[28px] font-bold text-cream sm:text-[34px]"
      >
        Stats
      </h2>
      <dl className="m-0 grid gap-4">
        {skills.map((skill) => (
          <div key={skill.label}>
            <dt className="mb-[7px] font-mono text-xs font-bold text-pink">
              {skill.label.toUpperCase()} — {skill.level.toUpperCase()}
            </dt>
            <dd
              role="img"
              aria-label={`${skill.label}: ${skill.level}, ${skill.score} of ${SKILL_BAR_MAX}`}
              className="m-0 flex gap-1"
            >
              {Array.from({ length: SKILL_BAR_MAX }, (_, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className={
                    "h-4 w-full " +
                    (i < skill.score ? "bg-pink" : "bg-forest-border")
                  }
                />
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
