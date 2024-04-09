

import Image from 'next/image'
import Link from 'next/link'
import { ButtonGradient, ButtonVerde, ButtonBranco } from './button'


export default function LogoCloud() {
    return (
        <div className="bg-escuro">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl  sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <Image
                        className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
                        src="/locannabis.png"
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
                        src="/locannabis.png"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
        </div >
    )
}
