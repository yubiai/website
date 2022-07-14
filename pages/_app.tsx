import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";
import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import Head from "next/head";
import TopButton from "../components/Buttons/topButton";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta name="theme-color" content="#191b30" />
        <meta name="description" content="Yubiai Marketplace Landing" />
        <meta
          name="keywords"
          content="yubiai, market, marketplace, crypto, eth, ubi, poh, metamask"
        />
        <meta name="author" content="Yubiai Market" />
        <meta property="og:title" content="Yubiai - Web" />
        <meta property="og:description" content="Yubiai Landing" />
        <meta property="og:url" content="https://www.yubiai.market" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/static/images/logo2.png" />
        <meta name="Robots" content="all" />
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <TopButton />
      <Header />

      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
