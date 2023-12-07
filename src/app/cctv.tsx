

const Cctv = () => {

    return (
<div id='CONTENEDORCCTV' className='grid grid-rows-2 bg-gradient-to-l from-blue-950 to-blue-900 mt-2 p-4'>

<h1 className='font font-bold text-center md:text-7xl text-5xl text-stone-200 mt-6 font'>Cámaras de seguridad </h1>

<h2 className='font-[] text-center md:text-4xl text-2xl text-stone-200 mt-4 font font-light'>Tu propiedad en tu celular </h2>


<div className='flex grid grid-cols-2 gap-4 md:grid-cols-4 opacity-80 h-96'>
<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/cctvadobe.jpeg"
      alt="CMM Logo"
      width={1000}
      height={100}
      
    />

<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/cctv.jpg"
      alt="CMM Logo"
      width={1000}
      height={200}
      
    />

    
<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/CCTV1.jpg"
      alt="CMM Logo"
      width={1000}
      height={100}
      
    />



<img
      className="rounded-xl shadow-xl w-full h-full"
      src="/cctvphone.jpg"
      alt="CMM Logo"
      width={1000}
      height={100}
      
    />


</div>

<div className='p-4 grid grid-cols-1 gap-4 mt-24 place-items-center md:place-items-center '>

 
<img
      className="rounded-xl opacity-90 md:w-[180px] "
      src="/cctvhome1.svg"
      alt="CMM Logo"
      width={130}
      height={200}
      
    />   


<div className='mt-5 '>
<h1 className='text-2xl md:text-3xl text-center text-stone-100 md:text-2xl font-bold font'>Visualización en directo las 24 horas </h1>
<p className='mt-3 text-xl md:text-2xl text-center text-stone-100 font font-light'>Estés donde estés vas a poder ver tu propiedad.</p>

</div>

 
<div className='grid grid-cols-1 mt-20'>
<img
      className="rounded-xl opacity-90 mt-8 ml-8 md:w-[180px] md:mt-20"
      src="/celu.svg"
      alt="CMM Logo"
      width={140}
      height={200}
      
    />  
    
</div>

<div className='grid grid-rows-1 grid-cols-1'>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold font'>Notificaciones en tiempo real </h1>
<p className='text-stone-200 text-xl md:text-2xl mt-3 text-center font font-light'>Recibís notificaciones de tu sistema de video vigilancia de manera instantánea (Cortes de luz, internet, detección de movimiento entre otros).</p>
</div>


<img
      className="rounded-xl h-full mt-20 ml-2 md:w-[170px] md:mt-20"
      src="/almacenamiento.svg"
      alt="CMM Logo"
      width={110}
      height={200}
      
    />   

<div className='grid grid-rows-1 grid-cols-1'>
<h1 className='text-2xl text-center text-stone-100 md:text-3xl font-bold font'>Grabación continua </h1>
<p className='text-stone-200 text-xl md:text-2xl text-center mt-3 font font-light'>Accedé al video almacenado desde cualquier pc tablet o celular.</p>
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

export default Cctv; 