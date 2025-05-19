'use client'
import Header from './header'
import Hero from './hero'
import Navbar from './Navbar'
import Section from './section'        // wrapper que aplica padding y fondo
import Alarmas from './alarma'
import Cctv from './cctv'
import Industrias from './industrias'
import Contacto from './contacto'
import Identidad from './identidad'
import Footer from './footer'
import FloatingCTA from './floatingCTA'// WhatsApp + ScrollArrow

export default function Home() {
  return (
    <>
      <Header/>
      <Navbar />
      <Hero>
        {/* Aquí tu título principal y botón CTA */}
      </Hero>

      <FloatingCTA/>

      <Section bg="gray"  id="alarmas">
        <Alarmas/>
      </Section>

      <Section bg="gray" id="cctv" >
        <Cctv/>
      </Section>

      <Section bg="gray" id="industrias">
        <Industrias/>
      </Section>

      <Section bg="gray" id="contacto">
        <Contacto/>
      </Section>

      <Section bg="gray" id="quienes-somos">
        <Identidad/>
      </Section>

      <Footer/>
    </>
  )
}
