'use client'

import Image from 'next/image'
import MenuDesplegable from './menudesplegable'
import ImageSlider from './slider';
import ImageSlidercctv from './slidercctv';
import background from '../../public/seguridad-electronica.jpg'
import Logo from '../../src/app/logo'

export default function Home() {
  return (
    <main className="block grid bg-stone-200">
      
     <div id='NAVBAR' className=" grid grid-cols-2 w-screen opacity border-stone-500 bg-white font-mono text-sm">
     <div className="flex">
    <Logo></Logo>
    
    {/**   <Image
        className="w-dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logonegro.svg"
        alt="CMM Logo"
        width={130}
        height={150}
        priority
      />*/}
      <h1 className='text-4xl font-[raleway] text-blue-950 mt-5'>CMM</h1>
    </div> 

 
  
    <div className='fixed right-0 top-4 z-20 opacity-90 '>
      <MenuDesplegable></MenuDesplegable>
    </div>
  
  </div>

{/**FIN DEL DIV DEL NAVBAR */}

<div id='HERODEBAJOHEADER' className="grid grid-rows-[1fr, auto] text-center  bg-stone-200">
<h1 className='text-blue-950 text-2xl max-h-[200px] font-semibold text-left font-[raleway]'>Seguridad Electrónica en residencias, comercios e industrias.</h1>

<div id='IMAGENBACKGROUND' className='flex '>
  <Image src={background} alt='background-image' className='opacity-' width={2000} height={0}/>
  </div>
  
</div>
    
    <div id='CONTENEDORALARMA' className='grid grid-rows-2 bg-gradient-to-b via-blue-950 from-blue-950'>
    <Image
        className="w-dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert absolute right-0 z-10"
        src="/alarmanegro.svg"
        alt="CMM Logo"
        width={130}
        height={150}
        priority
      />
<h1 className='font-[raleway] font-bold text-4xl text-stone-100 z-20'>Alarmas Monitoreadas Inalambricas</h1>
<h2 className='font-[raleway] font-bold text-xl text-stone-100 py-4'>Sensores con deteccion anticipada</h2>
<p className='font-[raleway] text-stone-200 text-xl'> Instalar un equipo de alarmas es el primer paso para salvaguardar lo que más te
          importa. Con la nueva tecnologia de sensores Nuestro equipo altamente capacitado estará atento a cualquier evento y
          actuará de inmediato en caso de emergencia. Además, monitoreamos constantemente la
          corriente eléctrica y la comunicación para detectar cualquier fallo y garantizar la
          protección continua de tu hogar, negocio o industria.</p>
 
 <div id='SLIDER' className='py-2 border-t-[8px] border-stone-700 rounded-l '> <ImageSlider></ImageSlider></div>
 
             
</div>

    
<div id='CONTENEDORCCTV' className='grid grid-rows-2 bg-gradient-to-b via-blue-950 from-blue-950'>
<h1 className='font-[raleway] font-bold text-2xl text-stone-200 mt-5'>CCTV - Cámaras de seguridad</h1>
<h2 className='font-[raleway] font-bold text-xl text-stone-200 mb-4'>Mira tu propiedad desde cualquier lugar, en cualquier momento, directamente en tu celular.</h2>
<p className='font-[raleway] text-stone-200 text-xl'> Un sistema de cámaras es un complemento perfecto para nuestro servicio de alarma
          monitoreada. Juntos, forman un escudo de protección integral, brindándote una mayor
          seguridad y confianza en la protección de tus seres queridos y tus bienes más preciados. Accede a grabaciones para revisar eventos pasados. No importa si estás de
          vacaciones, en el trabajo o simplemente fuera de casa, siempre vas a estar al tanto de
          lo que sucede en tu propiedad.</p>
 
 <div id='SLIDER' className='py-2 border-t-[8px] border-stone-700 rounded-l '> <ImageSlidercctv></ImageSlidercctv></div>
 
             
</div>

<div id='CONTENEDORCONTACTO' className='grid grid-rows-2 bg-gradient-to-b via-blue-950 from-blue-950'>
<h1 className='font-[raleway] font-bold text-2xl text-stone-200 mt-5'>TIENDA VIRTUAL</h1>
<h2 className='font-[raleway] font-bold text-xl text-stone-200 mb-4'>Conoce nuestros productos y servicios.</h2>
<p className='font-[raleway] text-stone-200 text-xl'> Todo proyecto de seguridad electronica requiere previo asesoramiento, nuestros respresentantes estan disponibles 
para g. En nuestra tienda virtual vas a poder encontrar los precios de nuestros servicios y el costo minimo de los distintos los sistemas de alarma y camaras de seguridad.</p>
             
</div>

<footer className='grid grid-rows-3 bg-blue-950 text-stone-200'>
  <h1 className='text-center'>   CMM - San Miguel del Monte - Cañuelas - Lobos</h1>
  <h2 className='text-left'> Copyright 2022. Todos los derechos reservados. <span className='text-left'>Diseño y Desarrollo Guido Llaurado.</span> </h2>

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
