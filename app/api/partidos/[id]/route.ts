import { NextRequest, NextResponse } from 'next/server'
import { getPartidoById, updatePartido, deletePartido } from '@/lib/partidos'

// GET /api/partidos/[id] - Obtener partido por ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const partido = getPartidoById(params.id)
    
    if (!partido) {
      return NextResponse.json(
        { error: 'Partido no encontrado' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(partido)
  } catch (error) {
    console.error('Error al obtener partido:', error)
    return NextResponse.json(
      { error: 'Error al obtener partido' },
      { status: 500 }
    )
  }
}

// PUT /api/partidos/[id] - Actualizar partido
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const updated = updatePartido(params.id, body)
    
    if (!updated) {
      return NextResponse.json(
        { error: 'Partido no encontrado' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error al actualizar partido:', error)
    return NextResponse.json(
      { error: 'Error al actualizar partido' },
      { status: 500 }
    )
  }
}

// DELETE /api/partidos/[id] - Eliminar partido
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const success = deletePartido(params.id)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Partido no encontrado' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({ message: 'Partido eliminado exitosamente' })
  } catch (error) {
    console.error('Error al eliminar partido:', error)
    return NextResponse.json(
      { error: 'Error al eliminar partido' },
      { status: 500 }
    )
  }
}
