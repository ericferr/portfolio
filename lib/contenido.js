// Texto de la página. Sale de portfolio-assets/CONTENIDO.md; no se inventa nada.

export const hero = {
  nombre: 'Eric Ferreira',
  rol: 'Analista de Sistemas (título 2025) · Desarrollador full-stack',
  linea:
    'Construyo productos que están en producción: un SaaS que opera en 12 países, un sistema de gestión que reemplazó el papel en un comercio, y tiendas que venden.',
  botones: [
    { texto: 'Ver DropTrend en vivo', href: 'https://droptrend.app', primario: true },
    { texto: 'Descargar CV', href: '/CV-Eric-Ferreira.pdf' },
    { texto: 'CV in English', href: '/CV-Eric-Ferreira-EN.pdf' },
    { texto: 'LinkedIn', href: 'https://www.linkedin.com/in/eric-ferreira-/' },
    { texto: 'GitHub', href: 'https://github.com/ericferr' },
  ],
  disponibilidad:
    'Busco un puesto full-stack 100% remoto (relación de dependencia o contrato) · Disponibilidad inmediata · Posadas, Argentina (GMT-3) · Código en GitHub',
};

export const casos = [
  {
    id: 'droptrend',
    forma: 'logo',
    acento: '#5ee7c8',
    etiqueta: 'Caso 1 · SaaS en producción',
    titulo: 'DropTrend',
    subtitulo: 'droptrend.app',
    problema:
      'Elegir qué vender en dropshipping es adivinar: se paga publicidad antes de saber si el producto tiene demanda, y después de elegirlo hay que resolver cómo venderlo, con qué ángulo y a qué precio.',
    construi:
      'La respuesta, todos los días y por país: DropTrend analiza cerca de 300.000 productos en 12 países y muestra cuáles tienen demanda real. Sobre ese motor construí el producto completo: un copiloto con IA que rastrea la oferta existente del producto en cada país y cómo lo presentan los vendedores que ya lo ofrecen —título, promesa y a quién le hablan— y a partir de eso propone ángulos propios, precios y respuestas a objeciones; landing pages listas para vender; la integración vía API con Meta Ads, revisada y aprobada por Meta, que trae el gasto de cada campaña y lo cruza con los pedidos para ver la ganancia real; y un bot de WhatsApp con IA, integrado vía API, que atiende a los clientes de cada usuario con sus propios datos. Diseño, código y operación, todo mío.',
    decisionesTitulo: 'Decisiones que defiendo',
    decisiones: [
      'Identidad estable de cada producto frente a atributos que cambian: evita registros fantasma cuando el proveedor renombra.',
      'Precálculo diario en lugar de calcular en cada consulta: el ranking pasó de 8,7 s a 1,0 s cuando la tabla cruda superó las 700.000 filas.',
      'Lo programado (captura diaria, correos, publicaciones) corre en GitHub Actions y pg_cron: cada tarea tiene historial y reintentos, y no depende de los límites del hosting.',
      'Validación en paralelo de los datos que entran: un fallo silencioso de 11 días me enseñó que "no hay error" no significa "está bien".',
      'El bot nunca inventa: responde solo con lo que el usuario cargó; la IA se usa para redactar, no para decidir datos.',
    ],
    numeros: [
      { valor: 12, texto: 'países' },
      { valor: 55, texto: 'endpoints REST' },
      { valor: '8,7 s → 1,0 s', texto: 'ranking' },
      { valor: 'ago. 2026', texto: 'captura diaria desde' },
    ],
    stack:
      'Next.js 14 · React · PostgreSQL (Supabase) · GitHub Actions · Node.js · Python · Meta Graph API · WhatsApp (Cloud API y sesiones vinculadas) · Gemini/Groq · extensión de Chrome',
    enlaces: [{ texto: 'droptrend.app', href: 'https://droptrend.app' }],
    nota: 'Código privado: es un producto comercial.',
  },
  {
    id: 'joyeria',
    forma: 'anillo',
    acento: '#f0c76a',
    etiqueta: 'Caso 2 · Sistema a medida',
    titulo: 'Sistema de gestión para Joyería Sosa',
    problema:
      'Una joyería familiar de Posadas registraba ventas y stock en papel y Excel: registros perdidos, stock que no cerraba, sin reportes por período.',
    construi:
      'Sistema web a medida con ventas, servicios técnicos (reparaciones con seguimiento), inventario con trazabilidad de movimientos, compras, proveedores y clientes. Roles de administrador y vendedor. Comprobantes y reportes en PDF con código QR. Modelo relacional de 13 tablas.',
    decisionesTitulo: 'Contexto',
    decisiones: [
      'Proyecto final de la carrera de Analista de Sistemas, desarrollado con Angel Benitez para un cliente real.',
      'En uso en el comercio desde julio de 2025; le doy mantenimiento y mejoras.',
      'Demo: copia con datos ficticios y un botón "Entrar como demo" (sin credenciales publicadas). Los datos del comercio no se publican.',
    ],
    stack: 'PHP 8 · MySQL · PDO · mPDF · JavaScript',
    enlaces: [{ texto: 'Entrar a la demo', href: 'https://tiendajoyeriasosa.infinityfreeapp.com/login.php', destacado: true }],
    galeria: [
      { src: '/erp/01-dashboard.jpg', alt: 'Panel principal del sistema de gestión' },
      { src: '/erp/02-ventas.jpg', alt: 'Módulo de ventas' },
      { src: '/erp/03-inventario.jpg', alt: 'Inventario con movimientos' },
      { src: '/erp/04-servicios.jpg', alt: 'Servicios técnicos' },
      { src: '/erp/06-reportes-ventas.jpg', alt: 'Reporte de ventas' },
    ],
  },
  {
    id: 'ecommerce',
    forma: 'bolsa',
    acento: '#ffb86b',
    etiqueta: 'Caso 3 · Tiendas que opero',
    titulo: 'E-commerce propio en cuatro países',
    problema:
      'Vender online no es abrir una tienda: es que convierta el tráfico pago, que el pago contra entrega no se convierta en devoluciones, y que la operación no dependa de estar encima todo el día.',
    construiTitulo: 'Qué construí y opero',
    construi:
      'Cinco tiendas (Colombia, Ecuador, España y dos en Argentina) que construí de punta a punta y opero hoy: temas Liquid a medida (Online Store 2.0, secciones y bloques), landings por producto para tráfico de Meta, seguimiento de conversiones con Meta Pixel + Conversions API del lado del servidor, flujos de pago contra entrega y descuentos. Los temas se despliegan desde GitHub con ramas y PRs; las campañas se crean y se leen por la Marketing API de Meta.',
    decisionesTitulo: 'Por qué puedo sumarme a un equipo teniendo tiendas',
    decisiones: [
      'Automaticé lo operativo: la carga y sincronización de productos e inventario por la Admin API, los avisos a clientes por WhatsApp con el bot, la lectura de campañas y la publicación de contenido.',
      'Las tiendas corren con supervisión, no con presencia.',
    ],
    stack: 'Shopify Liquid · JavaScript · Admin GraphQL API · Meta Marketing API · WhatsApp · GitHub',
    enlaces: [{ texto: 'cuatropatasarg.store', href: 'https://cuatropatasarg.store' }],
  },
  {
    id: 'turismo',
    forma: 'avion',
    acento: '#7c8cff',
    etiqueta: 'Caso 4 · Trabajo académico (2020)',
    titulo: 'Sistema para una empresa de turismo',
    problemaTitulo: 'Qué es',
    problema:
      'Trabajo académico de 2020: gestión de clientes, servicios, paquetes, reservas y ventas para una agencia de viajes. Java con JSP, Servlets y JPA sobre MySQL, desplegado en Tomcat. Diagrama de clases y supuestos documentados.',
    construiTitulo: 'Por qué está acá',
    construi:
      'Es código público y muestra desde cuándo vengo construyendo sistemas completos con persistencia. Lo levanté de nuevo en 2026 para estas capturas y encontré dos fallos que hoy resolvería distinto: una reserva sin paquete rompe la vista (falta un chequeo de nulo) y las columnas vacías muestran "null".',
    stack: 'Java · JSP · Servlets · JPA (EclipseLink) · MySQL · Tomcat',
    enlaces: [
      { texto: 'github.com/ericferr/empresaTurismoJava', href: 'https://github.com/ericferr/empresaTurismoJava' },
    ],
    galeria: [
      { src: '/turismo/01-inicio.jpg', alt: 'Inicio del sistema de turismo' },
      { src: '/turismo/02-clientes.jpg', alt: 'Gestión de clientes' },
      { src: '/turismo/05-reservas.jpg', alt: 'Reservas' },
      { src: '/turismo/06-ventas.jpg', alt: 'Ventas' },
    ],
  },
];

export const sobreMi = {
  parrafos: [
    'Técnico Superior en Programación y Análisis de Sistemas, egresado en 2025 de la Escuela Normal Superior N°10 (Posadas). Desde 2016 trabajo en tecnología en un organismo público (infraestructura, soporte y gestión de sistemas). Desde 2025 construyo software de punta a punta: el sistema de la joyería, cinco tiendas de e-commerce, DropTrend y su bot de WhatsApp, desde la base de datos hasta la campaña que trae usuarios. Uso asistentes de IA para ir más rápido; reviso, pruebo y respondo por cada línea que sale a producción.',
    'Leo, entiendo y escribo inglés sin problemas.',
  ],
};

export const contacto = {
  email: 'ericferr_@hotmail.com',
  enlaces: [
    { texto: 'linkedin.com/in/eric-ferreira-/', href: 'https://www.linkedin.com/in/eric-ferreira-/' },
    { texto: 'github.com/ericferr', href: 'https://github.com/ericferr' },
    { texto: 'CV en PDF (ES)', href: '/CV-Eric-Ferreira.pdf' },
    { texto: 'CV en PDF (EN)', href: '/CV-Eric-Ferreira-EN.pdf' },
  ],
};
