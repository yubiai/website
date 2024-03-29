import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useState } from "react";

const HeroFather = ({
  children,
  titleHead,
  titleFirst,
  titleSecond,
  description,
}: {
  children: ReactNode;
  titleHead: String;
  titleFirst: String;
  titleSecond: String;
  description: String;
 
}) => {
  return (
    <>
      <Head>
        <title>{titleHead}</title>
      </Head>
      <main>
        <Box
          w="full"
          h={{ base: "full", md: "4310px", lg: "4463px" }}
          backgroundImage={"/static/images/Artwork.png"}
          backgroundPosition="right"
          backgroundRepeat="no-repeat"
          backgroundSize="auto"
          
        >
          <Container maxW={"7xl"}>
            <Stack as={Box} py={{ base: 20, md: "5em" }}>
              <Heading
                fontWeight={700}
                fontSize={{ base: "36px", md: "36px", lg:"64px" }}
                lineHeight={"normal"}
                color="white"
              >
                {titleFirst}{" "}
                {titleSecond && (
                  <>
                    <br />
                    <Text as={"span"} color={"white"}>
                      {titleSecond}
                    </Text>
                  </>
                )}
              </Heading>
            </Stack>
            <Box w={{ base: "full", md: "50%" }}>
              <Text color={"white"} fontSize="20px">
                {description}
              </Text>
            </Box>
            {children}
          </Container>
        </Box>
      </main>
    </>
  );
};

export default HeroFather;
