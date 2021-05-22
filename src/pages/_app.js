import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kadu Acessórios - Mecânica de automóveis</title>

        <meta property="og:image" content="/images/car-bg2" key="ogimage" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kadu-acessorios.vercel.app/" />
        <meta property="og:title" content="Kadu Acessórios - Mecânica de automóveis" key="ogtitle" />
        <meta property="og:description" content="A oficina mecânica que vai dar um jeito no seu carro!" key="ogdesc" />

      </Head>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
