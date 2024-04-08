import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
    {
        name: 'Push to deploy.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

export default function Conceito() {
    return (
        <div className="overflow-hidden bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-verde">CONCEITO</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Prepare-se para uma experiência única, onde o gingado brasileiro se encontra com a excelência da cannabis.</p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Apresentamos a collab entre Loja Cannabis e Brazilian Boy, uma linha de extrações que captura o verdadeiro ritmo do Brasil, com os sabores gringos.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Nosso processo começa com o cuidado meticuloso desde o cultivo das plantas até a seleção das melhores variedades, garantindo uma qualidade excepcional em cada extração.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Explore nossa linha de produtos e mergulhe na autenticidade, sabor e energia únicos do Brazilian Boy.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Junte-se a nós nesta jornada sensorial, onde cada puff é uma dança de sabores e aromas.
                            </p>

                        </div>
                    </div>
                    <Image
                        src="/"
                        alt="Product screenshot"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={1442}
                    />
                </div>
            </div>
        </div>
    )
}
