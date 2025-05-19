import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Alarmas() {
  const features = [
    { src: '/sensorpuerta.jpg', alt: 'Sensor de Puerta', label: 'Sensor de Puerta' },
    { src: '/centralv.jpg', alt: 'Central de Monitoreo', label: 'Central de Monitoreo' },
    { src: '/smarts.jpg', alt: 'Smart Hub', label: 'Smart Hub' },
    { src: '/control.jpg', alt: 'Control Remoto', label: 'Control Remoto' }
  ]

  const steps = [
    {
      icon: '/casaf.svg',
      title: 'Monitoreo 24/7',
      description: 'Nuestra central opera sin interrupciones para proteger tu hogar.'
    },
    {
      icon: '/celu.svg',
      title: 'Notificaciones Instantáneas',
      description: 'Recibe alertas inmediatas en tu celular al menor evento.'
    },
    {
      icon: '/callcenter.svg',
      title: 'Asistencia Telefónica',
      description: 'Operadores especializados listos para asistirte al instante.'
    },
    {
      icon: '/policia.svg',
      title: 'Llamada a Emergencias',
      description: 'Coordinamos con las fuerzas de seguridad si es necesario.'
    }
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
        <h2 className="text-4xl md:text-6xl font-extrabold">Alarmas Monitoreadas</h2>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">Hogar seguro, instalación sin cables</p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            className="bg-white bg-opacity-10 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
          >
            <Image
              src={f.src}
              alt={f.alt}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-xl">{f.label}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-bold">¿Cómo Funciona?</h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center p-4 bg-white bg-opacity-10 rounded-2xl shadow-md hover:bg-opacity-20 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
          >
            <Image src={step.icon} alt={step.title} width={80} height={80} />
            <h4 className="mt-4 font-semibold text-xl">{step.title}</h4>
            <p className="mt-2 text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
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
