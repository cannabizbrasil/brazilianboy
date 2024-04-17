'use client'

import { ButtonGradient, ButtonVerde, ButtonBranco } from "./button";
import { CldVideoPlayer, getCldImageUrl } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

export default function Obrigado() {
    return (
        <div className="bg-neutral-950">
            <div className="relative isolate px-6 pt-14 lg:px-8 py-32">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7cda24] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-4xl ">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">

                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Você está a um passo de <span className="text-verde">conseguir seu medicamento</span>.
                        </h1>

                    </div>
                </div>
                <div className="mx-auto max-w-7xl py-16 ">
                    <div className="overflow-hidden bg-black rounded-3xl shadow-2xl">
                        <CldVideoPlayer
                            id="Ansiedade_orijqo"
                            width="500"
                            height="300"
                            src="https://res.cloudinary.com/dmryqhxwa/video/upload/v1713381464/brazilian-boy-obrigado_bqqilp.mp4"
                        />
                    </div>
                </div>
                <div className="mx-auto max-w-4xl ">
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">

                        </div>
                        <div>
                            <p className="text-lg leading-8 text-center text-gray-400 pb-4">
                                Se você NÂO TEM Receita e Anvisa
                            </p>
                            <ButtonVerde href="https://wa.me/5561998577833" textobotao='Atendimento' target="_blank" />
                        </div>
                        <div>
                            <p className="text-lg leading-8 text-center text-gray-400  pb-4">
                                Se você Já tem Receita e Anvisa
                            </p>
                            <ButtonBranco href="https://lojacannabis.com/collections/brazilian-boy" textobotao='Produtos' target="_blank" />
                        </div>
                    </div>
                </div>

                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div >
    )
}



