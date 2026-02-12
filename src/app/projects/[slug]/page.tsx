import Link from "next/link";
import { projects } from "@/lib/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
        <Link href="/projects" className="text-muted-foreground hover:underline">
          Voltar para projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
          ← Voltar
        </Link>

        <h1 className="text-2xl sm:text-3xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground">{project.subtitle}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs rounded-full border px-2 py-1 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md bg-muted px-2 py-1">
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.repoUrl ? (
            <a
              className="rounded-md border px-4 py-2 hover:bg-muted transition"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Repositório
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              className="rounded-md border px-4 py-2 hover:bg-muted transition"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          ) : null}
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Destaques</h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Case study (em breve)</h2>
        <p className="text-muted-foreground">
          Esta página vai receber: problema, solução, arquitetura, testes, resultados e próximos passos.
        </p>
      </section>
    </div>
  );
}
