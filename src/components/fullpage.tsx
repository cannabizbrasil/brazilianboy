

import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

import { ButtonGradient, ButtonVerde, ButtonBranco } from './button'
import HubspotBboy from './hubspotform'
import Faq from './faq'

const steps = [
  { id: '01', name: 'Consulta', href: '#iniciar', description: 'Realize uma consulta com seu médico de confiança' },
  { id: '02', name: 'Receita', href: '#iniciar', description: 'Receba do seu médico as prescrições dos produtos ideias para o seu tratamento' },
  { id: '03', name: 'Documentação', href: '#iniciar', description: 'Com a receita em mãos, Retire sua autorização da ANVISA ' },
  { id: '04', name: 'Comprar', href: 'https://lojacannabis.com/collections/brazilian-boy', description: 'Faça o Cadastro no Site da Loja Cannabis' },
]



const products = [
  {
    id: 1,
    product: 'Diamond de THCa',
    href: '#',
    category: 'Extração Full Spectrum',
    img:
      '/diamond-thca.jpg',
    alt: 'Diamond de THCa Full Spectrum',
    description: 'Os Diamonds do Brazilian Boy são verdadeiras jóias da cannabis. Com sua pureza e potência incomparáveis, esses cristais de THC vão te surpreender com sua intensidade e claridade. Eles são derivados da nossa flor premium de alto teor de THCa e contém um grama inteira de THCa concentrado, além de 0,3 gramas de molho de resina viva, terpenos e outros canabinóides menores para um perfil forte e limpo, ideal para o dabbing de próximo nível.',
  },

  {
    id: 2,
    product: 'Bubble Hash',
    href: '#',
    category: 'Hashish Full Spectrum',
    img:
      '/bubble-hash.jpg',
    alt: 'Bubble Hash Full Spectrum',
    description: 'Explore o mundo dos concentrados de cannabis com nosso Bubble Hash de THCa. É uma representação pura e potente da essência da planta. Nossa collab com o Brazilian Boy apresenta duas cepas excepcionais e é destinada àqueles que valorizam uma abordagem natural e sem solventes para sabores e sensações intensas.',
  },
  {
    id: 3,
    product: 'Live Rosin',
    href: '#',
    category: 'Rosin Full Spectrum',
    img:
      '/live-rosin.jpg',
    alt: 'Live Rosin Full Spectrum',
    description: 'Mergulhe no mundo luxuoso dos concentrados de cannabis com nossa coleção Premium de Live Rosin de THCa junto ao Brazilian Boy, apresentando oito cepas distintas e potentes. Cada Rosin cremoso incorpora a pura essência da cannabis, oferecendo uma sinfonia de sabores e efeitos ricos. Escolhido à mão para conhecedores como você, essa coleção abre as portas para experiências sensoriais incomparáveis.',
  },
]






export default function FullPage() {
  return (
    <div className="bg-escuro">
      <main>

        {/* Hero section */}
        <div className="relative isolate overflow-hidden">

          <div
            className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#7cad24] to-[#9089fc] opacity-20"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-24 lg:flex lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-2xl lg:pt-8">

              <div className="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold leading-6 text-purple-500 ring-1 ring-inset ring-gray-500/20">
                    Produto vendido somente com prescição médica
                  </span>

                </a>
              </div>
              <h1 className="mt-10 text-5xl font-black tracking-tight text-white sm:text-8xl">
                BRAZILIAN BOY <span className="text-purple-500 font-light italic">VS</span> LOJA CANNABIS
              </h1>
              <p className="mt-6 text-3xl leading-8 tracking-widest text-verde">
                Lifestyle Brasileiro, Sabores gringos
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <ButtonVerde href="#iniciar" textobotao='Inicie sua Jornada' target='' />
                <Link href="#jornada" className="text-sm font-semibold leading-6 text-white">
                  Etapas <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto flex max-w-2xl lg:max-w-none lg:flex-none ">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <Image
                  src="/mantwo.png"
                  alt="Brazilian Boy"
                  width={700}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>



        {/* Logo Brand */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl  sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <Image
              className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
              src="/locannabis.png"
              alt="Loja Cannabis"
              width={158}
              height={48}
            />
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/bboy.png"
              alt="Brazilian Boy"
              width={258}
              height={75}
            />

          </div>
        </div>



        {/* Conteudo */}
        <div className="relative isolate py-24 sm:py-48">
          <div
            className="absolute -top-80 right-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:right-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#7c3aed] to-[#c026d3] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-4">
                <div className="relative overflow-hidden rounded-3xl bg-gray-900 mt-16 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                    src="/brazilian-boy.jpg"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-verde mix-blend-screen" />
                  <div
                    className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                    aria-hidden="true"
                  >
                    <div
                      className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#7c3aed] opacity-40"
                      style={{
                        clipPath:
                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                      }}
                    />
                  </div>
                  <figure className="relative isolate">
                    <svg
                      viewBox="0 0 162 128"
                      fill="none"
                      aria-hidden="true"
                      className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                    >
                      <path
                        id="0ef284b8-28c2-426e-9442-8655d393522e"
                        d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      />
                      <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                    </svg>

                    <blockquote className="mt-6 text-xl font-semibold italic leading-8 text-purple-700">
                      <p>
                        “É simplesmente Excepcional, a paixão pela cannabis encontra a vibração brasileira em cada produto da nossa colaboração com a Loja Cannabis.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                      <strong className="font-semibold text-black">Brazilian Boy</strong>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div>
                <div className="text-base leading-7 lg:max-w-lg">

                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    Prepare-se para uma experiência única, onde o <span className="text-purple-500">gingado brasileiro</span> se encontra com a <span className="text-verde">excelência da cannabis.</span>
                  </h1>
                  <div className="max-w-xl text-gray-300 text-xl">
                    <p className="mt-6">
                      Apresentamos a <strong>collab entre Loja Cannabis e Brazilian Boy</strong>, uma linha de extrações que captura o verdadeiro ritmo do Brasil, com os sabores gringos.
                    </p>
                    <p className="mt-8">
                      Nosso processo começa com o cuidado meticuloso desde o <strong>cultivo das plantas até a seleção das melhores variedades</strong>, garantindo uma qualidade excepcional em cada extração.
                    </p>
                    <p className="mt-8">
                      Explore nossa linha de products e mergulhe na autenticidade, <strong>sabor e energia únicos</strong> do Brazilian Boy.
                    </p>
                    <p className="mt-8 font-bold">
                      Junte-se a nós nesta jornada sensorial, onde cada puff é uma dança de sabores e aromas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>






        {/* products section */}
        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-16 lg:pb-28 lg:px-8 lg:pt-24" id="produtos">
          <div className="relative mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-verde sm:text-5xl">Produtos</h2>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-300 sm:mt-4">
                Esses produtos são de uso exclusivo medicinal, você precisa se consultar com um médico prescritor!
              </p>
            </div>
            <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
              {products.map((product) => (
                <div key={product.product} className="transition ease-in-out flex flex-col overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-700 shadow-green-950 hover:scale-105 hover:shadow-purple-800 duration-1000">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-86 w-full object-cover"
                      src={product.img}
                      alt=""
                      width={512}
                      height={512}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between px-12 py-6">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-purple-500">
                        {product.category}
                      </p>
                      <div className="mt-2 block">

                        <Disclosure as="div" >
                          {({ open }) => (
                            <>
                              <dt>
                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                  <span className="text-2xl font-bold text-white">{product.product}</span>
                                  <span className="ml-6 flex text-white h-7 items-center ">
                                    {open ? (
                                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    ) : (
                                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </dt>
                              <Disclosure.Panel as="dd" className="mt-2 pr-12 ">
                                <p className="mt-3 text-base text-gray-300">{product.description}</p>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>

                      </div>
                    </div>
                    <div className="mt-6 flex items-center">
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 flex items-center justify-center">
              <ButtonVerde href="#iniciar" textobotao='Inicie sua Jornada' target='' />
            </div>
          </div>
        </div >





        {/* Steps section */}
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-16 lg:pb-28 lg:px-8 lg:pt-32" id="jornada">
          <div className="mx-auto max-w-2xl text-center">

            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">A sua jornada é simples</h2>
            <p className="mt-6 text-lg leading-8 text-verde pb-12">
              Para adquirir seus medicamentos você deve comprir algumas etapas.
            </p>
          </div>
          <nav aria-label="Progress">
            <ol role="list" className="divide-y divide-gray-300 rounded-2xl border border-gray-700 md:flex md:divide-y-0">
              {steps.map((step, stepIdx) => (
                <li key={step.name} className="relative py-4 md:flex md:flex-1 hover:bg-purple-950">
                  <div>
                    <Link href={step.href} aria-current="step">
                      <div className="flex items-center pb-4 px-6 text-sm font-medium " >
                        <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-purple-500">
                          <span className="text-purple-500 text-2xl">{step.id}</span>
                        </span>
                        <span className="ml-4 text-2xl font-bold text-white">{step.name}</span>
                      </div>
                      <div className="px-6 text-lg text-gray-300">{step.description}</div>

                    </Link>
                    {stepIdx !== steps.length - 1 ? (
                      <>
                        {/* Arrow separator for lg screens and up */}
                        <div className="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                          <svg
                            className="h-full w-full text-purple-500"
                            viewBox="0 0 22 80"
                            fill="none"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M0 -2L20 40L0 82"
                              vectorEffect="non-scaling-stroke"
                              stroke="currentcolor"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>


        {/* CTA section */}
        < div className="relative isolate mt-12 px-6 py-32 sm:mt-24 sm:py-40 lg:px-8" id="comprar" >

          <div
            className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#7e22ce] to-[#22c55e] opacity-20"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Já está com sua receita e autorização da ANVISA em mãos?

            </h2>
            <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-gray-300">
              Adquira seus produtos Brazilian Boy na Loja Cannabis e embarque em uma jornada de saúde, qualidade e bem-estar.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ButtonBranco href="https://lojacannabis.com/collections/brazilian-boy" textobotao='Ir para loja' target='' />
            </div>
          </div>
        </div >

        {/* FAQ */}
        <div id="faq">
        <Faq />
        </div>

        {/* Form hubspot */}
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8" id="iniciar">
          <div className="relative isolate flex flex-col gap-10 overflow-hidden   py-24 shadow-2xl sm:rounded-3xl  xl:flex-row xl:items-center xl:py-32">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl xl:max-w-none xl:flex-auto">
              <span className="text-verde">Inicie Agora sua jornada</span> no mundo da Cannabis Medicinal.
            </h2>
            <div className="w-full max-w-md">
              <div className="flex gap-x-4">
                <HubspotBboy />
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Você será redirecionado{' '}
              </p>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

      </main >
    </div >
  )
}
