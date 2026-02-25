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
    <div className="space-y-10">
      <header className="space-y-4">
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:underline"
        >
          ← Voltar
        </Link>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl font-bold">{project.title}</h1>
          <p className="text-muted-foreground">{project.subtitle}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border px-2 py-1 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {project.stack.map((s) => (
            <span key={s} className="rounded-md bg-muted px-2 py-1">
              {s}
            </span>
          ))}
        </div>

        {/* Botões */}
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

          {project.run ? (
            <a
              className="rounded-md border px-4 py-2 hover:bg-muted transition"
              href="#como-rodar"
            >
              Como rodar
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

        {/* Métricas (se existir) */}
        {project.metrics?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border bg-muted/30 p-4"
              >
                <div className="text-xs text-muted-foreground">{m.label}</div>
                <div className="text-lg font-semibold">{m.value}</div>
              </div>
            ))}
          </div>
        ) : null}
      </header>

      {/* Destaques */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Destaques</h2>
        <div className="rounded-xl border bg-muted/30 p-5">
          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Como rodar */}
      {project.run ? (
        <section id="como-rodar" className="space-y-3 scroll-mt-24">
          <h2 className="text-lg font-semibold">Como rodar</h2>

          <div className="rounded-xl border bg-muted/30 p-5 space-y-4">
            <div>
              <div className="text-sm font-medium mb-2">Headless</div>
              <pre className="rounded-lg bg-black/40 p-4 overflow-x-auto text-sm">
                <code>{project.run.headless}</code>
              </pre>
            </div>

            {project.run.ui ? (
              <div>
                <div className="text-sm font-medium mb-2">Com navegador visível</div>
                <pre className="rounded-lg bg-black/40 p-4 overflow-x-auto text-sm">
                  <code>{project.run.ui}</code>
                </pre>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Case study */}
      {project.caseStudy?.length ? (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Case study</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.caseStudy.map((c) => (
              <div key={c.title} className="rounded-xl border bg-muted/30 p-5">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Case study (em breve)</h2>
          <p className="text-muted-foreground">
            Esta página vai receber: problema, solução, arquitetura, testes,
            resultados e próximos passos.
          </p>
        </section>
      )}
    </div>
  );
}
