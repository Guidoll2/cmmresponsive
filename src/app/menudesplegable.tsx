import { useState } from 'react';

const MenuDesplegable = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  return (

    <div className="flex items-center">
    
           
      <button
        className="absolute mt-[80px] left-[15px]"
        onClick={() => setMenuVisible(!menuVisible)}
      >

<img
          className="rounded-xl"
          src="/menu.gif"  
          alt="gif menu"
          width={100}
          height={100}
        />
   
            </button>
       
           
    

      {menuVisible && (
        <div
          className="absolute bottom-[10px] right-[0px] w-screen opacity-90 bg-gradient-to-l from-blue-950 to-blue-900 shadow-2xl z-[100] transition duration-150 ease-out hover:ease-in md:w-screen md:h-screen md:top-[0px] md:right-[0px]"
          onClick={() => setMenuVisible(false)}
        >
            <p className='absolute right-5 top-3 text-2xl text-stone-200 font-[lato] md:text-4xl md:right-[50px]'>X</p>
          <ul className="p-4 mt-10 md:space-x-4">
           <a href='#CONTENEDORALARMA' ><li className=" px-4 py-2 mb-3 text-white font-[lato] font text-xl cursor-pointer text-center decoration-solid md:text-4xl underline underline-offset-8">Alarmas monitoreadas</li></a>
           <a href='#CONTENEDORCCTV' > <li className=" px-4 py-2 mb-3 text-white font font-[lato] text-xl cursor-pointer  rounded text-center md:text-4xl underline underline-offset-8">Cámaras de seguridad</li></a>
           <a href='#CONTENEDORINDUSTRIAS'> <li className=" px-4 py-2 mb-3 text-white font font-[lato] text-xl cursor-pointer  rounded text-center md:text-4xl underline underline-offset-8">Industrias y comercios</li></a>
           <a href='#CONTENEDORCONTACTO'> <li className=" px-4 py-2 mb-3 text-white font font-[lato] text-xl cursor-pointer  rounded text-center md:text-4xl underline underline-offset-8">Contacto</li></a>
           
           <a href="https://guidoll.mercadoshops.com.ar/" target="_blank">  <li className="px-4 py-2 mb-3 text-white font-[lato] font text-xl cursor-pointer  rounded text-center md:text-4xl underline underline-offset-8">Tienda Virtual</li></a>
           <a href='#CONTENEDORIDENTIDAD'> <li className="px-4 py-2 mb-3  cursor-pointer  text-white font font-[lato] text-xl rounded text-center md:text-4xl underline underline-offset-8">Nosotros</li></a>
            {/* Agrega más opciones según tus necesidades */}
          </ul>

        </div>
      )}
    
    </div>
  );
};

export default MenuDesplegable;