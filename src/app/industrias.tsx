const Industrias = () => {

return (

    <div id='CONTENEDORINDUSTRIAS' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 to-blue-900 mt-2 p-4'>
<h1 className='font font-bold md:text-7xl text-5xl text-stone-200 mt-5 text-center font'>Industrias y comercios</h1>
<h2 className='font-[] md:text-4xl text-2xl text-stone-200 mt-4 text-center font font-light'>Controla y optimiza tus negocios</h2>



<div className='flex grid grid-cols-2 gap-4 md:grid-cols-4 opacity-80 h-96'>
<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/indusrty3.jpeg"
      alt="CMM Logo"
      width={1000}
      height={100}
      
    />

<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/hands.jpg"
      alt="control acceso industria"
      width={1000}
      height={100}
      
    />

    
<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/indusrty1.jpeg"
      alt="CMM Logo"
      width={1000}
      height={100}
      
    />



<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/indusrty2.jpeg"
      alt="CMM Logo"
      width={1000}
      height={100}
      
    />


</div>



<div className='p-4 grid grid-cols-1 gap-4 mt-8 place-items-center md:place-items-center  '>

 
<img
      className="rounded-xl opacity-90 mt-20 md:w-[180px] "
      src="/acceso.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      
    />   



<div className=''>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold font'>Control de acceso</h1>
<p className='mt-3 text-xl md:text-2xl text-center text-stone-100 font font-light'>Gestiona de manera electrónica el acceso a los distintos sectores de tu industria/comercio</p>
</div>

<div className='grid grid-cols-1 mt-5'>
<img
      className="rounded-xl opacity-90 mt-20 md:w-[180px] md:mt-20"
      src="/automatizar.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      
    />   
    
</div>

<div className='grid grid-cols-1'>
<h1 className='text-xl text-center text-stone-100 md:text-3xl font-bold font'>Mejora de procesos productivos </h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3 font font-light'>Recibi alertas del estado de tus equipos de producción instantáneamente</p>
</div>


<div className=''>
<img
      className="mt-20 ml-10 md:w-[180px] md:mt-20"
      src="/celu.svg"
      alt="CMM Logo"
      width={120}
      height={200}
      
    />   
</div>
<div className='grid grid-rows-1 grid-cols-1 md:mt-20'>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold font'>Seguimiento de empleados</h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3 font font-light'>Generá tareas para tus empleados que queden registradas en tu app de control</p>
</div>

<img
      className="rounded-xl opacity-90 mt-20 md:w-[180px] "
      src="/cctvs.svg"
      alt="CMM Logo"
      width={130}
      height={200}
      
    />   


<div className='mt-5 '>
<h1 className='text-2xl md:text-3xl text-center text-stone-100 md:text-2xl font-bold font'>CCTV Motorizado </h1>
<p className='mt-3 text-xl md:text-2xl text-center text-stone-100 font font-light'>Domos con IA, motorizados y 360° de ángulo de cobertura.</p>

</div>


</div>
 

<div className="flex justify-center mt-5 bg-gradient-to-r from-stone-400 to-stone-100 w-full rounded-[5px]">
  
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

export default Industrias;