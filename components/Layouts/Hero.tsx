import { Link, Center, Flex, Image, Button } from "@chakra-ui/react";
import Statistics from "../Infos/Stats";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import HeroFather from "./HeroFather";

export default function Hero() {
  return (
    <HeroFather title={"Yubiai Landing - Home"}>
      <Center h="87vh" color="white">
        <Image
          w={"300px"}
          h={"118px"}
          alt={"Logo"}
          src={"/static/images/logoyubiai.png"}
          fallbackSrc={"/static/images/logoyubiai.png"}
        />
      </Center>
      <Flex justifyContent={"right"} >
        <Button w="5px" mr="1em" bg="transparent" _hover={{
          bg: "blackAlpha.500"
        }}>
        <Link href="https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA" isExternal>
          <FaYoutube color="white" fontSize={"2em"} />
        </Link>
        </Button>
        <Button w="5px" mr="1em" bg="transparent" _hover={{
          bg: "blackAlpha.500"
        }}>
        <Link href="https://twitter.com/YubiaiM" isExternal>
          <FaTwitter color="white" fontSize={"2em"} />
        </Link>
        </Button>
      </Flex>
      <Statistics />
    </HeroFather>
  );
}
