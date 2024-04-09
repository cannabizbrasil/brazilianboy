

import Image from 'next/image'

import Link from 'next/link'

import { ButtonGradient, ButtonVerde, ButtonBranco } from './button'
import HubspotBboy from './hubspotform'



export default function Cadastro() {
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8" id="iniciar">
            <div className="relative isolate flex flex-col gap-10 overflow-hidden  px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
                <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl xl:max-w-none xl:flex-auto">
                    Inicie Agora sua jornada no mundo da Cannabis Medicinal.
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
    )
}
