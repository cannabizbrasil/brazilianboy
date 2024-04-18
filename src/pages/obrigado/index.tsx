'use client'


import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import Obrigado from "@/components/obrigado";
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export default function ObrigadoPage() {
    return (
        <>
            <Head>
                <Head>
                    <title>Saúde e bem-estar com Loja Cannabis e Brazilian Boy</title>
                    <meta name="description" content="Apresentamos a collab entre Loja Cannabis e Brazilian Boy, uma linha de extrações que captura o verdadeiro ritmo do Brasil, com padrões internacionais de cultivo. Nosso processo começa com o cuidado meticuloso desde o cultivo das plantas até a seleção das melhores variedades, garantindo uma qualidade excepcional em cada extração." />
                    <meta property="og:title" content="Saúde e bem-estar com Loja Cannabis e Brazilian Boy" />
                    <meta property="og:description" content="Apresentamos a collab entre Loja Cannabis e Brazilian Boy, uma linha de extrações que captura o verdadeiro ritmo do Brasil, com padrões internacionais de cultivo. Nosso processo começa com o cuidado meticuloso desde o cultivo das plantas até a seleção das melhores variedades, garantindo uma qualidade excepcional em cada extração." />
                    <meta property="og:image" content="/seo-image.jpg" />
                    <meta property="og:image:width" content="800" />
                    <meta property="og:image:height" content="800" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="brazilianboy.uselegal.com.br" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Saúde e bem-estar com Loja Cannabis e Brazilian Boy" />
                    <meta name="twitter:description" content="Apresentamos a collab entre Loja Cannabis e Brazilian Boy, uma linha de extrações que captura o verdadeiro ritmo do Brasil, com padrões internacionais de cultivo. Nosso processo começa com o cuidado meticuloso desde o cultivo das plantas até a seleção das melhores variedades, garantindo uma qualidade excepcional em cada extração." />
                    <meta name="twitter:image" content="/seo-image.jpg" />
                </Head>
            </Head>
            <main>
                <Obrigado />
                <Footer />
            </main>
        </>
    );
}
