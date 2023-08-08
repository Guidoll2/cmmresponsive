<button id="btnMostrarContenido" onClick={mostrarContenido}>Mostrar Contenido</button>

import { useEffect } from "react";

function mostrarContenido() {
  const nuevaPestanaURL = "url_del_contenido"; // Reemplaza "url_del_contenido" con la URL de tu página con el contenido deseado
  window.open(nuevaPestanaURL, "_blank");
}

function HomePage() {
  // Puedes utilizar useEffect para cargar el script en la página
  useEffect(() => {
    // Agrega el script al documento solo cuando se monte el componente
    const script = document.createElement("script");
    script.innerHTML = `
      function mostrarContenido() {
        const nuevaPestanaURL = "url_del_contenido"; // Reemplaza "url_del_contenido" con la URL de tu página con el contenido deseado
        window.open(nuevaPestanaURL, "_blank");
      }
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <button id="btnMostrarContenido" onClick={mostrarContenido}>
        Mostrar Contenido
      </button>
    </div>
  );
}

export default HomePage;