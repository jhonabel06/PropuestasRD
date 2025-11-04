import fs from 'fs'
import path from 'path'

export interface Propuesta {
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

const dataFilePath = path.join(process.cwd(), 'data', 'propuestas.json')

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

export function getPropuestas(): Propuesta[] {
  ensureDataDirectory()
  const data = fs.readFileSync(dataFilePath, 'utf-8')
  return JSON.parse(data)
}

export function getPropuestaById(id: string): Propuesta | null {
  const propuestas = getPropuestas()
  return propuestas.find((p) => p.id === id) || null
}

export function createPropuesta(propuesta: Omit<Propuesta, 'id'>): Propuesta {
  ensureDataDirectory()
  const propuestas = getPropuestas()
  
  // Generar ID único
  const newId = (Math.max(0, ...propuestas.map(p => parseInt(p.id) || 0)) + 1).toString()
  
  const newPropuesta: Propuesta = {
    id: newId,
    ...propuesta,
    fecha: propuesta.fecha || new Date().toISOString().split('T')[0]
  }
  
  propuestas.push(newPropuesta)
  fs.writeFileSync(dataFilePath, JSON.stringify(propuestas, null, 2), 'utf-8')
  
  return newPropuesta
}

export function updatePropuesta(id: string, updates: Partial<Propuesta>): Propuesta | null {
  ensureDataDirectory()
  const propuestas = getPropuestas()
  const index = propuestas.findIndex((p) => p.id === id)
  
  if (index === -1) return null
  
  propuestas[index] = { ...propuestas[index], ...updates, id }
  fs.writeFileSync(dataFilePath, JSON.stringify(propuestas, null, 2), 'utf-8')
  
  return propuestas[index]
}

export function deletePropuesta(id: string): boolean {
  ensureDataDirectory()
  const propuestas = getPropuestas()
  const filtered = propuestas.filter((p) => p.id !== id)
  
  if (filtered.length === propuestas.length) return false
  
  fs.writeFileSync(dataFilePath, JSON.stringify(filtered, null, 2), 'utf-8')
  return true
}
