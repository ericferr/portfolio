// Negociación de idioma a partir de Accept-Language. Función pura para poder
// probarla sin depender de un Request de Next.

const SOPORTADOS = ['es', 'en'];

// Parsea "fr-FR,es;q=0.9,en;q=0.8" en [{ base: 'fr', q: 1 }, { base: 'es', q: 0.9 }, ...]
// ordenado por q descendente, y devuelve el primer idioma base soportado.
export function elegirIdioma(aceptLanguage) {
  const encabezado = (aceptLanguage || '').trim();
  if (!encabezado) return 'en';

  const rangos = encabezado
    .split(',')
    .map((parte) => {
      const [rango, ...params] = parte.trim().split(';');
      const paramQ = params.find((p) => p.trim().startsWith('q='));
      const q = paramQ ? parseFloat(paramQ.trim().slice(2)) : 1;
      const base = rango.trim().split('-')[0].toLowerCase();
      return { base, q: Number.isFinite(q) ? q : 1 };
    })
    .filter((r) => r.base)
    .sort((a, b) => b.q - a.q);

  const encontrado = rangos.find((r) => SOPORTADOS.includes(r.base));
  return encontrado ? encontrado.base : 'en';
}
