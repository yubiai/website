import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../styles/globals.css";
import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Header />

      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
