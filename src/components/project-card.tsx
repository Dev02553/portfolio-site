import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border p-5 hover:bg-muted/30 transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
        </div>

        <span className="text-xs rounded-md border px-2 py-1 text-muted-foreground">
          {project.status}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full border px-2 py-1 text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
        {project.stack.slice(0, 5).map((s) => (
          <span key={s} className="rounded-md bg-muted px-2 py-1">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-3 text-sm">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-md border px-3 py-1.5 hover:bg-muted transition"
        >
          Ver case
        </Link>
        {project.repoUrl ? (
          <a
            className="rounded-md border px-3 py-1.5 hover:bg-muted transition"
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Repositório
          </a>
        ) : null}
      </div>
    </div>
  );
}
