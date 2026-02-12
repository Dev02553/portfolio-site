export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} David Rodrigues</p>
          <p>Next.js · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
