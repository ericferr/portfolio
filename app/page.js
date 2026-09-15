import dynamic from 'next/dynamic';
import Caso from '@/components/Caso';
import Animaciones from '@/components/Animaciones';
import { hero, casos, sobreMi, contacto } from '@/lib/contenido';

// El canvas se carga solo en el cliente y después del texto: si WebGL falla, la página igual se lee.
const Particulas = dynamic(() => import('@/components/Particulas'), { ssr: false });

export default function Pagina() {
  return (
    <>
      <Particulas />
      <Animaciones />

      <nav className="nav" aria-label="Principal">
        <a className="nav-nombre" href="#inicio">
          {hero.nombre}
        </a>
        <ul>
          <li>
            <a href="#droptrend">Trabajo</a>
          </li>
          <li>
            <a href="#sobre-mi">Sobre mí</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>

      <main>
        <section id="inicio" className="seccion hero" data-forma="hero">
          <div className="seccion-interior">
            <h1 className="entrada">{hero.nombre}</h1>
            <p className="hero-rol entrada">{hero.rol}</p>
            <p className="hero-linea entrada">{hero.linea}</p>
            <div className="botones entrada">
              {hero.botones.map((b) => (
                <a
                  key={b.texto}
                  className={b.primario ? 'boton boton-primario' : 'boton'}
                  href={b.href}
                  target={b.href.startsWith('http') ? '_blank' : undefined}
                  rel={b.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {b.texto}
                </a>
              ))}
            </div>
            <p className="hero-disponibilidad entrada">{hero.disponibilidad}</p>
          </div>
        </section>

        {casos.map((c) => (
          <Caso key={c.id} caso={c} />
        ))}

        <section id="sobre-mi" className="seccion sobre" data-forma="sobre">
          <div className="seccion-interior">
            <h2 className="entrada">Sobre mí</h2>
            <div className="bloque">
              {sobreMi.parrafos.map((p) => (
                <p key={p} className="entrada">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="seccion" data-forma="contacto">
          <div className="seccion-interior">
            <h2 className="entrada">Contacto</h2>
            <div className="bloque entrada">
              <a className="contacto-email" href={`mailto:${contacto.email}`}>
                {contacto.email}
              </a>
            </div>
            <div className="enlaces entrada">
              {contacto.enlaces.map((e) => (
                <a
                  key={e.texto}
                  className="enlace"
                  href={e.href}
                  target={e.href.startsWith('http') ? '_blank' : undefined}
                  rel={e.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {e.texto}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="pie">
        <span>{hero.nombre} · Posadas, Argentina (GMT-3)</span>
        <span>Next.js · Three.js</span>
      </footer>
    </>
  );
}
