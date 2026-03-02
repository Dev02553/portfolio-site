export type ProjectTag =
  | "Dados"
  | "Automação"
  | "QA"
  | "Backend"
  | "Frontend"
  | "Produto"
  | "Games"
  | "Arquitetura";

export type ProjectMetric = {
  label: string;
  value: string;
  hint?: string;
};

export type ProjectRun = {
  headless: string;
  ui?: string;
};

export type CaseStudySection = {
  id: string;
  title: { pt: string; en: string };
  body?: { pt: string; en: string };
  bullets?: { pt: string[]; en: string[] };
};

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

  // ✅ Novos (para página detalhada)
  metrics?: ProjectMetric[];
  run?: ProjectRun;
  caseStudy?: CaseStudySection[];
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
      "Suíte E2E em Selenium/JUnit com BaseTest robusto, evidências automáticas e mitigação de instabilidade do ambiente demo.",
    tags: ["QA", "Automação"],
    stack: ["Java", "JUnit 5", "Selenium 4", "Maven"],
    highlights: [
      "10 casos E2E cobrindo fluxos críticos",
      "Execução headless via Maven",
      "Evidência automática (screenshot) em falha",
    ],
    repoUrl: "https://github.com/Dev02553/Testes-Automatizados_ParaBank",
    status: "MVP",
    year: "2025",

    metrics: [
      { label: "Casos E2E", value: "10" },
      { label: "Execução", value: "Headless + UI", hint: "Maven / ChromeDriver" },
      { label: "Evidências", value: "Screenshots em falha" },
      { label: "Padrão", value: "BaseTest + Helpers", hint: "reuso e estabilidade" },
    ],

    run: {
      headless: "mvn -Dheadless=true clean test",
      ui: "mvn clean test -Dheadless=false",
    },

    caseStudy: [
      {
        id: "context",
        title: { pt: "Contexto", en: "Context" },
        body: {
          pt: "O ParaBank (Parasoft) é um sistema demo usado para praticar automação de testes E2E. Por ser um ambiente público, ele pode apresentar instabilidade e variações na UI/mensagens.",
          en: "ParaBank (by Parasoft) is a demo banking app used to practice E2E test automation. As a public environment, it can be unstable and its UI/messages may vary.",
        },
      },
      {
        id: "goal",
        title: { pt: "Objetivo", en: "Goal" },
        bullets: {
          pt: [
            "Criar uma suíte automatizada com cobertura de fluxos críticos (login, contas, transferências, perfil).",
            "Aplicar boas práticas (setup/teardown, waits, reuso, evidências).",
            "Rodar em modo headless para CI e também em modo visual (UI).",
          ],
          en: [
            "Build an automated suite covering critical flows (login, accounts, transfers, profile).",
            "Apply good practices (setup/teardown, waits, reuse, evidence).",
            "Run headless for CI and also in visual UI mode.",
          ],
        },
      },
      {
        id: "approach",
        title: { pt: "Abordagem", en: "Approach" },
        bullets: {
          pt: [
            "Criação de um BaseTest centralizando WebDriver, WebDriverWait e helpers de navegação.",
            "Seletores mais estáveis e waits explícitos para reduzir flakiness.",
            "Captura de screenshot automaticamente quando um teste falha.",
          ],
          en: [
            "Created a BaseTest to centralize WebDriver, WebDriverWait and navigation helpers.",
            "Used more stable selectors and explicit waits to reduce flakiness.",
            "Automatically captured screenshots on test failure.",
          ],
        },
      },
      {
        id: "challenges",
        title: { pt: "Desafios e soluções", en: "Challenges & solutions" },
        bullets: {
          pt: [
            "Instabilidade do demo: uso de waits e validações alternativas (texto/elementos).",
            "Botões duplicados em register/login: clique ancorado no FORM correto (evita clicar no login vazio).",
            "Mensagens variáveis: asserts tolerantes aos textos reais exibidos no painel.",
          ],
          en: [
            "Demo instability: added waits and alternative validations (text/elements).",
            "Duplicate buttons in register/login: click anchored to the correct FORM (avoids empty login click).",
            "Variable messages: assertions tolerant to real messages shown in the panel.",
          ],
        },
      },
      {
        id: "results",
        title: { pt: "Resultados", en: "Results" },
        bullets: {
          pt: [
            "Suíte executável via Maven com log claro e evidências em falha.",
            "Cobertura de cenários principais com melhor estabilidade no ambiente demo.",
            "Estrutura pronta para expansão (novos testes + Page Objects no futuro).",
          ],
          en: [
            "Maven-runnable suite with clear logs and failure evidence.",
            "Coverage of main scenarios with better stability on the demo environment.",
            "Structure ready to expand (new tests + Page Objects in the future).",
          ],
        },
      },
      {
        id: "next",
        title: { pt: "Próximos passos", en: "Next steps" },
        bullets: {
          pt: [
            "Adicionar Page Object Model para melhorar ainda mais manutenibilidade.",
            "Relatório HTML (Surefire) e anexar screenshots no pipeline.",
            "Executar em CI (GitHub Actions) com artefatos.",
          ],
          en: [
            "Add Page Object Model to improve maintainability further.",
            "Generate HTML reports (Surefire) and attach screenshots in pipeline.",
            "Run on CI (GitHub Actions) with artifacts.",
          ],
        },
      },
    ],
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