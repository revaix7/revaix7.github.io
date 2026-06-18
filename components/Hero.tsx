import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 pb-20 pt-24 sm:pt-32">
      <div className="animate-fade-up">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-soft">
          {site.role}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          First-year Software Engineering student at the {site.school}. I taught
          coding, 3D modeling, and electronics to kids at the uOttawa summer
          camps, and in my own time {site.tagline.toLowerCase()}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-soft"
          >
            Get in touch
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-accent hover:text-white"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-accent hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
