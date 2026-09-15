import Image from 'next/image';
import EnVivo from '@/components/EnVivo';
import { contenido } from '@/lib/contenido';

// Sección de un caso: etiqueta, título, problema, qué construí, decisiones, números, stack y enlaces.
export default function Caso({ caso, lang = 'es' }) {
  const ui = contenido[lang].ui;
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
          <h3>{problemaTitulo || ui.caso.elProblema}</h3>
          <p>{problema}</p>
        </div>

        <div className="bloque entrada">
          <h3>{construiTitulo || ui.caso.queConstrui}</h3>
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

        {id === 'droptrend' && <EnVivo lang={lang} />}

        {enlaces.some((e) => e.destacado) && (
          <div className="destacados entrada">
            {enlaces.filter((e) => e.destacado).map((e) => (
              <a key={e.texto} className="boton-demo" href={e.href} target="_blank" rel="noopener noreferrer">
                <span className="boton-demo-punto" aria-hidden="true"></span>
                {e.texto}
                <span className="boton-demo-sub">{ui.demoSub}</span>
              </a>
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
          <strong>{ui.caso.stack}</strong> {stack}
        </p>

        <div className="enlaces entrada">
          {enlaces.filter((e) => !e.destacado).map((e) =>
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
