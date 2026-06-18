import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-12 text-sm text-zinc-500 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-6">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-zinc-200"
          >
            Email
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-200"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
