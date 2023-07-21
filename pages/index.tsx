import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import useTranslation from 'next-translate/useTranslation';
import Hero from "../components/Layouts/Hero";
import Info from "../components/Layouts/Info";

const Home: NextPage = () => {
  const { t } = useTranslation("home");
  return (
    <Box>
      <Head>
        <title>Yubiai Landing - Home</title>
      </Head>
      <Hero />
      <Info />
      
    </Box>
  );
};

export default Home;
