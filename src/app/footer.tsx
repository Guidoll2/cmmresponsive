import { Clock, Link, Mail, MapPin, Phone } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 text-blue-900 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {/* Ubicación */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <MapPin size={24} className="text-teal-600" />
          <h4 className="font-semibold">Nuestras Sedes</h4>
          <p className="text-sm">San Miguel del Monte</p>
          <p className="text-sm">Cañuelas</p>
          <p className="text-sm">Lobos</p>
        </div>

        {/* Horarios */}
        <div className="flex flex-col items-center space-y-2">
          <Clock size={24} className="text-teal-600" />
          <h4 className="font-semibold">Horario de Atención</h4>
          <p className="text-sm">Lunes a Viernes: 9:00 - 17:00</p>
          <p className="text-sm">Sábado y Domingo: Emergencias</p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <h4 className="font-semibold">Contáctanos</h4>
          <div className="flex items-center space-x-2">
            <Phone size={20} />
            <Link href="tel:+541133324034" className="text-sm hover:text-teal-600">
              +54 9 11 3332-4034
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={20} />
            <Link href="mailto:cmm@alarmascmm.com" className="text-sm hover:text-teal-600">
              cmm@alarmascmm.com
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} CMM. Todos los derechos reservados.{' '}
        <Link
          href="https://wa.me/+15109600432"
          target="_blank"
          className="underline hover:text-blue-700"
        >
          Diseño y Desarrollo Dots.com
        </Link>
      </div>
    </footer>
  )
}