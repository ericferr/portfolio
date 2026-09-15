import { Sora, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sora = Sora({ subsets: ['latin'], weight: ['600', '800'], variable: '--fuente-display', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--fuente-cuerpo', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--fuente-mono', display: 'swap' });

const descripcion =
  'Construyo productos que están en producción: un SaaS que opera en 12 países, un sistema de gestión que reemplazó el papel en un comercio, y tiendas que venden.';

export const metadata = {
  // TODO: cambiar por el dominio definitivo al desplegar.
  metadataBase: new URL('https://portfolio-eric-ferreira.vercel.app'),
  title: 'Eric Ferreira — Desarrollador full-stack',
  description: descripcion,
  openGraph: {
    title: 'Eric Ferreira — Desarrollador full-stack',
    description: descripcion,
    locale: 'es_AR',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Eric Ferreira — Desarrollador full-stack' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = { themeColor: '#07090f', colorScheme: 'dark' };

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${sora.variable} ${manrope.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
