import { useEffect } from 'react';

const DetalleAlarma: React.FC = () => {
  <p>Parrafo de prueba</p>
  useEffect(() => {
    // Código de inicialización o carga de contenido adicional si es necesario
  }, []);

  return (
    <div>
      <h1>Información 1</h1>
      <p>Contenido adicional que deseas mostrar.</p>
    </div>
  );
};

export default DetalleAlarma;