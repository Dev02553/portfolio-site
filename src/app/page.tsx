import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">David — Portfólio</h1>
        <p className="text-muted-foreground">
          Projetos em QA, automação, dados e desenvolvimento.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-md border px-4 py-2 hover:bg-muted transition"
        >
          Ver projetos
        </Link>

        <Link
          href="/about"
          className="rounded-md border px-4 py-2 hover:bg-muted transition"
        >
          Sobre mim
        </Link>
      </div>
    </div>
  );
}