

import Image from 'next/image'
import Link from 'next/link'

import { ButtonGradient, ButtonVerde, ButtonBranco } from './button'

export default function CallToAction() {
    return (
        < div className="relative isolate mt-12 px-6 py-32 sm:mt-24 sm:py-40 lg:px-8" >
            <div
                className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#7cda24] to-[#22c55e] opacity-20"
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
    )
}
