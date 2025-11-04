import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getPropuestaById } from "@/lib/propuestas"
import { notFound } from "next/navigation"

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-DO", { year: "numeric", month: "long", day: "numeric" })
}

export default async function ProposalDetailPage({ params }: { params: { id: string } }) {
  const propuesta = getPropuestaById(params.id)

  if (!propuesta) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a propuestas
            </Link>
          </Button>

          <Card>
            <CardContent className="p-8">
              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className="font-semibold text-base px-3 py-1"
                    style={{ borderColor: propuesta.partidoColor, color: propuesta.partidoColor }}
                  >
                    {propuesta.partido}
                  </Badge>
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    {propuesta.tema}
                  </Badge>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  {propuesta.titulo}
                </h1>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(propuesta.fecha)}</span>
                  </div>
                  {propuesta.autor && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{propuesta.autor}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              {propuesta.descripcion ? (
                <div
                  className="prose prose-slate max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: propuesta.descripcion }}
                />
              ) : (
                <div className="prose prose-slate max-w-none mb-8">
                  <p>{propuesta.resumen}</p>
                </div>
              )}

              {/* Footer */}
              {propuesta.fuenteOficial && (
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Fuente Oficial</p>
                      <a
                        href={propuesta.fuenteOficial}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        Ver documento original
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <Button asChild>
                      <Link href="/">Ver más propuestas</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
