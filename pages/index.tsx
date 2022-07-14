import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import BurnInfo from "../components/Layouts/BurnInfo";

import Hero from "../components/Layouts/Hero";
import Info from "../components/Layouts/Info";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Yubiai Landing - Home</title>
      </Head>
      <Hero />
      <Info />
      <BurnInfo />
    </Box>
  );
};

export default Home;
