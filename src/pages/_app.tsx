import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HubspotProvider } from 'next-hubspot';
import { GoogleTagManager } from '@next/third-parties/google'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Saúde e Cannabis com Brazilian Boy</title>
        <meta name="description" content="Apresentamos a collab entre Loja Cannabis e Brazilian Boy, uma linha de extrações que captura o verdadeiro ritmo do Brasil, com padrões internacionais de cultivo. Nosso processo começa com o cuidado meticuloso desde o cultivo das plantas até a seleção das melhores variedades, garantindo uma qualidade excepcional em cada extração." />
        <meta property="image" content="/mantwo.png" />
        <meta property="og:title" content="Saúde e Cannabis com Brazilian Boy" />
        <meta property="og:description" content="Apresentamos a collab entre Loja Cannabis e Brazilian Boy, uma linha de extrações que captura o verdadeiro ritmo do Brasil, com padrões internacionais de cultivo. Nosso processo começa com o cuidado meticuloso desde o cultivo das plantas até a seleção das melhores variedades, garantindo uma qualidade excepcional em cada extração." />
        <meta property="og:image" content="/mantwo.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="brazilianboy.uselegal.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Saúde e Cannabis com Brazilian Boy" />
        <meta name="twitter:description" content="Apresentamos a collab entre Loja Cannabis e Brazilian Boy, uma linha de extrações que captura o verdadeiro ritmo do Brasil, com padrões internacionais de cultivo. Nosso processo começa com o cuidado meticuloso desde o cultivo das plantas até a seleção das melhores variedades, garantindo uma qualidade excepcional em cada extração." />
        <meta name="twitter:image" content="/mantwo.png" />
      </Head>
      <main>
        <HubspotProvider>
          <Component {...pageProps} />

          <GoogleTagManager gtmId="GTM-5PLWVSR8" />
        </HubspotProvider>
      </main>
    </>


  )
}
