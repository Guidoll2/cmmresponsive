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
    
    <main className="block grid overflow-hidden bg-gradient-to-r from-stone-100 to-stone-400 md:grid md:grid-cols-1">
    <a className='' href='https://wa.me/+5491133324034' target='_blank'> <Image
      className="ml-5 opacity-80 z-10 fixed right-2 bottom-5 md:fixed md:w-[80px] md:bottom-10"
      src="/whatsappv.svg"
      alt="CMM Logo"
      width={40}
      height={0}
      priority
    /></a>
<div id='NAVBAR' className="grid grid-cols-3 w-screen opacity border-b-[2px] border-blue-700 shadow-2xl bg-gradient-to-r from-stone-100 to-stone-400 text-sm md:h-40 md:border-none">
  <div id='' className="flex items-center">
    <h1 className='text-5xl text-blue-950 mt-7 md:text-7xl md:relative md:left-64'><span className='hidden  md:visible'>Seguridad Electrónica en residencias, comercios e industrias.</span></h1>
 <div>
<SectionTitle></SectionTitle>

</div>
  </div>

  <div className='w-[200px]'>
  <Image
      className="ml-5  md:absolute md:w-[350px] z-10"
      src="/logosinfondo.png"
      alt="CMM Logo"
      width={1000}
      height={0}
      priority
    />
    </div>
  <div className='flex items-center z-20 justify-end mt-20 md:absolute md:right-4 md: md:z-20 '>
    <MenuDesplegable></MenuDesplegable>
  </div>
</div>
  
{/**FIN DEL DIV DEL NAVBAR */}

<div id='HERODEBAJOHEADER' className="grid grid-rows-2 text-center h-[60px] mt-4 w-screen bg-gradient-to-t from-blue-950 to-blue-900 shadow-2xl md:h-[180px] md:mt-10 md:absolute md:mt-44">

<div className='mt-2'>
<SectionTitle2></SectionTitle2>
</div>

{/** 
<h1 className='text-stone-100 text-xl text-center text-left md:text-5xl md:text-center ml-2 md:mt-8'>La tranquilidad de tener el control...</h1>
  */}
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

<div id='CONTENEDORALARMA' className='grid grid-rows-1 bg-gradient-to-l from-blue-950 to-blue-900 p-4 mt-4 shadow-2xl md:mt-60'>
   
<h1 className='font-[] font-bold text-5xl text-center text-stone-100 py-2 md:text-7xl '>Alarmas inalámbricas monitoreadas</h1>
<h2 className='py-4 text-2xl text-stone-100 text-center md:text-4xl'>Hogar seguro, diseño sin cables</h2>

<div className='flex grid grid-cols-2 gap-2 mt-4 md:w-full md:grid-cols-4 md:gap-4 md:ml-10'>
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
      height={200}
      priority
    />   

</div>

<h1 id='DETAILALARM'className='text-stone-200 text-4xl text-center mt-20 md:text-6xl'>¿Como funciona?</h1>

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
<h1 className='text-2xl text-center text-stone-100 md:text-2xl'>Monitoreo las 24 horas</h1>
<p className='mt-3 text-xl text-center text-stone-100'>La alarma emite una señal que instantáneamente llega a nuestros servidores.</p>
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
<h1 className='text-2xl text-center mt-5 text-stone-100 md:text-2xl '>Notificaciones al instante </h1>
<p className='text-stone-200 text-xl mt-3 text-center'>En el instante que la alarma suena una notificación se genera en tu celular. </p>
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
<h1 className='text-2xl text-center mt-5 text-stone-100 md:text-2xl '>Asistencia telefónica </h1>
<p className='text-stone-200 text-xl text-center mt-3'>Nuestros operadores inician el protocolo de llamadas.</p>
</div>

<Image
      className="rounded-xl h-full mt-8 md:w-[180px] md:mt-20"
      src="/policia.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      priority
    />   

<h1 className='text-2xl text-left text-stone-100 mt-5 md:text-2xl md:mt-20'>Llamada al 911</h1>
<p className='text-stone-200 text-xl text-center mt-3'>Se comunica a las fuerzas de seguridad y/o emergencias para que acudan al domicilio.</p>

</div>


 {/**<p className=' p-4 text-stone-200 mt-8 text-xl md:'> Instalar un equipo de alarmas es el primer paso para salvaguardar lo que más te
          importa. CMM te ofrece una avanzada alarma con detección anticipada para localizar intentos de robo antes del ingreso. Nuestra pronta reacción disuade a los ladrones y activa el protocolo de seguridad instantáneamente.</p>
 */}


 
          <a href="https://guidoll.mercadoshops.com.ar/" target="_blank"> 
          
          <button
        className="bg-gradient-to-r  mt-8 from-stone-100 to-stone-400 rounded-xl mt-5 text-2xl w-full h-[60px]">COTIZA TU EQUIPO ACÁ</button></a>
         

</div>

<div id='CONTENEDORCCTV' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 mt-2 p-4 '>

<h1 className='font-[] font-bold text-center text-4xl text-stone-200 mt-6'>Cámaras de seguridad </h1>

<h2 className='font-[] text-center text-2xl text-stone-200 mt-4'>Tu propiedad en tu celular </h2>


<div className='flex grid grid-cols-2 gap-4 md:grid-cols-4'>
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

{/** 
<p className='font-[] text-stone-200 text-xl mt-8 p-4'> Un sistema de cámaras es un complemento perfecto para nuestro servicio de alarma
          monitoreada. Juntos, forman un escudo de protección integral, brindándote una mayor
          seguridad y confianza en la protección de tus seres queridos y tus bienes más preciados. Accede a grabaciones para revisar eventos pasados. No importa si estás de
          vacaciones, en el trabajo o simplemente fuera de casa, siempre vas a estar al tanto de
          lo que sucede en tu propiedad.</p>*/}

<h1 id='DETAILALARM'className='text-blue-950 bg-gradient-to-r from-stone-200 to-stone-500 w-full rounded-2xl text-4xl text-center mt-20 md:text-6xl'>¿Como funciona?</h1>



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
<h1 className='text-2xl text-center text-stone-100 md:text-2xl'>Notificaciones en tiempo real</h1>
<p className='mt-3 text-l text-center text-stone-100'>Recibi y gestiona notifiaciones de tu sistema de video vigilancia de manera instantanea.</p>
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
<h1 className='text-xl text-center mt-5 text-stone-100 md:text-2xl '>Visualizacion en directo las 24 horas </h1>
<p className='text-stone-200 text-l mt-3 text-center'>Estes donde estes vas a poder ver tu propiedad, dandote el control de cada situacion.</p>
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
<h1 className='text-xl text-center mt-5 text-stone-100 md:text-2xl '>Grabación continua </h1>
<p className='text-stone-200 text-l text-center mt-3'>Accedé al video almacenado desde cualquier pc tablet o celular.</p>
</div>
</div>
 
 {/**<p className=' p-4 text-stone-200 mt-8 text-xl md:'> Instalar un equipo de alarmas es el primer paso para salvaguardar lo que más te
          importa. CMM te ofrece una avanzada alarma con detección anticipada para localizar intentos de robo antes del ingreso. Nuestra pronta reacción disuade a los ladrones y activa el protocolo de seguridad instantáneamente.</p>
 */}


 
          <a href="https://guidoll.mercadoshops.com.ar/" target="_blank"> 
          
          <button
        className="bg-gradient-to-r  mt-8 from-stone-100 to-stone-400 rounded-xl mt-5 text-2xl w-full h-[60px]">COTIZA TU EQUIPO ACÁ</button></a>
         

</div>



<div id='CONTENEDORINDUSTRIAS' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 to-blue-900 mt-2 p-4'>
<h1 className='font-[] font-bold text-4xl text-stone-200 mt-5 text-center'>Industrias y comercios</h1>
<h2 className='font-[] text-2xl text-stone-200 mt-4 text-center'>Controla y optimiza tus negocios</h2>

{/** 
<p className='font-[] text-stone-200 text-xl p-4'>CMM se enorgullece en ofrecer una completa variedad de servicios especializados para comercios e industrias.
 Visualización de zonas de trabajo, control de acceso y/o procesos productivos. Alertas por corte de corriente electrica y mucho más. <span className='text-center'>Contáctenos y optimice su negocio.</span>
  </p>
  */}


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
<h1 className='text-2xl text-center text-stone-100 md:text-2xl'>Control de acceso</h1>
<p className='mt-3 text-l text-center text-stone-100'>Gestiona de manera electrónica el acceso a los distintos sectores de tu industria/comercio</p>
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
<h1 className='text-xl text-center text-stone-100 md:text-2xl'>Mejora de procesos productivos </h1>
<p className='text-stone-200 text-l text-center mt-3'>Recibi alertas del estado de tus equipos de producción instantáneamente</p>
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
<h1 className='text-2xl text-center text-stone-100 md:text-2xl '>Seguimiento de empleados</h1>
<p className='text-stone-200 text-l text-center mt-3'>Generá tareas para tus empleados que queden registradas en tu app de control</p>
</div>
</div>
 

  <div className='mt-20'>
  <a href="https://guidoll.mercadoshops.com.ar/" target="_blank"> 
          <button className=' bg-gradient-to-r from-stone-100 to-stone-400 rounded-xl mt-5 text-2xl  w-full  h-[60px]'>COTIZA TU EQUIPO ACÁ</button></a>
          </div>

</div>

<div id='CONTENEDORCONTACTO' className='grid grid-rows-2 bg-gradient-to-t from-blue-950 to-blue-900 mt-2 p-4 md:'>

  
<h1 className='font-[] font-bold text-4xl text-stone-200 mt-5 text-center'>Contáctenos</h1>
<h2 className='font-[] font-light text-2xl text-stone-200 mt-3 text-center'>Un asesor esta listo para atenderlo</h2>

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

{/** 
 * <div id='CONTENEDORALARMAMD' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 p-4 mt-4 shadow-2xl hidden md:block md:mt-60 md:grid md:flex md:justi'>
   
<h1 className='font-[] font-bold text-4xl text-stone-100 md:text-center md:mt-10 md:text-6xl'>Alarmas Monitoreadas Inalámbricas</h1>
<h2 className='font-[] font-bold text-2xl text-stone-100 py-4 md:text-center md:text-3xl'>Hogar seguro, diseño sin cables</h2>

<div className='flex grid grid-cols-4 gap-4 p-2 ml-20'>
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
      height={200}
      priority
    />   

</div>

<p className='mt-20 text-stone-200 text-xl '> Instalar un equipo de alarmas es el primer paso para salvaguardar lo que más te
          importa. CMM te ofrece una avanzada alarma con detección anticipada para localizar intentos de robo antes del ingreso. Nuestra pronta reacción disuade a los ladrones y activa el protocolo de seguridad instantáneamente.</p>


          <a href="https://guidoll.mercadoshops.com.ar/" target="_blank"> 
          <button className='bg-gradient-to-r from-stone-100 to-stone-400 rounded-xl mt-5 text-2xl  w-full  h-[60px]'>Conoce más</button></a>
             
</div>*/}


{/**

<div id='DETALLEALARMA' className='grid grid-rows-1 bg-gradient-to-l from-blue-950 to-blue-900 p-4 mt-4 shadow-2xl md:grid-cols-3 md:hidden '>
   
<h1 className='font-[] font-bold text-5xl text-center text-stone-100 py-2 '>Alarmas inalámbricas monitoreadas</h1>
<h2 className='py-4 text-2xl text-stone-100 text-center'>Hogar seguro, diseño sin cables</h2>

<div className='flex grid grid-cols-2 gap-2 mt-4'>
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
      height={200}
      priority
    />   

</div>

 
<p className=' p-4 text-stone-200 mt-8 text-xl md:'> Instalar un equipo de alarmas es el primer paso para salvaguardar lo que más te
          importa. CMM te ofrece una avanzada alarma con detección anticipada para localizar intentos de robo antes del ingreso. Nuestra pronta reacción disuade a los ladrones y activa el protocolo de seguridad instantáneamente.</p>


 
          <a href="https://guidoll.mercadoshops.com.ar/" target="_blank"> 
          
          <button
        className="bg-gradient-to-r from-stone-100 to-stone-400 rounded-xl mt-5 text-2xl w-full h-[60px]">Conoce más</button></a>
         
</div>
 */}


<div id='CONTENEDORIDENTIDAD' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900  mt-2 p-4'>

<h1 className='font-[] font-bold text-4xl text-stone-100 z-20'>¿Quienes somos? </h1>

<h2 className='font-[] font-bold text-xl text-stone-100 py-4 '>Mas de 12 años cuidandote</h2>
<p className='font-[] text-stone-200 text-xl font-light'> 

CMM se destaca como una empresa líder en el campo de la seguridad electrónica, con más de una década de experiencia en el sector. Nuestro enfoque se ha centrado en brindar servicios de alta calidad en las localidades de San Miguel del Monte y Cañuelas, atendiendo a una diversa gama de clientes.
Lo que comenzó como un modesto servicio de seguridad para casas de fin de semana en San Miguel del Monte ha evolucionado y se ha adaptado al crecimiento y desarrollo de la región. Hoy, nuestra presencia se extiende atendiendo a una diversa gama de clientes que incluye casas de fin de semana, residencias permanentes, comercios e industrias.
Al confiar en CMM para sus proyectos de seguridad electrónica, puede estar seguro de que recibirá el apoyo de una empresa sólida y comprometida con su protección. Nuestra reputación y trayectoria en el campo de la seguridad en la región nos avalan como un referente confiable y efectivo.

En resumen, CMM es mucho más que una empresa de seguridad electrónica. Somos un socio estratégico en la protección de su entorno y bienestar. Confíe en nosotros y experimente la tranquilidad de contar con un equipo profesional, tecnológicamente avanzado y dedicado a salvaguardar lo que más le importa.
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
<SectionTitle></SectionTitle>
</div>
  <h1 className='text-center  mt-[90px] text-xl md:text-3xl md:mt-20'> San Miguel del Monte - Cañuelas - Lobos</h1>
  <h2 className='text-center py-3 text-[15px] md:mt-5'> Copyright 2022. Todos los derechos reservados. <span className='text-left'>Diseño y Desarrollo Guido Llaurado.</span> </h2>

</footer>

    </main>
  )
}
