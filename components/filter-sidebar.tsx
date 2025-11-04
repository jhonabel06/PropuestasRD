"use client"

import { useState, useEffect } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
  selectedPartido: string
  onPartidoChange: (partido: string) => void
  selectedTema: string
  onTemaChange: (tema: string) => void
}

export function FilterSidebar({ 
  selectedPartido, 
  onPartidoChange, 
  selectedTema, 
  onTemaChange 
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filtros</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <Label className="text-sm font-semibold">Partidos</Label>
            {selectedPartido && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-xs text-gray-500 hover:text-gray-900"
                onClick={() => onPartidoChange('')}
              >
                Limpiar
              </Button>
            )}
          </div>
          <RadioGroup value={selectedPartido} onValueChange={onPartidoChange}>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="" id="all-partidos" />
                <label
                  htmlFor="all-partidos"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Todos los partidos
                </label>
              </div>
              {partidos.map((partido) => (
                <div key={partido.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={partido.nombre} id={partido.id} />
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
          </RadioGroup>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <Label className="text-sm font-semibold">Temas</Label>
            {selectedTema && (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-xs text-gray-500 hover:text-gray-900"
                onClick={() => onTemaChange('')}
              >
                Limpiar
              </Button>
            )}
          </div>
          <RadioGroup value={selectedTema} onValueChange={onTemaChange}>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="" id="all-temas" />
                <label
                  htmlFor="all-temas"
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  Todos los temas
                </label>
              </div>
              {temas.map((tema) => (
                <div key={tema} className="flex items-center space-x-2">
                  <RadioGroupItem value={tema} id={tema} />
                  <label
                    htmlFor={tema}
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    {tema}
                  </label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}
