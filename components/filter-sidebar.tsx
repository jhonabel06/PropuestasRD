"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const partidos = [
  { id: "pld", nombre: "PLD", color: "#8B4789" },
  { id: "prm", nombre: "PRM", color: "#00A651" },
  { id: "fuerza", nombre: "Fuerza del Pueblo", color: "#FF6B35" },
  { id: "prsc", nombre: "PRSC", color: "#DC143C" },
]

const temas = ["Educación", "Economía", "Salud", "Transporte", "Seguridad", "Medio Ambiente", "Tecnología", "Turismo"]

export function FilterSidebar() {
  const [selectedPartidos, setSelectedPartidos] = useState<string[]>([])
  const [selectedTemas, setSelectedTemas] = useState<string[]>([])

  const handlePartidoChange = (partidoId: string) => {
    setSelectedPartidos((prev) =>
      prev.includes(partidoId) ? prev.filter((id) => id !== partidoId) : [...prev, partidoId],
    )
  }

  const handleTemaChange = (tema: string) => {
    setSelectedTemas((prev) => (prev.includes(tema) ? prev.filter((t) => t !== tema) : [...prev, tema]))
  }

  const clearFilters = () => {
    setSelectedPartidos([])
    setSelectedTemas([])
  }

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="text-lg">Filtros</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-sm font-semibold mb-3 block">Partidos</Label>
          <div className="space-y-3">
            {partidos.map((partido) => (
              <div key={partido.id} className="flex items-center space-x-2">
                <Checkbox
                  id={partido.id}
                  checked={selectedPartidos.includes(partido.id)}
                  onCheckedChange={() => handlePartidoChange(partido.id)}
                />
                <label
                  htmlFor={partido.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {partido.nombre}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label className="text-sm font-semibold mb-3 block">Temas</Label>
          <div className="space-y-3">
            {temas.map((tema) => (
              <div key={tema} className="flex items-center space-x-2">
                <Checkbox
                  id={tema}
                  checked={selectedTemas.includes(tema)}
                  onCheckedChange={() => handleTemaChange(tema)}
                />
                <label
                  htmlFor={tema}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {tema}
                </label>
              </div>
            ))}
          </div>
        </div>

        {(selectedPartidos.length > 0 || selectedTemas.length > 0) && (
          <Button variant="outline" className="w-full bg-transparent" onClick={clearFilters}>
            Limpiar filtros
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
