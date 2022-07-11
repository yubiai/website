import { Box, Center, Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import BurnInfo from "../components/Layouts/BurnInfo";

import Hero from "../components/Layouts/Hero";
import Info from "../components/Layouts/Info";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Yubiai Marketplace</title>
        <meta name="description" content="Yubiai Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Info />
      <BurnInfo />
    </Box>
  );
};

export default Home;
