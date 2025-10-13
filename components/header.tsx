import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="PropuestasRD"
            width={180}
            height={80}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link
            href="/partidos"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Partidos
          </Link>
          <Link
            href="/propuestas"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Propuestas
          </Link>
          <Link
            href="/noticias"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Noticias
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}
