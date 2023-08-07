import { useState, useEffect } from 'react';

const ImageSlidermd: React.FC = () => {
  const imageUrls: string[] = [
   
    'alarmacasag.svg',
    'callcenter.svg',
    'policia.svg',
   
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
    <div className="flex h-100 grid grid-cols-3 mt-10">
      {imageUrls.map((url, index) => (
        <img
          key={url}
          src={url}
          alt={`Image ${index + 1}`}
          className={`flex h-40 w-full  ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        />
      ))}
    </div>
    
  );
};

export default ImageSlidermd;