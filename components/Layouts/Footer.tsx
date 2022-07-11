import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { ReactNode } from "react";
import LogoYb from "../Logos/LogoYb";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={"white"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <>
      <Container
        bg={"#191b30"}
        color={"white"}
        position="relative"
        as={Stack}
        maxW={"8xl"}
        mt={"1em"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
        borderRadius={"5px"}
        boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
        backgroundImage={
          "linear-gradient(to bottom, rgba(57, 61, 92, 0.94) 2%, rgba(39, 48, 122, 0) 100%)"
        }
      >
        <LogoYb />
        <Stack direction={"row"} spacing={6}>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/community">Community</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Container>

      <Box>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text color="white">
            © 2022 Yubiai Marketplace. All rights reserved
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/YubiaiM"}
            >
              <FaTwitter fontSize={22} />
            </SocialButton>
            <SocialButton label={"Linktree"} href={"https://linktr.ee/Yubiai"}>
              <SiLinktree fontSize={22} />
            </SocialButton>
            <SocialButton label={"Telegram"} href={"https://t.me/yubiai"}>
              <FaTelegramPlane fontSize={22} />
            </SocialButton>
            <SocialButton
              label={"YouTube"}
              href={"https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA"}
            >
              <FaYoutube fontSize={22} />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
