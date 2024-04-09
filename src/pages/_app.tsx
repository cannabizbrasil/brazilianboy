import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HubspotProvider } from 'next-hubspot';
import { GoogleTagManager } from '@next/third-parties/google'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <main>
      <HubspotProvider>
        <Component {...pageProps} />

        <GoogleTagManager gtmId="GTM-M43DX64N" />
      </HubspotProvider>
    </main>


  )
}
