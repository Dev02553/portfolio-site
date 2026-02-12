export default function ContactPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Contato</h1>
        <p className="text-muted-foreground">
          Me chama por e-mail ou pelas redes abaixo.
        </p>
      </header>

      <div className="space-y-3">
        <a
          className="inline-block rounded-md border px-4 py-2 hover:bg-muted transition"
          href="mailto:David_2553@hotmail.com"
        >
          David_2553@hotmail.com
        </a>

        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href="https://github.com/Dev02553"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href="https://www.linkedin.com/in/david-silva-rodrigues-500190284/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
