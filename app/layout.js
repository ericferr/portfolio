// Raíz mínima: el <html>/<body> real vive en app/[lang]/layout.js, que es
// donde se conoce el idioma de la ruta. Next exige que exista este archivo.
export default function RaizMinima({ children }) {
  return children;
}
