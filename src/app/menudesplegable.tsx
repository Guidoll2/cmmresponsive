import { useState } from 'react';

const MenuDesplegable = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (

    <div className="flex items-center justify-center h-10">
    
           
      <button
        className="flex items-center text-blue-950 z-10"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        
        <svg height="20" viewBox="0 0 32 32" width="30" xmlns="http://www.w3.org/2000/svg"><g id="burger,-menu,-more,-sort" fill="none" fill-rule="evenodd"><path id="Shape" d="m28 23v2h-24v-2zm0-8v2h-24v-2zm0-8v2h-24v-2z" fill="#0d47a1" fill-rule="nonzero"/></g></svg>
            
        <p className='ml-2 text-[15px] md:text-xl md:mt-2 text-blue-950'>Menú</p>
            </button>
       
           
    

      {menuVisible && (
        <div
          className="absolute top-[30px] w-screen border-[2px] border-stone-700  bg-gradient-to-l from-blue-950 to-blue-900 rounded-[10px] shadow-2xl z-1 transition duration-150 ease-out hover:ease-in md:w-[400px] md:h-[600px]"
          onClick={() => setMenuVisible(false)}
        >
            <p className='absolute right-5 top-3 text-4xl text-stone-200'>X</p>
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