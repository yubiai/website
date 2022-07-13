import {
  Link,
  Center,
  Flex,
  Image,
  Button,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import Statistics from "../Infos/Stats";
import { FaTwitter, FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <Box
      w="full"
      h="full"
      backgroundImage={`/static/images/bgoficial.png`}
      backgroundPosition="0 35%"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Center h="87vh" color="white">
        <Box>
          <Center>
            <Image
              w={"300px"}
              h={"118px"}
              alt={"Logo"}
              src={"/static/images/logoyubiai.png"}
              fallbackSrc={"/static/images/logoyubiai.png"}
            />
          </Center>
          <Heading fontSize={"2xl"} mt="5px" textAlign={"center"}>
            <Text color="white">A Web3 decentralized marketplace</Text>
          </Heading>
        </Box>
      </Center>
      <Flex justifyContent={"right"} mr="3em">
        <Link
          w="5px"
          m="1em"
          href="https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA"
          isExternal
        >
          <FaYoutube color="white" fontSize={"2em"} />
        </Link>
        <Link m="1em" w="5px" href="https://twitter.com/YubiaiM" isExternal>
          <FaTwitter color="white" fontSize={"2em"} />
        </Link>
      </Flex>
      <Statistics />
    </Box>
  );
}
