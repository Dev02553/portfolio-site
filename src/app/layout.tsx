import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "David Rodrigues · Portfólio",
  description:
    "Projetos em QA, automação, dados e desenvolvimento (Java, Python, Next.js).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-dvh bg-background text-foreground">
  {/* Background global */}
  <div className="fixed inset-0 -z-10">
    <Image
      src="/contact-hero.jpg"
      alt=""
      fill
      priority
      className="object-cover opacity-10"
    />
    <div className="absolute inset-0 bg-background/80" />
  </div>

  <Navbar />
  <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
  <Footer />
</body>
    </html>
  );
}
