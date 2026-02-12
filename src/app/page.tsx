import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Portfólio — QA, Automação, Dados e Dev
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Projetos feitos do zero com foco em qualidade, organização e
          entregáveis reais: testes automatizados, pipelines de dados, APIs e
          interfaces.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
          >
            Ver projetos
          </Link>
          <a
            href="https://github.com/Dev02553"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
          >
            GitHub
          </a>
          <Link
            href="/contact"
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
          >
            Contato
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">Destaques</h2>
          <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
            Ver todos
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Foco</h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>Automação e qualidade (pipeline, validações, testes, CI)</li>
          <li>Back-end Java (API, banco de dados, documentação e testes)</li>
          <li>Front-end com visão de produto (dashboard, UX simples e claro)</li>
        </ul>
      </section>
    </div>
  );
}
