import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        Skills
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-line bg-panel/60 p-6"
          >
            <h3 className="text-sm font-medium uppercase tracking-wider text-accent-soft">
              {group.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-ink/60 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
