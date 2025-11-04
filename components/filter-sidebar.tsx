"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Partido {
  id: string
  nombre: string
  nombreCompleto: string
  color: string
  activo: boolean
}

const temas = ["Educación", "Economía", "Salud", "Transporte", "Seguridad", "Medio Ambiente", "Tecnología", "Turismo"]

interface FilterSidebarProps {
  selectedPartidos: string[]
  onPartidosChange: (partidos: string[]) => void
  selectedTemas: string[]
  onTemasChange: (temas: string[]) => void
}

export function FilterSidebar({ 
  selectedPartidos, 
  onPartidosChange, 
  selectedTemas, 
  onTemasChange 
}: FilterSidebarProps) {
  const [partidos, setPartidos] = useState<Partido[]>([])

  useEffect(() => {
    loadPartidos()
  }, [])

  const loadPartidos = async () => {
    try {
      const response = await fetch("/api/partidos")
      const data = await response.json()
      setPartidos(data.filter((p: Partido) => p.activo))
    } catch (error) {
      console.error("Error al cargar partidos:", error)
    }
  }

  const handlePartidoToggle = (partido: string) => {
    if (selectedPartidos.includes(partido)) {
      onPartidosChange(selectedPartidos.filter(p => p !== partido))
    } else {
      onPartidosChange([...selectedPartidos, partido])
    }
  }

  const handleTemaToggle = (tema: string) => {
    if (selectedTemas.includes(tema)) {
      onTemasChange(selectedTemas.filter(t => t !== tema))
    } else {
      onTemasChange([...selectedTemas, tema])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filtros</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <Label className="text-sm font-semibold">Partidos</Label>
            {selectedPartidos.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-xs text-gray-500 hover:text-gray-900"
                onClick={() => onPartidosChange([])}
              >
                Limpiar
              </Button>
            )}
          </div>
          <div className="space-y-3">
            {partidos.map((partido) => (
              <div key={partido.id} className="flex items-center space-x-2">
                <Checkbox
                  id={partido.id}
                  checked={selectedPartidos.includes(partido.nombre)}
                  onCheckedChange={() => handlePartidoToggle(partido.nombre)}
                />
                <label
                  htmlFor={partido.id}
                  className="text-sm font-medium leading-none cursor-pointer flex items-center gap-2"
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: partido.color }}
                  />
                  {partido.nombre}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <Label className="text-sm font-semibold">Temas</Label>
            {selectedTemas.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-xs text-gray-500 hover:text-gray-900"
                onClick={() => onTemasChange([])}
              >
                Limpiar
              </Button>
            )}
          </div>
          <div className="space-y-3">
            {temas.map((tema) => (
              <div key={tema} className="flex items-center space-x-2">
                <Checkbox
                  id={tema}
                  checked={selectedTemas.includes(tema)}
                  onCheckedChange={() => handleTemaToggle(tema)}
                />
                <label
                  htmlFor={tema}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {tema}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
