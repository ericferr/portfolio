// Fila "en vivo" con los totales públicos de DropTrend. Se lee en el servidor
// (sin CORS) y se refresca cada 15 minutos; si el endpoint falla, no se muestra
// nada antes que mostrar un número inventado.
import { contenido } from '@/lib/contenido';

function haceCuanto(iso, t) {
  const horas = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 3600000));
  if (horas < 1) return t.haceMenosUnaHora;
  if (horas < 48) return t.haceHoras(horas);
  return t.haceDias(Math.round(horas / 24));
}

export default async function EnVivo({ lang = 'es' }) {
  const t = contenido[lang].ui.enVivo;
  const fmt = new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-AR');

  let d = null;
  try {
    const r = await fetch('https://droptrend.app/api/estado', { next: { revalidate: 900 } });
    if (r.ok) d = await r.json();
  } catch {
    d = null;
  }
  if (!d || !d.catalogo) return null;

  const filas = [
    { valor: fmt.format(d.tendencias), texto: t.tendencias },
    { valor: fmt.format(d.unidades), texto: t.unidades },
    { valor: fmt.format(d.nuevos), texto: t.nuevos },
    { valor: fmt.format(d.catalogo), texto: t.catalogo },
    { valor: d.paises, texto: t.paises },
  ];

  return (
    <div className="en-vivo entrada" aria-label="Datos en vivo de DropTrend">
      <div className="en-vivo-cabecera">
        <span className="en-vivo-punto" aria-hidden="true"></span>
        <span className="mono">{t.etiqueta}</span>
        <span className="en-vivo-desde">{t.fuente(haceCuanto(d.actualizado, t))}</span>
      </div>
      <div className="numeros en-vivo-numeros">
        {filas.map((n) => (
          <div key={n.texto}>
            <div className="numero-valor">{n.valor}</div>
            <div className="numero-texto">{n.texto}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
