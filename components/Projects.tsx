import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        Projects
      </h2>
      <p className="mt-3 max-w-2xl text-zinc-400">
        A few things I&apos;ve built — from web apps to games.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
