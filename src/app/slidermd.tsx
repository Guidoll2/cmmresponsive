import { useState, useEffect } from 'react';

const ImageSlidermd: React.FC = () => {
  const imageUrls: string[] = [
   
    'telefono.svg',
    '/logosvg.svg',
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
    <div className="flex h-80 grid grid-cols-2">
      {imageUrls.map((url, index) => (
        <img
          key={url}
          src={url}
          alt={`Image ${index + 1}`}
          className={`flex h-20  ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000 ml-60`}
        />
      ))}
    </div>
    
  );
};

export default ImageSlidermd;