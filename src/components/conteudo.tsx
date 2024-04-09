

import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import { ButtonGradient, ButtonVerde, ButtonBranco } from './button'
import HubspotBboy from './hubspotform'

const steps = [
    { id: '01', name: 'Consulta', href: '#', description: 'Realize uma consulta com seu médico de confiança' },
    { id: '02', name: 'Receita', href: '#', description: 'Receba do seu médico as prescrições dos produtos ideias para o seu tratamento' },
    { id: '03', name: 'Documentação', href: '#', description: 'Com a receita em mãos, Retire sua autorização da ANVISA ' },
    { id: '04', name: 'Comprar', href: '#', description: 'Faça o Cadastro no Site da Loja Cannabis' },
]



const products = [
    {
        id: 1,
        product: 'Diamond de THCa',
        href: '#',
        category: 'Extração Full Spectrum',
        img:
            '/oleos.webp',
        alt: 'Diamond de THCa Full Spectrum',
        description: 'Os Diamonds do Brazilian Boy são verdadeiras jóias da cannabis. Com sua pureza e potência incomparáveis, esses cristais de THC vão te surpreender com sua intensidade e claridade. Eles são derivados da nossa flor premium de alto teor de THCa e contém um grama inteira de THCa concentrado, além de 0,3 gramas de molho de resina viva, terpenos e outros canabinóides menores para um perfil forte e limpo, ideal para o dabbing de próximo nível.',
    },

    {
        id: 2,
        product: 'Bubble Hash',
        href: '#',
        category: 'Hashish Full Spectrum',
        img:
            '/extracoes.webp',
        alt: 'Bubble Hash Full Spectrum',
        description: 'Explore o mundo dos concentrados de cannabis com nosso Bubble Hash de THCa. É uma representação pura e potente da essência da planta. Nossa collab com o Brazilian Boy apresenta duas cepas excepcionais e é destinada àqueles que valorizam uma abordagem natural e sem solventes para sabores e sensações intensas.',
    },
    {
        id: 3,
        product: 'Live Rosin',
        href: '#',
        category: 'Rosin Full Spectrum',
        img:
            '/oleos.webp',
        alt: 'Live Rosin Full Spectrum',
        description: 'Mergulhe no mundo luxuoso dos concentrados de cannabis com nossa coleção Premium de Live Rosin de THCa junto ao Brazilian Boy, apresentando oito cepas distintas e potentes. Cada Rosin cremoso incorpora a pura essência da cannabis, oferecendo uma sinfonia de sabores e efeitos ricos. Escolhido à mão para conhecedores como você, essa coleção abre as portas para experiências sensoriais incomparáveis.',
    },
]






export default function Conteudo() {
    return (

        <div className="relative isolate py-24 sm:py-32">
            <div
                className="absolute -top-80 right-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:right-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
                aria-hidden="true"
            >
                <div
                    className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#7cda24] to-[#22c55e] opacity-30"
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
                                src="/extracoes.webp"
                                alt=""
                                width={500}
                                height={500}
                            />
                            <div className="absolute inset-0 bg-verde mix-blend-multiply" />
                            <div
                                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                                aria-hidden="true"
                            >
                                <div
                                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
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

                                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                                    <p>
                                        “Prepare-se para uma experiência excepcional, onde a paixão pela cannabis encontra a vibração brasileira em cada extração da nossa colaboração com a Loja Cannabis.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                                    <strong className="font-semibold text-white">Brazilian Boy</strong>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="text-base leading-7 lg:max-w-lg">
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                                Prepare-se para uma experiência única, onde o <span className="text-verde">gingado brasileiro</span> se encontra com a <span className="text-verde">excelência da cannabis.</span>
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

    )
}