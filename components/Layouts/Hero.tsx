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
import About from "../Infos/About";
import styles from "./hero.module.css";

// const ButtonSocial = ({
//   children,
//   link,
//   label,
// }: {
//   children: ReactNode;
//   link: String;
//   label: String;
// }) => (
//   <Link w="30px" mr="2em" href={`${link}`} isExternal aria-label={`${label}`}>
//     <Button
//       w="4em"
//       bg="transparent"
//       _hover={{
//         bg: "blackAlpha.500",
//       }}
//     >
//       {children}
//     </Button>
//   </Link>
//     );

export default function Hero() {
  return (
    <Box
      className={styles["hero-container"]}
      w="full"
      h="1422px"
      style={{ border: "1px dotted red", flexDirection: "column", display: "flex" }}
    >
      <Box style={{ display: "contents" }}>
        <Box style={{
          border: "2px dotted black",
          display: "flex",
          flexDirection: "row",
          alignSelf: "flex-end",
          height: "438px",
          alignItems: "flex-end",
          width: "800px",
          justifyContent: "space-around",
        }}>
          <Image
            w={"594px"}
            h={"232px"}
            alt={"Logo"}
            src={"/static/images/logoyubiai.png"}
            fallbackSrc={"/static/images/logoyubiai.png"}
          />

        </Box>
        <Box style={{
          border: "2px dotted blue",
          display: "flex",
          flexDirection: "column",
          width: "auto",
          marginLeft: "85px"
        }} >
          <About />
        </Box>
      </Box>

      {/*
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
  */}
    </Box>
  );
}
