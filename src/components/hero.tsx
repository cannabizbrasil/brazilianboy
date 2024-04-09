

import Image from 'next/image'
import { ButtonGradient, ButtonVerde, ButtonBranco } from './button'




export default function Hero() {
    return (
        <div >
            <div className="relative isolate overflow-hidden">
                <div
                    className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#7cda24] to-[#22c55e] opacity-20"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-24 lg:flex lg:px-8 lg:pt-32">
                    <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-2xl lg:pt-8">

                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="#" className="inline-flex space-x-6">
                                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold leading-6 text-verde ring-1 ring-inset ring-gray-500/20">
                                    Este produto não é de uso recreativo
                                </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-5xl font-black tracking-tight text-white sm:text-8xl">
                            BRAZILIAN BOY <span className="text-verde font-light italic">VS</span> LOJA CANNABIS
                        </h1>
                        <p className="mt-6 text-3xl leading-8 tracking-widest text-verde">
                            Lifestyle Brasileiro, Sabores gringos
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <ButtonVerde href="#iniciar" textobotao='Inicie sua Jornada' target='' />
                            <a href="#" className="text-sm font-semibold leading-6 text-white">
                                Etapas <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto flex max-w-2xl lg:max-w-none lg:flex-none ">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <Image
                                src="/man.png"
                                alt="Brazilian Boy"
                                width={600}
                                height={800}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
