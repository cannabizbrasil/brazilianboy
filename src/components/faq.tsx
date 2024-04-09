import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'


const faqs = [
    {
        question: "Quais os benefícios da Cannabis no tratamento médico?",
        answer:
            "A Cannabis Medicinal tem diversas propriedades benéficas para o nosso organismo, dentre elas: o alívio da dor, propriedades anti-inflamatórias, alívio da ansiedade e estresse, melhoria do sono, propriedades neuroprotetoras, redução de crises convulsivas, controle de náuseas e vômitos. Agende sua consulta e converse com um dos nossos médicos especialistas",
    },
    {
        question: "Como agendar uma consulta médica?",
        answer:
            "Para agendar uma consulta, escolha uma especialidade ou patologia a ser tratada, encontre um médico especialista, escolha o melhor horario, e realize sua consulta!",
    },


    {
        question: "Como ter acesso a produtos à base de Cannabis Medicinal?",
        answer:
            "Para ter acesso legal a produtos a base de Cannabis é simples! Basta realizar sua consulta com um de nossos especialistas para que ele avalie seu quadro e indique o tratamento idel para a sua condição. Depois te auxiliamos para a obtenção da documentação necessária, e então você estará autorizado para comprar seus medicamentos e iniciar o seu tratamento!",
    },
    {
        question: "Como posso tirar minhas dúvidas e ter suporte sobre Cannabis?",
        answer:
            "Temos uma equipe de acolhimento com profissionais da saúde prontos para te atender, seja por whatsapp, ligação, e-mail ou até mesmo vídeo chamada. Você pode entrar em contato com nosso time, enviar sua dúvida e receber todo suporte necessário para iniciar seu tratamento.",
    },
    {
        question: "Quais as especialidades disponíveis?",
        answer:
            "Existe uma base muito diversificada de especialistas, são elas: Psiquiatria, Geriatria e Acupuntura, Cardiologista, Arritmologista, Médica de Família e Comunidade, Generalista, Cirurgia Geral, Saúde Mental Integrativa, Medicina do Sono, Medicina Funcional e Integrativa, Endocrinologia, Medicina da dor, Saúde da Mulher, Saúde Materno Infantil e Fitoterapia na Clínica Médica, Cirurgião do aparelho digestivo e nutrólogo, Saúde Pública e Medicina do Estilo de Vida, Médico do esporte, Dores crônicas, pediatra, Médico do trabalho. ",
    },
    {
        question: "Posso tratar minha doença com Cannabis? (Quais principais patologias?)",
        answer:
            (<>
                <strong>Se você, ou alguém que você conhece, sofre de:</strong><br />
                Dor crônica<br />
                Espasmos musculares<br />
                Náuseas e vômitos decorrentes de algum tratamento<br />
                Insônia<br />
                Ansiedade<br />
                Depressão<br />
                Epilepsia<br />
                Esclerose<br />
                Alzheimer<br />
                Compulsão Alimentar<br />
                Fibromialgia<br />
                Autismo<br /><br />
                Pode realizar tratamento com Cannabis Medicinal.
            </>)
    },
    {
        question: "Qual diferença entre as especialidades (Generalista X Psiquiatra)?",
        answer:
            "O psiquiatra vai avaliar o seu caso centrado na sua saúde mental, podendo prescrever outros tipos de medicamentos psiquiátricos também. Já com o generalista você terá uma consulta de clínica geral. ",
    },
    {
        question: "Aceita plano de saúde?",
        answer:
            "Por enquanto não, mas é possível conseguir o recibo para reembolso da consulta pelo seu plano de saúde.",
    },

    {
        question: "Qual o custo mensal?",
        answer:
            "O custo do tratamento varia de acordo com a receita médica. Temos diversos tipos de produtos e marcas no mercado. Em consulta o médico irá avaliar junto a você qual a melhor opção para o seu tratamento. ",
    },
]

export default function Faq() {
    return (
        <div id="faq">
            <div className="relative isolate py-32">

                <div className="relative">
                    <div
                        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                        aria-hidden="true"
                    >
                        <div
                            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#7cda24] to-[#f43f5e]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div
                        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
                        aria-hidden="true"
                    >
                        <div
                            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#f43f5e] to-[#8b5cf6] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 ">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-4xl font-bold leading-10 tracking-tight text-white sm:text-5xl">Tire todas as suas dúvidas</h2>

                        </div>
                        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">

                            <dl className="mt-16 space-y-6 divide-y divide-purple-100/10">
                                {faqs.map((faq) => (
                                    <Disclosure as="div" key={faq.question} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                                                        <span className="text-2xl leading-7">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                    <p className="text-base leading-7 text-gray-200">{faq.answer}</p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}