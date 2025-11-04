import fs from 'fs'
import path from 'path'

export interface Partido {
  id: string
  nombre: string
  nombreCompleto: string
  color: string
  descripcion?: string
  sitioWeb?: string
  activo: boolean
}

const dataFilePath = path.join(process.cwd(), 'data', 'partidos.json')

// Asegurar que el directorio existe
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]), 'utf-8')
  }
}

export function getPartidos(): Partido[] {
  ensureDataDirectory()
  const data = fs.readFileSync(dataFilePath, 'utf-8')
  return JSON.parse(data)
}

export function getPartidosActivos(): Partido[] {
  return getPartidos().filter(p => p.activo)
}

export function getPartidoById(id: string): Partido | null {
  const partidos = getPartidos()
  return partidos.find((p) => p.id === id) || null
}

export function createPartido(partido: Omit<Partido, 'id'>): Partido {
  ensureDataDirectory()
  const partidos = getPartidos()
  
  // Generar ID único
  const newId = (Math.max(0, ...partidos.map(p => parseInt(p.id) || 0)) + 1).toString()
  
  const newPartido: Partido = {
    id: newId,
    ...partido,
    activo: partido.activo !== undefined ? partido.activo : true
  }
  
  partidos.push(newPartido)
  fs.writeFileSync(dataFilePath, JSON.stringify(partidos, null, 2), 'utf-8')
  
  return newPartido
}

export function updatePartido(id: string, updates: Partial<Partido>): Partido | null {
  ensureDataDirectory()
  const partidos = getPartidos()
  const index = partidos.findIndex((p) => p.id === id)
  
  if (index === -1) return null
  
  partidos[index] = { ...partidos[index], ...updates, id }
  fs.writeFileSync(dataFilePath, JSON.stringify(partidos, null, 2), 'utf-8')
  
  return partidos[index]
}

export function deletePartido(id: string): boolean {
  ensureDataDirectory()
  const partidos = getPartidos()
  const filtered = partidos.filter((p) => p.id !== id)
  
  if (filtered.length === partidos.length) return false
  
  fs.writeFileSync(dataFilePath, JSON.stringify(filtered, null, 2), 'utf-8')
  return true
}
