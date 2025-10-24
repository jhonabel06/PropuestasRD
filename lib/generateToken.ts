"use client"

export async function generateTokenFromCode(code: string): Promise<string | null> {
  if (!code) throw new Error('code is required')

  const res = await fetch('/api/generate-token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error('Failed to generate token: ' + (err?.error || res.status))
  }

  const data = await res.json()
  const token = data?.token ?? null

  // Guardar en localStorage para uso posterior en el cliente
  if (typeof window !== 'undefined' && token) {
    try {
      localStorage.setItem('yuju_token', token)
    } catch (e) {
      // silenciar fallo de almacenamiento
    }
  }

  return token
}
