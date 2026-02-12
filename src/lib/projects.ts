export type ProjectTag =
  | "Dados"
  | "Automação"
  | "QA"
  | "Backend"
  | "Frontend"
  | "Produto"
  | "Games"
  | "Arquitetura";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: ProjectTag[];
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
  status: "Em construção" | "MVP" | "Completo";
  year: string;
};

export const projects: Project[] = [
  {
    slug: "python-etl-automation",
    title: "ETL & Data Quality em Python",
    subtitle:
      "Pipeline de dados com validações, rastreabilidade e geração de relatório em Excel (Data Quality).",
    tags: ["Dados", "Automação"],
    stack: ["Python", "Pandas", "OpenPyXL", "Pytest", "CLI"],
    highlights: [
      "Extract → Transform → Validate → Load",
      "Regras de qualidade: obrigatórios, tipos, duplicados, datas",
      "Relatório final em XLSX com aba Data Quality",
    ],
    repoUrl: "https://github.com/Dev02553/python-etl-automation",
    status: "Em construção",
    year: "2026",
  },
  {
    slug: "parabank-selenium-qa",
    title: "QA E2E — Selenium + JUnit (ParaBank)",
    subtitle:
      "Suíte E2E com Page Object Model, evidências de falhas e execução automatizada.",
    tags: ["QA", "Automação"],
    stack: ["Java", "JUnit 5", "Selenium 4", "Maven", "CI"],
    highlights: [
      "Page Object Model",
      "10+ casos E2E (smoke/regression)",
      "Screenshots em falha + pipeline CI",
    ],
    repoUrl: "https://github.com/Dev02553/parabank-selenium-qa",
    status: "Em construção",
    year: "2026",
  },
  {
    slug: "java-api-crud",
    title: "API Java com DB — CRUD + Testes",
    subtitle:
      "API REST com persistência, validação, migrations e documentação (Swagger/OpenAPI).",
    tags: ["Backend", "Arquitetura"],
    stack: ["Java", "Spring Boot", "JPA", "Flyway", "Testcontainers"],
    highlights: [
      "CRUD completo + validação",
      "Tratamento de erros padronizado",
      "Docker compose + testes de integração",
    ],
    repoUrl: "https://github.com/Dev02553/java-api-crud",
    status: "Em construção",
    year: "2026",
  },
  {
    slug: "react-dashboard",
    title: "Dashboard (Next/React) consumindo API",
    subtitle:
      "Interface de produto com tabela, filtros, formulários e integração com backend.",
    tags: ["Frontend", "Produto"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "API"],
    highlights: [
      "DataTable + filtros e busca",
      "Forms com validação",
      "Deploy no Vercel",
    ],
    repoUrl: "https://github.com/Dev02553/react-dashboard",
    status: "Em construção",
    year: "2026",
  },
  {
    slug: "rpg-hub",
    title: "RPG HUB",
    subtitle:
      "Sistema para gerenciar campanhas, NPCs/monstros, mapas e anotações (visão produto).",
    tags: ["Produto", "Games", "Frontend"],
    stack: ["Next.js", "TypeScript", "DB", "Auth (futuro)"],
    highlights: [
      "CRUD de campanhas e entidades",
      "Upload/gestão de mapas e assets",
      "Export/relatórios (futuro)",
    ],
    repoUrl: "https://github.com/Dev02553/rpg-hub",
    status: "Em construção",
    year: "2026",
  },
];
