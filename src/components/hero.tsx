import Image from "next/image";

export default function Hero() {
    return (
        <div className="bg-gray-900">


            <div className="relative isolate overflow-hidden pt-8">
                <Image
                    src="/hero.jpg"
                    alt=""
                    width={1920}
                    height={1080}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7cda24] to-[#7cda24] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-4xl">

                    <div className="text-center">
                        <h1 className="text-5xl pb-36 font-bold tracking-tight text-white sm:text-8xl">
                            BRAZILIAN BOY VS LOJA CANNABIS
                        </h1>
                        <p className="mt-96 font-semibold text-4xl leading-8 text-verde">
                            LIFESTYLE BRASILEIRO, SABORES GRINGOS
                        </p>
                        <p className="mt-2 text-sm leading-8 text-gray-300">
                            ATENÇÃO: ESTE PRODUTO NÃO É DE USO RECREATIVO
                        </p>
                        <div className="py-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-verde px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                            >
                                Produtos
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white">
                                Tenho Duvidas <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
