import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">PropuestasRD</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Portal neutral e informativo dedicado a promover la transparencia y participación ciudadana en la
              República Dominicana.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/partidos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Partidos Políticos
                </Link>
              </li>
              <li>
                <Link href="/propuestas" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Todas las Propuestas
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            <strong className="text-foreground">Aviso de Neutralidad:</strong> PropuestasRD es un portal independiente y
            neutral. No estamos afiliados a ningún partido político. Nuestro objetivo es informar de manera imparcial.
          </p>
          <p className="text-sm text-center text-muted-foreground mt-2">
            © 2025 PropuestasRD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
