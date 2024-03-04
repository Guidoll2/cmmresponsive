'use client'
import Header from './header';
import Image from 'next/image'
import Navbar from './Navbar';
import Alarmas from './alarma';
import Cctv from './cctv';
import Industrias from './industrias';
import Contacto from './contacto';
import Identidad from './identidad';
import Footer from './footer';
import Titulo from './titulo';


<link rel="icon" href="/logosinfondo.png" sizes="any" />

export default function Home() {
   return (
    
    <main className="block grid overflow-hidden bg-gradient-to-r from-blue-700 to-blue-950 md:grid md:grid-cols-1">
    
    <Header />
    
    <a className='' href='https://wa.me/+5491133324034' target='_blank'> 
    
    <Image
      className="fixed ml-5 opacity-90 z-[100] left-0 bottom-5 md:w-[80px] md:bottom-10"
      src="/whatsappv.svg"
      alt="CMM Logo"
      width={40}
      height={0}
      priority
    />
    
    </a>

<a className='' href='#NAVBAR'> <Image
      className="mr-5 opacity-80 invisible right-0 bottom-5 md:fixed md:visible md:w-[80px] md:bottom-10 z-[100]"
      src="/flecha.svg"
      alt="CMM Logo"
      width={60}
      height={0}
      priority
    /></a>


<div id='NAVBAR' className='z-[100]'><Navbar></Navbar></div>

<div className='flex mt-20'>
  <Titulo></Titulo>
</div>

<div>
  <Alarmas></Alarmas>
</div>

<div>
  <Cctv></Cctv>
</div>


<div>
  <Industrias></Industrias>
</div>

<div>
  <Contacto></Contacto>
</div>

<div>
  <Identidad></Identidad>
</div>


<div> 
  <Footer></Footer>
</div>


    </main>
  )
}
