import Image from 'next/image';

// Sección de un caso: etiqueta, título, problema, qué construí, decisiones, números, stack y enlaces.
export default function Caso({ caso }) {
  const {
    id,
    acento,
    etiqueta,
    titulo,
    subtitulo,
    problemaTitulo,
    problema,
    construiTitulo,
    construi,
    decisionesTitulo,
    decisiones,
    numeros,
    stack,
    enlaces,
    nota,
    galeria,
  } = caso;

  return (
    <section id={id} className="seccion" data-forma={id} style={{ '--acento': acento }}>
      <div className="seccion-interior">
        <p className="mono etiqueta entrada">{etiqueta}</p>
        <h2 className="entrada">{titulo}</h2>
        {subtitulo && <p className="subtitulo entrada">{subtitulo}</p>}

        <div className="bloque entrada">
          <h3>{problemaTitulo || 'El problema'}</h3>
          <p>{problema}</p>
        </div>

        <div className="bloque entrada">
          <h3>{construiTitulo || 'Qué construí'}</h3>
          <p>{construi}</p>
        </div>

        {decisiones && (
          <div className="bloque entrada">
            <h3>{decisionesTitulo}</h3>
            <ul>
              {decisiones.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        )}

        {numeros && (
          <div className="numeros entrada">
            {numeros.map((n) => (
              <div key={n.texto}>
                <div className="numero-valor">
                  {typeof n.valor === 'number' ? <span data-contador={n.valor}>{n.valor}</span> : n.valor}
                </div>
                <div className="numero-texto">{n.texto}</div>
              </div>
            ))}
          </div>
        )}

        {galeria && (
          <div className="galeria entrada">
            {galeria.map((g) => (
              <a key={g.src} href={g.src} target="_blank" rel="noopener noreferrer">
                <Image src={g.src} alt={g.alt} width={1600} height={1000} sizes="(max-width: 760px) 50vw, 320px" />
              </a>
            ))}
          </div>
        )}

        <p className="stack entrada">
          <strong>Stack.</strong> {stack}
        </p>

        <div className="enlaces entrada">
          {enlaces.map((e) =>
            e.todo ? (
              <a key={e.texto} className="enlace" href={e.href} data-todo={e.todo}>
                {e.texto}
              </a>
            ) : (
              <a key={e.texto} className="enlace" href={e.href} target="_blank" rel="noopener noreferrer">
                {e.texto}
              </a>
            )
          )}
          {nota && <span className="nota">{nota}</span>}
        </div>
      </div>
    </section>
  );
}
