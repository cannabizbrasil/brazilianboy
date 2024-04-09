

import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import { ButtonGradient, ButtonVerde, ButtonBranco } from './button'


const steps = [
    { id: '01', name: 'Consulta', href: '#', description: 'Realize uma consulta com seu médico de confiança' },
    { id: '02', name: 'Receita', href: '#', description: 'Receba do seu médico as prescrições dos produtos ideias para o seu tratamento' },
    { id: '03', name: 'Documentação', href: '#', description: 'Com a receita em mãos, Retire sua autorização da ANVISA ' },
    { id: '04', name: 'Comprar', href: '#', description: 'Faça o Cadastro no Site da Loja Cannabis' },
]



export default function Steps() {
    return (
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-16 lg:pb-28 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">A sua jornada é simples</h2>
                <p className="mt-6 text-lg leading-8 text-verde pb-12">
                    Para adquirir seus medicamentos você deve comprir algumas etapas.
                </p>
            </div>
            <nav aria-label="Progress">
                <ol role="list" className="divide-y divide-gray-300 rounded-2xl border border-gray-700 md:flex md:divide-y-0">
                    {steps.map((step, stepIdx) => (
                        <li key={step.name} className="relative py-4 md:flex md:flex-1">
                            <div>
                                <Link href={step.href} className="flex items-center pb-4 px-6 text-sm font-medium" aria-current="step">
                                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-verde">
                                        <span className="text-verde text-2xl">{step.id}</span>
                                    </span>
                                    <span className="ml-4 text-2xl font-bold text-white">{step.name}</span>
                                    <div className="px-6 text-lg text-gray-300">{step.description}</div>
                                </Link>
                                {stepIdx !== steps.length - 1 ? (
                                    <>
                                        {/* Arrow separator for lg screens and up */}
                                        <div className="absolute right-0 top-0 hidden h-full w-5 md:block" aria-hidden="true">
                                            <svg
                                                className="h-full w-full text-verde"
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
    )
}
