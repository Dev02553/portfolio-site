import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const hasMetrics = Boolean(project.metrics?.length);

  return (
    <div className="rounded-xl border p-5 hover:bg-muted/30 transition">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold truncate">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {project.subtitle}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="text-xs rounded-md border px-2 py-1 text-muted-foreground">
            {project.status} • {project.year}
          </span>
          {hasMetrics ? (
            <span className="text-[11px] text-muted-foreground">
              + métricas & run
            </span>
          ) : (
            <span className="text-[11px] text-muted-foreground">
              case study básico
            </span>
          )}
        </div>
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
        {project.stack.slice(0, 6).map((s) => (
          <span key={s} className="rounded-md bg-muted px-2 py-1">
            {s}
          </span>
        ))}
      </div>

      {project.metrics?.length ? (
        <div className="mt-4 grid grid-cols-2 gap-2">
          {project.metrics.slice(0, 2).map((m) => (
            <div key={m.label} className="rounded-lg border p-3">
              <div className="text-[11px] text-muted-foreground">{m.label}</div>
              <div className="text-sm font-semibold">{m.value}</div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
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

        {project.demoUrl ? (
          <a
            className="rounded-md border px-3 py-1.5 hover:bg-muted transition"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        ) : null}
      </div>
    </div>
  );
}