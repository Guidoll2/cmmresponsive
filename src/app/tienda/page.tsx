import { Button } from "@/components/ui/button"
import Navbarp from "../Navbarp"
import { CheckIcon } from "lucide-react"


export default function Home() {
    return (

<main id="tienda" className="flex grid grid-cols-1">

<div className="">
  <Navbarp></Navbarp>
</div>

{/**
<div className="flex grid grid-cols-1 bg-gradient-to-l from-blue-950 to-blue-600 max-w-64 rounded-[100px] hover:rounded-[0px] hover:w-96 p-10 text-black hover:text-gray-800">
<h1 className="">PROBANDO </h1>
</div> */}

<section className="min-h-screen w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col p-6 bg-gradient-to-r from-gray-200 to-blue-600 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-center">Monitoreo residencial</h3>
              <div className="mt-4 text-center text-gray-800 ">
                <span className="text-4xl font-bold">$9200</span>/ Mensual
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Monitoreo de residencias
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Acceso APP de control y seguridad
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Linea GPRS de respaldo incluída
                </li>
              </ul>
            </div>
            <div className="mt-6">
            <a href="https://wa.me/1133324034?text=Hola,%20quiero%20contratar%20el%20servicio" target='_blank'>
    
              <Button className="w-full">Contratar</Button></a>
            </div>
          </div>
          <div className="relative flex flex-col p-6 bg-gradient-to-r from-gray-200 to-blue-600 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
            <div className="px-3 py-1 text-sm text-gray-800 bg-gradient-to-r from-blue-950  to-gray-400 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">Monitoreo comercial</h3>
              <div className="mt-4 text-center text-gray-800 ">
                <span className="text-4xl font-bold">$11500</span>/ Mensual
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-2xs bg-green-500 rounded-full mr-2 p-1" />
                  Monitoreo de alarma en comercios
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  App de control de tareas y seguridad
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Linea GRPS de respaldo incluída
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-blue-950  to-gray-400">Contratar</Button>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-gradient-to-r from-gray-200 to-blue-600 shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-center">Enterprise</h3>
              <div className="mt-4 text-center text-gray-800 ">
                <span className="text-4xl font-bold">$99</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  4K Video Rendering
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Unlimited Cloud Storage
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Custom Video Templates
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Advanced Collaboration Tools
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-gray-800 text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Dedicated Support
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

</main>

    )
 }


  