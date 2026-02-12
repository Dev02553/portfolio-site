export default function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Sobre</h1>
        <p className="text-muted-foreground max-w-2xl">
          Sou estudante de ADS e construo projetos com foco em qualidade, automação e
          organização. Aqui você encontra casos reais e projetos feitos do zero,
          com documentação e testes.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Stack</h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>Python (Pandas, automação/ETL, validação e relatórios)</li>
          <li>QA (Selenium, JUnit, Page Objects, CI)</li>
          <li>Java (API REST, DB, testes e documentação)</li>
          <li>Next.js/React (interfaces com visão de produto)</li>
        </ul>
      </section>
    </div>
  );
}
