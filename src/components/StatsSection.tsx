import SkillsStats from "./SkillsStats";
import AuditChecklist from "./AuditChecklist";

export default function StatsSection() {
  return (
    <div
      id="stats"
      className="scroll-mt-4 grid grid-cols-1 gap-11 border-t-[6px] border-cream bg-forest px-6 py-12 sm:px-12 lg:grid-cols-2"
    >
      <section aria-labelledby="stats-heading">
        <SkillsStats />
      </section>
      <section aria-labelledby="audit-heading">
        <AuditChecklist />
      </section>
    </div>
  );
}
