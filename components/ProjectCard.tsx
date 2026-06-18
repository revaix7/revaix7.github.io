import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-line bg-panel/60 p-6 transition-colors hover:border-accent/60">
      <h3 className="text-lg font-semibold text-zinc-50">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.blurb}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-soft"
          >
            {t}
          </li>
        ))}
      </ul>

      {(project.repo || project.demo) && (
        <div className="mt-5 flex gap-4 text-sm">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Code →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent-soft transition-colors hover:text-white"
            >
              Live demo →
            </a>
          )}
        </div>
      )}
    </article>
  );
}
