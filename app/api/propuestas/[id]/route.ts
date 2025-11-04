import { NextRequest, NextResponse } from 'next/server'
import { getPropuestaById, updatePropuesta, deletePropuesta } from '@/lib/propuestas'

// GET /api/propuestas/[id] - Obtener propuesta por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const propuesta = getPropuestaById(params.id)
    
    if (!propuesta) {
      return NextResponse.json(
        { error: 'Propuesta no encontrada' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(propuesta)
  } catch (error) {
    console.error('Error al obtener propuesta:', error)
    return NextResponse.json(
      { error: 'Error al obtener propuesta' },
      { status: 500 }
    )
  }
}

// PUT /api/propuestas/[id] - Actualizar propuesta
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const updated = updatePropuesta(params.id, body)
    
    if (!updated) {
      return NextResponse.json(
        { error: 'Propuesta no encontrada' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error al actualizar propuesta:', error)
    return NextResponse.json(
      { error: 'Error al actualizar propuesta' },
      { status: 500 }
    )
  }
}

// DELETE /api/propuestas/[id] - Eliminar propuesta
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const success = deletePropuesta(params.id)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Propuesta no encontrada' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ message: 'Propuesta eliminada exitosamente' })
  } catch (error) {
    console.error('Error al eliminar propuesta:', error)
    return NextResponse.json(
      { error: 'Error al eliminar propuesta' },
      { status: 500 }
    )
  }
}
