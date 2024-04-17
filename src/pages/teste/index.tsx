import { CldVideoPlayer, getCldImageUrl } from 'next-cloudinary';
import Link from 'next/link'


import { ButtonGradient, ButtonVerde, ButtonBranco } from '@/components/button'

export default function Teste() {
    return (
        <div>
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

            <div className="mx-auto max-w-7xl py-32">
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
                        <div className="mt-10 flex items-center gap-x-6">
                            <ButtonVerde href="#iniciar" textobotao='Inicie sua Jornada' target='' />
                            <Link href="#jornada" className="text-sm font-semibold leading-6 text-white">
                                Etapas <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="pl-2 lg:pl-16">
                        <div className="overflow-hidden rounded-2xl max-w-md shadow-2xl shadow-green-800">
                            <CldVideoPlayer
                                id="xmi8bv7dla06aanmyxys"
                                width="500"
                                height="800"
                                src="https://res.cloudinary.com/dmryqhxwa/video/upload/v1713304727/xmi8bv7dla06aanmyxys.mp4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}