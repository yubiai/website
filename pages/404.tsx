import { Center, Button, Box, Text, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Yubiai Landing - Error 404</title>
      </Head>
      <Box
        w="full"
        h="full"
        backgroundImage={`/static/images/bgoficial.png`}
        backgroundPosition="0 35%"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Center h="90vh" color="white">
          <Box>
            <Heading fontSize={"2xl"} mt="5px" textAlign={"center"}>
              <Text color="white">Error 404</Text>
            </Heading>
            <Button bg="white" color="black" variant="solid" mt="1em">
              <Link href="/">Go to Home</Link>
            </Button>
          </Box>
        </Center>
      </Box>
    </>
  );
}
