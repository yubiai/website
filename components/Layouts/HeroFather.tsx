import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

const HeroFather = ({ children, title }: { children: ReactNode, title: String }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Box
          w="full"
          h={{ base: "full", md: "1100px" }}
          backgroundImage={"/static/images/bgimage1.png"}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          {children}
        </Box>
      </main>
    </>
  );
};

export default HeroFather;
