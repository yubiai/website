import {
  Box,
  Button,
  Container,
  Flex,
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
          h="1700px"
          backgroundImage={`/static/images/bgoficial.png`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >
          <Container maxW={"7xl"}>
            <Stack as={Box} py={{ base: 20, md: "15em" }}>
              <Heading
                fontWeight={800}
                fontSize={{ base: "2xl", md: "36px" }}
                lineHeight={"normal"}
                color="white"
              >
                {titleFirst}{" "}
                {titleSecond && (
                  <>
                    <br />
                    <Text as={"span"} color={"white"}>
                      ecosystem
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
