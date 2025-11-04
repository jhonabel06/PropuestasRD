'use client';

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProposalCard } from "@/components/proposal-card"
import { FilterSidebar } from "@/components/filter-sidebar"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

interface Propuesta {
  id: string
  partido: string
  partidoColor: string
  titulo: string
  resumen: string
  tema: string
  fecha: string
  autor?: string
  fuenteOficial?: string
  descripcion?: string
}

export default function HomePage() {
  const [propuestas, setPropuestas] = useState<Propuesta[]>([])
  const [filteredPropuestas, setFilteredPropuestas] = useState<Propuesta[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPartido, setSelectedPartido] = useState('')
  const [selectedTema, setSelectedTema] = useState('')

  // Cargar propuestas
  useEffect(() => {
    async function fetchPropuestas() {
      try {
        const response = await fetch('/api/propuestas')
        if (response.ok) {
          const data = await response.json()
          setPropuestas(data)
          setFilteredPropuestas(data.slice(0, 6)) // Mostrar solo las primeras 6 en la home
        }
      } catch (error) {
        console.error('Error cargando propuestas:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPropuestas()
  }, [])

  // Aplicar filtros
  useEffect(() => {
    let result = [...propuestas]

    // Filtro por partido
    if (selectedPartido) {
      result = result.filter(p => p.partido === selectedPartido)
    }

    // Filtro por tema
    if (selectedTema) {
      result = result.filter(p => p.tema === selectedTema)
    }

    // Búsqueda por texto
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p =>
        p.titulo.toLowerCase().includes(query) ||
        p.resumen.toLowerCase().includes(query)
      )
    }

    setFilteredPropuestas(result.slice(0, 6)) // Limitar a 6 en la home
  }, [searchQuery, selectedPartido, selectedTema, propuestas])

  const handleSearch = () => {
    // La búsqueda ya se aplica automáticamente con useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary/5 via-background to-destructive/5 border-b border-border">
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
                <Input 
                  placeholder="Buscar propuestas..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <Button size="lg" className="sm:w-auto" onClick={handleSearch}>
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
            <aside className="lg:w-64 shrink-0">
              <FilterSidebar 
                selectedPartido={selectedPartido}
                onPartidoChange={setSelectedPartido}
                selectedTema={selectedTema}
                onTemaChange={setSelectedTema}
              />
            </aside>

            {/* Proposals Grid */}
            <main className="flex-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Propuestas Recientes</h2>
                <p className="text-muted-foreground">
                  {loading ? 'Cargando propuestas...' : `${filteredPropuestas.length} propuestas encontradas`}
                </p>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white rounded-lg border p-6">
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/4 mb-4" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPropuestas.map((propuesta) => (
                      <ProposalCard key={propuesta.id} {...propuesta} />
                    ))}
                  </div>

                  {filteredPropuestas.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground mb-4">No se encontraron propuestas con los filtros seleccionados</p>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setSearchQuery('')
                          setSelectedPartido('')
                          setSelectedTema('')
                        }}
                      >
                        Limpiar filtros
                      </Button>
                    </div>
                  )}

                  {filteredPropuestas.length > 0 && (
                    <div className="mt-8 text-center">
                      <Button variant="outline" size="lg" asChild>
                        <Link href="/propuestas">Ver todas las propuestas</Link>
                      </Button>
                    </div>
                  )}
                </>
              )}
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
