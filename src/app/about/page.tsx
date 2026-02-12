"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Tone = "corporativo" | "criativo";

const skills = [
  { label: "Linguagens", value: "Python, Java, SQL" },
  { label: "QA/Testes", value: "Selenium, JUnit, planejamento de testes, evidências" },
  { label: "Dados/Automação", value: "Pandas, Excel, validações, relatórios" },
  { label: "Dev/Infra", value: "Git/GitHub, Maven, noções de CI" },
];

const nowLearning = [
  "Boas práticas de QA (estratégia, pirâmide de testes, critérios de aceite)",
  "Relatórios de bugs e escrita de casos de teste mais completos",
  "Comunicação em inglês para contexto técnico",
];

const experience = [
  {
    role: "Balconista (único colaborador) — Petshop",
    points: [
      "Atendimento presencial e suporte ao cliente do início ao fim",
      "Expedição, organização de estoque e rotina operacional completa",
      "Disciplina, priorização e atenção a detalhes em ambiente de alta demanda",
    ],
  },
  {
    role: "Assistente de E-commerce — Operação multi-canal",
    points: [
      "Emissão de pedidos e acompanhamento de fluxo de vendas",
      "Gestão de marketplaces: Shein, Shopee, Mercado Livre e Amazon",
      "Uso de ERPs e ferramentas: Tiny, Bling (e afins)",
      "Edição/atualização de itens e catálogo + atendimento online",
      "Expedição e organização operacional diária com foco em consistência",
    ],
  },
];

const projectHighlights = [
  {
    title: "QA E2E — Selenium + JUnit (ParaBank)",
    desc: "Casos E2E, Page Objects, evidências e organização por suíte (smoke/regression).",
    href: "/projects/parabank-selenium-qa",
  },
  {
    title: "ETL & Data Quality em Python",
    desc: "Pipeline com validações e geração de Excel com aba “Data Quality”.",
    href: "/projects/python-etl-automation",
  },
  {
    title: "API Java + DB (em evolução)",
    desc: "CRUD com boas práticas, validação e documentação (Swagger/OpenAPI).",
    href: "/projects/java-api-crud",
  },
];

const qaMindsetGames = [
  "Consistência de UI/UX (fluxos, feedback e clareza)",
  "Câmera, colisão e sensação de controle",
  "Sistemas de salvamento/carregamento e recuperação",
  "Desempenho e casos extremos (edge cases)",
];

export default function AboutPage() {
  const [tone, setTone] = useState<Tone>("corporativo");

  const intro = useMemo(() => {
    if (tone === "corporativo") {
      return {
        title: "Sobre",
        p1:
          "Sou estudante de Análise e Desenvolvimento de Sistemas (ADS), com foco em Qualidade de Software (QA), automação e organização de processos. Busco oportunidade de estágio/trainee para aplicar na prática projetos do zero, documentação clara e mentalidade de melhoria contínua.",
        p2:
          "Minha base profissional vem de ambientes com ritmo e responsabilidade. Atuei como único colaborador de um petshop (atendimento, expedição e organização) e, mais recentemente, como Assistente de E-commerce, operando marketplaces e ERPs (Shein, Shopee, Mercado Livre, Amazon; Tiny, Bling), além de catálogo, atendimento online e expedição — experiência que fortaleceu consistência, controle e execução ponta a ponta.",
        badge:
          "Objetivo: Estágio/Trainee · QA / Automação / Dados / Dev",
      };
    }
    return {
      title: "Sobre",
      p1:
        "Eu gosto de transformar caos em fluxo. Sou estudante de ADS e estou construindo minha carreira com uma mistura que me define bem: qualidade, automação e processo — entregas claras, testáveis e fáceis de manter.",
      p2:
        "Aprendi “na vida real” o que é segurar uma operação: fui o único colaborador de um petshop, cuidando do atendimento até a expedição. Depois, no e-commerce, virei multi-canal: pedidos, marketplaces (Shein, Shopee, Mercado Livre, Amazon), ERP (Tiny, Bling), catálogo, atendimento online e expedição. Esse cenário me treinou para lidar com regras, exceções e prazos — e foi aí que meu olhar de QA ficou automático: padronizar, reduzir erro e automatizar o repetitivo.",
      badge:
        "Buscando: Estágio/Trainee · Construir, testar, automatizar e evoluir",
    };
  }, [tone]);

  return (
    <div className="space-y-10">
      {/* Header + toggle */}
      <header className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold">{intro.title}</h1>

          <div className="inline-flex rounded-md border p-1 w-fit">
            <button
              type="button"
              onClick={() => setTone("corporativo")}
              className={`px-3 py-1.5 text-sm rounded-md transition ${
                tone === "corporativo"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Tom corporativo
            </button>
            <button
              type="button"
              onClick={() => setTone("criativo")}
              className={`px-3 py-1.5 text-sm rounded-md transition ${
                tone === "criativo"
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Tom criativo
            </button>
          </div>
        </div>

        <p className="text-xs inline-flex w-fit rounded-full border px-3 py-1 text-muted-foreground">
          {intro.badge}
        </p>

        <div className="space-y-3">
          <p className="text-muted-foreground max-w-3xl leading-relaxed">{intro.p1}</p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">{intro.p2}</p>
        </div>
      </header>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Experiência (base forte de processo)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {experience.map((exp) => (
            <div key={exp.role} className="rounded-xl border p-5 space-y-3">
              <h3 className="font-semibold">{exp.role}</h3>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills + Learning */}
      <section className="grid gap-4 md:grid-cols-2">
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

          <div className="pt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Meu foco é construir entregáveis completos:{" "}
              <span className="text-foreground font-medium">
                código + testes + documentação + organização
              </span>
              .
            </p>
          </div>
        </div>

        <div className="rounded-xl border p-5 space-y-4">
          <h2 className="text-lg font-semibold">Atualmente aprendendo</h2>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            {nowLearning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              Busco crescer em ambientes com feedback e melhoria contínua.
            </p>
          </div>
        </div>
      </section>

      {/* Projects highlight */}
      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold">Projetos em destaque</h2>
          <Link href="/projects" className="text-sm text-muted-foreground hover:underline">
            Ver todos
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectHighlights.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="rounded-xl border p-5 hover:bg-muted/30 transition"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <span className="mt-3 inline-block text-sm text-muted-foreground hover:text-foreground">
                Ver case →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* QA mindset (games) */}
      <section className="rounded-xl border p-5 space-y-3">
        <h2 className="text-lg font-semibold">Mentalidade de QA (games)</h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Eu curto jogos como Red Dead Redemption 2, Bloodborne, The Last of Us, Silent Hill 2,
          Pathologic 2, Risk of Rain 2 e Crash Twinsanity. Costumo jogar com olhar de testador.
        </p>

        <details className="group">
          <summary className="cursor-pointer text-sm font-medium text-foreground select-none">
            Ver o que eu observo ↓
          </summary>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            {qaMindsetGames.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      </section>

      {/* CTA */}
      <section className="rounded-xl border p-5 space-y-3">
        <h2 className="text-lg font-semibold">Contato</h2>
        <p className="text-sm text-muted-foreground">
          Quer conversar sobre estágio/trainee, QA, automação ou projetos? Me chama:
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href="https://www.linkedin.com/in/david-silva-rodrigues-500190284/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href="mailto:David_2553@hotmail.com"
          >
            David_2553@hotmail.com
          </a>
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href="https://github.com/Dev02553"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          Dica: troque <span className="font-medium">SEU_LINKEDIN</span> e{" "}
          <span className="font-medium">SEU_EMAIL_AQUI</span>.
        </p>
      </section>
    </div>
  );
}
