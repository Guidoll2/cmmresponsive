import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-blue-700 to-blue-950 overflow-hidden"
    >
      {/* Overlay for dim effect */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Decorative dots image - enlarged and centered */}
      <motion.div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 opacity-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/1.png"
          alt="Decorative dots"
          width={400}
          height={400}
          unoptimized
          className='translate-x-12 translate-y-3/4'
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 p-4 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Seguridad Electrónica
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-2xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Tu tranquilidad empieza aca
        </motion.p>

        <motion.a
          href="#contacto"
          className="inline-block mt-8 px-8 py-3 rounded-2xl bg-teal-400 hover:bg-teal-300 text-gray-900 font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Cotiza Ahora
        </motion.a>
      </div>
    </section>
  )
}
