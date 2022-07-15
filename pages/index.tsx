import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import BurnInfo1 from "../components/Layouts/BurnInfo1";

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
      <BurnInfo1 />
    </Box>
  );
};

export default Home;
