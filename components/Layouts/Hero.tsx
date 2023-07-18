import {
  Link,
  Center,
  Flex,
  Image,
  Box,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaTwitter,
  FaGithub,
  FaTelegramPlane,
  FaDiscord,
} from "react-icons/fa";

const ButtonSocial = ({
  children,
  link,
  label,
}: {
  children: ReactNode;
  link: String;
  label: String;
}) => (
  <Link w="30px" mr="2em" href={`${link}`} isExternal aria-label={`${label}`}>
    <Button
      w="4em"
      bg="transparent"
      _hover={{
        bg: "blackAlpha.500",
      }}
    >
      {children}
    </Button>
  </Link>
);

export default function Hero() {
  return (
    <Box
      w="full"
      h="full"

    >
      <Center h="86vh" color="white">
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
            <Text color="white">The decentralized marketplace</Text>
          </Heading>
        </Box>
      </Center>
      <Flex justifyContent={"right"} mr="3em" h="6vh">
        <ButtonSocial label={"Telegram Yubiai"} link={"https://t.me/yubiai"}>
          <FaTelegramPlane fontSize={"2em"} color={"white"} />
        </ButtonSocial>
        <ButtonSocial label={"Twitter Yubiai"} link={"https://twitter.com/YubiaiM"}>
          <FaTwitter fontSize={"2em"} color={"white"} />
        </ButtonSocial>
        <ButtonSocial label={"Github Yubiai"} link={"https://github.com/yubiai"}>
          <FaGithub fontSize={"2em"} color={"white"} />
        </ButtonSocial>
        <ButtonSocial label={"Discord Yubiai"} link={"https://discord.gg/a9CQKJXb8X"}>
          <FaDiscord fontSize={"2em"} color={"white"} />
        </ButtonSocial>
      </Flex>
    </Box>
  );
}
