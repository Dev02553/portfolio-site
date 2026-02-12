import Link from "next/link";

const skills = [
  { label: "Linguagens", value: "Python, Java, SQL" },
  { label: "QA/Testes", value: "Selenium, JUnit, planejamento de testes, evidências" },
  { label: "Dados/Automação", value: "Pandas, Excel, validações, relatórios" },
  { label: "Dev/Infra", value: "Git/GitHub, Maven, noções de CI" },
];

const highlights = [
  {
    title: "QA E2E — Selenium + JUnit",
    desc: "Casos E2E com Page Objects, evidências e organização por suíte (smoke/regression).",
    href: "/projects/parabank-selenium-qa",
  },
  {
    title: "ETL & Data Quality em Python",
    desc: "Pipeline com regras de validação e geração de Excel com aba “Data Quality”.",
    href: "/projects/python-etl-automation",
  },
  {
    title: "API Java + DB (em evolução)",
    desc: "CRUD com boas práticas, validação e documentação (Swagger/OpenAPI).",
    href: "/projects/java-api-crud",
  },
];

const nowLearning = [
  "Boas práticas de QA (estratégia, pirâmide de testes, critérios de aceite)",
  "Relatórios de bugs e escrita de casos de teste mais completos",
  "Comunicação em inglês para contexto técnico",
];

const gamesQA = [
  "Consistência de UI/UX",
  "Câmera, colisão e feedback ao jogador",
  "Sistemas de salvamento/carregamento",
  "Desempenho e casos extremos (edge cases)",
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-bold">Sobre</h1>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Sou formado de Análise e Desenvolvimento de Sistemas (ADS) e tenho foco em{" "}
          <span className="text-foreground font-medium">Qualidade de Software</span>, automação e
          organização de entregas. Gosto de transformar demandas em entregáveis claros:{" "}
          testes automatizados, automações em Python e documentação objetiva.
        </p>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          Já atuei em ambientes operacionais e de e-commerce, o que fortaleceu minha atenção aos
          detalhes, disciplina e acompanhamento de processos do início ao fim.
        </p>
      </header>

      {/* Grid */}
      <section className="grid gap-4 md:grid-cols-2">
        {/* Skills card */}
        <div className="rounded-xl border p-5 space-y-4">
          <h2 className="text-lg font-semibold">Tecnologias e ferramentas</h2>
          <div className="space-y-3">
            {skills.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-sm font-medium">{s.label}</span>
                <span className="text-sm text-muted-foreground">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Now learning card */}
        <div className="rounded-xl border p-5 space-y-4">
          <h2 className="text-lg font-semibold">Atualmente aprendendo</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            {nowLearning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects highlight */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold">Projetos em destaque</h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:underline"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="rounded-xl border p-5 hover:bg-muted/30 transition"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
              <span className="mt-3 inline-block text-sm text-muted-foreground hover:text-foreground">
                Ver case →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Games as expandable (avoid wall of text) */}
      <section className="rounded-xl border p-5 space-y-3">
        <h2 className="text-lg font-semibold">Mentalidade de QA (games)</h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Eu gosto de jogos como Red Dead Redemption 2, Bloodborne, The Last of Us, Silent Hill 2,
          Pathologic 2, Risk of Rain 2 e Crash Twinsanity. Costumo jogar com olhar de testador,
          observando:
        </p>

        <details className="group">
          <summary className="cursor-pointer text-sm font-medium text-foreground select-none">
            Ver pontos que eu observo ↓
          </summary>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            {gamesQA.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      </section>

      {/* CTA */}
      <section className="rounded-xl border p-5 space-y-3">
        <h2 className="text-lg font-semibold">Contato</h2>
        <p className="text-sm text-muted-foreground">
          Quer falar sobre projetos, QA ou automação? Me chama aqui:
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href="https://www.linkedin.com/in/SEU_LINKEDIN/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href="mailto:SEU_EMAIL_AQUI"
          >
            SEU_EMAIL_AQUI
          </a>
        </div>
      </section>
    </div>
  );
}
