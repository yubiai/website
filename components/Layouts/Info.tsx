import { Container, Stack, Flex } from "@chakra-ui/react";
import About from "../Infos/About";
import Features from "../Infos/Features";
import Statistics from "../Infos/Stats";

const Info = () => {
  return (
    <Container maxW={"7xl"}>
      <Statistics />
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={"1.8em"}>
          <About />
        </Stack>
        <Flex flex={2}>
          <Features />
        </Flex>
      </Stack>
    </Container>
  );
};

export default Info;
