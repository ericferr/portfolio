import { Sora, Manrope, JetBrains_Mono } from 'next/font/google';
import '../globals.css';

const sora = Sora({ subsets: ['latin'], weight: ['600', '800'], variable: '--fuente-display', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--fuente-cuerpo', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--fuente-mono', display: 'swap' });

const textos = {
  es: {
    title: 'Eric Ferreira — Analista de Sistemas · Desarrollador full-stack',
    description:
      'Construyo productos que están en producción: un SaaS que opera en 12 países, un sistema de gestión que reemplazó el papel en un comercio, y tiendas que venden.',
    locale: 'es_AR',
  },
  en: {
    title: 'Eric Ferreira — Systems Analyst · Full-stack Developer',
    description:
      'I build products that are in production: a SaaS operating in 12 countries, a management system that replaced paper in a retail store, and stores that sell.',
    locale: 'en_US',
  },
};

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = textos[lang] ?? textos.es;
  return {
    metadataBase: new URL('https://eric-ferreira-dev.vercel.app'),
    title: t.title,
    description: t.description,
    alternates: { languages: { es: '/es', en: '/en' } },
    openGraph: {
      title: t.title,
      description: t.description,
      locale: t.locale,
      type: 'website',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: t.title }],
    },
    twitter: { card: 'summary_large_image' },
  };
}

export const viewport = { themeColor: '#07090f', colorScheme: 'dark' };

export default async function LayoutIdioma({ children, params }) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${sora.variable} ${manrope.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
