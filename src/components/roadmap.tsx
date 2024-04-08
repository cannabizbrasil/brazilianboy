import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function Roadmap() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-verde sm:text-4xl">A sua jornada é simples!</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Siga as etapas para poder adquirir seu medicamento.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-xl leading-7 text-white lg:max-w-lg border-t border-gray-300">              
              <h2 className="mt-16 text-4xl font-bold tracking-tight text-verde">1</h2>
              <p className="mt-6">
              Realize uma consulta com seu médico de confiança
              </p>
            </div>
            <div className="max-w-xl text-xl leading-7 text-white lg:max-w-lg border-b border-gray-600">              
              <h2 className="mt-16 text-4xl font-bold tracking-tight text-verde">2</h2>
              <p className="mt-6">
              Receba do seu médico as prescrições dos produtos ideias para o seu tratamento
              </p>
            </div>
            <div className="max-w-xl text-xl leading-7 text-white lg:max-w-lg border-b border-gray-600">              
              <h2 className="mt-16 text-4xl font-bold tracking-tight text-verde">3</h2>
              <p className="mt-6">
              Retire sua autorização da ANVISA (só após realizar a consulta e obter a sua prescrição)
              </p>
            </div>
            <div className="max-w-xl text-xl leading-7 text-white lg:max-w-lg border-b border-gray-600">              
              <h2 className="mt-16 text-4xl font-bold tracking-tight text-verde">4</h2>
              <p className="mt-6">
              Cadastro no Site da Loja Cannabis
              </p>
            </div>
            <div className="max-w-xl text-xl leading-7 text-white lg:max-w-lg border-b border-gray-600">              
              <h2 className="mt-16 text-4xl font-bold tracking-tight text-verde">5</h2>
              <p className="mt-6">
              Você está pronto para adquirir seus medicamentos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  