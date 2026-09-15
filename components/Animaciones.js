'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Entradas de texto y contadores al scrollear. Sin JS todo se ve igual, sin animar.
export default function Animaciones() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      document.querySelectorAll('.seccion-interior').forEach((bloque) => {
        const hijos = bloque.querySelectorAll('.entrada');
        if (!hijos.length) return;
        gsap.from(hijos, {
          y: 22,
          opacity: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: { trigger: bloque, start: 'top 78%', once: true },
        });
      });

      document.querySelectorAll('[data-contador]').forEach((el) => {
        const fin = Number(el.dataset.contador);
        if (!Number.isFinite(fin)) return;
        const estado = { v: 0 };
        gsap.to(estado, {
          v: fin,
          duration: 1.4,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(estado.v);
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
