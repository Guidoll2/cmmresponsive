'use client'

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
      
const Navbarp = () => {

const [menuOpen, setMenuOpen] = useState (false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
         
    } 

    return (
      
        
    <nav id='NAVBAR' className='flex grid grid-cols-1 shadow-xl bg-gray-200 h-24'> 

<div className='absolute mt-5'>
      <a className='' href='/'>
      <img 
      className=""
      src="/logosinfondo.png"
      alt="grassgif"
      width={100}
      height={100}
         
    /> 

     

     </a></div>



      <div onClick={handleNav} id="BOTONMENU" className="absolute top-7 right-4 cursor-pointer hover:opacity-30 hover:-skew-y-12 md:hidden">
        <menu/>
      <div className="bar w-7 h-0.5 mb-1 bg-blue-950  "></div>
      <div className="bar w-7 h-0.5 mb-0.5 bg-blue-950 "></div>
   
      
      </div>
      
<div className={
    menuOpen
    ? 'absolute left-0 top-0 w-screen h-screen sm:hidden bg-gray-200 p-10 ease-in duration-500 z-[100]'
    : 'absolute left-[-100%] top-0 p-10 ease-in duration-500 '

}>
<div className='block'>
    <div onClick={handleNav} className='cursor-pointer flex justify-end'>
        <h1 className='uppercase text-4xl'>X</h1>
    </div>


{/*ACA ESTA EL MENU DESPLEGABLE PARA PANTALLAS DE CELULAR NO TOCAAAAAAS*/}
    
    <div id='MENUDESPLEGABLE' className='mt-10 flex justify-center'>

<ul className="flex grid grid-cols-1 list-none text-center">

          <li className='w-full  p-2'><a href="tab1" target='_blank' className="text-gray-800 p-2 text-2xl">Alarmas Monitoreadas</a></li>
          <li className='w-full  p-2'><a href="tab2" target='_blank' className="text-gray-800 p-2 text-2xl">Cámaras de Seguridad</a></li>
          <li className='w-full  p-2'><a href="tab3" target='_blank' className="text-gray-800 p-2 text-2xl">Industrias</a></li>
          <li className='w-full  p-2'><a href="tab4" target='_blank' className="text-gray-800 p-2 text-2xl">Tienda Virtual </a></li>
          <li className='w-full  p-2'><a href="tab4" target='_blank' className="text-gray-800 p-2 text-2xl">Contacto </a></li>
          <li className='w-full  p-2'><a href="/"  className="text-gray-800 p-2 text-2xl bg-blue-400 rounded-full">Inicio </a></li>
 

      </ul>
</div>

{/*ACA TERMINA EL MENU DESPLEGABLE DE CELULAR TOCA ABAJO */}

</div>


</div>

{/**ACA ESTA EL MENU PARA PANTALLAS NORMALES */}

<div id="NAVMD" className="hidden md:grid grid-cols-1 justify-items-end p-2 mr-8 text-center mt-5">
     
<ul className="flex gap-2">

<li className='p-2 bg-blue-400 rounded-[50px] h-10 w-20 hover:bg-blue-300 '><a href="/" target='' className="text-gray-800 text-l font-bold">Inicio </a></li>

</ul>
  </div>    

</nav>
);
}


export default Navbarp;         
