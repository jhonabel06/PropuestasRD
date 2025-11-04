import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProposalCard } from "@/components/proposal-card"
import { FilterSidebar } from "@/components/filter-sidebar"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { getPropuestas } from "@/lib/propuestas"

export default async function HomePage() {
  const propuestas = getPropuestas()

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
