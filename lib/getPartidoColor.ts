import { getPartidos } from './partidos'

/**
 * Obtiene el color actual de un partido desde la base de datos
 * Si no se encuentra, devuelve un color por defecto
 */
export function getPartidoColor(nombrePartido: string): string {
  try {
    const partidos = getPartidos()
    const partido = partidos.find(p => p.nombre === nombrePartido)
    return partido?.color || '#6B7280' // Color gris por defecto
  } catch (error) {
    console.error('Error obteniendo color del partido:', error)
    return '#6B7280'
  }
}

/**
 * Enriquece las propuestas con el color actualizado del partido
 */
export function enrichPropuestasWithColors<T extends { partido: string; partidoColor?: string }>(
  propuestas: T[]
): T[] {
  return propuestas.map(propuesta => ({
    ...propuesta,
    partidoColor: getPartidoColor(propuesta.partido)
  }))
}
