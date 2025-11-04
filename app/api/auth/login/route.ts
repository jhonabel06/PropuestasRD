import { NextRequest, NextResponse } from 'next/server'
import { createToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

    // Validar credenciales
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Crear token JWT
      const token = await createToken({ username })

      // Crear respuesta con cookie
      const response = NextResponse.json(
        { success: true, message: 'Autenticación exitosa' },
        { status: 200 }
      )

      // Establecer cookie segura
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 horas
        path: '/',
      })

      return response
    } else {
      return NextResponse.json(
        { success: false, message: 'Credenciales inválidas' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Error en login:', error)
    return NextResponse.json(
      { success: false, message: 'Error en el servidor' },
      { status: 500 }
    )
  }
}
