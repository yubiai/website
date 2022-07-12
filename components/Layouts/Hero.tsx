import { Link, Center, Flex, Image } from "@chakra-ui/react";
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
        <Flex justifyContent={"right"} mr="2em">
          <Link mr={'1em'} href="https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA" isExternal>
            <FaYoutube color="white" fontSize={"2em"} />
          </Link>
          <Link mr={'1em'} href="https://twitter.com/YubiaiM" isExternal>
            <FaTwitter color="white" fontSize={"2em"} />
          </Link>
        </Flex>
        <Statistics />
    </HeroFather>
  );
}
