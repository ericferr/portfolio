// Fila "en vivo" con los totales públicos de DropTrend. Se lee en el servidor
// (sin CORS) y se refresca cada 15 minutos; si el endpoint falla, no se muestra
// nada antes que mostrar un número inventado.
const fmt = new Intl.NumberFormat('es-AR');

function haceCuanto(iso) {
  const horas = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 3600000));
  if (horas < 1) return 'hace menos de una hora';
  if (horas < 48) return `hace ${horas} h`;
  return `hace ${Math.round(horas / 24)} días`;
}

export default async function EnVivo() {
  let d = null;
  try {
    const r = await fetch('https://droptrend.app/api/estado', { next: { revalidate: 900 } });
    if (r.ok) d = await r.json();
  } catch {
    d = null;
  }
  if (!d || !d.catalogo) return null;

  const filas = [
    { valor: fmt.format(d.tendencias), texto: 'productos con movimiento' },
    { valor: fmt.format(d.unidades), texto: 'unidades detectadas hoy' },
    { valor: fmt.format(d.nuevos), texto: 'productos nuevos' },
    { valor: fmt.format(d.catalogo), texto: 'productos analizados' },
    { valor: d.paises, texto: 'países' },
  ];

  return (
    <div className="en-vivo entrada" aria-label="Datos en vivo de DropTrend">
      <div className="en-vivo-cabecera">
        <span className="en-vivo-punto" aria-hidden="true"></span>
        <span className="mono">EN VIVO</span>
        <span className="en-vivo-desde">datos reales de droptrend.app · actualizado {haceCuanto(d.actualizado)}</span>
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
