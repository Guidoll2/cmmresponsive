import SectionHeader from "./gradienteletrasfooter";

const Footer = () => {

    return (
        
        
<footer className='flex grid grid-cols-1 bg-gradient-to-l from-stone-100 via-stone-400 to-stone-400 text-blue-950 mt-1'>

<div className="flex grid grid-cols-1 items-center inline-block align-top">


<div className=''>
<SectionHeader></SectionHeader>
</div>

<div>
  <h1 className='text-center text-xl md:text-3xl font'> San Miguel del Monte - Cañuelas - Lobos</h1>
  <h2 className='text-center py-3 text-[15px]  font'> Copyright 2022. Todos los derechos reservados. <a href='https://wa.me/+15109600432' target='_blank'><span className='text-left decoration-2'>Diseño y Desarrollo Dots.com </span> </a></h2>
</div>
</div>

</footer>

    )
}

export default Footer;