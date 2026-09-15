import { NextResponse } from 'next/server';
import { elegirIdioma } from '@/lib/idioma';

// Redirige "/" según la cookie de preferencia o el Accept-Language del navegador.
export function middleware(request) {
  const cookieLang = request.cookies.get('lang')?.value;
  let destino = 'en';

  if (cookieLang === 'es' || cookieLang === 'en') {
    destino = cookieLang;
  } else {
    destino = elegirIdioma(request.headers.get('accept-language'));
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${destino}`;
  return NextResponse.redirect(url, 307);
}

export const config = { matcher: '/' };
