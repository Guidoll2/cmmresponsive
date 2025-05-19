import { ReactNode } from "react"

// Section.tsx
interface SectionProps {
  id?: string
  bg?: 'white' | 'gray' | 'dark'
  children: ReactNode
}

export default function Section({ id, bg = 'white', children }: SectionProps) {
  let bgClass = bg === 'gray' ? 'bg-gray-600'
              : bg === 'dark' ? 'bg-transparent'    // deja que tu componente interno ponga su propio gradiente
              : 'bg-white'

  return (
    <section id={id} className={`${bgClass} py-20 px-4 md:px-8 lg:px-16`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
