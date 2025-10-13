import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const partidos = [
  {
    nombre: "Partido Revolucionario Moderno",
    siglas: "PRM",
    color: "#00A651",
    descripcion: "Partido político fundado en 2014, actualmente en el gobierno.",
    propuestasCount: 45,
  },
  {
    nombre: "Partido de la Liberación Dominicana",
    siglas: "PLD",
    color: "#8B4789",
    descripcion: "Partido político fundado en 1973, con amplia trayectoria en el gobierno.",
    propuestasCount: 52,
  },
  {
    nombre: "Fuerza del Pueblo",
    siglas: "FP",
    color: "#FF6B35",
    descripcion: "Partido político fundado en 2019, enfocado en políticas sociales.",
    propuestasCount: 38,
  },
  {
    nombre: "Partido Reformista Social Cristiano",
    siglas: "PRSC",
    color: "#DC143C",
    descripcion: "Partido político fundado en 1963, uno de los más antiguos del país.",
    propuestasCount: 29,
  },
]

export default function PartidosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Partidos Políticos</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Conoce los principales partidos políticos de la República Dominicana y explora sus propuestas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partidos.map((partido) => (
              <Card key={partido.siglas} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="h-12 w-12 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: partido.color }}
                    >
                      {partido.siglas}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{partido.siglas}</CardTitle>
                      <CardDescription className="text-xs">{partido.nombre}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{partido.descripcion}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">
                      {partido.propuestasCount} propuestas publicadas
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/">Ver propuestas</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
