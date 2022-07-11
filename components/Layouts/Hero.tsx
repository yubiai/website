import {
  Box,
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Center,
  Image,
} from "@chakra-ui/react";
import Statistics from "../Infos/Stats";
import LogoYb from "../Logos/LogoYb";

export default function Hero() {
  return (
    <>
      <Box
        w="full"
        h={{ base: "full", md: "100vh" }}
        backgroundImage={"/static/images/bgimage1.png"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Center h="90vh" color="white">
          <Image
            w={"300px"}
            h={"118px"}
            alt={"Logo"}
            src={"/static/images/logoyubiai.png"}
            fallbackSrc={"/static/images/logoyubiai.png"}
          />
        </Center>
        <Statistics />
      </Box>

    </>
  );
}
