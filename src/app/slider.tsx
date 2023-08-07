import { useState, useEffect } from 'react';

const ImageSlider: React.FC = () => {
  const imageUrls: string[] = [
   
    '/sensorpuerta.jpg',
    'sensorantishock.jpg'
        // Añade más URLs de imágenes aquí
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cambia la imagen cada 3 segundos (3000 ms)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <div className="relative h-64">
      {imageUrls.map((url, index) => (
        <img
          key={url}
          src={url}
          alt={`Image ${index + 1}`}
          className={`absolute bottom-[20px] left-0 w-full h-60 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;