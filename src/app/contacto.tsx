import { motion } from 'framer-motion'
import { Mail, Phone, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'


export default function Contacto() {
  const methods = [
    { icon: <FaWhatsapp size={48} className="text-teal-400" />, label: 'WhatsApp', href: 'https://wa.me/+5491133324034' },
    { icon: <Mail size={48} className="text-teal-400" />, label: 'Correo', href: 'mailto:cmm@alarmascmm.com' },
    { icon: <Phone size={48} className="text-teal-400" />, label: 'Teléfono', href: 'tel:+541133324034' },
    { icon: <Facebook size={48} className="text-teal-400" />, label: 'Facebook', href: 'https://www.facebook.com/CMM.ALARMAS', external: true },
    { icon: <Instagram size={48} className="text-teal-400" />, label: 'Instagram', href: 'https://www.instagram.com/alarmascmm/', external: true }
  ]

  return (
    <article className="text-gray-100">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold">Contáctenos</h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">Lunes a Viernes, 9:00 - 17:00</p>
      </motion.div>

      {/* Contact Methods */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {methods.map((m, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center bg-white bg-opacity-10 p-6 rounded-2xl shadow-md hover:bg-opacity-20 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
          >
            <Link
              href={m.href}
              target={m.external ? '_blank' : '_self'}
              className="flex items-center justify-center w-16 h-16 mb-4"
            >
              {m.icon}
            </Link>
            <Link
              href={m.href}
              target={m.external ? '_blank' : '_self'}
              className="font-medium text-lg hover:text-teal-300 transition"
            >
              {m.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </article>
  )
}
