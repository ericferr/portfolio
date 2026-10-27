// Texto de la página, en español e inglés. Sale de portfolio-assets/CONTENIDO.md
// (y su traducción); no se inventa nada.

const es = {
  hero: {
    nombre: 'Eric Ferreira',
    rol: 'Analista de Sistemas',
    rolSecundario: 'Desarrollador full-stack',
    linea:
      'Construyo productos que están en producción: un SaaS que opera en 12 países, un sistema de gestión que reemplazó el papel en un comercio, y una tienda propia de venta contra entrega.',
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
      id: 'gestor',
      forma: 'onda',
      acento: '#b794f6',
      etiqueta: 'Caso 4 · Software para municipios',
      titulo: 'Gestor documental de resoluciones',
      subtitulo: 'Módulo del portal municipal · Misiones',
      problema:
        'En un municipio, cada licencia, franquicia o ausencia de un empleado termina en una resolución que alguien redacta a mano, copiando modelos viejos y calculando días y plazos de memoria. Después hay que numerarla, archivarla y poder encontrarla cuando alguien la pide.',
      construi:
        'Un módulo del portal municipal que arma la resolución en pantalla con un asistente de tres pasos: se elige el tipo (más de 20 de licencias y franquicias: anual, enfermedad, largo tratamiento, accidente de trabajo, adopción, hijo con discapacidad, extraordinarias, sin goce de haberes y franquicias gremiales), se cargan los datos y el sistema calcula días y plazos, aplica los cupos que fija la norma y redacta el acto con su VISTO, CONSIDERANDO y POR ELLO. La resolución se edita haciendo clic y se baja en Word o PDF con el logo y el nombre del municipio. También se puede escribir lo que se necesita en lenguaje natural y una IA sugiere el tipo de documento. Al guardar, la resolución queda con número único por año, historial por persona y papeles adjuntos (certificados médicos) que se suben desde el celular con un QR.',
      decisionesTitulo: 'Decisiones que defiendo',
      decisiones: [
        'Lo guardado no se edita ni se borra: solo se anula con motivo, fecha y autor. Lo garantiza un trigger de la base y no hay permiso de borrado.',
        'El número lo sugiere el sistema pero se puede cambiar, porque muchos municipios llevan un libro único que incluye resoluciones hechas a mano. Lo único que se exige es que no se repita en el año.',
        'Los certificados médicos son datos de salud (Ley 25.326): solo los ve quien tiene el módulo, y el celular que sube un archivo ve el número y el tipo de la resolución, nunca el nombre de la persona.',
        'La IA es una ayuda, no una dependencia: si no responde, la búsqueda cae a un respaldo por palabras clave con el mismo resultado.',
      ],
      numeros: [
        { valor: '20+', texto: 'tipos de resolución' },
        { valor: '3', texto: 'pasos del asistente' },
        { valor: 'Word + PDF', texto: 'con membrete' },
        { valor: 'oct. 2026', texto: 'en desarrollo desde' },
      ],
      stack: 'Next.js 14 · React · PostgreSQL (Supabase) · Row Level Security · docx · pdf-lib · Groq y Gemini',
      nota: 'Código privado.',
    },
    {
      id: 'sitac',
      forma: 'onda',
      acento: '#3fb8a0',
      etiqueta: 'Caso 5 · Software para municipios',
      titulo: 'Sistema de recaudación municipal',
      subtitulo: 'SITAC · Tasas, caja y deuda de un municipio',
      problema:
        'Cobrar las tasas municipales (inmuebles, comercios, planes de pago) exige aplicar ordenanzas que cambian con el tiempo, calcular intereses por día y cerrar la caja al centavo. Un error de cálculo es plata del municipio o del vecino, y tiene que poder demostrarse cómo se llegó a cada importe.',
      construi:
        'Diseñé y desarrollé un sistema web de recaudación para la ventanilla: padrón de contribuyentes, inmuebles y comercios; facturación de boletas por período; caja con apertura, cobro, recibo y arqueo con conteo de billetes; planes de pago; certificado de libre deuda con código de verificación; consulta pública del vecino con límite de intentos; cobranza escalonada con cartas; mapa con las parcelas de Catastro; auditoría de cada cambio; y contabilidad con la imputación de cada cobro a su cuenta. Antes de programar hice el relevamiento de cómo se cobraba y verifiqué cada fórmula contra el código del sistema que se usaba.',
      decisionesTitulo: 'Decisiones que defiendo',
      decisiones: [
        'Los valores que fija una ordenanza no van en el código: se cargan por municipio con su vigencia y número de ordenanza, y una ordenanza nueva agrega un valor sin pisar el anterior.',
        'Las fórmulas sí van en el código, en un módulo puro con pruebas, y las pantallas nunca calculan importes: los piden a una sola capa de datos. Los montos son enteros en centavos, para que no haya errores de redondeo.',
        'La mora se calcula por día (importe × % mensual ÷ 30 × días contados desde el día siguiente al vencimiento), no por mes entero.',
        'Nada se borra: las boletas y los recibos se anulan con motivo, y lo que mueve plata corre en el servidor, no en el navegador.',
      ],
      numeros: [
        { valor: '54', texto: 'pantallas' },
        { valor: '351', texto: 'casos de prueba' },
        { valor: '~36.000', texto: 'líneas de código' },
        { valor: '80', texto: 'commits' },
      ],
      stack: 'Next.js 14 · React · PostgreSQL (Supabase) · Row Level Security · Leaflet · Vercel',
      nota: 'Desarrollo para SITAC. Código privado.',
    },
    {
      id: 'panel',
      forma: 'onda',
      acento: '#e8590c',
      etiqueta: 'Caso 6 · Sector público',
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
      etiqueta: 'Caso 7 · Tienda propia',
      titulo: 'Tienda propia de venta contra entrega',
      subtitulo: 'Plataforma propia · Ecuador, Argentina y Colombia',
      problema:
        'Vender online con pago contra entrega no es abrir una tienda: es que el tráfico pago convierta, que los pedidos lleguen ordenados a quien despacha, y que cada número que se muestra al cliente sea verdadero, porque las plataformas de anuncios revisan también la página de destino.',
      construiTitulo: 'Qué construí',
      construi:
        'Una tienda web propia, sin plataformas de terceros, donde cada producto tiene su landing por país con su moneda, ofertas y precios. El cliente arma el pedido en un formulario corto de pago contra entrega y, después de comprar, recibe una oferta de un toque y la confirmación por WhatsApp. Mide las conversiones con Meta Pixel y la API de Conversiones del lado del servidor, y tiene un panel privado donde veo pedidos, eventos y rendimiento por producto. Sumar un producto nuevo es agregar un bloque de datos y sus fotos.',
      decisionesTitulo: 'Decisiones que defiendo',
      decisiones: [
        'Nada inventado: la urgencia que se muestra sale solo de datos reales cargados desde el panel. No hay contadores falsos, "quedan X" inventados ni reseñas ficticias.',
        'Las tablas de la base no tienen políticas abiertas: todo pasa por funciones de Postgres, así que el navegador nunca toca los datos directamente.',
        'El seguimiento de conversiones corre también en el servidor, para no depender solo del navegador del cliente.',
        'Un catálogo único con país, moneda y reglas por producto, en lugar de una tienda copiada por cada mercado.',
      ],
      numeros: [
        { valor: '3', texto: 'países y monedas' },
        { valor: '~2.300', texto: 'líneas de código' },
        { valor: '5', texto: 'pantallas principales' },
        { valor: 'oct. 2026', texto: 'en desarrollo desde' },
      ],
      stack: 'Next.js 15 · React 19 · PostgreSQL (Supabase) · Cloudflare Workers · Meta Pixel y Conversions API · WhatsApp',
      nota: 'Código privado.',
    },
    {
      id: 'turismo',
      forma: 'avion',
      acento: '#7c8cff',
      etiqueta: 'Caso 8 · Trabajo académico (2020)',
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
      'Técnico Superior en Programación y Análisis de Sistemas, egresado en 2025 de la Escuela Normal Superior N°10 (Posadas). Desde 2016 trabajo en tecnología en un organismo público (infraestructura, soporte y gestión de sistemas). Desde 2025 construyo software de punta a punta: el sistema de la joyería, un portal para municipalidades de Misiones con su gestor documental, un sistema de recaudación municipal, una tienda propia de venta contra entrega, DropTrend y su bot de WhatsApp, desde la base de datos hasta la campaña que trae usuarios. Uso asistentes de IA para ir más rápido; reviso, pruebo y respondo por cada línea que sale a producción.',
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
      'I build products that are in production: a SaaS operating in 12 countries, a management system that replaced paper in a retail store, and a cash-on-delivery store of my own.',
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
      id: 'gestor',
      forma: 'onda',
      acento: '#b794f6',
      etiqueta: 'Case 4 · Software for municipalities',
      titulo: 'Document manager for official resolutions',
      subtitulo: 'Module of the municipal portal · Misiones',
      problema:
        "In a municipality, every leave, entitlement or absence of an employee ends up as a resolution that someone drafts by hand, copying old templates and working out days and deadlines from memory. Then it has to be numbered, filed, and found again when someone asks for it.",
      construi:
        'A module of the municipal portal that builds the resolution on screen with a three-step wizard: pick the type (20+ kinds of leave and entitlements: annual, sick, long-term treatment, work accident, adoption, child with a disability, extraordinary, unpaid and union leave), fill in the data, and the system works out days and deadlines, applies the quotas the law sets, and drafts the act with its legal recitals. The resolution is editable by clicking on it and downloads as Word or PDF with the municipality\'s logo and name. You can also type what you need in plain language and an AI suggests the document type. When saved, the resolution gets a number that is unique per year, a per-person history, and attached papers (medical certificates) uploaded from a phone via QR code.',
      decisionesTitulo: 'Decisions I stand by',
      decisiones: [
        'Saved records are never edited or deleted: they are only cancelled, with a reason, a date and an author. A database trigger enforces it and there is no delete permission.',
        'The number is suggested by the system but can be changed, because many municipalities keep a single book that includes hand-written resolutions. The only requirement is that it is not repeated within the year.',
        'Medical certificates are health data (Argentine Law 25.326): only users holding the module can see them, and the phone that uploads a file sees the resolution number and type, never the person\'s name.',
        'The AI is a helper, not a dependency: if it does not answer, the search falls back to a keyword lookup that returns the same kind of result.',
      ],
      numeros: [
        { valor: '20+', texto: 'resolution types' },
        { valor: '3', texto: 'wizard steps' },
        { valor: 'Word + PDF', texto: 'with letterhead' },
        { valor: 'Oct 2026', texto: 'in development since' },
      ],
      stack: 'Next.js 14 · React · PostgreSQL (Supabase) · Row Level Security · docx · pdf-lib · Groq and Gemini',
      nota: 'Private code.',
    },
    {
      id: 'sitac',
      forma: 'onda',
      acento: '#3fb8a0',
      etiqueta: 'Case 5 · Software for municipalities',
      titulo: 'Municipal revenue collection system',
      subtitulo: "SITAC · A municipality's taxes, cash desk and debt",
      problema:
        "Collecting municipal taxes (property, businesses, payment plans) means applying ordinances that change over time, calculating interest by the day and closing the cash desk to the cent. A calculation error is money lost by the municipality or the taxpayer, and every amount has to be explainable.",
      construi:
        "I designed and built a web-based collection system for the service counter: registry of taxpayers, properties and businesses; billing by period; a cash desk with opening, collection, receipts and a count-based close-out (banknotes and coins); payment plans; a debt-free certificate with a verification code; a public taxpayer lookup with an attempt limit; escalating collection letters; a map with the Catastro parcels; an audit trail for every change; and accounting that assigns each payment to its ledger account. Before writing code I surveyed how collection was done and checked every formula against the source code of the system in use.",
      decisionesTitulo: 'Decisions I stand by',
      decisiones: [
        'Values set by an ordinance are not in the code: they are loaded per municipality with their effective date and ordinance number, and a new ordinance adds a value without overwriting the previous one.',
        'Formulas do live in the code, in a pure module with tests, and screens never compute amounts: they ask a single data layer. Amounts are whole integers in cents, so there are no rounding errors.',
        'Late-payment interest is calculated per day (amount × monthly % ÷ 30 × days counted from the day after the due date), not by the whole month.',
        'Nothing is deleted: invoices and receipts are cancelled with a reason, and anything that moves money runs on the server, not in the browser.',
      ],
      numeros: [
        { valor: '54', texto: 'screens' },
        { valor: '351', texto: 'test cases' },
        { valor: '~36,000', texto: 'lines of code' },
        { valor: '80', texto: 'commits' },
      ],
      stack: 'Next.js 14 · React · PostgreSQL (Supabase) · Row Level Security · Leaflet · Vercel',
      nota: 'Built for SITAC. Private code.',
    },
    {
      id: 'panel',
      forma: 'onda',
      acento: '#e8590c',
      etiqueta: 'Case 6 · Public sector',
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
      etiqueta: 'Case 7 · Own store',
      titulo: 'My own cash-on-delivery store',
      subtitulo: 'Own platform · Ecuador, Argentina and Colombia',
      problema:
        "Selling online with cash on delivery isn't just opening a store: paid traffic has to convert, orders have to reach the person shipping them in order, and every number shown to the customer has to be true, because ad platforms also review the landing page.",
      construiTitulo: 'What I built',
      construi:
        'A web store of my own, with no third-party platform, where each product has a landing page per country with its own currency, offers and prices. The customer fills in a short cash-on-delivery order form and, after buying, gets a one-tap offer and a WhatsApp confirmation. It tracks conversions with Meta Pixel and the Conversions API on the server side, and has a private panel where I see orders, events and performance per product. Adding a new product means adding a block of data and its photos.',
      decisionesTitulo: 'Decisions I stand by',
      decisiones: [
        'Nothing made up: any urgency shown comes only from real data loaded from the panel. No fake counters, invented "only X left" or fictional reviews.',
        'The database tables have no open policies: everything goes through Postgres functions, so the browser never touches the data directly.',
        'Conversion tracking also runs on the server, so it does not rely only on the customer\'s browser.',
        'A single catalog with country, currency and rules per product, instead of one copied store for each market.',
      ],
      numeros: [
        { valor: '3', texto: 'countries and currencies' },
        { valor: '~2,300', texto: 'lines of code' },
        { valor: '5', texto: 'main screens' },
        { valor: 'Oct 2026', texto: 'in development since' },
      ],
      stack: 'Next.js 15 · React 19 · PostgreSQL (Supabase) · Cloudflare Workers · Meta Pixel and Conversions API · WhatsApp',
      nota: 'Private code.',
    },
    {
      id: 'turismo',
      forma: 'avion',
      acento: '#7c8cff',
      etiqueta: 'Case 8 · Academic work (2020)',
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
      "Higher Technical Degree in Programming and Systems Analysis (3-year program, 2025) — Escuela Normal Superior N°10, Posadas. Since 2016 I've worked in technology at a public agency (infrastructure, support, and systems management). Since 2025 I build software end to end: the jewelry store system, a portal for municipalities in Misiones with its document manager, a municipal revenue collection system, a cash-on-delivery store of my own, DropTrend and its WhatsApp bot, from the database to the campaign that brings in users. I use AI assistants to move faster; I review, test, and take responsibility for every line that ships to production.",
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

