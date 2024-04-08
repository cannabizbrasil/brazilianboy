import Image from 'next/image'

const produtos = [
    {
      id: 1,
      produto: 'Diamond de THCa Full Spectrum',
      href: '#',
      img:
          '/oleos.webp',
      alt: 'Diamond de THCa Full Spectrum',
      descricao: 'Os Diamonds do Brazilian Boy são verdadeiras jóias da cannabis. Com sua pureza e potência incomparáveis, esses cristais de THC vão te surpreender com sua intensidade e claridade. Eles são derivados da nossa flor premium de alto teor de THCa e contém um grama inteira de THCa concentrado, além de 0,3 gramas de molho de resina viva, terpenos e outros canabinóides menores para um perfil forte e limpo, ideal para o dabbing de próximo nível.',
      },
    
      {
        id: 2,
        produto: 'Bubble Hash Full Spectrum',
        href: '#',
        img:
            '/extracoes.webp',
        alt: 'Bubble Hash Full Spectrum',
        descricao: 'Explore o mundo dos concentrados de cannabis com nosso Bubble Hash de THCa. É uma representação pura e potente da essência da planta. Nossa collab com o Brazilian Boy apresenta duas cepas excepcionais e é destinada àqueles que valorizam uma abordagem natural e sem solventes para sabores e sensações intensas.',
        },
        {
            id: 3,
            produto: 'Live Rosin Full Spectrum',
            href: '#',
            img:
                '/oleos.webp',
            alt: 'Live Rosin Full Spectrum',
            descricao: 'Mergulhe no mundo luxuoso dos concentrados de cannabis com nossa coleção Premium de Live Rosin de THCa junto ao Brazilian Boy, apresentando oito cepas distintas e potentes. Cada Rosin cremoso incorpora a pura essência da cannabis, oferecendo uma sinfonia de sabores e efeitos ricos. Escolhido à mão para conhecedores como você, essa coleção abre as portas para experiências sensoriais incomparáveis.',
            },
  ]
  
  export default function Produtos() {
    return (
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-verde sm:text-4xl">Produtos</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Esses produtos são de uso exclusivo medicinal, você precisa se consultar com um médico prescritor!
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {produtos.map((produto) => (
              <article
                key={produto.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image src={produto.img} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" width={512} height={612}/>
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
  
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                     
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={produto.href}>
                    <span className="absolute inset-0" />
                    {produto.produto}
                  </a>
                </h3>
                <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity">
    <span class="text-sm p-8">{produto.descricao}</span>
  </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }