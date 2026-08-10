const stats = [
  { value: "14.2:1", label: "body text contrast" },
  { value: "0", label: "auto-playing animations" },
  { value: "100%", label: "keyboard reachable" },
  { value: "AA+", label: "WCAG 2.2 target" },
];

export default function A11yStats() {
  return (
    <ul className="mt-7 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-4">
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="bg-forest-panel px-4 py-3.5 shadow-[0_0_0_3px_theme(colors.forest.border)]"
        >
          <span className="block font-pixel text-[22px] font-bold text-pink">
            {stat.value}
          </span>
          <span className="font-body text-sm text-cream-soft">
            {stat.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
