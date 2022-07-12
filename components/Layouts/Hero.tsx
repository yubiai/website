import { Link, Center, Flex, Image, Button, Box } from "@chakra-ui/react";
import Statistics from "../Infos/Stats";
import { FaTwitter, FaYoutube } from "react-icons/fa";

export default function Hero() {
  return (
    <Box
      w="full"
      h="full"
      backgroundImage={`/static/images/bgoficial.png`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {" "}
      <Center h="87vh" color="white">
        <Image
          w={"300px"}
          h={"118px"}
          alt={"Logo"}
          src={"/static/images/logoyubiai.png"}
          fallbackSrc={"/static/images/logoyubiai.png"}
        />
      </Center>
      <Flex justifyContent={"right"}>
        <Button
          w="5px"
          mr="1em"
          bg="transparent"
          _hover={{
            bg: "blackAlpha.500",
          }}
        >
          <Link
            href="https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA"
            isExternal
          >
            <FaYoutube color="white" fontSize={"2em"} />
          </Link>
        </Button>
        <Button
          w="5px"
          mr="1em"
          bg="transparent"
          _hover={{
            bg: "blackAlpha.500",
          }}
        >
          <Link href="https://twitter.com/YubiaiM" isExternal>
            <FaTwitter color="white" fontSize={"2em"} />
          </Link>
        </Button>
      </Flex>
      <Statistics />
    </Box>
  );
}
