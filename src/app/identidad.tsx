import { motion } from 'framer-motion'
import { UserCircle2, Award, ShieldCheck } from 'lucide-react'

export default function Identidad() {
  return (
    <section
      id="identidad"
      className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-l from-blue-950 to-blue-900 text-gray-100 rounded-2xl"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <UserCircle2 size={64} className="text-teal-400 mb-4" />
          <h2 className="text-4xl md:text-6xl font-extrabold">¿Quiénes Somos?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col items-center bg-white bg-opacity-10 rounded-2xl p-6 shadow-md hover:bg-opacity-20 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ShieldCheck size={48} className="text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold">Protección Confiable</h3>
            <p className="mt-2 text-gray-300 font-light">
              Garantizamos tu seguridad con sistemas avanzados y monitoreo permanente.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white bg-opacity-10 rounded-2xl p-6 shadow-md hover:bg-opacity-20 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Award size={48} className="text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold">12+ Años de Experiencia</h3>
            <p className="mt-2 text-gray-300 font-light">
              Más de una década innovando en seguridad electrónica en la región.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-white bg-opacity-10 rounded-2xl p-6 shadow-md hover:bg-opacity-20 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <UserCircle2 size={48} className="text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold">Atención Personalizada</h3>
            <p className="mt-2 text-gray-300 font-light">
              Un equipo dedicado brinda soluciones a tu medida y soporte continuo.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}