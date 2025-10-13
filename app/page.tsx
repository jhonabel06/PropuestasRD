import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProposalCard } from "@/components/proposal-card"
import { FilterSidebar } from "@/components/filter-sidebar"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock data - En producción vendría de una base de datos
const propuestas = [
  {
    id: "1",
    partido: "PRM",
    partidoColor: "#00A651",
    titulo: "Plan Nacional de Alfabetización Digital",
    resumen:
      "Implementar un programa integral de alfabetización digital para estudiantes de escuelas públicas, incluyendo equipamiento tecnológico y capacitación docente.",
    tema: "Educación",
    fecha: "15 Ene 2025",
  },
  {
    id: "2",
    partido: "PLD",
    partidoColor: "#8B4789",
    titulo: "Reforma del Sistema de Salud Pública",
    resumen:
      "Modernización de hospitales públicos y ampliación de cobertura del seguro nacional de salud para garantizar atención médica universal.",
    tema: "Salud",
    fecha: "12 Ene 2025",
  },
  {
    id: "3",
    partido: "Fuerza del Pueblo",
    partidoColor: "#FF6B35",
    titulo: "Metro de Santo Domingo - Expansión Línea 3",
    resumen:
      "Construcción de la tercera línea del Metro de Santo Domingo conectando sectores del norte con el centro histórico.",
    tema: "Transporte",
    fecha: "10 Ene 2025",
  },
  {
    id: "4",
    partido: "PRSC",
    partidoColor: "#DC143C",
    titulo: "Incentivos Fiscales para PYMES",
    resumen:
      "Reducción de impuestos y facilidades de financiamiento para pequeñas y medianas empresas durante los primeros tres años de operación.",
    tema: "Economía",
    fecha: "8 Ene 2025",
  },
  {
    id: "5",
    partido: "PRM",
    partidoColor: "#00A651",
    titulo: "Programa de Energías Renovables",
    resumen:
      "Inversión en parques solares y eólicos para alcanzar el 50% de energía renovable en la matriz energética nacional para 2030.",
    tema: "Medio Ambiente",
    fecha: "5 Ene 2025",
  },
  {
    id: "6",
    partido: "PLD",
    partidoColor: "#8B4789",
    titulo: "Modernización de la Policía Nacional",
    resumen:
      "Equipamiento tecnológico, capacitación continua y mejora salarial para los miembros de la Policía Nacional.",
    tema: "Seguridad",
    fecha: "3 Ene 2025",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-destructive/5 border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Conoce las Propuestas de los Partidos Políticos 2028
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
              Portal neutral e informativo donde puedes explorar y comparar las propuestas de todos los partidos
              políticos de la República Dominicana.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar propuestas..." className="pl-10" />
              </div>
              <Button size="lg" className="sm:w-auto">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <FilterSidebar />
            </aside>

            {/* Proposals Grid */}
            <main className="flex-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Propuestas Recientes</h2>
                <p className="text-muted-foreground">
                  Explora las últimas propuestas publicadas por los partidos políticos
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {propuestas.map((propuesta) => (
                  <ProposalCard key={propuesta.id} {...propuesta} />
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Ver todas las propuestas
                </Button>
              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
