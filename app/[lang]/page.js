import dynamic from 'next/dynamic';
import Caso from '@/components/Caso';
import Animaciones from '@/components/Animaciones';
import SelectorIdioma from '@/components/SelectorIdioma';
import { contenido } from '@/lib/contenido';

// El canvas se carga solo en el cliente y después del texto: si WebGL falla, la página igual se lee.
const Particulas = dynamic(() => import('@/components/Particulas'), { ssr: false });

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function Pagina({ params }) {
  const { lang } = await params;
  const { hero, casos, sobreMi, contacto, ui } = contenido[lang];

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
            <a href="#droptrend">{ui.nav.trabajo}</a>
          </li>
          <li>
            <a href="#sobre-mi">{ui.nav.sobreMi}</a>
          </li>
          <li>
            <a href="#contacto">{ui.nav.contacto}</a>
          </li>
          <li>
            <SelectorIdioma lang={lang} />
          </li>
        </ul>
      </nav>

      <main>
        <section id="inicio" className="seccion hero" data-forma="hero">
          <div className="seccion-interior">
            <h1 className="entrada">{hero.nombre}</h1>
            <p className="hero-rol entrada">{hero.rol}</p>
            <p className="hero-rol-sec entrada">{hero.rolSecundario}</p>
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
          <Caso key={c.id} caso={c} lang={lang} />
        ))}

        <section id="sobre-mi" className="seccion sobre" data-forma="sobre">
          <div className="seccion-interior">
            <h2 className="entrada">{ui.sobreMiTitulo}</h2>
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
            <h2 className="entrada">{ui.contactoTitulo}</h2>
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
        <span>{ui.pieStack}</span>
      </footer>
    </>
  );
}
