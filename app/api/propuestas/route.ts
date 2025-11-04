import { NextRequest, NextResponse } from 'next/server'
import { getPropuestas, createPropuesta } from '@/lib/propuestas'

// GET /api/propuestas - Obtener todas las propuestas
export async function GET() {
  try {
    const propuestas = getPropuestas()
    return NextResponse.json(propuestas)
  } catch (error) {
    console.error('Error al obtener propuestas:', error)
    return NextResponse.json(
      { error: 'Error al obtener propuestas' },
      { status: 500 }
    )
  }
}

// POST /api/propuestas - Crear nueva propuesta
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar campos requeridos
    if (!body.partido || !body.titulo || !body.resumen || !body.tema) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: partido, titulo, resumen, tema' },
        { status: 400 }
      )
    }
    
    const newPropuesta = createPropuesta(body)
    return NextResponse.json(newPropuesta, { status: 201 })
  } catch (error) {
    console.error('Error al crear propuesta:', error)
    return NextResponse.json(
      { error: 'Error al crear propuesta' },
      { status: 500 }
    )
  }
}
