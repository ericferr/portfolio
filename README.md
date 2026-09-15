# Portfolio — Eric Ferreira

Página única en Next.js 14 (App Router, JavaScript) con un sistema de partículas en Three.js que cambia de forma según la sección visible.

## Correr

```
npm install
npm run dev        # http://localhost:3000
npm run build      # verificación: debe pasar sin errores
```

El texto vive en `lib/contenido.js`. Las formas de las partículas en `lib/formas.js`; el canvas y el cambio por sección en `components/Particulas.js`.

## Desplegar en Vercel

Importar el repo en Vercel con la configuración por defecto de Next.js. No hay variables de entorno ni API routes. Antes del primer deploy, cambiar `metadataBase` en `app/layout.js` por el dominio definitivo.

## Pendiente

- `[DEMO_URL]`: el enlace "Entrar a la demo" del caso 2 apunta a `#` (atributo `data-todo`).
- `metadataBase` en `app/layout.js` con el dominio real.
