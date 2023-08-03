import { useState } from 'react';

const MenuDesplegable = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        className="py-2 px-1 text-blue-950 z-20"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="34"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="currentColor">
            <path d="M4 18h16v-2H4v2zM4 13h16v-2H4v2zM4 6v2h16V6H4z" />
          </g>
        </svg>
      </button>

      {menuVisible && (
        <div
          className="absolute top-[0px] right-[10px]  h-screen w-60 bg-blue-950  rounded-[10px] shadow-lg z-1 transition duration-150 ease-out hover:ease-in "
          onClick={() => setMenuVisible(false)}
        >
          <ul className="p-4 mt-20">
            <a href='#CONTENEDORALARMA'><li className="px-4 py-2 mb-3 hover:bg-gray-100 cursor-pointer bg-gray-200 rounded font-bold font-[raleway]">Alarmas monitoreadas</li></a>
           <a href='#CONTENEDORCCTV'> <li className="px-4 py-2 mb-3 hover:bg-gray-100 cursor-pointer bg-gray-200 rounded font-bold font-[raleway]">Cámaras de seguridad</li></a>
            <li className="px-4 py-2 mb-3 hover:bg-gray-100 cursor-pointer bg-gray-200 font-[raleway] font-bold">Contacto</li>
            <li className="px-4 py-2 mb-3 hover:bg-gray-100 cursor-pointer bg-gray-200 font-[raleway] font-bold">Tienda Virtual</li>
            {/* Agrega más opciones según tus necesidades */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuDesplegable;