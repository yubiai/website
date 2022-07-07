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
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
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
    <Box
      bg={'#191b30'}
      color={'white'}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <LogoYb />
        <Stack direction={"row"} spacing={6}>
          <Link href="/ecosystem">Ecosystem</Link>
          <Link href="/community">Community</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </Stack>
      </Container>

      <Box borderStyle={"solid"} borderColor={"gray.200"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Yubiai Marketplace. All rights reserved</Text>
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
    </Box>
  );
};

export default Footer;
