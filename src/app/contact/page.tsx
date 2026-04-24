"use client";

import OctoMark from "@/components/octo-mark";

const CONTACT = {
  name: "David",
  email: "david.ds_74@proton.me",
  github: "https://github.com/d-noctopus",
  linkedin: "https://www.linkedin.com/in/david-silva-rodrigues-500190284/",
};

function CopyButton({ text, label }: { text: string; label: string }) {
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(text)}
      className="rounded-md border px-4 py-2 hover:bg-muted transition"
      title={`Copiar: ${text}`}
    >
      {label}
    </button>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <div className="p-6 sm:p-8 space-y-5">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Contato
              </h1>
              <p className="text-muted-foreground max-w-prose leading-relaxed">
                Se você quiser conversar sobre <b>QA</b>, <b>automação</b>,
                <b> dados/ETL</b> ou oportunidades de entrada em tecnologia,
                pode me chamar. Estou aberto a vagas trainee, júnior,
                colaborações e projetos em que eu possa continuar evoluindo
                com consistência.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-md border px-4 py-2 hover:bg-muted transition"
                href={`mailto:${CONTACT.email}?subject=Contato%20-%20Portf%C3%B3lio`}
              >
                Enviar e-mail
              </a>

              <CopyButton text={CONTACT.email} label="Copiar e-mail" />

              <a
                className="rounded-md border px-4 py-2 hover:bg-muted transition"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="rounded-md border px-4 py-2 hover:bg-muted transition"
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border p-4">
                <div className="text-xs text-muted-foreground">E-mail</div>
                <div className="text-sm font-medium break-all">
                  {CONTACT.email}
                </div>
              </div>

              <div className="rounded-xl border p-4">
                <div className="text-xs text-muted-foreground">
                  Disponível para
                </div>
                <div className="text-sm font-medium">
                  Trainee • Júnior • Freela • Colaborações
                </div>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground mb-1">EN</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you&apos;d like to talk about <b>QA</b>, <b>automation</b>,
                <b> data/ETL</b> or entry-level opportunities in tech, feel free
                to reach out. I&apos;m open to trainee and junior roles,
                freelance work and collaborations.
              </p>
            </div>
          </div>

          <div className="relative min-h-[260px] lg:min-h-full overflow-hidden bg-muted/20">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
            <div className="absolute -inset-24 bg-[radial-gradient(circle_at_50%_40%,rgba(127,119,221,0.18),transparent_45%)]" />
            <div className="absolute -inset-24 bg-[radial-gradient(circle_at_60%_60%,rgba(29,158,117,0.12),transparent_42%)]" />

            <div className="relative z-10 flex h-full items-center justify-center p-8">
              <div className="flex flex-col items-center gap-5 text-center">
                <div className="rounded-2xl border bg-background/40 backdrop-blur px-6 py-6">
                  <OctoMark className="scale-[1.8] sm:scale-[2.1]" />
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-medium">David Rodrigues</div>
                  <div className="text-sm text-muted-foreground">
                    QA · Automação · Dados
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-xl border bg-background/70 backdrop-blur p-4">
              <div className="text-sm font-medium">Resposta</div>
              <div className="text-sm text-muted-foreground">
                Geralmente em até 24–48h
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Como posso ajudar</h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "QA / Automação",
              desc: "Testes com Selenium/JUnit, evidências, organização de suíte e apoio na redução de falhas repetitivas.",
            },
            {
              title: "Dados / ETL",
              desc: "Validação de dados, consistência de informação, automações em Python e relatórios em Excel/SQL.",
            },
            {
              title: "Desenvolvimento (apoio)",
              desc: "Apoio em APIs, dashboards e organização de código com foco em clareza e boas práticas.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border p-5">
              <div className="font-medium">{c.title}</div>
              <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border p-5 space-y-3">
        <h2 className="text-lg font-semibold">Links rápidos</h2>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href={`mailto:${CONTACT.email}`}
          >
            E-mail
          </a>
        </div>
      </section>
    </div>
  );
}