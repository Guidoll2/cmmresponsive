
      
const Alarmas = () => {

    

    return (

        <div id='CONTENEDORALARMA' className='border-t-[3px] border-blue-700 border--[3px] border-blue-700 bg-gradient-to-l from-blue-950 to-blue-900 p-8 mt-20 shadow-2xl md:mt-[1000px]'>
   
<h1 id='' className='font font-bold  text-center text-slate-200/80 py-2 md:text-7xl text-5xl '>Alarmas monitoreadas</h1>
<h2 className='py-4 font  text-slate-200 text-center md:text-4xl text-2xl font-light'>Hogar seguro, diseño sin cables</h2>

<div className='flex grid grid-cols-2 md:grid-cols-1 gap-4 mt-4 md:w-full md:grid-cols-4 max-w-7xl opacity-70'>

<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/sensorpuerta.jpg"
      alt="CMM Logo"
      width={1000}
      height={100}
      
    />

<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/centralv.jpg"
      alt="CMM Logo"
      width={1000}
      height={100}
      
    />

<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/smarts.jpg"
      alt="CMM Logo"
      width={1000}
      height={100}
      
    />

<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/control.jpg"
      alt="control alarma"
      width={1000}
      height={100}
      
    />   

</div>
<p className='font flex justify-center text-slate-200 py-2 md:text-4xl font-light md:p-4 text-l'>Cuidamos tu seguridad y la estética de tu casa.</p>

<div className="flex grid grid-cols-1 text-center p-5 md:mt-20">
  <h1 className="text-4xl md:text-7xl">Nuestro servicio:</h1>
  <h1 className="text-xl p-4 md:text-3xl">¿Como funciona?</h1>
</div>
{/**
<div id='COMOFUNCIONA' className=''>
<ComoFunciona></ComoFunciona>
</div> */}

<div className='p-4 grid grid-cols-1 gap-4 mt-10 place-items-center md:place-items-center '>

 
<img
      className="rounded-xl opacity-90 md:w-[180px] "
      src="/casaf.svg"
      alt="CMM Logo"
      width={100}
      height={200}
      
    />   


<div className='mt-5 '>
<h1 className='text-2xl md:text-3xl text-center text-slate-200 md:text-2xl font font-bold'>Monitoreo las 24 horas</h1>
<p className='mt-3 text-xl md:text-2xl text-center font text-slate-200 font-light'>Ante un evento de tu alarma nuestra central de servicio estará lista para operar.</p>
</div>

 
<div className='grid grid-cols-1 mt-8'>
<img
      className="rounded-xl opacity-90 mt-8 ml-10 md:w-[180px] md:mt-20"
      src="/celu.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      
    />  
    
</div>

<div className='grid grid-rows-1 grid-cols-1 '>
<h1 className='text-2xl text-center mt-5 text-slate-200 md:text-3xl font font-bold'>Notificaciones al instante </h1>
<p className='text-stone-200 text-xl md:text-2xl mt-3 font text-center font-light'>En el momento que se genera un evento una notificación llega a tu celular. </p>
</div>


<img
      className="rounded-xl h-full mt-8 md:w-[180px] md:mt-20"
      src="/callcenter.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      
    />   

<div className='grid grid-rows-1 grid-cols-1 '>
<h1 className='text-2xl text-center mt-5 text-slate-200 md:text-3xl font font-bold'>Asistencia telefónica </h1>
<p className='text-stone-200 text-xl md:text-2xl text-center font mt-3 font-light'>Simultáneamente nuestros operadores se ponen en contacto para brindarte asistencia de manera profesional.</p>
</div>

<img
      className="rounded-xl h-full mt-8 md:w-[180px] md:mt-20"
      src="/policia.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      
    />   

<h1 className='text-2xl text-slate-200 mt-5 md:text-3xl font font-bold'>Llamada al 911</h1>
<p className='text-stone-200 text-xl md:text-2xl text-center font mt-3 font-light'>De ser necesario se comunica a las fuerzas de seguridad y/o emergencias para que acudan al domicilio.</p>

</div>

<div className="flex justify-center mt-5 bg-gradient-to-r from-stone-400 to-slate-200 w-full rounded-[5px]">
  
  <a href="https://guidoll.mercadoshops.com.ar/" target="_blank" className="flex items-center space-x-2">
    <h1 className="p-2 text-2xl font text-blue-950 font-bold">Tienda virtual</h1>
   
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

        )
    }
    

export default Alarmas;