"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { generateTokenFromCode } from '@/lib/generateToken'

export default function AuthCallbackPage() {
  const params = useSearchParams()
  const code = params?.get('code')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    if (!code) return

    const run = async () => {
      setStatus('loading')
      setError(null)
      try {
        const token = await generateTokenFromCode(code)
        if (!mounted) return
        if (token) {
          setStatus('done')
          // redirigir al inicio después de un breve retardo para que el usuario vea el mensaje
          setTimeout(() => (window.location.href = '/'), 800)
        } else {
          setStatus('error')
          setError('No se recibió token del servidor')
        }
      } catch (err: any) {
        if (!mounted) return
        setStatus('error')
        setError(String(err?.message || err))
        console.error('Error generando token:', err)
      }
    }

    run()

    return () => {
      mounted = false
    }
  }, [code])

  if (!code) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-lg font-semibold">Callback de autenticación</h1>
        <p>No se detectó un código de autorización en la URL.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-lg font-semibold">Procesando autenticación</h1>
      {status === 'loading' && <p>Intercambiando código por token…</p>}
      {status === 'done' && <p>Autenticación completada. Redirigiendo…</p>}
      {status === 'error' && (
        <div>
          <p className="text-red-600">Error: {error}</p>
          <p>Intenta recargar o contacta al administrador.</p>
        </div>
      )}
    </div>
  )
}
