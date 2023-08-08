import { useState } from 'react';

const MenuDesplegable = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1  place-items-center">
     
     
      <div className='grid grid-cols-2  '>
      <button
        className="text-blue-950 z-10"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        
        <svg className=' w-6 md:w-12'
          fill="none"
           
          viewBox="0 0 24 24"
         
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <path d="M4 18h16v-2H4v2zM4 13h16v-2H4v2zM4 6v2h16V6H4z" />
          </g>
        </svg>
      
      </button>
      <p className='text-[12px] mt-1 md:text-xl md:mt-2'>Menú</p>
      </div>

      {menuVisible && (
        <div
          className="grid grid-cols-1 w-screen border-[2px] border-stone-700 h-[380px] right-[10px] bg-gradient-to-l from-blue-950 to-blue-900 rounded-[10px] shadow-2xl z-1 transition duration-150 ease-out hover:ease-in md:w-[400px] md:h-[600px]"
          onClick={() => setMenuVisible(false)}
        >
              <p className='absolute right-5 top-9 text-4xl text-stone-200'>X</p>
          <ul className="p-4 mt-10">
            <a href='#DETAILALARM' ><li className="px-4 py-2 mb-3 text-blue-950 font-bold text-xl cursor-pointer bg-white rounded text-center">Alarmas monitoreadas</li></a>
           <a href='#CONTENEDORCCTV' > <li className="px-4 py-2 mb-3 text-blue-950 font-bold text-xl cursor-pointer bg-white rounded text-center">Cámaras de seguridad</li></a>
           <a href='#CONTENEDORCONTACTO'> <li className="px-4 py-2 mb-3 text-blue-950 font-bold text-xl cursor-pointer bg-white rounded text-center">Contacto</li></a>
           <a href="https://guidoll.mercadoshops.com.ar/" target="_blank">  <li className="px-4 py-2 mb-3 text-blue-950 font-bold text-xl cursor-pointer bg-white rounded text-center">Tienda Virtual</li></a>
            <a href='#CONTENEDORIDENTIDAD'> <li className="px-4 py-2 mb-3  cursor-pointer bg-white text-blue-950 font-bold text-xl rounded text-center">Nosotros</li></a>
            {/* Agrega más opciones según tus necesidades */}
          </ul>

        </div>
      )}
    </div>
  );
};

export default MenuDesplegable;