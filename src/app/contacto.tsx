const Contacto = () => {
    return (
        
        
<div id='CONTENEDORCONTACTO' className='grid grid-rows-1 bg-gradient-to-t from-blue-950 to-blue-900 mt-2 p-4 md:'>




<h1 className='font-light  md:text-7xl text-5xl text-stone-200 mt-5 text-center font'>Contáctenos</h1>

<div className="flex grid grid-cols-1">

<h1 className="text-2xl text-white text-center font-light p-4">Horario de atención: Lunes a Viernes de 9:00 a 17:00
</h1>
</div>


<div className='grid grid-cols-3 p-2 gap-8 place-items-center mt-10 md:grid-cols-3 md:gap-0 md:p-0'>

<div id='ICONOWHATSAPPDELAMOR' className='grid grid-cols-1 gap-1 place-items-center md:mt-0'>

  <div className='bg-stone-200 rounded-[100px] w-[60px] h-[60px] md:w-[120px] md:h-[120px]'>
<a href='https://wa.me/+5491133324034' target='_blank'  >
<img
          className="flex py-4 ml-4 md:w-[60px] md:py-8 md:ml-8"
          src="/whatsappmaximo.svg"
          alt="whatsapplogo"
          
          width={25}
          height={0}
          
        />
        </a>
 </div>      
<div className=''>
<a href='https://wa.me/+5491133324034' target='_blank'  >
    <h2 className='text-xl font-light text-stone-100 md:p-4 md:text-3xl font'>Whatsapp</h2>
   

  </a> 

  </div>

  </div>


<div id='ICONOMAILDELAMOR' className='grid grid-cols-1 gap-1 place-items-center md:mt-0 '>

<div className='bg-stone-200 rounded-[100px] w-[60px] h-[60px] md:w-[120px] md:h-[120px]'>
<a href='mailto:cmm@alarmascmm.com'>
<img
        className="flex py-4 ml-4 md:w-[60px] md:py-8 md:ml-8"
        src="/mailmaximo.svg"
        alt="maillogo"
        
        width={25}
        height={0}
        
      />
      </a>
</div>      
<div className=''>
<a href='mailto:cmm@alarmascmm.com'>
  <h2 className='text-xl font-light text-stone-100 px-4 md:p-4 md:text-3xl font '>Mail</h2>
 

</a> 

</div>


</div>

<div id='ICONOTELDELAMOR' className='grid grid-cols-1 gap-1 place-items-center md:mt-0'>

  <div className='bg-stone-200 rounded-[100px] w-[60px] h-[60px] md:w-[120px] md:h-[120px]'>
  <a href='tel:+541133324034' >
<img
          className="py-4 ml-4 md:w-[60px] md:py-8 md:ml-8"
          src="/telmaximo.svg"
          alt="whatsapplogo"
          
          width={27}
          height={0}
          
        />
        </a>
 </div>      
<div className=''>
<a href='tel:+541133324034' >
    <h2 className='text-l font-light text-stone-100 md:p-4 md:text-3xl font'>Teléfono</h2>
   

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

<img
        className="flex py-4 ml-4 md:w-[60px] md:py-8 md:ml-8"
        src="/facebookmaximo.svg"
        alt="whatsapplogo"
        
        width={30}
        height={0}
        
      />
      </a>
</div>      
<div className=''>
<a
        href="https://www.facebook.com/CMM.ALARMAS"
        target="_blank"
        className=""
      >

  <h2 className='text-l font-light text-stone-100 md:p-4 md:text-3xl font'>Facebook</h2>
 

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

<img
        className="flex py-4 ml-4 md:py-8 md:ml-8 md:w-[60px]"
        src="/igmaximo.svg"
        alt="whatsapplogo"
        
        width={30}
        height={0}
        
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


</div>
    )
}

export default Contacto;