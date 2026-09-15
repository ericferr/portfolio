'use client';

import { useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

// ES | EN en la nav: guarda la preferencia en cookie y navega a la otra ruta
// conservando el hash (para no perder la sección donde estaba el usuario).
// role="radiogroup": los dos botones son mutuamente excluyentes, como un
// radio; se navegan con flechas izquierda/derecha, igual que un radio nativo.
export default function SelectorIdioma({ lang }) {
  const router = useRouter();
  const pathname = usePathname();
  const refEs = useRef(null);
  const refEn = useRef(null);

  function ir(destino) {
    if (destino === lang) return;
    document.cookie = `lang=${destino}; path=/; max-age=${60 * 60 * 24 * 365}`;
    const resto = pathname.replace(/^\/(es|en)/, '') || '';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    router.push(`/${destino}${resto}${hash}`);
  }

  function onKeyDown(ev) {
    if (ev.key !== 'ArrowLeft' && ev.key !== 'ArrowRight') return;
    ev.preventDefault();
    const destino = ev.key === 'ArrowLeft' ? 'es' : 'en';
    (destino === 'es' ? refEs : refEn).current?.focus();
    ir(destino);
  }

  return (
    <div className="selector-idioma" role="radiogroup" aria-label="Idioma / Language" onKeyDown={onKeyDown}>
      <button
        ref={refEs}
        type="button"
        role="radio"
        aria-checked={lang === 'es'}
        tabIndex={lang === 'es' ? 0 : -1}
        className={lang === 'es' ? 'activo' : ''}
        onClick={() => ir('es')}
      >
        ES
      </button>
      <span aria-hidden="true">|</span>
      <button
        ref={refEn}
        type="button"
        role="radio"
        aria-checked={lang === 'en'}
        tabIndex={lang === 'en' ? 0 : -1}
        className={lang === 'en' ? 'activo' : ''}
        onClick={() => ir('en')}
      >
        EN
      </button>
    </div>
  );
}
