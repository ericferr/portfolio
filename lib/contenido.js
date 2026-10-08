// Texto de la página, en español e inglés. Sale de portfolio-assets/CONTENIDO.md
// (y su traducción); no se inventa nada.

const es = {
  hero: {
    nombre: 'Eric Ferreira',
    rol: 'Analista de Sistemas',
    rolSecundario: 'Desarrollador full-stack',
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
  },

  casos: [
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
      id: 'municipal',
      forma: 'onda',
      acento: '#6fd3ff',
      etiqueta: 'Caso 3 · Software para municipios',
      titulo: 'Portal de expedientes y acción social',
      subtitulo: 'Para municipalidades del interior de Misiones',
      problema:
        'En los municipios del interior los expedientes circulan en papel entre oficinas y nadie sabe en qué área está cada uno; las ayudas sociales se anotan a mano y es fácil entregar dos veces lo mismo o no poder rendir cuentas.',
      construi:
        'Un portal web multi-municipio, pedido por las propias municipalidades, con dos módulos. Mesa de entradas: seguimiento del expediente en papel (ingreso, pase entre áreas, recepción, archivo), numeración sin huecos ni repetidos y comprobantes con código QR. Acción social: registro de ayudas por persona, con anulación con motivo y datos sensibles visibles solo para quien tiene el módulo. Incluye firma en pantalla, adjuntos subidos desde el celular, PDF y administración de usuarios por área. Lo diseñé para empleados poco familiarizados con la tecnología: lenguaje cotidiano y flujos mínimos.',
      decisionesTitulo: 'Decisiones que defiendo',
      decisiones: [
        'Cada municipio es un espacio aislado: Row Level Security en PostgreSQL y claves foráneas compuestas impiden que una fila apunte a datos de otro municipio, aunque alguien conozca el id. Lo cubren pruebas automatizadas de permisos.',
        'Nada se borra: los expedientes se archivan y las ayudas se anulan con motivo. La auditoría la escriben triggers de la base, no la aplicación.',
        'La numeración de expedientes la garantiza la base (bloqueo del contador del año), no la pantalla.',
        'Aparte, armé para una municipalidad una herramienta de escritorio para Windows que genera los anexos que exige el Tribunal de Cuentas a partir de los sistemas de recaudación y contabilidad, con una hoja de control que detecta diferencias de numeración y asientos faltantes. Sirve para períodos siguientes.',
      ],
      numeros: [
        { valor: '28', texto: 'pantallas' },
        { valor: '14', texto: 'migraciones SQL' },
        { valor: '~12.000', texto: 'líneas de código' },
        { valor: 'sep. 2026', texto: 'en desarrollo desde' },
      ],
      stack: 'Next.js 14 · React · PostgreSQL (Supabase) · Row Level Security · pdf-lib · Vercel',
      nota: 'Trabajo freelance. Código privado: contiene datos y reglas de cada municipio.',
    },
    {
      id: 'panel',
      forma: 'onda',
      acento: '#e8590c',
      etiqueta: 'Caso 4 · Sector público',
      titulo: 'Panel de informes de gestión',
      subtitulo: 'Subsecretaría de Prevención · Misiones',
      problema:
        'Un área del gobierno provincial registra a diario testeos, talleres y ferias en territorio, pero esa información no se consolidaba en informes por programa ni se podía mostrar sin exponer datos personales.',
      construi:
        'Un panel web que resume por programa lo registrado durante el año: 360 atenciones en testeos y controles, 31 talleres escolares con 1.115 alumnos, 10 talleres comunitarios y 15 jornadas de feria franca con 903 asistentes. Publica solo datos agregados, sin nombres, documentos ni domicilios, y tiene una carga interna para el área.',
      decisionesTitulo: 'Decisión de diseño',
      decisiones: [
        'Dos formas de contar que no se mezclan: por persona (testeos y asistencias) y por actividad (talleres y feria). Así una persona que fue a tres talleres cuenta como tres asistencias, no como tres personas, y los totales no se inflan.',
      ],
      enlaces: [
        { texto: 'control-seguimiento-archivo.vercel.app', href: 'https://control-seguimiento-archivo.vercel.app' },
      ],
    },
    {
      id: 'ecommerce',
      forma: 'bolsa',
      acento: '#ffb86b',
      etiqueta: 'Caso 5 · Tiendas que opero',
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
      etiqueta: 'Caso 6 · Trabajo académico (2020)',
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
  ],

  sobreMi: {
    parrafos: [
      'Técnico Superior en Programación y Análisis de Sistemas, egresado en 2025 de la Escuela Normal Superior N°10 (Posadas). Desde 2016 trabajo en tecnología en un organismo público (infraestructura, soporte y gestión de sistemas). Desde 2025 construyo software de punta a punta: el sistema de la joyería, un portal para municipalidades de Misiones, cinco tiendas de e-commerce, DropTrend y su bot de WhatsApp, desde la base de datos hasta la campaña que trae usuarios. Uso asistentes de IA para ir más rápido; reviso, pruebo y respondo por cada línea que sale a producción.',
      'Leo, entiendo y escribo inglés sin problemas.',
    ],
  },

  contacto: {
    email: 'ericferr_@hotmail.com',
    enlaces: [
      { texto: 'linkedin.com/in/eric-ferreira-/', href: 'https://www.linkedin.com/in/eric-ferreira-/' },
      { texto: 'github.com/ericferr', href: 'https://github.com/ericferr' },
      { texto: 'CV en PDF (ES)', href: '/CV-Eric-Ferreira.pdf' },
      { texto: 'CV en PDF (EN)', href: '/CV-Eric-Ferreira-EN.pdf' },
    ],
  },

  ui: {
    nav: { trabajo: 'Trabajo', sobreMi: 'Sobre mí', contacto: 'Contacto' },
    caso: { elProblema: 'El problema', queConstrui: 'Qué construí', stack: 'Stack.' },
    demoSub: 'datos ficticios · sin registro',
    sobreMiTitulo: 'Sobre mí',
    contactoTitulo: 'Contacto',
    pieStack: 'Next.js · Three.js',
    enVivo: {
      etiqueta: 'EN VIVO',
      fuente: (hace) => `datos reales de droptrend.app · actualizado ${hace}`,
      tendencias: 'productos con movimiento',
      unidades: 'unidades detectadas hoy',
      nuevos: 'productos nuevos',
      catalogo: 'productos analizados',
      paises: 'países',
      haceMenosUnaHora: 'hace menos de una hora',
      haceHoras: (h) => `hace ${h} h`,
      haceDias: (d) => `hace ${d} días`,
    },
  },
};

const en = {
  hero: {
    nombre: 'Eric Ferreira',
    rol: 'Systems Analyst',
    rolSecundario: 'Full-stack Developer',
    linea:
      'I build products that are in production: a SaaS operating in 12 countries, a management system that replaced paper in a retail store, and stores that sell.',
    botones: [
      { texto: 'View DropTrend live', href: 'https://droptrend.app', primario: true },
      { texto: 'Download résumé', href: '/CV-Eric-Ferreira-EN.pdf' },
      { texto: 'CV en español', href: '/CV-Eric-Ferreira.pdf' },
      { texto: 'LinkedIn', href: 'https://www.linkedin.com/in/eric-ferreira-/' },
      { texto: 'GitHub', href: 'https://github.com/ericferr' },
    ],
    disponibilidad:
      'Looking for a full-stack role, 100% remote (employee or contract) · Available immediately · Posadas, Argentina (GMT-3) · Code on GitHub',
  },

  casos: [
    {
      id: 'droptrend',
      forma: 'logo',
      acento: '#5ee7c8',
      etiqueta: 'Case 1 · SaaS in production',
      titulo: 'DropTrend',
      subtitulo: 'droptrend.app',
      problema:
        "Choosing what to sell in dropshipping is guesswork: you pay for ads before knowing if a product has demand, and once you've picked one you still have to figure out how to sell it — what angle, what price.",
      construi:
        "The answer, every day, per country: DropTrend analyzes around 300,000 products across 12 countries and shows which ones have real demand. On top of that engine I built the full product: an AI copilot that tracks the existing supply for a product in each country and how the sellers already offering it present it — title, promise, and who they're targeting — and from that proposes its own angles, prices, and objection responses; ready-to-sell landing pages; API integration with Meta Ads, reviewed and approved by Meta, that pulls each campaign's spend and cross-references it with orders to show real profit; and an AI WhatsApp bot, integrated via API, that handles each user's customers with their own data. Design, code, and operation, all mine.",
      decisionesTitulo: 'Decisions I stand by',
      decisiones: [
        'Stable identity per product against attributes that change: avoids phantom records when a supplier renames something.',
        'Daily precomputation instead of calculating on every query: the ranking went from 8.7 s to 1.0 s once the raw table passed 700,000 rows.',
        "Scheduled work (daily capture, emails, posts) runs on GitHub Actions and pg_cron: every task has history and retries, and doesn't depend on hosting limits.",
        '"No error" doesn\'t mean "it\'s fine": incoming data gets validated in parallel, after a silent 11-day failure taught me that lesson.',
        "The bot never makes things up: it answers only with what the user has loaded; AI is used to write, not to decide facts.",
      ],
      numeros: [
        { valor: 12, texto: 'countries' },
        { valor: 55, texto: 'REST endpoints' },
        { valor: '8.7 s → 1.0 s', texto: 'ranking' },
        { valor: 'Aug. 2026', texto: 'daily capture since' },
      ],
      stack:
        'Next.js 14 · React · PostgreSQL (Supabase) · GitHub Actions · Node.js · Python · Meta Graph API · WhatsApp (Cloud API and linked sessions) · Gemini/Groq · Chrome extension',
      enlaces: [{ texto: 'droptrend.app', href: 'https://droptrend.app' }],
      nota: "Private code: it's a commercial product.",
    },
    {
      id: 'joyeria',
      forma: 'anillo',
      acento: '#f0c76a',
      etiqueta: 'Case 2 · Custom system',
      titulo: 'Management system for Joyería Sosa',
      problema:
        "A family-run jewelry store in Posadas tracked sales and stock on paper and in Excel: lost records, stock that didn't add up, no reports by period.",
      construi:
        'Custom web system with sales, technical services (repairs with tracking), inventory with movement traceability, purchases, suppliers, and customers. Admin and salesperson roles. PDF receipts and reports with a QR code. Relational model with 13 tables.',
      decisionesTitulo: 'Context',
      decisiones: [
        'Final project for the Systems Analysis degree, built together with Angel Benitez for a real client.',
        'In use at the store since July 2025; I maintain it and add improvements.',
        'Demo: a copy with fictitious data and an "Enter as demo" button (no published credentials). The store\'s own data is not published.',
      ],
      stack: 'PHP 8 · MySQL · PDO · mPDF · JavaScript',
      enlaces: [{ texto: 'Enter the demo', href: 'https://tiendajoyeriasosa.infinityfreeapp.com/login.php', destacado: true }],
      galeria: [
        { src: '/erp/01-dashboard.jpg', alt: 'Main dashboard of the management system' },
        { src: '/erp/02-ventas.jpg', alt: 'Sales module' },
        { src: '/erp/03-inventario.jpg', alt: 'Inventory with movement tracking' },
        { src: '/erp/04-servicios.jpg', alt: 'Technical services' },
        { src: '/erp/06-reportes-ventas.jpg', alt: 'Sales report' },
      ],
    },
    {
      id: 'municipal',
      forma: 'onda',
      acento: '#6fd3ff',
      etiqueta: 'Case 3 · Software for municipalities',
      titulo: 'Case-file and social assistance portal',
      subtitulo: 'For municipalities in inland Misiones',
      problema:
        "In inland municipalities, case files travel on paper between offices and nobody knows which department holds each one; social aid is written down by hand, so it's easy to hand out the same thing twice or be unable to account for it.",
      construi:
        "A multi-municipality web portal, requested by the municipalities themselves, with two modules. Front desk: tracking of the paper case file (intake, hand-off between departments, receipt, archive), gap-free numbering and QR-coded receipts. Social assistance: aid registry per person, cancellation with a stated reason, and sensitive data visible only to users who hold the module. It includes on-screen signatures, uploads from a phone, PDF output and per-department user management. I designed it for staff who are not comfortable with technology: everyday language and minimal flows.",
      decisionesTitulo: 'Decisions I stand by',
      decisiones: [
        "Each municipality is an isolated space: Row Level Security in PostgreSQL and composite foreign keys keep a row from pointing at another municipality's data, even if someone knows the id. Automated permission tests cover it.",
        'Nothing is deleted: case files are archived and aid is cancelled with a reason. The audit trail is written by database triggers, not by the application.',
        "Case-file numbering is guaranteed by the database (a lock on the year's counter), not by the screen.",
        'Separately, I built a Windows desktop tool for a municipality that generates the annexes required by the Court of Audit from the revenue and accounting systems, with a control sheet that flags numbering mismatches and missing journal entries. It is reusable for later periods.',
      ],
      numeros: [
        { valor: '28', texto: 'screens' },
        { valor: '14', texto: 'SQL migrations' },
        { valor: '~12,000', texto: 'lines of code' },
        { valor: 'Sep 2026', texto: 'in development since' },
      ],
      stack: 'Next.js 14 · React · PostgreSQL (Supabase) · Row Level Security · pdf-lib · Vercel',
      nota: "Freelance work. Private code: it holds each municipality's data and rules.",
    },
    {
      id: 'panel',
      forma: 'onda',
      acento: '#e8590c',
      etiqueta: 'Case 4 · Public sector',
      titulo: 'Management reporting dashboard',
      subtitulo: 'Subsecretaría de Prevención · Misiones',
      problema:
        "A unit of the provincial government records screenings, workshops and markets in the field every day, but that information wasn't consolidated into per-program reports and couldn't be shown without exposing personal data.",
      construi:
        'A web dashboard that summarizes, per program, what was recorded during the year: 360 screening and check-up visits, 31 school workshops with 1,115 students, 10 community workshops, and 15 farmers\' market days with 903 attendees. It publishes aggregated data only, with no names, ID numbers or addresses, and has an internal data-entry area for the unit.',
      decisionesTitulo: 'Design decision',
      decisiones: [
        'Two ways of counting that never mix: per person (screenings and assistance) and per activity (workshops and market). A person who attended three workshops counts as three attendances, not three people, so totals are not inflated.',
      ],
      enlaces: [
        { texto: 'control-seguimiento-archivo.vercel.app', href: 'https://control-seguimiento-archivo.vercel.app' },
      ],
    },
    {
      id: 'ecommerce',
      forma: 'bolsa',
      acento: '#ffb86b',
      etiqueta: 'Case 5 · Stores I run',
      titulo: 'My own e-commerce in four countries',
      problema:
        "Selling online isn't just opening a store: it's making paid traffic convert, keeping cash-on-delivery from turning into returns, and running the operation without being glued to it all day.",
      construiTitulo: 'What I built and run',
      construi:
        'Five stores (Colombia, Ecuador, Spain, and two in Argentina) that I built end to end and run today: custom Liquid themes (Online Store 2.0, sections and blocks), per-product landing pages for Meta traffic, conversion tracking with Meta Pixel + server-side Conversions API, cash-on-delivery flows, and discounts. Themes deploy from GitHub with branches and PRs; campaigns are created and read through the Meta Marketing API.',
      decisionesTitulo: "Why I can join a team while running stores",
      decisiones: [
        'I automated the operational side: product and inventory sync through the Admin API, customer notifications by WhatsApp through the bot, campaign reporting, and content publishing.',
        'The stores run under supervision, not under my constant presence.',
      ],
      stack: 'Shopify Liquid · JavaScript · Admin GraphQL API · Meta Marketing API · WhatsApp · GitHub',
      enlaces: [{ texto: 'cuatropatasarg.store', href: 'https://cuatropatasarg.store' }],
    },
    {
      id: 'turismo',
      forma: 'avion',
      acento: '#7c8cff',
      etiqueta: 'Case 6 · Academic work (2020)',
      titulo: 'System for a tourism agency',
      problemaTitulo: 'What it is',
      problema:
        '2020 academic project: manages clients, services, packages, bookings, and sales for a travel agency. Java with JSP, Servlets, and JPA over MySQL, deployed on Tomcat. Class diagram and assumptions documented.',
      construiTitulo: "Why it's here",
      construi:
        "It's public code and shows how far back I've been building complete systems with persistence. I brought it back up in 2026 for these screenshots and found two bugs I'd fix differently today: a booking without a package breaks the view (missing a null check), and empty columns show \"null\".",
      stack: 'Java · JSP · Servlets · JPA (EclipseLink) · MySQL · Tomcat',
      enlaces: [
        { texto: 'github.com/ericferr/empresaTurismoJava', href: 'https://github.com/ericferr/empresaTurismoJava' },
      ],
      galeria: [
        { src: '/turismo/01-inicio.jpg', alt: 'Home screen of the tourism system' },
        { src: '/turismo/02-clientes.jpg', alt: 'Client management' },
        { src: '/turismo/05-reservas.jpg', alt: 'Bookings' },
        { src: '/turismo/06-ventas.jpg', alt: 'Sales' },
      ],
    },
  ],

  sobreMi: {
    parrafos: [
      "Higher Technical Degree in Programming and Systems Analysis (3-year program, 2025) — Escuela Normal Superior N°10, Posadas. Since 2016 I've worked in technology at a public agency (infrastructure, support, and systems management). Since 2025 I build software end to end: the jewelry store system, a portal for municipalities in Misiones, five e-commerce stores, DropTrend and its WhatsApp bot, from the database to the campaign that brings in users. I use AI assistants to move faster; I review, test, and take responsibility for every line that ships to production.",
      'I read, understand and write English without difficulty.',
    ],
  },

  contacto: {
    email: 'ericferr_@hotmail.com',
    enlaces: [
      { texto: 'linkedin.com/in/eric-ferreira-/', href: 'https://www.linkedin.com/in/eric-ferreira-/' },
      { texto: 'github.com/ericferr', href: 'https://github.com/ericferr' },
      { texto: 'Résumé PDF (EN)', href: '/CV-Eric-Ferreira-EN.pdf' },
      { texto: 'CV en PDF (ES)', href: '/CV-Eric-Ferreira.pdf' },
    ],
  },

  ui: {
    nav: { trabajo: 'Work', sobreMi: 'About', contacto: 'Contact' },
    caso: { elProblema: 'The problem', queConstrui: 'What I built', stack: 'Stack.' },
    demoSub: 'fictitious data · no sign-up',
    sobreMiTitulo: 'About me',
    contactoTitulo: 'Contact',
    pieStack: 'Next.js · Three.js',
    enVivo: {
      etiqueta: 'LIVE',
      fuente: (hace) => `real data from droptrend.app · updated ${hace}`,
      tendencias: 'products with movement',
      unidades: 'units detected today',
      nuevos: 'new products',
      catalogo: 'products analyzed',
      paises: 'countries',
      haceMenosUnaHora: 'less than an hour ago',
      haceHoras: (h) => `${h} h ago`,
      haceDias: (d) => `${d} days ago`,
    },
  },
};

export const contenido = { es, en };

