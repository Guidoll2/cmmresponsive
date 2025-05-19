import Image from 'next/image'
import { motion } from 'framer-motion'
import { Building, Ear, Users, Camera } from 'lucide-react'

export default function Industrias() {
  const sectors = [
    { icon: <Building size={48} className="text-teal-400" />, title: 'Control de Acceso', desc: 'Gestiona electrónicamente accesos a distintas áreas de tu negocio.' },
    { icon: <Ear size={48} className="text-teal-400" />, title: 'Optimización de Procesos', desc: 'Recibe alertas del estado de tus equipos de producción.' },
    { icon: <Users size={48} className="text-teal-400" />, title: 'Seguimiento de Empleados', desc: 'Asigna y registra tareas de tu equipo en tiempo real.' },
    { icon: <Camera size={48} className="text-teal-400" />, title: 'CCTV Motorizado', desc: 'Domos IA 360° con seguimiento automático.' }
  ]

  const gallery = [
    '/indusrty3.jpeg',
    '/hands.jpg',
    '/indusrty1.jpeg',
    '/indusrty2.jpeg'
  ]

  return (
    <article className="text-gray-100">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold">Industrias y Comercios</h2>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">Controla y optimiza tus operaciones</p>
      </motion.div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {gallery.map((src, idx) => (
          <motion.div
            key={idx}
            className="bg-white bg-opacity-10 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
          >
            <img
              src={src}
              alt={`Imagen sector ${idx + 1}`}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Sectors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {sectors.map((s, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center p-6 bg-white bg-opacity-10 rounded-2xl shadow-md hover:bg-opacity-20 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
          >
            {s.icon}
            <h4 className="mt-4 font-semibold text-xl text-white">{s.title}</h4>
            <p className="mt-2 text-gray-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center"
      >
        <a
          href="https://guidoll.mercadoshops.com.ar/"
          target="_blank"
          className="inline-block px-6 py-3 bg-teal-400 hover:bg-teal-300 text-gray-900 font-medium rounded-full shadow-lg transition"
        >
          Visita Nuestra Tienda Virtual
        </a>
      </motion.div>
    </article>
  )
}
