'use client';

import { useRouter, usePathname } from 'next/navigation';

// ES | EN en la nav: guarda la preferencia en cookie y navega a la otra ruta
// conservando el hash (para no perder la sección donde estaba el usuario).
export default function SelectorIdioma({ lang }) {
  const router = useRouter();
  const pathname = usePathname();

  function ir(destino) {
    if (destino === lang) return;
    document.cookie = `lang=${destino}; path=/; max-age=${60 * 60 * 24 * 365}`;
    const resto = pathname.replace(/^\/(es|en)/, '') || '';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    router.push(`/${destino}${resto}${hash}`);
  }

  return (
    <div className="selector-idioma" aria-label="Idioma">
      <button
        type="button"
        aria-current={lang === 'es' ? 'true' : undefined}
        className={lang === 'es' ? 'activo' : ''}
        onClick={() => ir('es')}
      >
        ES
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        aria-current={lang === 'en' ? 'true' : undefined}
        className={lang === 'en' ? 'activo' : ''}
        onClick={() => ir('en')}
      >
        EN
      </button>
    </div>
  );
}
