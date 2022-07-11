import { Box, Link, Center, Flex, Image } from "@chakra-ui/react";
import Statistics from "../Infos/Stats";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";

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
        <Center h="87vh" color="white">
          <Image
            w={"300px"}
            h={"118px"}
            alt={"Logo"}
            src={"/static/images/logoyubiai.png"}
            fallbackSrc={"/static/images/logoyubiai.png"}
          />
        </Center>
        <Flex justifyContent={"right"} mr="2em">
          <Link mr={'1em'} href="https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA" isExternal>
            <FaYoutube color="white" fontSize={"2em"} />
          </Link>
          <Link mr={'1em'} href="https://twitter.com/YubiaiM" isExternal>
            <FaTwitter color="white" fontSize={"2em"} />
          </Link>
        </Flex>
        <Statistics />
      </Box>
    </>
  );
}
