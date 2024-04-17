

import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'
import { CldVideoPlayer, getCldImageUrl } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

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
    product: 'Diamantes',
    href: '#',
    category: 'Extração Isolada',
    img:
      '/diamond-thca.jpg',
    alt: 'Diamante de Extração isolada',
    description: 'Este extrato é a forma mais pura de THCA, cristalizada para máximo benefício. É produzido por meio de técnicas de purificação que removem impurezas e cristalizam o THCa, resultando em cristais brilhantes conhecidos como "diamantes". Eles podem ser adcionados a comestíveis para quem busca alta concentração e alívios rápidos de dores crônicas e naúseas.',
  },

  {
    id: 2,
    product: 'Bubble Extract',
    href: '#',
    category: 'Extração Liofilizada',
    img:
      '/bubble-hash.jpg',
    alt: 'Bubble Extração Liofilizada',
    description: 'Este extrato é uma forma concentrada de tetra-hidrocanabinol ácido (THCA), produzida a partir de flores de cannabis. É obtido separando as glândulas de resina das flores e, em seguida, liofilizando para preservar seus terpenos e qualidade. Este extrato é uma combinação Full Spectrum que tem potencial para aliviar dores e inflamações e ajudar na melhora do sono.',
  },
  {
    id: 3,
    product: 'Live Rosin',
    href: '#',
    category: 'Extração Concentrada',
    img:
      '/live-rosin.jpg',
    alt: 'Live Rosin Concetrado',
    description: 'O Extrato Concentrado, conhecido como Live Rosin de THCA, é uma forma altamente concentrada de tetra-hidrocanabinol ácido (THCA) produzida a partir de flores de cannabis frescas. É obtido aplicando pressão e calor a flores de cannabis frescas, liberando um extrato de THCA puro e concentrado. O Live Rosin de THCA é um concentrado altamente potente que pode ser dilúido ou adcionado a comestíveis para alívio rápido de dores e estresse, auxiliando no sono e no relaxamento físico e mental.',
  },
]

const features = [
  { name: 'Insônia', },
  { name: 'Ansiedade', },
  { name: 'Dor Crônica', },
  { name: 'Autismo', },
  { name: 'Fibromialgia', },
  { name: 'Alzheimer', },
  { name: 'Eplepsia', },
  { name: 'TDAH', },

  { name: 'Artrite', },
  { name: 'Depressão', },
  { name: 'Transtorno pós-traumático', },
  { name: 'Glaucoma', },
  { name: 'Exaquecas', },
  { name: 'Esclereose múltipla', },

]





export default function FullPage() {
  return (
    <div className="bg-escuro">
      <main>

        {/* Hero section */}
        <div className="">


          <div className="mx-auto max-w-7xl px-6 py-12 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <div className="mt-12 sm:mt-32 lg:mt-16">
                  <div className="inline-flex space-x-6">
                    <span className="rounded-full bg-emerald-500/10 px-6 py-1 text-sm font-semibold leading-6 text-purple-500 ring-1 ring-inset ring-gray-500/20">
                      Produtos a base de Cannabis no Brasil só podem ser vendidos com prescrição médica
                    </span>
                  </div>
                </div>
                <h1 className="mt-10 text-5xl font-black tracking-tight text-white sm:text-8xl">
                  BRAZILIAN BOY <span className="text-purple-500 font-light italic">VS</span> LOJA CANNABIS
                </h1>
                <p className="mt-6 text-3xl leading-8 tracking-widest text-verde">
                  Lifestyle Brasileiro, qualidade Internacional.
                </p>
                <div className="mt-10 mb-10 flex items-center gap-x-6">
                  <ButtonVerde href="#iniciar" textobotao='Inicie sua Jornada' target='' />
                  <Link href="#jornada" className="text-sm font-semibold leading-6 text-white">
                    Etapas <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="pl-0 lg:pl-16">
                <div className="overflow-hidden rounded-2xl max-w-md shadow-2xl shadow-green-800">
                  <CldVideoPlayer
                    id="xmi8bv7dla06aanmyxys"
                    width="500"
                    height="800"
                    src="https://res.cloudinary.com/dmryqhxwa/video/upload/v1713304727/xmi8bv7dla06aanmyxys.mp4"
                    colors={{
                      accent: '#84caeb', // barrinha que move
                      base: '#8aef70', // barra inferior
                      text: '#FFFFFF' // icones
                    }}
                    logo={{
                      imageUrl: getCldImageUrl({
                        src: '/iconeplayer.ico'
                      }),
                      // imageUrl: '<Your Image URL',
                      onClickUrl: 'https://cannamed.com.br'
                    }}
                  />
                </div>
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
          <div className="mx-auto max-w-7xl ">

            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

              <div>
                <div className="">
                  <Image
                    src="/mantwo.png"
                    alt="Brazilian Boy"
                    width={700}
                    height={800}
                  />
                </div>
              </div>

              <div>
                <div className="text-base leading-7 lg:max-w-lg px-8">
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    Prepare-se para uma experiência única, onde o <span className="text-purple-500">gingado brasileiro</span> se encontra com a <span className="text-verde">excelência da Cannabis Medicinal.</span>
                  </h1>
                  <div className="max-w-xl text-gray-300 text-xl">
                    <p className="mt-6">
                      Apresentamos a <strong>collab entre Loja Cannabis e Brazilian Boy</strong>, uma linha de extrações que captura o verdadeiro ritmo do Brasil, com padrões internacionais de cultivo.
                    </p>
                    <p className="mt-8">
                      Nosso processo começa com o cuidado meticuloso desde o <strong>cultivo das plantas até a seleção das melhores variedades</strong>, garantindo uma qualidade excepcional em cada extração.
                    </p>
                    <p className="mt-8">
                      Explore nossa linha de Produtos e mergulhe na autenticidade, do Brazilian Boy.
                    </p>
                    <p className="mt-8 font-bold">
                      Junte-se a nós nesta jornada medicinal de bem-estar e saúde.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* beneficios section */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div>
                <h2 className="text-base font-semibold leading-7 text-verde">Beneficios</h2>
                <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">A Cannabis Medicinal tem <span className="text-verde">diversas propriedades benéficas</span> para o nosso organismo</p>
                <p className="mt-6 text-base leading-7 text-gray-200">
                  Promove alívio da dor, relaxamento físico e mental, Propriedades anti-inflamatórias, alívio da ansiedade e estresse, e auxiliam no tratamento de diversas doenças como:
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-4 text-xl leading-7 text-gray-600 sm:grid-cols-2 lg:pl-24">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <div className="font-bold text-gray-100">
                      <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-purple-500" aria-hidden="true" />
                      {feature.name}
                    </div>
                  </div>
                ))}
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

        <div className="mx-auto relative isolate overflow-hidden flex grid max-w-7xl grid-cols-1 lg:grid-cols-2" id="cadastro">

          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidiven  lg:w-1/2">
              </div>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl xl:max-w-none xl:flex-auto">
                <span className="text-verde">Inicie Agora sua jornada</span> no mundo da Cannabis Medicinal.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-gray-300">
                Faça seu cadastro e inicie seu tratamento.
              </p>
            </div>
          </div>

          <div className="px-6 pb-24  sm:pb-32 lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <HubspotBboy />
            </div>
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


      </main >
    </div >
  )
}
