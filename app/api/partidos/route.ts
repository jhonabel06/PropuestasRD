import { NextRequest, NextResponse } from 'next/server'
import { getPartidos, createPartido } from '@/lib/partidos'

// GET /api/partidos - Obtener todos los partidos
export async function GET() {
  try {
    const partidos = getPartidos()
    return NextResponse.json(partidos)
  } catch (error) {
    console.error('Error al obtener partidos:', error)
    return NextResponse.json(
      { error: 'Error al obtener partidos' },
      { status: 500 }
    )
  }
}

// POST /api/partidos - Crear nuevo partido
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar campos requeridos
    if (!body.nombre || !body.nombreCompleto || !body.color) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: nombre, nombreCompleto, color' },
        { status: 400 }
      )
    }
    
    const newPartido = createPartido(body)
    return NextResponse.json(newPartido, { status: 201 })
  } catch (error) {
    console.error('Error al crear partido:', error)
    return NextResponse.json(
      { error: 'Error al crear partido' },
      { status: 500 }
    )
  }
}
