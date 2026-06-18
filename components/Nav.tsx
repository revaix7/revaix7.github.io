import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight text-zinc-100">
          {site.name}
        </a>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
