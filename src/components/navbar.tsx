import Link from "next/link";

const nav = [
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          David Rodrigues
          <span className="text-muted-foreground"> · Portfólio</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition"
            >
              {item.label}
            </Link>
          ))}
          <a
            className="rounded-md border px-3 py-1.5 text-sm hover:bg-muted transition"
            href="https://github.com/Dev02553"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
