"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, Edit2, Plus, Save, X, LogOut } from "lucide-react"
import { toast } from "sonner"

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

const PARTIDOS = [
  { nombre: "PRM", color: "#00A651" },
  { nombre: "PLD", color: "#8B4789" },
  { nombre: "Fuerza del Pueblo", color: "#FF6B35" },
  { nombre: "PRSC", color: "#DC143C" },
]

const TEMAS = [
  "Educación",
  "Economía",
  "Salud",
  "Transporte",
  "Seguridad",
  "Medio Ambiente",
  "Tecnología",
  "Turismo",
]

export default function AdminPage() {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)
  const [propuestas, setPropuestas] = useState<Propuesta[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState<Partial<Propuesta>>({
    partido: "",
    partidoColor: "",
    titulo: "",
    resumen: "",
    tema: "",
    fecha: new Date().toISOString().split("T")[0],
    autor: "",
    fuenteOficial: "",
    descripcion: "",
  })

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/verify")
      if (response.ok) {
        setAuthenticated(true)
        loadPropuestas()
      } else {
        router.push("/admin/login")
      }
    } catch (error) {
      router.push("/admin/login")
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      toast.success("Sesión cerrada")
      router.push("/admin/login")
    } catch (error) {
      toast.error("Error al cerrar sesión")
    }
  }

  const loadPropuestas = async () => {
    try {
      const response = await fetch("/api/propuestas")
      const data = await response.json()
      setPropuestas(data)
    } catch (error) {
      toast.error("Error al cargar propuestas")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handlePartidoChange = (partido: string) => {
    const partidoData = PARTIDOS.find((p) => p.nombre === partido)
    setFormData({
      ...formData,
      partido,
      partidoColor: partidoData?.color || "",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.partido || !formData.titulo || !formData.resumen || !formData.tema) {
      toast.error("Por favor completa todos los campos requeridos")
      return
    }

    try {
      if (editingId) {
        // Actualizar propuesta existente
        const response = await fetch(`/api/propuestas/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          toast.success("Propuesta actualizada exitosamente")
          loadPropuestas()
          resetForm()
        } else {
          toast.error("Error al actualizar propuesta")
        }
      } else {
        // Crear nueva propuesta
        const response = await fetch("/api/propuestas", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          toast.success("Propuesta creada exitosamente")
          loadPropuestas()
          resetForm()
        } else {
          toast.error("Error al crear propuesta")
        }
      }
    } catch (error) {
      toast.error("Error al guardar propuesta")
      console.error(error)
    }
  }

  const handleEdit = (propuesta: Propuesta) => {
    setFormData(propuesta)
    setEditingId(propuesta.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de que deseas eliminar esta propuesta?")) return

    try {
      const response = await fetch(`/api/propuestas/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        toast.success("Propuesta eliminada exitosamente")
        loadPropuestas()
      } else {
        toast.error("Error al eliminar propuesta")
      }
    } catch (error) {
      toast.error("Error al eliminar propuesta")
      console.error(error)
    }
  }

  const resetForm = () => {
    setFormData({
      partido: "",
      partidoColor: "",
      titulo: "",
      resumen: "",
      tema: "",
      fecha: new Date().toISOString().split("T")[0],
      autor: "",
      fuenteOficial: "",
      descripcion: "",
    })
    setEditingId(null)
    setShowForm(false)
  }

  if (loading || !authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Panel de Administración</h1>
              <p className="text-muted-foreground">Gestiona las propuestas de los partidos políticos</p>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => setShowForm(!showForm)} size="lg">
                {showForm ? (
                  <>
                    <X className="mr-2 h-4 w-4" /> Cancelar
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" /> Nueva Propuesta
                  </>
                )}
              </Button>
              <Button onClick={handleLogout} variant="outline" size="lg">
                <LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión
              </Button>
            </div>
          </div>

          {/* Formulario */}
          {showForm && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{editingId ? "Editar Propuesta" : "Nueva Propuesta"}</CardTitle>
                <CardDescription>
                  {editingId
                    ? "Modifica los campos que desees actualizar"
                    : "Completa el formulario para agregar una nueva propuesta"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Partido */}
                    <div className="space-y-2">
                      <Label htmlFor="partido">
                        Partido <span className="text-destructive">*</span>
                      </Label>
                      <Select value={formData.partido} onValueChange={handlePartidoChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un partido" />
                        </SelectTrigger>
                        <SelectContent>
                          {PARTIDOS.map((partido) => (
                            <SelectItem key={partido.nombre} value={partido.nombre}>
                              {partido.nombre}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Tema */}
                    <div className="space-y-2">
                      <Label htmlFor="tema">
                        Tema <span className="text-destructive">*</span>
                      </Label>
                      <Select value={formData.tema} onValueChange={(value) => setFormData({ ...formData, tema: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un tema" />
                        </SelectTrigger>
                        <SelectContent>
                          {TEMAS.map((tema) => (
                            <SelectItem key={tema} value={tema}>
                              {tema}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Título */}
                  <div className="space-y-2">
                    <Label htmlFor="titulo">
                      Título <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="titulo"
                      value={formData.titulo}
                      onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                      placeholder="Ej: Plan Nacional de Alfabetización Digital"
                      required
                    />
                  </div>

                  {/* Resumen */}
                  <div className="space-y-2">
                    <Label htmlFor="resumen">
                      Resumen <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="resumen"
                      value={formData.resumen}
                      onChange={(e) => setFormData({ ...formData, resumen: e.target.value })}
                      placeholder="Breve descripción de la propuesta (máximo 200 caracteres)"
                      rows={3}
                      required
                    />
                  </div>

                  {/* Descripción completa */}
                  <div className="space-y-2">
                    <Label htmlFor="descripcion">Descripción Completa (HTML permitido)</Label>
                    <Textarea
                      id="descripcion"
                      value={formData.descripcion}
                      onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                      placeholder="Descripción detallada con HTML (h2, p, ul, li, strong, etc.)"
                      rows={8}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Autor */}
                    <div className="space-y-2">
                      <Label htmlFor="autor">Autor</Label>
                      <Input
                        id="autor"
                        value={formData.autor}
                        onChange={(e) => setFormData({ ...formData, autor: e.target.value })}
                        placeholder="Ej: Comisión de Educación - PRM"
                      />
                    </div>

                    {/* Fecha */}
                    <div className="space-y-2">
                      <Label htmlFor="fecha">Fecha</Label>
                      <Input
                        id="fecha"
                        type="date"
                        value={formData.fecha}
                        onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Fuente Oficial */}
                  <div className="space-y-2">
                    <Label htmlFor="fuenteOficial">Fuente Oficial (URL)</Label>
                    <Input
                      id="fuenteOficial"
                      type="url"
                      value={formData.fuenteOficial}
                      onChange={(e) => setFormData({ ...formData, fuenteOficial: e.target.value })}
                      placeholder="https://ejemplo.com/propuesta"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" size="lg">
                      <Save className="mr-2 h-4 w-4" />
                      {editingId ? "Actualizar Propuesta" : "Crear Propuesta"}
                    </Button>
                    <Button type="button" variant="outline" size="lg" onClick={resetForm}>
                      Cancelar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Lista de propuestas */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Propuestas Registradas ({propuestas.length})</h2>
            {propuestas.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">No hay propuestas registradas. ¡Crea la primera!</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {propuestas.map((propuesta) => (
                  <Card key={propuesta.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              style={{ borderColor: propuesta.partidoColor, color: propuesta.partidoColor }}
                            >
                              {propuesta.partido}
                            </Badge>
                            <Badge variant="secondary">{propuesta.tema}</Badge>
                            <span className="text-sm text-muted-foreground">{propuesta.fecha}</span>
                          </div>
                          <CardTitle className="text-xl mb-2">{propuesta.titulo}</CardTitle>
                          <CardDescription>{propuesta.resumen}</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon" onClick={() => handleEdit(propuesta)}>
                            <Edit2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => handleDelete(propuesta.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
