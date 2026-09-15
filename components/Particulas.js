'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  formaTexto,
  formaImagen,
  formaAnillo,
  formaBolsa,
  formaAvion,
  formaNube,
  direccionesEsfera,
  actualizarOnda,
  actualizarEsfera,
} from '@/lib/formas';

// Colores por forma. La piedra del anillo lleva un blanco cálido aparte.
const COLORES = {
  hero: '#c9d1e3',
  ef: '#c9d1e3',
  onda: '#c9d1e3',
  esfera: '#c9d1e3',
  logo: '#5ee7c8',
  anillo: '#f0c76a',
  piedra: '#fff4dc',
  bolsa: '#ffb86b',
  avion: '#7c8cff',
};

// Ciclo del hero: 10 s por estado, la onda es el estado de reposo.
const CICLO_HERO = ['ef', 'onda', 'esfera', 'onda'];
const DURACION_ESTADO = 10000;
const LERP = 0.05;

export default function Particulas() {
  const ref = useRef(null);

  useEffect(() => {
    const contenedor = ref.current;
    if (!contenedor) return undefined;

    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const movil = window.matchMedia('(max-width: 760px)').matches;
    const N = movil ? 3000 : 8000;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
    } catch (e) {
      // Sin WebGL queda el gradiente de fondo del CSS.
      return undefined;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(contenedor.clientWidth, contenedor.clientHeight);
    contenedor.appendChild(renderer.domElement);

    const escena = new THREE.Scene();
    const camara = new THREE.PerspectiveCamera(50, contenedor.clientWidth / contenedor.clientHeight, 0.1, 100);
    camara.position.set(0, 0, 7.2);

    const grupo = new THREE.Group();
    escena.add(grupo);

    const posiciones = formaNube(N);
    const objetivo = new Float32Array(N * 3);
    objetivo.set(posiciones);
    const colores = new Float32Array(N * 3);
    const coloresObjetivo = new Float32Array(N * 3);
    const geometria = new THREE.BufferGeometry();
    geometria.setAttribute('position', new THREE.BufferAttribute(posiciones, 3));
    geometria.setAttribute('color', new THREE.BufferAttribute(colores, 3));

    const material = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const puntos = new THREE.Points(geometria, material);
    grupo.add(puntos);

    // Formas fijas, calculadas una sola vez.
    const formas = {
      anillo: formaAnillo(N),
      bolsa: formaBolsa(N),
      avion: formaAvion(N),
      ef: null,
      logo: null,
    };
    const dirsEsfera = direccionesEsfera(N);

    const colorTmp = new THREE.Color();
    function pintar(nombre) {
      const base = colorTmp.set(COLORES[nombre] || COLORES.hero);
      const piedra = nombre === 'anillo' ? formas.anillo.piedra : null;
      const cPiedra = new THREE.Color(COLORES.piedra);
      for (let i = 0; i < N; i++) {
        const c = piedra && piedra[i] ? cPiedra : base;
        coloresObjetivo[i * 3] = c.r;
        coloresObjetivo[i * 3 + 1] = c.g;
        coloresObjetivo[i * 3 + 2] = c.b;
      }
    }

    // Estado actual
    let seccion = 'hero';
    let estadoHero = 0;
    let forma = 'onda';
    let ultimoCambio = performance.now();

    function aplicarForma(nombre) {
      forma = nombre;
      if (nombre === 'anillo') objetivo.set(formas.anillo.posiciones);
      else if (nombre === 'bolsa' || nombre === 'avion') objetivo.set(formas[nombre]);
      else if (nombre === 'ef' || nombre === 'logo') {
        if (formas[nombre]) objetivo.set(formas[nombre]);
        else forma = 'onda'; // todavía no cargó: se queda en la onda
      }
      pintar(forma);
    }

    // Las formas rasterizadas dependen de recursos externos (fuente e imagen).
    // next/font registra la familia con un nombre propio; se lee de la variable CSS del título.
    const familiaTitulo =
      getComputedStyle(document.documentElement).getPropertyValue('--fuente-display').trim() || 'Sora';
    const fuenteTitulo = `800 190px ${familiaTitulo}, sans-serif`;
    const cargarEF = () => {
      formas.ef = formaTexto('EF', fuenteTitulo, N);
      if (seccion === 'hero' && CICLO_HERO[estadoHero] === 'ef') aplicarForma('ef');
    };
    if (document.fonts && document.fonts.load) {
      document.fonts.load(fuenteTitulo).then(cargarEF, cargarEF);
    } else {
      cargarEF();
    }
    const img = new Image();
    img.onload = () => {
      formas.logo = formaImagen(img, N);
      if (seccion === 'droptrend') aplicarForma('logo');
    };
    img.src = '/droptrend-logo.png';

    aplicarForma(CICLO_HERO[estadoHero]);
    // Arranca ya con el color correcto para no ver un fundido desde negro.
    colores.set(coloresObjetivo);

    // Qué sección está en el centro de la pantalla.
    const secciones = Array.from(document.querySelectorAll('[data-forma]'));
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          const nueva = e.target.dataset.forma;
          if (nueva === seccion) continue;
          seccion = nueva;
          if (nueva === 'hero') {
            estadoHero = 0;
            ultimoCambio = performance.now();
            aplicarForma(CICLO_HERO[0]);
          } else if (nueva === 'droptrend') aplicarForma('logo');
          else if (nueva === 'joyeria') aplicarForma('anillo');
          else if (nueva === 'ecommerce') aplicarForma('bolsa');
          else if (nueva === 'turismo') aplicarForma('avion');
          else aplicarForma('onda');
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    secciones.forEach((s) => observador.observe(s));

    // Mouse: la forma lo sigue levemente (no en móvil ni con movimiento reducido).
    const mouse = { x: 0, y: 0 };
    const onMouse = (ev) => {
      mouse.x = (ev.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (ev.clientY / window.innerHeight) * 2 - 1;
    };
    if (!movil && !reducirMovimiento) window.addEventListener('mousemove', onMouse, { passive: true });

    function ubicar() {
      const w = contenedor.clientWidth;
      const h = contenedor.clientHeight;
      renderer.setSize(w, h);
      camara.aspect = w / h;
      camara.updateProjectionMatrix();
      // En desktop el sistema vive a la derecha; en móvil, centrado de fondo.
      const ancho = movil || w < 760;
      // Centro de la mitad derecha de la pantalla, en unidades de escena a z = 0.
      const medioAncho = camara.position.z * Math.tan((camara.fov * Math.PI) / 360) * (w / h);
      grupo.position.x = ancho ? 0 : medioAncho * 0.5;
      grupo.position.y = ancho ? 0.4 : 0;
      grupo.scale.setScalar(ancho ? 0.75 : 1);
    }
    ubicar();
    window.addEventListener('resize', ubicar);

    let ultimoT = performance.now();
    let tiempo = 0;
    let visible = true;
    const onVisibilidad = () => {
      visible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', onVisibilidad);

    let rafId = 0;
    function cuadro(ahora) {
      rafId = requestAnimationFrame(cuadro);
      if (!visible) return;
      const dt = Math.min(0.05, (ahora - ultimoT) / 1000);
      ultimoT = ahora;
      if (!reducirMovimiento) tiempo += dt;

      // Ciclo del hero
      if (seccion === 'hero' && ahora - ultimoCambio > DURACION_ESTADO) {
        estadoHero = (estadoHero + 1) % CICLO_HERO.length;
        ultimoCambio = ahora;
        aplicarForma(CICLO_HERO[estadoHero]);
      }

      // Formas animadas: el objetivo cambia cada frame.
      if (forma === 'onda') actualizarOnda(objetivo, N, tiempo);
      else if (forma === 'esfera') actualizarEsfera(objetivo, dirsEsfera, N, tiempo);

      const pos = geometria.attributes.position.array;
      const col = geometria.attributes.color.array;
      for (let i = 0; i < N * 3; i++) {
        pos[i] += (objetivo[i] - pos[i]) * LERP;
        col[i] += (coloresObjetivo[i] - col[i]) * LERP;
      }
      geometria.attributes.position.needsUpdate = true;
      geometria.attributes.color.needsUpdate = true;

      // La rotación tiende a un objetivo, nunca acumula: con el mouse al
      // centro la forma queda de frente. Las formas planas (EF, logo) solo
      // se balancean; las 3D giran despacio para que se lea el volumen.
      const plana = forma === 'ef' || forma === 'logo';
      if (!reducirMovimiento) {
        let objY;
        let objX;
        if (plana) {
          objY = Math.sin(tiempo * 0.5) * 0.10 + mouse.x * 0.28;
          objX = mouse.y * 0.14;
        } else if (forma === 'onda') {
          objY = Math.sin(tiempo * 0.3) * 0.15 + mouse.x * 0.3;
          objX = 0.45 + mouse.y * 0.15;
        } else {
          objY = tiempo * 0.22 + mouse.x * 0.3;
          objX = 0.12 + mouse.y * 0.18;
        }
        grupo.rotation.y += (objY - grupo.rotation.y) * 0.05;
        grupo.rotation.x += (objX - grupo.rotation.x) * 0.05;
      } else {
        grupo.rotation.set(forma === 'onda' ? 0.45 : 0, 0, 0);
      }

      renderer.render(escena, camara);
    }
    rafId = requestAnimationFrame(cuadro);

    // Gancho de depuración en desarrollo: permite avanzar frames a mano cuando la pestaña no dispara RAF.
    if (process.env.NODE_ENV !== 'production') {
      window.__particulas = {
        avanzar: (n = 1) => {
          for (let k = 0; k < n; k++) {
            cancelAnimationFrame(rafId);
            cuadro(performance.now() + k * 16);
          }
        },
        forma: () => forma,
        seccion: () => seccion,
      };
    }

    return () => {
      cancelAnimationFrame(rafId);
      observador.disconnect();
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', ubicar);
      document.removeEventListener('visibilitychange', onVisibilidad);
      geometria.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === contenedor) contenedor.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="fondo" ref={ref} aria-hidden="true" />;
}
