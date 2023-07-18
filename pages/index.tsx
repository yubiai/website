import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import BurnInfo from "../components/Layouts/BurnInfo";
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
      <Hero t={t} />
      <Info t={t} />
      <BurnInfo t={t} />
    </Box>
  );
};

export default Home;
