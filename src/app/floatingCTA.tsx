import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FloatingCTA() {
  return (
    <>
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/+5491133324034"
        target="_blank"
        className="fixed left-5 bottom-5 md:left-10 md:bottom-10 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <motion.div
          className="w-16 h-16 md:w-20 md:h-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src="/whatsappv.svg"
            alt="WhatsApp"
            width={80}
            height={80}
            className="opacity-90"
          />
        </motion.div>
      </Link>

      {/* Scroll to Hero Arrow */}
      <Link
        href="#hero"
        className="fixed right-5 bottom-5 md:right-10 md:bottom-10 z-50"
        aria-label="Subir al inicio"
      >
        <motion.div
          className="w-16 h-16 md:w-20 md:h-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Image
            src="/flecha.svg"
            alt="Subir al inicio"
            width={80}
            height={80}
            className="opacity-80"
          />
        </motion.div>
      </Link>
    </>
  )
}
