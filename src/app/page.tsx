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
import ComoFunciona from './gradientecomofunciona';
import SectionHeader from './gradienteletrasfooter';


export default function Home() {
   return (
    
    <main className="block grid overflow-hidden bg-gradient-to-r from-stone-100 to-stone-400 md:grid md:grid-cols-1">
    
    
    <a className='' href='https://wa.me/+5491133324034' target='_blank'> <Image
      className="ml-5 opacity-80 z-10 fixed right-2 bottom-5 md:fixed md:w-[80px] md:bottom-10"
      src="/whatsappv.svg"
      alt="CMM Logo"
      width={60}
      height={0}
      priority
    /></a>

<a className='' href='#NAVBAR'> <Image
      className="ml-5 opacity-80  invisible left-0 bottom-5 md:fixed md:visible md:w-[80px] md:bottom-10"
      src="/flecha.svg"
      alt="CMM Logo"
      width={60}
      height={0}
      priority
    /></a>


<div id='NAVBAR' className="fixed z-[100] md:absolute h-[75px] place-items-center grid grid-cols-1 w-screen border-b-[2px] border-blue-700 shadow-2xl bg-gradient-to-r from-stone-100 to-stone-400 md:h-40 md:border-none">
  

  <div className='grid grid-cols-3 ml-5 md:w-screen md:place-items-center '>
  <SectionTitle></SectionTitle>
  <Image
      className="w-28 md:w-[200px] "
      src="/logosinfondo.png"
      alt="CMM Logo"
      width={1000}
      height={0}
      priority
    />
 <h2 className='text-[20px] text-blue-950 md:text-4xl'>Seguridad Electrónica</h2>
  



</div>
</div>

<div className='fixed z-[100] w-screen mt-[75px] bg-gradient-to-r from-stone-100 to-stone-300 md:mt-[150px] md:absolute '>
  <MenuDesplegable></MenuDesplegable>
  </div>
  
{/**FIN DEL DIV DEL NAVBAR */}


<div id='CONTENEDORALARMA' className='grid grid-rows-1 bg-gradient-to-l from-blue-950 to-blue-900 p-4 mt-20 shadow-2xl md:mt-60'>
   
<h1 className='font-[raleway] font-bold  text-center text-stone-100 py-2 md:text-7xl text-5xl '>Alarmas monitoreadas</h1>
<h2 className='py-4 font-[raleway]  text-stone-100 text-center md:text-4xl text-2xl'>Hogar seguro, diseño sin cables</h2>

<div className='flex grid grid-cols-2 gap-2 mt-4 md:w-full md:grid-cols-4 md:gap-4 md:ml-10 opacity-80'>
<Image
      className="rounded-xl shadow-xl"
      src="/sensorpuerta.jpg"
      alt="CMM Logo"
      width={250}
      height={150}
      priority
    />

<Image
      className="rounded-xl shadow-xl"
      src="/centralv.jpg"
      alt="CMM Logo"
      width={250}
      height={150}
      priority
    />

<Image
      className="rounded-xl shadow-xl"
      src="/smarts.jpg"
      alt="CMM Logo"
      width={250}
      height={150}
      priority
    />

<Image
      className="rounded-xl shadow-xl h-full"
      src="/control.jpg"
      alt="CMM Logo"
      width={250}
      height={150}
      priority
    />   

</div>

<div className=''>
<ComoFunciona></ComoFunciona>
</div>

{/** 
<h1 id='DETAILALARM'className='text-stone-200 text-4xl text-center mt-20 md:text-6xl'>¿Como funciona?</h1>
*/}
<div className='p-4 grid grid-cols-1 gap-4 mt-8 place-items-center md:place-items-center '>

 
<Image
      className="rounded-xl ml-5 opacity-90 md:w-[180px] "
      src="/casaf.svg"
      alt="CMM Logo"
      width={110}
      height={200}
      priority
    />   


<div className='mt-5 '>
<h1 className='text-2xl md:text-3xl text-center text-stone-100 md:text-2xl font-bold'>Monitoreo las 24 horas</h1>
<p className='mt-3 text-xl md:text-2xl text-center text-stone-100'>La alarma emite una señal que instantáneamente llega a nuestros servidores.</p>
</div>

 
<div className='grid grid-cols-1 mt-8'>
<Image
      className="rounded-xl opacity-90 mt-8 ml-10 md:w-[180px] md:mt-20"
      src="/celu.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />  
    
</div>

<div className='grid grid-rows-1 grid-cols-1 md:mt-20'>
<h1 className='text-2xl text-center mt-5 text-stone-100 md:text-3xl font-bold'>Notificaciones al instante </h1>
<p className='text-stone-200 text-xl md:text-2xl mt-3 text-center'>En el instante que la alarma suena una notificación se genera en tu celular. </p>
</div>


<Image
      className="rounded-xl h-full mt-8 md:w-[180px] md:mt-20"
      src="/callcenter.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   

<div className='grid grid-rows-1 grid-cols-1 mt- md:mt-20'>
<h1 className='text-2xl text-center mt-5 text-stone-100 md:text-3xl font-bold'>Asistencia telefónica </h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3'>Nuestros operadores inician el protocolo de llamadas.</p>
</div>

<Image
      className="rounded-xl h-full mt-8 md:w-[180px] md:mt-20"
      src="/policia.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   

<h1 className='text-2xl text-left text-stone-100 mt-5 md:text-3xl md:mt-20 font-bold'>Llamada al 911</h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3'>Se comunica a las fuerzas de seguridad y/o emergencias para que acudan al domicilio.</p>

</div>

          <a href="https://guidoll.mercadoshops.com.ar/" target="_blank"> 
          
          <button
        className="mt-8 bg-stone-100 rounded-xl mt-5 text-2xl w-full h-[60px] text-blue-950 font-bold">COTIZA TU EQUIPO ACÁ</button></a>
         

</div>

<div id='CONTENEDORCCTV' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 mt-2 p-4'>

<h1 className='font-[raleway] font-bold text-center md:text-7xl text-5xl text-stone-200 mt-6'>Cámaras de seguridad </h1>

<h2 className='font-[] text-center md:text-4xl text-2xl text-stone-200 mt-4'>Tu propiedad en tu celular </h2>


<div className='flex grid grid-cols-2 gap-4 md:grid-cols-4 opacity-80'>
<Image
      className="rounded-xl shadow-xl h-60"
      src="/cctv.jpg"
      alt="CMM Logo"
      width={1000}
      height={200}
      priority
    />

<Image
      className="rounded-xl shadow-xl h-60"
      src="/cctv2.jpg"
      alt="CMM Logo"
      width={400}
      height={200}
      priority
    />

    
<Image
      className="rounded-xl shadow-xl h-60"
      src="/cctvshop.jpg"
      alt="CMM Logo"
      width={400}
      height={200}
      priority
    />



<Image
      className="rounded-xl shadow-xl h-60"
      src="/cel.jpg"
      alt="CMM Logo"
      width={400}
      height={200}
      priority
    />


</div>

<h1 id='DETAILALARM'className='text-stone-100 font-[raleway] font-bold w-full rounded-2xl text-4xl text-center mt-20 md:text-6xl'>¿Como funciona?</h1>



<div className='p-4 grid grid-cols-1 gap-4 mt-8 place-items-center md:place-items-center '>

 
<Image
      className="rounded-xl opacity-90 ml-10 md:w-[180px] "
      src="/celu.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   


<div className='mt-5'>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold'>Notificaciones en tiempo real</h1>
<p className='mt-3 text-xl md:text-2xl text-center text-stone-100'>Recibi y gestiona notifiaciones de tu sistema de video vigilancia de manera instantanea.</p>
</div>

 
<div className='grid grid-cols-1 mt-8'>
<Image
      className="rounded-xl opacity-90 mt-8 ml-5 md:w-[180px] md:mt-20"
      src="/cctvs.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />  
    
</div>

<div className='grid grid-rows-1 grid-cols-1 md:mt-20'>
<h1 className='text-xl text-center mt-5 text-stone-100 md:text-3xl font-bold '>Visualizacion en directo las 24 horas </h1>
<p className='text-stone-200 text-xl md:text-2xl mt-3 text-center'>Estes donde estes vas a poder ver tu propiedad, dandote el control de cada situacion.</p>
</div>


<Image
      className="rounded-xl h-full mt-8 ml-5 md:w-[180px] md:mt-20"
      src="/almacenamiento.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   

<div className='grid grid-rows-1 grid-cols-1 mt- md:mt-20'>
<h1 className='text-xl text-center mt-5 text-stone-100 md:text-3xl font-bold'>Grabación continua </h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3'>Accedé al video almacenado desde cualquier pc tablet o celular.</p>
</div>
</div>
 
 
          <a href="https://guidoll.mercadoshops.com.ar/" target="_blank"> 
          
          <button
        className="bg-stone-100 mt-8 rounded-xl mt-5 text-2xl w-full h-[60px] text-blue-950 font-bold">COTIZA TU EQUIPO ACÁ</button></a>
         

</div>



<div id='CONTENEDORINDUSTRIAS' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 to-blue-900 mt-2 p-4'>
<h1 className='font-[raleway] font-bold md:text-7xl text-5xl text-stone-200 mt-5 text-center'>Industrias y comercios</h1>
<h2 className='font-[] md:text-4xl text-2xl text-stone-200 mt-4 text-center'>Controla y optimiza tus negocios</h2>


<div className='p-4 grid grid-cols-1 gap-4 mt-8 place-items-center md:place-items-center  '>

 
<Image
      className="rounded-xl opacity-90 mt-5 md:w-[180px] "
      src="/acceso.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   


<div className=''>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold'>Control de acceso</h1>
<p className='mt-3 text-xl md:text-2xl text-center text-stone-100'>Gestiona de manera electrónica el acceso a los distintos sectores de tu industria/comercio</p>
</div>

<div className='grid grid-cols-1 mt-5'>
<Image
      className="rounded-xl opacity-90 mt-10 md:w-[180px] md:mt-20"
      src="/automatizar.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   
    
</div>

<div className='grid grid-cols-1 md:mt-20'>
<h1 className='text-xl text-center text-stone-100 md:text-3xl font-bold'>Mejora de procesos productivos </h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3'>Recibi alertas del estado de tus equipos de producción instantáneamente</p>
</div>


<div className=''>
<Image
      className="mt-16 ml-5 md:w-[180px] md:mt-20"
      src="/celu.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   
</div>
<div className='grid grid-rows-1 grid-cols-1 md:mt-20'>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold'>Seguimiento de empleados</h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3'>Generá tareas para tus empleados que queden registradas en tu app de control</p>
</div>
</div>
 

  <div className='mt-20'>
  <a href="https://guidoll.mercadoshops.com.ar/" target="_blank"> 
          <button className=' bg-stone-100 rounded-xl mt-5 text-2xl  w-full text-blue-950 h-[60px] font-bold'>COTIZA TU EQUIPO ACÁ</button></a>
          </div>

</div>

<div id='CONTENEDORCONTACTO' className='grid grid-rows-2 bg-gradient-to-t from-blue-950 to-blue-900 mt-2 p-4 md:'>

  
<h1 className='font-[raleway] font-bold md:text-7xl text-5xl text-stone-200 mt-5 text-center'>Contáctenos</h1>
<h2 className='font-[] font-light md:text-4xl text-2xl text-stone-200 mt-3 text-center'>Un asesor esta listo para atenderlo</h2>

<div className='grid grid-rows-3 grid-cols-1 p-4 md:grid-rows-5 gap-5'>
<div className="flex p-2 items-center">
<a href='https://wa.me/+5491133324034' target='_blank'  >
<Image
          className=""
          src="/wcolor.svg"
          alt="whatsapplogo"
          
          width={44}
          height={0}
          priority
        />
        </a> 

  <div className="text-xl font-light text-white p-2 md:p-4">Whatsapp: 15-3332-4034</div>
  
</div>

<div className="flex p-2 items-center">
<a href='mailto:cmm@alarmascmm.com' >
<Image
          className="a"
          src="/correo.svg"
          alt="logogmail"
          
          width={40}
          height={0}
          priority
        />
        </a>
  <div className="text-xl font-light text-white p-2 md:p-4 ">cmm@alarmascmm.com</div>
</div>

<div className="flex p-2 ">

<a href='tel:+541133324034' >
<Image
          className=""
          src="/llamada.svg"
          alt="logotelefono"
          
          width={44}
          height={0}
          priority
        />
        </a>

<div className="text-xl p-2 font-light text-white ">Teléfono: 1133324034</div>

  </div>

<div className="flex p-2 items-center">

<a
        href="https://www.facebook.com/CMM.ALARMAS"
        target="_blank"
        className=""
      >
<Image
          className=""
          src="/facebook.svg"
          alt="logofacebook"
          
          width={44}
          height={0}
          priority
        />
        </a>

<div className="text-xl p-2 font-light text-white">Facebook/cmm.alarmas</div>

</div>
 
<div className="flex p-2 items-center md:">

<a
        href="https://www.instagram.com/alarmascmm/"
        target="_blank"
        className="mr-2"
      >
<Image
          className=""
          src="/instagram.svg"
          alt="logofacebook"
          
          width={44}
          height={0}
          priority
        />
        </a>

<div className="text-xl p-2 mt-4 font-light text-white md:mt-1">Instagram.com/alarmascmm </div>

</div>
</div>



<div className="grid grid-cols-1 p-4 place-items-center ">

<Image
          src="/reloj.svg"
          alt="reloj"
          
          width={74}
          height={0}
          priority
        />
        

<div className="text-2xl p-4 text-white text-center font-light">Horario de atención: Lunes a Viernes de 9:00 a 17:00</div>
  </div>

</div>

<div id='CONTENEDORIDENTIDAD' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900  mt-2 p-4'>

<h1 className='font-[raleway] font-bold text-4xl text-stone-100'>¿Quienes somos? </h1>

<h2 className='font-[raleway] font-bold text-xl text-stone-100 py-4 '>Mas de 12 años cuidandote</h2>
<p className='font-[] text-stone-200 text-xl font-light'> 


CMM se destaca como una empresa líder en el campo de la seguridad electrónica, con más de una década de experiencia

Lo que comenzó como un modesto servicio de seguridad para casas de fin de semana en San Miguel del Monte ha evolucionado y se ha adaptado al crecimiento y desarrollo de la región. Hoy, nuestra presencia se extiende atendiendo a una nueva gama de clientes que incluye residencias permanentes, comercios e industrias.

Al confiar en CMM para sus proyectos de seguridad electrónica, puede estar seguro de que recibirá el apoyo de una empresa sólida y comprometida con su protección.

</p>
 
            
</div>


<footer className='h-[200px] bg-gradient-to-l from-stone-100 via-stone-400 to-stone-400 text-blue-950 mt-2'>
<div className='w-[100px] absolute right-0'>
  <Image
      className="md:absolute mt-4 md:w-[300px]"
      src="/logosinfondo.png"
      alt="CMM Logo"
      width={1000}
      height={0}
      priority
    />
    </div>
<div className=' left-0 absolute'>
<SectionHeader></SectionHeader>
</div>
  <h1 className='text-center  mt-[90px] text-xl md:text-3xl md:mt-20'> San Miguel del Monte - Cañuelas - Lobos</h1>
  <h2 className='text-center py-3 text-[15px] md:mt-5'> Copyright 2022. Todos los derechos reservados. <span className='text-left'>Diseño y Desarrollo Guido Llaurado.</span> </h2>

</footer>

    </main>
  )
}
