import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const code = body?.code

    if (!code) {
      return NextResponse.json({ error: 'Missing code' }, { status: 400 })
    }

    const YUJU_API_URL = " https://api.tp.yuju.io";
    const CLIENT_ID_YUJU = process.env.CLIENT_ID_YUJU;
    const SECRET_KEY_YUJU = process.env.SECRET_KEY_YUJU;

    console.log(SECRET_KEY_YUJU);
    console.log(CLIENT_ID_YUJU);
    console.log(YUJU_API_URL);


    if (!YUJU_API_URL || !CLIENT_ID_YUJU || !SECRET_KEY_YUJU) {
      return NextResponse.json({ error: 'Test variable ' + YUJU_API_URL + ' otro ' + CLIENT_ID_YUJU + '  otro  ' + SECRET_KEY_YUJU }, { status: 500 })
    }

    const res = await fetch(`${YUJU_API_URL}/auth-generate-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, client_id: CLIENT_ID_YUJU, secret_key: SECRET_KEY_YUJU }),
    })
    console.log(body);

    const data = await res.json()
    const token = data?.token ?? null

    // Nota: aquí devolvemos el token al cliente. Si quieres guardar el token en
    // una base de datos, reemplaza esta sección por la lógica de guardado.

    return NextResponse.json({ token, raw: data })
  } catch (err) {
    // mejor detalle de error en desarrollo
    return NextResponse.json({ error: 'Internal server error', detail: String(err) }, { status: 500 })
  }
}
