'use client'
import Header from './header';
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

<link rel="icon" href="/logosinfondo.png" sizes="any" />

export default function Home() {
   return (
    
    <main className="block grid overflow-hidden bg-gradient-to-r from-blue-700 to-blue-950 md:grid md:grid-cols-1">
    
    <Header />
    
    <a className='' href='https://wa.me/+5491133324034' target='_blank'> <Image
      className="ml-5 opacity-90 z-[100] fixed left-0 bottom-5 md:fixed md:w-[80px] md:bottom-10"
      src="/whatsappv.svg"
      alt="CMM Logo"
      width={40}
      height={0}
      priority
    /></a>

<a className='' href='#NAVBAR'> <Image
      className="ml-5 opacity-80 invisible left-0 bottom-5 md:fixed md:visible md:w-[80px] md:bottom-10 z-[100]"
      src="/flecha.svg"
      alt="CMM Logo"
      width={60}
      height={0}
      priority
    /></a>


<Image
      className="absolute w-screen shadow-xl z-[90] opacity-60 mt-[280px]"
      src="/CASA.png"
      alt="CMM Logo"
      width={250}
      height={150}
      priority
    />


<div id='NAVBAR' className="absolute w-screen z-[99] h-[120px] py-2  grid grid-cols-1 shadow-2xl bg-white  md:h-40 ">
  
  <div className='grid grid-cols-2 md:w-screen md:absolute md:top-5 '>
  <Image
      className="w-[170px] md:w-[200px] "
      src="/logosinfondo.png"
      alt="CMM Logo"
      width={1000}
      height={0}
      priority
    />
    
    
    
    <div className='absolute right-10 top-8 py-2'>
  <SectionTitle></SectionTitle>
  </div>

  



</div>
</div>

<div id='MENUDESPLEGABLE' className='fixed z-[99] right-0 h-[55px] w-[55px] rounded-full right-2 bottom-[22px] md:top-48 md:right-5 md:rounded-[20px] md: md:absolute '>
  <MenuDesplegable></MenuDesplegable>
  </div>
  
{/**FIN DEL DIV DEL NAVBAR */}

<div id='' className='flex grid grid-rows-1 mt-[120px] place-items-center'>
<SectionTitle2></SectionTitle2>
</div>

<div id='CONTENEDORALARMA' className='border-t-[3px] border-blue-700 border--[3px] border-blue-700 grid grid-rows-1 bg-gradient-to-l from-blue-950 to-blue-900 p-4 mt-20 shadow-2xl md:mt-60'>
   
<h1 id='' className='font-[lato] font-bold  text-center text-stone-100 py-2 md:text-7xl text-5xl '>Alarmas monitoreadas</h1>
<h2 className='py-4 font-[lato]  text-stone-100 text-center md:text-4xl text-2xl'>Hogar seguro, diseño sin cables</h2>

<div className='flex grid grid-cols-2 gap-1 mt-4 md:w-full md:grid-cols-4 md:gap-4 md:ml-10 opacity-80'>
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
<p className='font-[lato] flex justify-center text-stone-100 py-2 md:text-7xl text-l'>Cuidamos tu seguridad y la estética de tu casa.</p>

<div id='COMOFUNCIONA' className=''>
<ComoFunciona></ComoFunciona>
</div>

<div className='p-4 grid grid-cols-1 gap-4 mt-24 place-items-center md:place-items-center '>

 
<Image
      className="rounded-xl opacity-90 md:w-[180px] "
      src="/casaf.svg"
      alt="CMM Logo"
      width={100}
      height={200}
      priority
    />   


<div className='mt-5 '>
<h1 className='text-2xl md:text-3xl text-center text-stone-100 md:text-2xl font-[lato] font-bold'>Monitoreo las 24 horas</h1>
<p className='mt-3 text-xl md:text-2xl text-center font-[lato] text-stone-100'>Ante un evento de tu alarma nuestra central de servicio estará lista para operar.</p>
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

<div className='grid grid-rows-1 grid-cols-1 '>
<h1 className='text-2xl text-center mt-5 text-stone-100 md:text-3xl font-[lato] font-bold'>Notificaciones al instante </h1>
<p className='text-stone-200 text-xl md:text-2xl mt-3 font-[lato] text-center'>En el momento que se genera un evento una notificación llega a tu celular. </p>
</div>


<Image
      className="rounded-xl h-full mt-8 md:w-[180px] md:mt-20"
      src="/callcenter.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   

<div className='grid grid-rows-1 grid-cols-1 '>
<h1 className='text-2xl text-center mt-5 text-stone-100 md:text-3xl font-[lato] font-bold'>Asistencia telefónica </h1>
<p className='text-stone-200 text-xl md:text-2xl text-center font-[lato] mt-3'>Simultáneamente nuestros operadores se ponen en contacto para brindarte asistencia de manera profesional.</p>
</div>

<Image
      className="rounded-xl h-full mt-8 md:w-[180px] md:mt-20"
      src="/policia.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   

<h1 className='text-2xl text-stone-100 mt-5 md:text-3xl  font-[lato] font-bold'>Llamada al 911</h1>
<p className='text-stone-200 text-xl md:text-2xl text-center font-[lato] mt-3'>De ser necesario se comunica a las fuerzas de seguridad y/o emergencias para que acudan al domicilio.</p>

</div>

<div className="flex justify-center mt-5 bg-gradient-to-r from-stone-400 to-stone-100 w-full rounded-[5px]">
  
  <a href="https://guidoll.mercadoshops.com.ar/" target="_blank" className="flex items-center space-x-2">
    <h1 className="p-2 text-2xl font-[lato] text-blue-950 font-bold">Tienda virtual</h1>
    <img
      src="/shop.svg"
      alt="shop icon"
      width={30}
      height={10}
      className="h-10"
    />
  </a>
</div>




         

</div>

<div id='CONTENEDORCCTV' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 mt-2 p-4'>

<h1 className='font-[lato] font-bold text-center md:text-7xl text-5xl text-stone-200 mt-6 font-[lato]'>Cámaras de seguridad </h1>

<h2 className='font-[] text-center md:text-4xl text-2xl text-stone-200 mt-4 font-[lato]'>Tu propiedad en tu celular </h2>


<div className='flex grid grid-cols-2 gap-4 md:grid-cols-4 opacity-80 h-96'>
<Image
      className="rounded-xl shadow-xl w-full h-full"
      src="/cctvadobe.jpeg"
      alt="CMM Logo"
      width={500}
      height={100}
      priority
    />

<Image
      className="rounded-xl shadow-xl w-full h-full"
      src="/cctv.jpg"
      alt="CMM Logo"
      width={1000}
      height={200}
      priority
    />

    
<Image
      className="rounded-xl shadow-xl w-full h-full"
      src="/CCTV1.jpg"
      alt="CMM Logo"
      width={400}
      height={200}
      priority
    />



<Image
      className="rounded-xl shadow-xl w-full h-full"
      src="/cctvphone.jpg"
      alt="CMM Logo"
      width={400}
      height={200}
      priority
    />


</div>

<div className='p-4 grid grid-cols-1 gap-4 mt-24 place-items-center md:place-items-center '>

 
<Image
      className="rounded-xl opacity-90 md:w-[180px] "
      src="/cctvhome1.svg"
      alt="CMM Logo"
      width={130}
      height={200}
      priority
    />   


<div className='mt-5 '>
<h1 className='text-2xl md:text-3xl text-center text-stone-100 md:text-2xl font-bold font-[lato]'>Visualización en directo las 24 horas </h1>
<p className='mt-3 text-xl md:text-2xl text-center text-stone-100 font-[lato]'>Estés donde estés vas a poder ver tu propiedad.</p>

</div>

 
<div className='grid grid-cols-1 mt-20'>
<Image
      className="rounded-xl opacity-90 mt-8 ml-8 md:w-[180px] md:mt-20"
      src="/celu.svg"
      alt="CMM Logo"
      width={140}
      height={200}
      priority
    />  
    
</div>

<div className='grid grid-rows-1 grid-cols-1'>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold font-[lato]'>Notificaciones en tiempo real </h1>
<p className='text-stone-200 text-xl md:text-2xl mt-3 text-center font-[lato]'>Recibís notificaciones de tu sistema de video vigilancia de manera instantánea (Cortes de luz, internet, detección de movimiento entre otros).</p>
</div>


<Image
      className="rounded-xl h-full mt-20 ml-2 md:w-[170px] md:mt-20"
      src="/almacenamiento.svg"
      alt="CMM Logo"
      width={110}
      height={200}
      priority
    />   

<div className='grid grid-rows-1 grid-cols-1'>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold font-[lato]'>Grabación continua </h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3 font-[lato]'>Accedé al video almacenado desde cualquier pc tablet o celular.</p>
</div>
</div>
<div className="flex justify-center mt-5 bg-gradient-to-r from-stone-400 to-stone-100 w-full rounded-[5px]">
  
  <a href="https://guidoll.mercadoshops.com.ar/" target="_blank" className="flex items-center space-x-2">
    <h1 className="p-2 text-2xl font-[lato] text-blue-950 font-bold">Tienda virtual</h1>
    <img
      src="/shop.svg"
      alt="shop icon"
      width={30}
      height={10}
      className="h-10"
    />
  </a>
</div>


</div>



<div id='CONTENEDORINDUSTRIAS' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 to-blue-900 mt-2 p-4'>
<h1 className='font-[lato] font-bold md:text-7xl text-5xl text-stone-200 mt-5 text-center font-[lato]'>Industrias y comercios</h1>
<h2 className='font-[] md:text-4xl text-2xl text-stone-200 mt-4 text-center font-[lato]'>Controla y optimiza tus negocios</h2>



<div className='flex grid grid-cols-2 gap-4 md:grid-cols-4 opacity-80 h-96'>
<Image
      className="rounded-xl shadow-xl w-full h-full"
      src="/indusrty3.jpeg"
      alt="CMM Logo"
      width={500}
      height={100}
      priority
    />

<Image
      className="rounded-xl shadow-xl w-full h-full"
      src="/hands.jpg"
      alt="control acceso industria"
      width={1000}
      height={200}
      priority
    />

    
<Image
      className="rounded-xl shadow-xl w-full h-full"
      src="/indusrty1.jpeg"
      alt="CMM Logo"
      width={1000}
      height={1000}
      priority
    />



<Image
      className="rounded-xl shadow-xl w-full h-full"
      src="/indusrty2.jpeg"
      alt="CMM Logo"
      width={400}
      height={200}
      priority
    />


</div>



<div className='p-4 grid grid-cols-1 gap-4 mt-8 place-items-center md:place-items-center  '>

 
<Image
      className="rounded-xl opacity-90 mt-20 md:w-[180px] "
      src="/acceso.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   



<div className=''>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold font-[lato]'>Control de acceso</h1>
<p className='mt-3 text-xl md:text-2xl text-center text-stone-100 font-[lato]'>Gestiona de manera electrónica el acceso a los distintos sectores de tu industria/comercio</p>
</div>

<div className='grid grid-cols-1 mt-5'>
<Image
      className="rounded-xl opacity-90 mt-20 md:w-[180px] md:mt-20"
      src="/automatizar.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   
    
</div>

<div className='grid grid-cols-1'>
<h1 className='text-xl text-center text-stone-100 md:text-3xl font-bold font-[lato]'>Mejora de procesos productivos </h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3 font-[lato]'>Recibi alertas del estado de tus equipos de producción instantáneamente</p>
</div>


<div className=''>
<Image
      className="mt-20 ml-10 md:w-[180px] md:mt-20"
      src="/celu.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   
</div>
<div className='grid grid-rows-1 grid-cols-1 md:mt-20'>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold font-[lato]'>Seguimiento de empleados</h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3 font-[lato]'>Generá tareas para tus empleados que queden registradas en tu app de control</p>
</div>

<Image
      className="rounded-xl opacity-90 mt-20 md:w-[180px] "
      src="/cctvs.svg"
      alt="CMM Logo"
      width={130}
      height={200}
      priority
    />   


<div className='mt-5 '>
<h1 className='text-2xl md:text-3xl text-center text-stone-100 md:text-2xl font-bold font-[lato]'>CCTV Motorizado </h1>
<p className='mt-3 text-xl md:text-2xl text-center text-stone-100 font-[lato]'>Domos con IA, motorizados y 360° de ángulo de cobertura.</p>

</div>


</div>
 

<div className="flex justify-center mt-5 bg-gradient-to-r from-stone-400 to-stone-100 w-full rounded-[5px]">
  
  <a href="https://guidoll.mercadoshops.com.ar/" target="_blank" className="flex items-center space-x-2">
    <h1 className="p-2 text-2xl font-[lato] text-blue-950 font-bold">Tienda virtual</h1>
    <img
      src="/shop.svg"
      alt="shop icon"
      width={30}
      height={10}
      className="h-10"
    />
  </a>
</div>

</div>

<div id='CONTENEDORCONTACTO' className='grid grid-rows-1 bg-gradient-to-t from-blue-950 to-blue-900 mt-2 p-4 md:'>

  
<h1 className='font-[lato] font-light  md:text-7xl text-5xl text-stone-200 mt-5 text-center font-[lato]'>Contáctenos</h1>

{/** 
<h2 className='font-[] font-light md:text-4xl text-2xl text-stone-200 mt-3 text-center'>Un asesor esta listo para atenderlo</h2>
*/}
<div className='grid grid-cols-3 p-2 gap-8 place-items-center mt-24 md:grid-cols-3 md:gap-0 md:p-0'>

<div id='ICONOWHATSAPPDELAMOR' className='grid grid-cols-1 gap-1 place-items-center md:mt-0'>

  <div className='bg-stone-200 rounded-[100px] w-[60px] h-[60px] md:w-[120px] md:h-[120px]'>
<a href='https://wa.me/+5491133324034' target='_blank'  >
<Image
          className="flex py-4 ml-4 md:w-[60px] md:py-8 md:ml-8"
          src="/whatsappmaximo.svg"
          alt="whatsapplogo"
          
          width={25}
          height={0}
          priority
        />
        </a>
 </div>      
<div className=''>
<a href='https://wa.me/+5491133324034' target='_blank'  >
    <h2 className='text-xl font-light text-stone-100 md:p-4 md:text-3xl font-[lato]'>Whatsapp</h2>
   

  </a> 

  </div>

  </div>


<div id='ICONOMAILDELAMOR' className='grid grid-cols-1 gap-1 place-items-center md:mt-0 '>

<div className='bg-stone-200 rounded-[100px] w-[60px] h-[60px] md:w-[120px] md:h-[120px]'>
<a href='mailto:cmm@alarmascmm.com'>
<Image
        className="flex py-4 ml-4 md:w-[60px] md:py-8 md:ml-8"
        src="/mailmaximo.svg"
        alt="maillogo"
        
        width={25}
        height={0}
        priority
      />
      </a>
</div>      
<div className=''>
<a href='mailto:cmm@alarmascmm.com'>
  <h2 className='text-xl font-light text-stone-100 px-4 md:p-4 md:text-3xl font-[lato] '>Mail</h2>
 

</a> 

</div>


</div>

<div id='ICONOTELDELAMOR' className='grid grid-cols-1 gap-1 place-items-center md:mt-0'>

  <div className='bg-stone-200 rounded-[100px] w-[60px] h-[60px] md:w-[120px] md:h-[120px]'>
  <a href='tel:+541133324034' >
<Image
          className="py-4 ml-4 md:w-[60px] md:py-8 md:ml-8"
          src="/telmaximo.svg"
          alt="whatsapplogo"
          
          width={27}
          height={0}
          priority
        />
        </a>
 </div>      
<div className=''>
<a href='tel:+541133324034' >
    <h2 className='text-l font-light text-stone-100 md:p-4 md:text-3xl font-[lato]'>Teléfono</h2>
   

  </a> 

  </div>

  </div>




</div>

<div className='grid grid-cols-2 mt-8'>
<div id='ICONOFACEBOOKDELAMOR' className='grid grid-cols-1 gap-1 place-items-center md:mt-0'>

<div className='bg-stone-200 rounded-[100px] w-[60px] h-[60px] md:w-[120px] md:h-[120px]'>
<a
        href="https://www.facebook.com/CMM.ALARMAS"
        target="_blank"
        className=""
      >

<Image
        className="flex py-4 ml-4 md:w-[60px] md:py-8 md:ml-8"
        src="/facebookmaximo.svg"
        alt="whatsapplogo"
        
        width={30}
        height={0}
        priority
      />
      </a>
</div>      
<div className=''>
<a
        href="https://www.facebook.com/CMM.ALARMAS"
        target="_blank"
        className=""
      >

  <h2 className='text-l font-light text-stone-100 md:p-4 md:text-3xl font-[lato]'>Facebook</h2>
 

</a> 

</div>

</div>

<div id='ICONOIGDELAMOR' className='grid grid-cols-1 gap-1 place-items-center  md:mt-0'>

<div className='bg-stone-200 rounded-[100px] w-[60px] h-[60px]  md:w-[120px] md:h-[120px]'>
<a
        href="https://www.instagram.com/alarmascmm/"
        target="_blank"
        className=""
      >

<Image
        className="flex py-4 ml-4 md:py-8 md:ml-8 md:w-[60px]"
        src="/igmaximo.svg"
        alt="whatsapplogo"
        
        width={30}
        height={0}
        priority
      />
      </a>
</div>      
<div className=''>
<a
        href="https://www.instagram.com/alarmascmm/"
        target="_blank"
        className=""
      >

  <h2 className='text-l font-light text-stone-100 md:p-4 md:text-3xl'>Instagram</h2>
 

</a> 

</div>

</div>
</div>

<div className="grid grid-cols-1 p-4 place-items-center mt-20">

<Image
          src="/reloj.svg"
          alt="reloj"
          
          width={74}
          height={0}
          priority
        />
        

<div className="text-2xl p-4 text-white text-center font-light font-[lato]">Horario de atención: Lunes a Viernes de 9:00 a 17:00</div>
  </div>

</div>

<div id='CONTENEDORIDENTIDAD' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900  mt-2 p-4'>

<h1 className='font-[lato] font-bold text-4xl text-stone-100'>¿Quienes somos? </h1>

<h2 className='font-[lato] font-bold text-xl text-stone-100 py-4 '>Mas de 12 años cuidandote</h2>
<p className='text-stone-200 text-xl font-light font-[lato]'> 


CMM se destaca como empresa líder en seguridad electrónica. Con más de una década de experiencia, lo que comenzó como un modesto servicio de seguridad para casas de fin de semana en San Miguel del Monte ha evolucionado y se ha adaptado al crecimiento y desarrollo de la región. Hoy, nuestra presencia se extiende atendiendo a una nueva gama de clientes que incluye residencias permanentes, comercios e industrias.

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
  <h1 className='text-center  mt-[90px] text-xl md:text-3xl md:mt-20 font-[lato]'> San Miguel del Monte - Cañuelas - Lobos</h1>
  <h2 className='text-center py-3 text-[15px] md:mt-5 font-[lato]'> Copyright 2022. Todos los derechos reservados. <a href='https://wa.me/+15109600432' target='_blank'><span className='text-left decoration-2'>Diseño y Desarrollo Dotty's.</span> </a></h2>

</footer>

    </main>
  )
}
