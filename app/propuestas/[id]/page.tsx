import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data - En producción vendría de una base de datos
const propuestaDetalle = {
  id: "1",
  partido: "PRM",
  partidoColor: "#00A651",
  titulo: "Plan Nacional de Alfabetización Digital",
  tema: "Educación",
  fecha: "15 de Enero, 2025",
  autor: "Comisión de Educación - PRM",
  fuenteOficial: "https://ejemplo.com/propuesta-educacion",
  descripcion: `
    <h2>Resumen Ejecutivo</h2>
    <p>El Plan Nacional de Alfabetización Digital busca cerrar la brecha tecnológica en el sistema educativo dominicano, garantizando que todos los estudiantes de escuelas públicas tengan acceso a herramientas digitales y desarrollen competencias tecnológicas esenciales para el siglo XXI.</p>
    
    <h2>Objetivos Principales</h2>
    <ul>
      <li>Equipar 5,000 aulas con computadoras y acceso a internet de alta velocidad</li>
      <li>Capacitar a 20,000 docentes en metodologías de enseñanza digital</li>
      <li>Desarrollar contenido educativo digital adaptado al currículo nacional</li>
      <li>Implementar plataformas de aprendizaje en línea accesibles para todos los estudiantes</li>
    </ul>
    
    <h2>Fases de Implementación</h2>
    <p><strong>Fase 1 (Año 1):</strong> Diagnóstico nacional de infraestructura tecnológica y capacitación inicial de docentes en 500 escuelas piloto.</p>
    <p><strong>Fase 2 (Año 2-3):</strong> Expansión del programa a 2,000 escuelas adicionales y desarrollo de contenido educativo digital.</p>
    <p><strong>Fase 3 (Año 4-5):</strong> Cobertura nacional completa y evaluación de impacto en el aprendizaje estudiantil.</p>
    
    <h2>Presupuesto Estimado</h2>
    <p>El programa requiere una inversión de RD$3,500 millones distribuidos en cinco años, financiados mediante el presupuesto nacional de educación y cooperación internacional.</p>
    
    <h2>Impacto Esperado</h2>
    <p>Se espera que al finalizar el programa, el 95% de los estudiantes de escuelas públicas tengan competencias digitales básicas, mejorando su empleabilidad futura y reduciendo la desigualdad educativa.</p>
  `,
}

export default function ProposalDetailPage() {
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
                    style={{ borderColor: propuestaDetalle.partidoColor, color: propuestaDetalle.partidoColor }}
                  >
                    {propuestaDetalle.partido}
                  </Badge>
                  <Badge variant="secondary" className="text-base px-3 py-1">
                    {propuestaDetalle.tema}
                  </Badge>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  {propuestaDetalle.titulo}
                </h1>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{propuestaDetalle.fecha}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{propuestaDetalle.autor}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className="prose prose-slate max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: propuestaDetalle.descripcion }}
              />

              {/* Footer */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">Fuente Oficial</p>
                    <a
                      href={propuestaDetalle.fuenteOficial}
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
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
