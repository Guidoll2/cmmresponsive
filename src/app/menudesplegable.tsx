import { useState } from 'react';

const MenuDesplegable = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (

    <div className="flex items-center justify-end mr-2 h-46">
    
           
      <button
        className="absolute mt-[60px] left-[15px] text-blue-950 z-10"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        

        <svg height="40" width="40" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg"><g id="burger,-menu,-more,-sort" fill="none" fill-rule="evenodd"><path id="Shape" d="m23 23v2h-24v-2zm0-8v2h-40v-2zm0-8v2h-24v-2z" fill="#172554" fill-rule="nonzero"/></g></svg>


   
            </button>
       
           
    

      {menuVisible && (
        <div
          className="absolute bottom-[5px] right-[2px] w-screen border-[2px] border-stone-700  bg-gradient-to-l from-blue-950 to-blue-900 rounded-[10px] shadow-2xl z-[100] transition duration-150 ease-out hover:ease-in md:w-[400px] md:h-screen md:top-[0px] md:right-[0px]"
          onClick={() => setMenuVisible(false)}
        >
            <p className='absolute left-5 top-3 text-2xl text-stone-200'>X</p>
          <ul className="p-4 mt-10">
           <a href='#COMOFUNCIONA' ><li className="px-4 py-2 mb-3 text-blue-950 font-bold text-xl cursor-pointer bg-white rounded text-center">Alarmas monitoreadas</li></a>
           <a href='#CONTENEDORCCTV' > <li className="px-4 py-2 mb-3 text-blue-950 font-bold text-xl cursor-pointer bg-white rounded text-center">Cámaras de seguridad</li></a>
           <a href='#CONTENEDORCONTACTO'> <li className="px-4 py-2 mb-3 text-blue-950 font-bold text-xl cursor-pointer bg-white rounded text-center">Contacto</li></a>
           <a href='#CONTENEDORINDUSTRIAS'> <li className="px-4 py-2 mb-3 text-blue-950 font-bold text-xl cursor-pointer bg-white rounded text-center">Industrias y comercios</li></a>
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