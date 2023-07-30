import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden, Flex
} from "@chakra-ui/react";
import { FaDiscord, FaTelegramPlane, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { ReactNode } from "react";
import LogoYblue from "../Logos/LogoYbBlue";
import Link from "next/link";
import { useBreakpointValue } from "@chakra-ui/react";

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
      bg="transparent"
      color={"white"}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "blackAlpha.500"
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  const isBaseOrMd = useBreakpointValue({ base: true, md: true, lg: true, xl: false });
  return (
    <>
      <Flex>
        <>
          {isBaseOrMd ? (
            <Flex
              border={"1px dotted pink"}
              alignItems={"flex-start"}
              flexDirection={"row"}
              justifyContent={"center"}
              w={"100%"}
              maxW={"100%"}>
              <Flex
                flexDirection={"column"}
                as={Stack}
                py={4}
                w={"100%"}
                maxW={`180px`}
                spacing={2}
                justify={"center"}
                align={"flex-start"}
              //border={"1px dotted blue"}
              >
                <Stack

                  direction={"column"} alignItems={"center"}>
                  <Text color={"#0D47A1"} fontSize={"18px"} fontWeight={"700"}>ABOUT YUBIAI</Text>
                  <Link href="/">About Us</Link>
                  <Link href="/ecosystem">Team</Link>
                  <Link href="https://medium.com/@yubiai.blog" target={"_blank"}>Blog</Link>
                </Stack>
              </Flex>
              <Box
                border={"1px dotted red"}
                w={"100%"}
                maxW={"200px"}
              >
                <Container
                  as={Stack}
                  w={"100%"}
                  maxW={"170px"}
                  py={4}
                  direction={{ base: "column", md: "row", lg: "column" }}
                  spacing={2}
                  //justify={{ base: "center", md: "space-between" }}
                  align={{ base: "center", md: "center" }}
                >
                  <Text color={"#0D47A1"} fontSize={"18px"} fontWeight={"700"}>RESOURCES</Text>
                  <Link
                    href={"/static/yubiai_whitepaper.pdf"}
                    passHref legacyBehavior
                  >
                    White Paper
                  </Link>
                  <Link
                    href={"/static/yubiai_whitepaper.pdf"}
                    passHref legacyBehavior
                  >
                    Yellow Paper
                  </Link>
                  <Link
                    href={"https://github.com/yubiai"}
                    target={"_blank"}
                  >
                    GitHub
                  </Link>
                </Container>
              </Box>
              <Flex
                as={Stack}
                w={"100%"}
                maxW={"177px"}
                h={"100%"}
                border={"1px dotted green"}
                //maxH={"125px"}
                py={4}
                spacing={2}
                direction={{ base: "column", md: "row", lg: 'column' }}
                //justify={{ base: "center", md: "space-between", lg: "" }}
                align={{ base: "center", md: "center" }}
              >
                <Text color={"#0D47A1"} fontSize={"18px"} fontWeight={"700"}>SUPPORT</Text>
                <Link href="/faq">FAQ</Link>
                <Link
                  href="mailto: contact@yubiai.market"
                >
                  Contact Us
                </Link>
                <Link
                  href={"https://app.yubiai.market/help/terms-and-conditions"}

                >
                  Terms of Service
                </Link>
                <Link
                  href={"/privacypolicy"}

                >
                  Privacy Policy
                </Link>
              </Flex>
              <Box
              //border={"1px dotted red"}
              >
                <Container
                  as={Stack}
                  w={"100%"}
                  maxW={"200px"}
                  direction={{ base: "column", md: "row", lg: "column" }}
                  py={4}
                  spacing={2}
                  justify={{ base: "center", md: "space-between", lg: "space-between" }}
                  align={{ base: "center", md: "center" }}

                >
                  <Text color={"#0D47A1"} fontSize={"18px"} fontWeight={"700"}>OUR COMMUNITY</Text>
                  <Container
                    display={"flex"}
                    flexDirection={"row"}
                    //border={"1px dotted black"}
                    justifyContent={"space-between"}>
                    <Stack direction={"column"} spacing={2}>
                      <SocialButton label={"Telegram"} href={"https://t.me/yubiai"}>
                        <FaTelegramPlane fontSize={45} color={"#0D47A1"} />
                      </SocialButton>
                      <SocialButton label={"Linktree"} href={"https://linktr.ee/Yubiai"}>
                        <SiLinktree fontSize={45} color={"#0D47A1"} />
                      </SocialButton>
                      <SocialButton
                        label={"Twitter"}
                        href={"https://github.com/yubiai"}
                      >
                        <FaGithub fontSize={45} color={"#0D47A1"} />
                      </SocialButton>
                    </Stack>
                    <Stack direction={"column"} spacing={2}>
                      <SocialButton
                        label={"Discord"}
                        href={"https://discord.gg/a9CQKJXb8X"}
                      >
                        <FaDiscord fontSize={45} color={"#0D47A1"} />
                      </SocialButton>
                      <SocialButton
                        label={"Twitter"}
                        href={"https://twitter.com/YubiaiM"}
                      >
                        <FaYoutube fontSize={45} color={"#0D47A1"} />
                      </SocialButton>
                      <SocialButton
                        label={"YouTube"}
                        href={"https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA"}
                      >
                        <FaYoutube fontSize={45} color={"#0D47A1"} />
                      </SocialButton>
                    </Stack>
                  </Container>
                </Container>
              </Box>
              <Flex
                flexDirection={"column"}
                ///position="relative"
                as={Stack}
                py={4}
                h={"100%"}
                maxH={"350px"}
                w={"100%"}
                maxW={`325px`}
                spacing={2}
                justify={"center"}
                align={"center"}
              //border={"1px dotted blue"}
              >
                <LogoYblue />
                <Stack direction={"column"} spacing={2}>
                  <Text><span style={{ color: "#0D47A1" }}>Yubiai </span>-  the first decentralized marketplace for secure transactions where you can buy & sell services,
                    digital products and physical ones using crypto.</Text>
                  <Text color="black">
                    © {new Date().getFullYear()} Yubiai Marketplace. All rights reserved
                  </Text>
                </Stack>
              </Flex>
            </Flex>
          ) : (
            <>

              <Flex
                border={"1px dotted pink"}
                alignItems={"flex-start"}
                flexDirection={"row"}
                justifyContent={"center"}
                w={"100%"}
                maxW={"100%"}>
                <Flex
                  flexDirection={"column"}
                  as={Stack}
                  py={4}
                  w={"100%"}
                  maxW={`180px`}
                  spacing={2}
                  justify={"center"}
                  align={"flex-start"}
                //border={"1px dotted blue"}
                >
                  <Stack

                    direction={"column"} alignItems={"center"}>
                    <Text color={"#0D47A1"} fontSize={"18px"} fontWeight={"700"}>ABOUT YUBIAI</Text>
                    <Link href="/">About Us</Link>
                    <Link href="/ecosystem">Team</Link>
                    <Link href="https://medium.com/@yubiai.blog" target={"_blank"}>Blog</Link>
                  </Stack>
                </Flex>
                <Box
                  border={"1px dotted red"}
                  w={"100%"}
                  maxW={"200px"}
                >
                  <Container
                    as={Stack}
                    w={"100%"}
                    maxW={"170px"}
                    py={4}
                    direction={{ base: "column", md: "row", lg: "column" }}
                    spacing={2}
                    //justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                  >
                    <Text color={"#0D47A1"} fontSize={"18px"} fontWeight={"700"}>RESOURCES</Text>
                    <Link
                      href={"/static/yubiai_whitepaper.pdf"}
                      passHref legacyBehavior
                    >
                      White Paper
                    </Link>
                    <Link
                      href={"/static/yubiai_whitepaper.pdf"}
                      passHref legacyBehavior
                    >
                      Yellow Paper
                    </Link>
                    <Link
                      href={"https://github.com/yubiai"}
                      target={"_blank"}
                    >
                      GitHub
                    </Link>
                  </Container>
                </Box>
                <Flex
                  as={Stack}
                  w={"100%"}
                  maxW={"177px"}
                  h={"100%"}
                  border={"1px dotted green"}
                  //maxH={"125px"}
                  py={4}
                  spacing={2}
                  direction={{ base: "column", md: "row", lg: 'column' }}
                  //justify={{ base: "center", md: "space-between", lg: "" }}
                  align={{ base: "center", md: "center" }}
                >
                  <Text color={"#0D47A1"} fontSize={"18px"} fontWeight={"700"}>SUPPORT</Text>
                  <Link href="/faq">FAQ</Link>
                  <Link
                    href="mailto: contact@yubiai.market"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href={"https://app.yubiai.market/help/terms-and-conditions"}

                  >
                    Terms of Service
                  </Link>
                  <Link
                    href={"/privacypolicy"}

                  >
                    Privacy Policy
                  </Link>
                </Flex>
                <Box
                //border={"1px dotted red"}
                >
                  <Container
                    as={Stack}
                    w={"100%"}
                    maxW={"200px"}
                    direction={{ base: "column", md: "row", lg: "column" }}
                    py={4}
                    spacing={2}
                    justify={{ base: "center", md: "space-between", lg: "space-between" }}
                    align={{ base: "center", md: "center" }}

                  >
                    <Text color={"#0D47A1"} fontSize={"18px"} fontWeight={"700"}>OUR COMMUNITY</Text>
                    <Container
                      display={"flex"}
                      flexDirection={"row"}
                      //border={"1px dotted black"}
                      justifyContent={"space-between"}>
                      <Stack direction={"column"} spacing={2}>
                        <SocialButton label={"Telegram"} href={"https://t.me/yubiai"}>
                          <FaTelegramPlane fontSize={45} color={"#0D47A1"} />
                        </SocialButton>
                        <SocialButton label={"Linktree"} href={"https://linktr.ee/Yubiai"}>
                          <SiLinktree fontSize={45} color={"#0D47A1"} />
                        </SocialButton>
                        <SocialButton
                          label={"Twitter"}
                          href={"https://github.com/yubiai"}
                        >
                          <FaGithub fontSize={45} color={"#0D47A1"} />
                        </SocialButton>
                      </Stack>
                      <Stack direction={"column"} spacing={2}>
                        <SocialButton
                          label={"Discord"}
                          href={"https://discord.gg/a9CQKJXb8X"}
                        >
                          <FaDiscord fontSize={45} color={"#0D47A1"} />
                        </SocialButton>
                        <SocialButton
                          label={"Twitter"}
                          href={"https://twitter.com/YubiaiM"}
                        >
                          <FaYoutube fontSize={45} color={"#0D47A1"} />
                        </SocialButton>
                        <SocialButton
                          label={"YouTube"}
                          href={"https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA"}
                        >
                          <FaYoutube fontSize={45} color={"#0D47A1"} />
                        </SocialButton>
                      </Stack>
                    </Container>
                  </Container>
                </Box>
                <Flex
                  flexDirection={"column"}
                  ///position="relative"
                  as={Stack}
                  py={4}
                  h={"100%"}
                  maxH={"350px"}
                  w={"100%"}
                  maxW={`325px`}
                  spacing={2}
                  justify={"center"}
                  align={"center"}
                //border={"1px dotted blue"}
                >
                  <LogoYblue />
                  <Stack direction={"column"} spacing={2}>
                    <Text><span style={{ color: "#0D47A1" }}>Yubiai </span>-  the first decentralized marketplace for secure transactions where you can buy & sell services,
                      digital products and physical ones using crypto.</Text>
                    <Text color="black">
                      © {new Date().getFullYear()} Yubiai Marketplace. All rights reserved
                    </Text>
                  </Stack>
                </Flex>
              </Flex>
            </>
          )}
        </>
      </Flex>
    </>
  );
};

export default Footer;
