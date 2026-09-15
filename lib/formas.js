// Generadores de posiciones para el sistema de partículas.
// Cada función devuelve un Float32Array de n*3 valores (x, y, z), centrado en el origen.
// Se evita Math.random puro donde importa la estabilidad: las formas fijas se calculan una vez.

function azar(escala = 1) {
  return (Math.random() * 2 - 1) * escala;
}

// Punto uniforme dentro de un triángulo (coordenadas baricéntricas).
function puntoEnTriangulo(a, b, c, out, i) {
  let u = Math.random();
  let v = Math.random();
  if (u + v > 1) {
    u = 1 - u;
    v = 1 - v;
  }
  const w = 1 - u - v;
  out[i] = a[0] * w + b[0] * u + c[0] * v;
  out[i + 1] = a[1] * w + b[1] * u + c[1] * v;
  out[i + 2] = a[2] * w + b[2] * u + c[2] * v;
}

// Reparte n puntos entre triángulos, proporcional al área de cada uno.
function muestrearTriangulos(triangulos, n, jitter = 0) {
  const areas = triangulos.map(([a, b, c]) => {
    const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    const ac = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    const cx = ab[1] * ac[2] - ab[2] * ac[1];
    const cy = ab[2] * ac[0] - ab[0] * ac[2];
    const cz = ab[0] * ac[1] - ab[1] * ac[0];
    return Math.sqrt(cx * cx + cy * cy + cz * cz) / 2;
  });
  const total = areas.reduce((s, a) => s + a, 0);
  const out = new Float32Array(n * 3);
  let i = 0;
  const acumulado = [];
  let acc = 0;
  for (const a of areas) {
    acc += a / total;
    acumulado.push(acc);
  }
  for (let p = 0; p < n; p++) {
    const r = Math.random();
    let t = acumulado.findIndex((v) => r <= v);
    if (t < 0) t = triangulos.length - 1;
    puntoEnTriangulo(triangulos[t][0], triangulos[t][1], triangulos[t][2], out, i);
    if (jitter) {
      out[i] += azar(jitter);
      out[i + 1] += azar(jitter);
      out[i + 2] += azar(jitter);
    }
    i += 3;
  }
  return out;
}

// Convierte una lista de puntos 2D [x, y] (ya centrados) en posiciones 3D con jitter en z.
function desdePuntos2D(puntos, n, jitterZ, jitterXY = 0.01) {
  const out = new Float32Array(n * 3);
  if (!puntos.length) return out;
  for (let i = 0; i < n; i++) {
    const p = puntos[Math.floor(Math.random() * puntos.length)];
    out[i * 3] = p[0] + azar(jitterXY);
    out[i * 3 + 1] = p[1] + azar(jitterXY);
    out[i * 3 + 2] = azar(jitterZ);
  }
  return out;
}

// Rasteriza texto en un canvas 2D y devuelve los píxeles claros como puntos centrados.
export function formaTexto(texto, fuente, n, altoUnidades = 2.6) {
  const c = document.createElement('canvas');
  const W = 512;
  const H = 256;
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#fff';
  ctx.font = fuente;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(texto, W / 2, H / 2 + 8);
  const datos = ctx.getImageData(0, 0, W, H).data;
  const puntos = [];
  let minY = H;
  let maxY = 0;
  let minX = W;
  let maxX = 0;
  for (let y = 0; y < H; y += 2) {
    for (let x = 0; x < W; x += 2) {
      if (datos[(y * W + x) * 4] > 128) {
        puntos.push([x, y]);
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }
  const alto = Math.max(1, maxY - minY);
  const escala = altoUnidades / alto;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const centrados = puntos.map(([x, y]) => [(x - cx) * escala, -(y - cy) * escala]);
  return desdePuntos2D(centrados, n, 0.35, 0.02);
}

// Silueta de una imagen (alpha > 128), escalada al ancho pedido.
export function formaImagen(img, n, anchoUnidades = 4.4) {
  const c = document.createElement('canvas');
  const S = 256;
  c.width = S;
  c.height = S;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.clearRect(0, 0, S, S);
  ctx.drawImage(img, 0, 0, S, S);
  const datos = ctx.getImageData(0, 0, S, S).data;
  const puntos = [];
  let minY = S;
  let maxY = 0;
  let minX = S;
  let maxX = 0;
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      if (datos[(y * S + x) * 4 + 3] > 128) {
        puntos.push([x, y]);
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }
  const ancho = Math.max(1, maxX - minX);
  const escala = anchoUnidades / ancho;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const centrados = puntos.map(([x, y]) => [(x - cx) * escala, -(y - cy) * escala]);
  return desdePuntos2D(centrados, n, 0.25, 0.008);
}

// Onda/terreno: grilla 80x80 en el plano XZ; la altura se recalcula cada frame.
export const LADO_ONDA = 80;

export function actualizarOnda(out, n, t) {
  const lado = LADO_ONDA;
  const extension = 5.2;
  const paso = extension / (lado - 1);
  const total = lado * lado;
  for (let i = 0; i < n; i++) {
    const k = i % total;
    const gx = k % lado;
    const gz = Math.floor(k / lado);
    // Los puntos que exceden la grilla se apilan con un pequeño corrimiento.
    const extra = i >= total ? 0.5 : 0;
    const x = -extension / 2 + (gx + extra) * paso;
    const z = -extension / 2 + (gz + extra) * paso;
    const y =
      Math.sin(x * 1.4 + t * 0.9) * 0.28 +
      Math.sin(z * 1.1 - t * 0.7) * 0.24 +
      Math.sin((x + z) * 0.8 + t * 0.5) * 0.18 +
      Math.sin(Math.sqrt(x * x + z * z) * 2.2 - t * 1.3) * 0.12;
    out[i * 3] = x;
    out[i * 3 + 1] = y - 0.6;
    out[i * 3 + 2] = z;
  }
}

// Direcciones unitarias fijas para la esfera; el radio se anima aparte.
export function direccionesEsfera(n) {
  const out = new Float32Array(n * 3);
  const dorado = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = dorado * i;
    out[i * 3] = Math.cos(a) * r;
    out[i * 3 + 1] = y;
    out[i * 3 + 2] = Math.sin(a) * r;
  }
  return out;
}

export function actualizarEsfera(out, dirs, n, t) {
  const radio = 2.1 + Math.sin(t * 0.9) * 0.18;
  for (let i = 0; i < n * 3; i++) out[i] = dirs[i] * radio;
}

// Anillo con brillante. Devuelve posiciones y una máscara de qué puntos son la piedra.
export function formaAnillo(n) {
  const out = new Float32Array(n * 3);
  const piedra = new Uint8Array(n);
  const nPiedra = Math.floor(n * 0.22);
  const nAro = n - nPiedra;
  const R = 1.6;
  const r = 0.18;
  for (let i = 0; i < nAro; i++) {
    const u = Math.random() * Math.PI * 2;
    const v = Math.random() * Math.PI * 2;
    const w = R + r * Math.cos(v);
    out[i * 3] = Math.cos(u) * w;
    out[i * 3 + 1] = Math.sin(u) * w;
    out[i * 3 + 2] = r * Math.sin(v);
  }
  // Piedra: corona (cono achatado) sobre la cintura y pabellón (cono invertido) debajo.
  const yCintura = R + r + 0.42;
  const radioCintura = 0.55;
  const altoCorona = 0.22;
  const radioMesa = 0.28;
  const altoPabellon = 0.62;
  const areaCorona = Math.PI * (radioCintura + radioMesa) * Math.hypot(radioCintura - radioMesa, altoCorona);
  const areaPabellon = Math.PI * radioCintura * Math.hypot(radioCintura, altoPabellon);
  const areaMesa = Math.PI * radioMesa * radioMesa;
  const total = areaCorona + areaPabellon + areaMesa;
  for (let j = 0; j < nPiedra; j++) {
    const i = nAro + j;
    piedra[i] = 1;
    const a = Math.random() * Math.PI * 2;
    const s = Math.random() * total;
    let rad;
    let y;
    if (s < areaCorona) {
      const t = Math.random();
      rad = radioCintura + (radioMesa - radioCintura) * t;
      y = yCintura + altoCorona * t;
    } else if (s < areaCorona + areaPabellon) {
      const t = Math.sqrt(Math.random());
      rad = radioCintura * t;
      y = yCintura - altoPabellon * (1 - t);
    } else {
      rad = radioMesa * Math.sqrt(Math.random());
      y = yCintura + altoCorona;
    }
    out[i * 3] = Math.cos(a) * rad + azar(0.01);
    out[i * 3 + 1] = y + azar(0.01);
    out[i * 3 + 2] = Math.sin(a) * rad + azar(0.01);
  }
  // Se baja todo para que el conjunto quede centrado.
  for (let i = 0; i < n; i++) out[i * 3 + 1] -= 0.35;
  return { posiciones: out, piedra };
}

// Bolsa de compra: prisma sin tapa más dos asas en arco.
export function formaBolsa(n) {
  const w = 2.4 / 2;
  const h = 2.6 / 2;
  const d = 1.3 / 2;
  const P = (x, y, z) => [x, y, z];
  const caras = [
    // frente y fondo
    [P(-w, -h, d), P(w, -h, d), P(w, h, d)],
    [P(-w, -h, d), P(w, h, d), P(-w, h, d)],
    [P(-w, -h, -d), P(w, -h, -d), P(w, h, -d)],
    [P(-w, -h, -d), P(w, h, -d), P(-w, h, -d)],
    // laterales
    [P(-w, -h, -d), P(-w, -h, d), P(-w, h, d)],
    [P(-w, -h, -d), P(-w, h, d), P(-w, h, -d)],
    [P(w, -h, -d), P(w, -h, d), P(w, h, d)],
    [P(w, -h, -d), P(w, h, d), P(w, h, -d)],
    // base
    [P(-w, -h, -d), P(w, -h, -d), P(w, -h, d)],
    [P(-w, -h, -d), P(w, -h, d), P(-w, -h, d)],
  ];
  const nAsas = Math.floor(n * 0.1);
  const nCuerpo = n - nAsas;
  const cuerpo = muestrearTriangulos(caras, nCuerpo, 0.02);
  const out = new Float32Array(n * 3);
  out.set(cuerpo);
  // Asas: semicírculos sobre la boca, uno por cara ancha, con grosor.
  const radioAsa = 0.72;
  for (let j = 0; j < nAsas; j++) {
    const i = nCuerpo + j;
    const lado = j % 2 === 0 ? d * 0.75 : -d * 0.75;
    const a = Math.random() * Math.PI;
    const grosor = 0.05;
    out[i * 3] = Math.cos(a) * radioAsa + azar(grosor);
    out[i * 3 + 1] = h + Math.sin(a) * radioAsa * 0.85 + azar(grosor);
    out[i * 3 + 2] = lado + azar(grosor);
  }
  return out;
}

// Avión de papel: dos alas en V más una quilla central, inclinado como en vuelo.
export function formaAvion(n) {
  const nariz = [2.3, 0, 0];
  const colaCentro = [-1.5, 0.12, 0];
  const colaIzq = [-1.5, 0.35, -1.5];
  const colaDer = [-1.5, 0.35, 1.5];
  const quillaBajo = [-1.3, -0.75, 0];
  const triangulos = [
    [nariz, colaIzq, colaCentro],
    [nariz, colaCentro, colaDer],
    [nariz, colaCentro, quillaBajo],
  ];
  const out = muestrearTriangulos(triangulos, n, 0.015);
  // Inclinación: nariz un poco arriba y girado para que se vea el ala.
  const ay = -0.55;
  const az = 0.32;
  const cy = Math.cos(ay);
  const sy = Math.sin(ay);
  const cz = Math.cos(az);
  const sz = Math.sin(az);
  for (let i = 0; i < n; i++) {
    let x = out[i * 3];
    let y = out[i * 3 + 1];
    let z = out[i * 3 + 2];
    // giro en Y
    let x1 = x * cy + z * sy;
    let z1 = -x * sy + z * cy;
    // giro en Z
    const x2 = x1 * cz - y * sz;
    const y2 = x1 * sz + y * cz;
    out[i * 3] = x2 * 0.95;
    out[i * 3 + 1] = y2 * 0.95;
    out[i * 3 + 2] = z1 * 0.95;
  }
  return out;
}

// Nube difusa: punto de partida antes de que cargue cualquier forma.
export function formaNube(n) {
  const out = new Float32Array(n * 3);
  for (let i = 0; i < n * 3; i++) out[i] = azar(3);
  return out;
}
