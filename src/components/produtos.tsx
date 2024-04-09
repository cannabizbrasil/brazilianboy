

import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { ButtonGradient, ButtonVerde, ButtonBranco } from './button'




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






export default function Produtos() {
    return (
        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-16 lg:pb-28 lg:px-8 lg:pt-24">
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-verde sm:text-5xl">Produtos</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-300 sm:mt-4">
                        Esses produtos são de uso exclusivo medicinal, você precisa se consultar com um médico prescritor!
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
                    {products.map((product) => (
                        <div key={product.product} className="transition ease-in-out flex flex-col overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-700 shadow-green-950 hover:scale-105 hover:shadow-green-800 duration-1000">
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
                                    <p className="text-sm font-medium text-verde">
                                        {product.category}
                                    </p>
                                    <div className="mt-2 block">
                                        <Disclosure as="div" >
                                            {({ open }) => (
                                                <>
                                                    <dt>
                                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                            <span className="text-2xl font-bold text-white">{product.product}</span>
                                                            <span className="ml-6 flex text-white h-7 items-center">
                                                                {open ? (
                                                                    <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                                ) : (
                                                                    <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </dt>
                                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                        <p className="mt-3 text-base text-gray-400">{product.description}</p>
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








    )
}
