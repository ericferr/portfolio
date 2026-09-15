import { NextResponse } from 'next/server';

// Redirige "/" según la cookie de preferencia o el Accept-Language del navegador.
export function middleware(request) {
  const cookieLang = request.cookies.get('lang')?.value;
  let destino = 'en';

  if (cookieLang === 'es' || cookieLang === 'en') {
    destino = cookieLang;
  } else {
    const aceptado = request.headers.get('accept-language') || '';
    destino = aceptado.startsWith('es') ? 'es' : 'en';
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${destino}`;
  return NextResponse.redirect(url, 307);
}

export const config = { matcher: '/' };
