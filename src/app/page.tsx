'use client'

import Image from 'next/image'
import MenuDesplegable from './menudesplegable'
import ImageSlider from './slider';
import ImageSlidercctv from './slidercctv';
import background from '../../public/seguridad-electronica.jpg'
import Logo from '../../src/app/logo'

export default function Home() {
  return (
    <main className="block grid bg-white">
      
     <div id='NAVBAR' className=" grid grid-cols-2 w-screen opacity border-stone-500 bg-stone-200 font-mono text-sm">
     <div className="flex">
    
    
       <Image
        className="w-dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logosinfondo.png"
        alt="CMM Logo"
        width={110}
        height={150}
        priority
      />
      <h1 className='text-4xl font-[raleway] text-blue-950 mt-3'>CMM</h1>
    </div> 

 
  
    <div className='text-left ml-40 mt-4 z-20'>
      <MenuDesplegable></MenuDesplegable>
    </div>
  
  </div>
  
{/**FIN DEL DIV DEL NAVBAR */}

<div id='HERODEBAJOHEADER' className="grid grid-rows-[1fr, auto] text-center mt-3 bg-stone-200">
<h1 className='text-blue-950 text-2xl max-h-[200px] font-semibold text-left font-[raleway]'>Seguridad Electrónica en residencias, comercios e industrias.</h1>
  
</div>
<div className='bg-gradient-to-r via-blue-950 from-stone-100 w-full h-2'></div>
    <div id='CONTENEDORALARMA' className='grid grid-rows-2 bg-blue-950 p-4'>
   
<h1 className='font-[raleway] font-bold text-4xl text-stone-100 z-20'>Alarmas Monitoreadas Inalambricas</h1>
<h2 className='font-[raleway] font-bold text-xl text-stone-100 py-4'>Protección antishock en puertas y ventanas.</h2>
<p className='font-[raleway] text-stone-200 text-xl'> Instalar un equipo de alarmas es el primer paso para salvaguardar lo que más te
          importa. CMM te ofrece una avanzada alarma con detección anticipada para localizar intentos de robo antes del ingreso. Nuestra pronta reacción disuade a los ladrones y activa el protocolo de seguridad instantáneamente.</p>
 <div className='bg-gradient-to-r via-stone-100 from-stone-100 w-full h-1 mt-10'></div>
 <div id='SLIDER' className='py-10 '> <ImageSlider></ImageSlider></div>
 
             
</div>

    
<div id='CONTENEDORCCTV' className='grid grid-rows-2 bg-gradient-to-b via-blue-950 from-blue-950 mt-2 p-4'>
<h1 className='font-[raleway] font-bold text-4xl text-stone-200 mt-6'>CCTV - Cámaras de seguridad</h1>
<h2 className='font-[raleway] font-bold text-xl text-stone-200 mt-4'>Mira tu propiedad desde cualquier lugar, en cualquier momento, directamente en tu celular.</h2>
<p className='font-[raleway] text-stone-200 text-xl mt-8'> Un sistema de cámaras es un complemento perfecto para nuestro servicio de alarma
          monitoreada. Juntos, forman un escudo de protección integral, brindándote una mayor
          seguridad y confianza en la protección de tus seres queridos y tus bienes más preciados. Accede a grabaciones para revisar eventos pasados. No importa si estás de
          vacaciones, en el trabajo o simplemente fuera de casa, siempre vas a estar al tanto de
          lo que sucede en tu propiedad.</p>
         
          <div className='bg-gradient-to-r via-stone-100 from-stone-100 w-full h-1 mt-10'></div>
 <div id='SLIDER' className='py-10'> <ImageSlidercctv></ImageSlidercctv></div>
 
             
</div>

<div id='CONTENEDORTIENDA' className='grid grid-rows-2 bg-blue-950 mt-2 p-4'>
<h1 className='font-[raleway] font-bold text-4xl text-stone-200 mt-5'>TIENDA VIRTUAL</h1>
<h2 className='font-[raleway] font-bold text-xl text-stone-200 mb-4'>Conoce nuestros productos y servicios.</h2>
<p className='font-[raleway] text-stone-200 text-xl'> Todo proyecto de seguridad electrónica requiere un asesoramiento previo. Nuestros representantes están disponibles para guiarte. En nuestra tienda virtual, podrás encontrar los precios de nuestros servicios y el costo mínimo de los distintos sistemas de alarma y cámaras de seguridad.</p>
<a href="https://guidoll.mercadoshops.com.ar/" target="_blank">    <p className='text-stone-200 text-l py-4 text-center'>Hace Click Aca para ir a la tienda</p></a>
</div>

<div id='CONTENEDORCONTACTO' className='grid grid-rows-2 bg-blue-950 mt-2 p-4'>

  
<h1 className='font-[raleway] font-bold text-4xl text-stone-200 mt-5'>Contáctenos</h1>
<h2 className='font-[raleway] font-bold text-xl text-stone-200 mt-3'>Un asesor esta listo para atenderlo</h2>

<div className="flex p-2 items-center">
<a href='https://wa.me/+5491133324034' target='_blank'  >
<Image
          className=""
          src="/wpn.svg"
          alt="whatsapplogo"
          
          width={30}
          height={0}
          priority
        />
        </a> 

  <div className="text-[15px] text-white p-2">Whatsapp:+549 011 15-3332-4034</div>
  <div className="ml-2">
  
  </div>
</div>

<div className="flex p-2 items-center">
<a href='mailto:cmm@alarmascmm.com' >
<Image
          className="a"
          src="/email.svg"
          alt="logogmail"
          
          width={30}
          height={0}
          priority
        />
        </a>
  <div className="text-[15px] text-white p-2">Correo: cmm@alarmascmm.com</div>
  <div className="ml-2">
  
  </div>
</div>

<div className="flex p-2 items-center">
<span className=''>
<a href='tel:+541133324034' >
<Image
          className=""
          src="/telefono.svg"
          alt="logotelefono"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
<div className="text-[15px] p-2 text-white">Teléfono: 011 1533324034</div>
<div className="ml-2">
  
  </div>
</div>


<div className="flex p-2 items-center">
<span className=''>
<a href='tel:+541133324034' >
<Image
          className=""
          src="/relojn.svg"
          alt="reloj"
          
          width={30}
          height={0}
          priority
        />
        </a>
</span>
<div className="text-[15px] p-2 text-white">Horario de atención: Lunes a Viernes de 9:00 a 17:00</div>
<div className="ml-2">
  
  </div>
</div>

<p className='font-[raleway] text-stone-200 text-xl'> </p>
             
</div>

<div id='CONTENEDORIDENTIDAD' className='grid grid-rows-2 bg-blue-950  mt-2 p-4'>
   
<h1 className='font-[raleway] font-bold text-4xl text-stone-100 z-20'>Quienes somos?</h1>
<h2 className='font-[raleway] font-bold text-xl text-stone-100 py-4'>Mas de 12 años cuidandote</h2>
<p className='font-[raleway] text-stone-200 text-xl'>  CMM es una empresa líder en el campo de la seguridad electrónica, con una trayectoria de 15 años brindando servicios de calidad en las localidades de San Miguel del Monte y Cañuelas. Nuestro amplio abanico de servicios incluye el monitoreo de alarmas, la instalación de sistemas de cámaras de seguridad y el control de acceso. Nos enorgullece ofrecer soluciones integrales y personalizadas para satisfacer las necesidades específicas de cada cliente.

Además, destacamos nuestro compromiso con el servicio técnico local, brindando un soporte rápido y eficiente para asegurar el funcionamiento óptimo de todos los sistemas instalados. Contamos con un equipo altamente capacitado de profesionales técnicos que están disponibles para atender cualquier requerimiento o consulta.

En CMM, entendemos que la seguridad es primordial y nos esforzamos por proporcionar soluciones confiables y de vanguardia para proteger a nuestros clientes y sus activos. Confíe en nosotros para su proyecto de seguridad electrónica y experimente la tranquilidad de contar con una empresa sólida y comprometida con su protección</p>
 <div className='bg-gradient-to-r via-stone-100 from-stone-100 w-full h-1 mt-10'></div>
             
</div>


<footer className='grid grid-rows-2 bg-blue-950 text-stone-200 mt-2'>
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
