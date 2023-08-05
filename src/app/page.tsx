'use client'

import Image from 'next/image'
import MenuDesplegable from './menudesplegable'
import ImageSlider from './slider';
import ImageSlidercctv from './slidercctv';
import background from '../../public/logosinfondo.png'
import Logo from '../../src/app/logo'
import TabPage from '../../src/app/tabpages';
import ImageSlidermd from './slidermd';
import SectionTitle from '../app/gradienteletras'
import SectionTitle2 from '../app/gradientebajo'

export default function Home() {
  return (
    <main className="block grid bg-gradient-to-r from-stone-100 to-stone-400 md:grid md:grid-cols-1">
    <a className='' href='https://wa.me/+5491133324034' target='_blank'> <Image
      className="ml-5 opacity-80 z-10 fixed right-2 bottom-5 md:absolute md:w-[300px]"
      src="/whatsappv.svg"
      alt="CMM Logo"
      width={40}
      height={0}
      priority
    /></a>
<div id='NAVBAR' className="grid grid-cols-3 w-screen opacity border-b-[2px] border-blue-700 shadow-2xl bg-gradient-to-r from-stone-100 to-stone-400 text-sm md:h-40 md:border-none">
  <div className="flex items-center">
    <h1 className='text-5xl text-blue-950 mt-7 md:text-7xl md:relative md:left-64'><span className='hidden  md:visible'>Seguridad Electrónica en residencias, comercios e industrias.</span></h1>
 <div>
<SectionTitle></SectionTitle>

</div>
  </div>

  {/**
<div className='z-10 md:absolute'>
  <Logo></Logo>
  </div> */}
  <div className='w-[200px]'>
  <Image
      className="ml-5  md:absolute md:w-[300px]"
      src="/logosinfondo.png"
      alt="CMM Logo"
      width={1000}
      height={0}
      priority
    />
    </div>
  <div className='flex items-center z-20 justify-end mt-20 md:absolute md:right-4 md:top-[50px] md:z-20 '>
    <MenuDesplegable></MenuDesplegable>
  </div>
</div>
  
{/**FIN DEL DIV DEL NAVBAR */}

<div id='HERODEBAJOHEADER' className="text-center h-[60px] bg-gradient-to-t from-blue-950 to-blue-900 shadow-2xl md:h-[300px] md:mt-10 md:absolute md:mt-44">
<SectionTitle2></SectionTitle2>
<h1 className='text-stone-100 text-[15px] text-center font-bold text-left font-light md:text-6xl md:text-center ml-2 md:mt-8'>Cuidamos lo que importa desde 2012.</h1>
  
</div>
{/**
<div className='shadow-2xl mt-20 mb-5 text-3xl font-[] font-bold text-center'>
  
<Image
      className=""
      src="/logosinfondo.png"
      alt="CMM Logo"
      width={1000}
      height={150}
      priority
    />
   <h1 className='mt-10'> Mas de 12 años cuidandote</h1>
  </div>*/}

<div id='CONTENEDORALARMA' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 p-4 mt-4 shadow-2xl md:grid-cols-3 md:hidden '>
   
<h1 className='font-[] font-bold text-4xl text-center text-stone-100'>Alarmas Monitoreadas Inalambricas</h1>
<h2 className='font-[] font-bold text-xl text-stone-100 py-4 text-center '>Protección antigolpes en puertas y ventanas.</h2>
<div id='SLIDER' className='py-8 md:py-0 '> <ImageSlider></ImageSlider></div>
 
<p className='font-[] text-stone-200 text-xl md:'> Instalar un equipo de alarmas es el primer paso para salvaguardar lo que más te
          importa. CMM te ofrece una avanzada alarma con detección anticipada para localizar intentos de robo antes del ingreso. Nuestra pronta reacción disuade a los ladrones y activa el protocolo de seguridad instantáneamente.</p>


          <a href="https://guidoll.mercadoshops.com.ar/" target="_blank"> 
          <button className='bg-gradient-to-r via-stone-100 from-stone-100 rounded-xl mt-5 font-[] text-xl w-full'>Conoce mas</button></a>
             
</div>


<div id='CONTENEDORALARMAMD' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 p-4 mt-4 shadow-2xl hidden md:block md:mt-96 md:grid md:flex md:justi'>
   
<h1 className='font-[] font-bold text-4xl text-stone-100 md:text-center md:mt-20'>Alarmas Monitoreadas Inalambricas</h1>
<h2 className='font-[] font-bold text-2xl text-stone-100 py-4 md:text-center md:'>Protección antigolpes en puertas y ventanas.</h2>

<div id='SLIDERMD' className='ml-20'><ImageSlidermd></ImageSlidermd></div>

 
<p className='font-[] text-stone-200 text-xl '> Instalar un equipo de alarmas es el primer paso para salvaguardar lo que más te
          importa. CMM te ofrece una avanzada alarma con detección anticipada para localizar intentos de robo antes del ingreso. Nuestra pronta reacción disuade a los ladrones y activa el protocolo de seguridad instantáneamente.</p>


          <a href="https://guidoll.mercadoshops.com.ar/" target="_blank"> 
          <button className='bg-gradient-to-r via-stone-100 from-stone-100 rounded-xl mt-5 font-[] text-xl w-full'>Conoce mas</button></a>
             
</div>

    
<div id='CONTENEDORCCTV' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 mt-2 p-4'>

<h1 className='font-[] font-bold text-4xl text-stone-200 mt-6'>CCTV - Cámaras de seguridad </h1>

<h2 className='font-[] font-bold text-xl text-stone-200 mt-4'>Mira tu propiedad desde cualquier lugar, en cualquier momento, directamente en tu celular. </h2>
<div id='SLIDER' className='py-10'> <ImageSlidercctv></ImageSlidercctv></div>
 
<p className='font-[] text-stone-200 text-xl mt-8'> Un sistema de cámaras es un complemento perfecto para nuestro servicio de alarma
          monitoreada. Juntos, forman un escudo de protección integral, brindándote una mayor
          seguridad y confianza en la protección de tus seres queridos y tus bienes más preciados. Accede a grabaciones para revisar eventos pasados. No importa si estás de
          vacaciones, en el trabajo o simplemente fuera de casa, siempre vas a estar al tanto de
          lo que sucede en tu propiedad.</p>
         

          <a href="https://guidoll.mercadoshops.com.ar/MLA-1451242088-alarma-vetti-_JM" target="_blank"> <button className='bg-gradient-to-r via-stone-100 from-stone-100 rounded-xl mt-5 font-[raleway] text-xl w-full'>Conoce mas</button></a>
             
</div>

<div id='CONTENEDORACCESO' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 to-blue-900 mt-2 p-4'>
<h1 className='font-[] font-bold text-4xl text-stone-200 mt-5'>INDUSTRIAS Y COMERCIOS</h1>
<h2 className='font-[] font-bold text-xl text-stone-200 mt-4'>Controla y optimiza tus negocios</h2>
<p className='font-[] text-stone-200 text-xl'>"CMM se enorgullece en ofrecer una completa variedad de servicios especializados para comercios e industrias.
 Visualización de zonas de trabajo, control de acceso y/o procesos productivos. Alertas por corte de corriente electrica y mucho más. <span className='text-center'>Contactanos y retoma el control de tu negocio.</span>
  </p>
<a href="https://guidoll.mercadoshops.com.ar/" target="_blank">    <p className='text-blue-950 text-xl text-center bg-gradient-to-r via-stone-100 from-stone-100 rounded-xl mt-8'>Conoce más</p></a>
</div>

{/** 
<div id='CONTENEDORTIENDA' className='grid grid-rows-2 bg-gradient-to-t from-blue-950 to-blue-900 mt-2 p-4'>
<h1 className='font-[] font-bold text-4xl text-stone-200 mt-5'>TIENDA VIRTUAL</h1>
<h2 className='font-[] font-bold text-xl text-stone-200 mb-4'>Conoce nuestros productos y servicios.</h2>
<p className='font-[] text-stone-200 text-xl'> Todo proyecto de seguridad electrónica requiere un asesoramiento previo. Nuestros representantes están disponibles para guiarte. En nuestra tienda virtual, podrás encontrar los precios de nuestros servicios y el costo mínimo de los distintos sistemas de alarma y cámaras de seguridad.</p>
<a href="https://guidoll.mercadoshops.com.ar/" target="_blank">    <p className='text-blue-950 text-xl text-center bg-gradient-to-r via-stone-100 from-stone-100 rounded-xl mt-2'>Hace click aca para ir a la tienda</p></a>
</div>
*/}



<div id='CONTENEDORCONTACTO' className='grid grid-rows-2 bg-gradient-to-t from-blue-950 to-blue-900 mt-2 p-4'>

  
<h1 className='font-[] font-bold text-4xl text-stone-200 mt-5'>Contáctenos</h1>
<h2 className='font-[] font-light text-xl text-stone-200 mt-3'>Un asesor esta listo para atenderlo</h2>

<div className="flex p-2 items-center">
<a href='https://wa.me/+5491133324034' target='_blank'  >
<Image
          className=""
          src="/whatsapp.svg"
          alt="whatsapplogo"
          
          width={30}
          height={0}
          priority
        />
        </a> 

  <div className="text-[15px] font-light text-white p-2">Whatsapp:+549 011 15-3332-4034</div>
  <div className="ml-2">
  
  </div>
</div>

<div className="flex p-2 items-center">
<a href='mailto:cmm@alarmascmm.com' >
<Image
          className="a"
          src="/gmail.svg"
          alt="logogmail"
          
          width={30}
          height={0}
          priority
        />
        </a>
  <div className="text-[15px] font-light text-white p-2">Correo: cmm@alarmascmm.com</div>
  <div className="ml-2">
  
  </div>
</div>

<div className="flex p-2 items-center">
<span className=''>
<a href='tel:+541133324034' >
<Image
          className=""
          src="/llamada.svg"
          alt="logotelefono"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
<div className="text-[15px] p-2 font-light text-white">Teléfono: 011 1533324034</div>
<div className="ml-2">
  
  </div>
</div>


<div className="flex p-2 items-center">
<span className=''>
<Image
          className=""
          src="/relojc.svg"
          alt="reloj"
          
          width={30}
          height={0}
          priority
        />
        
</span>
<div className="text-[15px] p-2 text-white ">

<div className="text-[15px] p-2 text-white font-light">Horario de atención: Lunes a Viernes de 9:00 a 17:00</div>
<div className="ml-2">
  
  </div>
</div>

<p className='font-[] text-stone-200 text-xl'> </p>
             
</div></div>

<div id='CONTENEDORIDENTIDAD' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900  mt-2 p-4'>

<h1 className='font-[] font-bold text-4xl text-stone-100 z-20'>Quienes somos? </h1>

<h2 className='font-[] font-bold text-xl text-stone-100 py-4 '>Mas de 12 años cuidandote</h2>
<p className='font-[] text-stone-200 text-xl font-light'>  CMM es una empresa líder en el campo de la seguridad electrónica, con una trayectoria de 15 años brindando servicios de calidad en las localidades de San Miguel del Monte y Cañuelas. Nuestro amplio abanico de servicios incluye el monitoreo de alarmas, la instalación de sistemas de cámaras de seguridad y el control de acceso. Nos enorgullece ofrecer soluciones integrales y personalizadas para satisfacer las necesidades específicas de cada cliente.

Además, destacamos nuestro compromiso con el servicio técnico local, brindando un soporte rápido y eficiente para asegurar el funcionamiento óptimo de todos los sistemas instalados. Contamos con un equipo altamente capacitado de profesionales técnicos que están disponibles para atender cualquier requerimiento o consulta.

En CMM, entendemos que la seguridad es primordial y nos esforzamos por proporcionar soluciones confiables y de vanguardia para proteger a nuestros clientes y sus activos. Confíe en nosotros para su proyecto de seguridad electrónica y experimente la tranquilidad de contar con una empresa sólida y comprometida con su protección</p>
 <div className='bg-gradient-to-r via-stone-100 from-stone-100 w-full h-1 mt-10'></div>
             
</div>


<footer className='grid grid-rows-2 bg-gradient-to-t from-blue-950 to-blue-900 text-stone-200 mt-2'>
  <h1 className='text-center py-2 text-xl'>   CMM - San Miguel del Monte - Cañuelas - Lobos</h1>
  <h2 className='text-center py-3 text-[13px]'> Copyright 2022. Todos los derechos reservados. <span className='text-left'>Diseño y Desarrollo Guido Llaurado.</span> </h2>

</footer>

{/**       <div id='GRILLAPRINCIPAL' className="grid grid-rows-4 gap-y-4 mt-80 bg-red-200 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="#DETAILALARMS"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target=""
          rel=""
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Alarmas Monitoreadas{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
  </div>*/}


    </main>
  )
}
