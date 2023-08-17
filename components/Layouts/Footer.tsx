import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  VisuallyHidden, Flex, useColorMode
} from "@chakra-ui/react";
import { FaDiscord, FaTelegramPlane, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { ReactNode } from "react";
import LogoYblue from "../Logos/LogoYbBlue";
import Link from "next/link";
import { useBreakpointValue } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import useTranslation from 'next-translate/useTranslation';

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
  const { t } = useTranslation("footer");
  const { colorMode } = useColorMode();
  const txtColorLaCo = colorMode === "light" ? "#0D47A1" : "#00BCD4";


  return (
    <>

      <Flex alignItems={"center"}
        justifyContent={"center"}>
        <>
          {isBaseOrMd ? (
            <>

              <Stack

                alignItems={"center"}
                justifyContent={"center"}
              >
                <Divider my={4} borderColor={"black"} />
                <Flex alignItems={"flex-start"}
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

                  >
                    <Stack

                      direction={"column"} alignItems={"center"}>
                      <Text color={txtColorLaCo} fontSize={"18px"} fontWeight={"700"}
                        textAlign="center">{t("ABOUT YUBIAI")}</Text>
                      <Link href="/" style={{ textAlign: "center" }}>{t("About Us")}</Link>
                      <Link href="/ecosystem">{t("Team")}</Link>
                      <Link href="https://medium.com/@yubiai.blog" target={"_blank"}>Blog</Link>
                    </Stack>
                  </Flex>
                  <Box
                    w={"100%"}
                    maxW={"200px"}
                  >
                    <Container
                      as={Stack}
                      w={"100%"}
                      maxW={"170px"}
                      py={4}
                      direction={{ base: "column", md: "column", lg: "column" }}
                      spacing={2}
                      //justify={{ base: "center", md: "space-between" }}
                      align={{ base: "center", md: "center" }}
                    >
                      <Text
                        display={"flex"}
                        height={"55px"}
                        alignItems={"center"}
                        color={txtColorLaCo}
                        fontSize={"18px"}
                        fontWeight={"700"}>RESOURCES</Text>
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
                        href={"/static/yubiai_deck.pdf"}
                        passHref legacyBehavior
                      >
                        Deck
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

                    //maxH={"125px"}
                    py={4}
                    padding={{ base: "0 1rem 0 0", md: "0" }}
                    spacing={2}
                    direction={{ base: "column", md: "column", lg: 'column' }}
                    //justify={{ base: "center", md: "space-between", lg: "" }}
                    align={{ base: "center", md: "center" }}
                  >
                    <Text
                      display={"flex"}
                      height={"55px"}
                      alignItems={"center"}
                      color={txtColorLaCo}
                      fontSize={"18px"}
                      fontWeight={"700"}
                    >SUPPORT</Text>
                    <Link href="/faq">FAQ</Link>
                    <Link
                      href="mailto: contact@yubiai.market"
                    >
                      {t("Contact Us")}
                    </Link>
                    <Link
                      href={"https://app.yubiai.market/help/terms-and-conditions"}
                      style={{ textAlign: "center" }}
                    >
                      {t("Terms of Service")}
                    </Link>
                    <Link
                      href={"/privacypolicy"}
                      style={{ textAlign: "center" }}
                    >
                      {t("Privacy Policy")}
                    </Link>
                  </Flex>
                </Flex>
                <Flex alignItems={"flex-start"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  w={"100%"}
                  maxW={"100%"}>
                  <Box

                  >
                    <Container
                      as={Stack}
                      w={"100%"}
                      maxW={"200px"}
                      direction={{ base: "column", md: "column", lg: "column" }}
                      py={4}
                      spacing={2}
                      justify={{ base: "center", md: "space-between", lg: "space-between" }}
                      align={{ base: "center", md: "center" }}

                    >
                      <Text color={txtColorLaCo} fontSize={"18px"} fontWeight={"700"}
                        textAlign={"center"}>{t("OUR COMMUNITY")}</Text>
                      <Container

                        display={"flex"}
                        flexDirection={"row"}

                        justifyContent={"center"}>
                        <Stack direction={"row"}
                          spacing={3}
                          mr={"1em"}>
                          <SocialButton label={"Telegram"} href={"https://t.me/yubiai"}>
                            <FaTelegramPlane fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                          <SocialButton label={"Linktree"} href={"https://linktr.ee/Yubiai"}>
                            <SiLinktree fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                          <SocialButton
                            label={"Github"}
                            href={"https://github.com/yubiai"}
                          >
                            <FaGithub fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                        </Stack>
                        <Stack direction={"row"} spacing={3}>
                          <SocialButton
                            label={"Discord"}
                            href={"https://discord.gg/a9CQKJXb8X"}
                          >
                            <FaDiscord fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                          <SocialButton
                            label={"Twitter"}
                            href={"https://twitter.com/YubiaiM"}
                          >
                            <FaTwitter fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                          <SocialButton
                            label={"YouTube"}
                            href={"https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA"}
                          >
                            <FaYoutube fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                        </Stack>
                      </Container>
                    </Container>
                  </Box>

                </Flex>
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

                >
                  <LogoYblue />
                  <Stack direction={"column"} spacing={2}>
                    <Text textAlign={"center"}><span style={{ color: txtColorLaCo }}>Yubiai </span>-  {t("the first")}.</Text>
                    <Text
                      color="black"
                      fontWeight={"600"}
                      textAlign={"center"}>
                      © {new Date().getFullYear()} Yubiai Marketplace. {t("All rights reserved")}
                    </Text>
                  </Stack>
                </Flex>
              </Stack>
            </>
          ) : (
            <>
              <Flex flexDirection={"column"}>
                <Divider my={4} borderColor={"black"} />

                <Flex
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

                  >

                    <Stack

                      direction={"column"} alignItems={"center"}>

                      <Text
                        color={txtColorLaCo}
                        fontSize={"18px"}
                        fontWeight={"700"}
                        textAlign="center">{t("ABOUT YUBIAI")}</Text>
                      <Link href="/" style={{ textAlign: "center" }}>{t("About Us")}</Link>
                      <Link href="/ecosystem">{t("Team")}</Link>
                      <Link href="https://medium.com/@yubiai.blog" target={"_blank"}>Blog</Link>
                    </Stack>
                  </Flex>
                  <Box
                    w={"100%"}
                    maxW={"200px"}
                  >
                    <Container
                      as={Stack}
                      w={"100%"}
                      maxW={"170px"}
                      py={4}
                      direction={{ base: "column", md: "column", lg: "column" }}
                      spacing={2}
                      //justify={{ base: "center", md: "space-between" }}
                      align={{ base: "center", md: "center" }}
                    >
                      <Text color={txtColorLaCo} fontSize={"18px"} fontWeight={"700"}>RESOURCES</Text>
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
                        href={"/static/yubiai_deck.pdf"}
                        passHref legacyBehavior
                      >
                        Deck
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
                    py={4}
                    spacing={2}
                    direction={{ base: "column", md: "row", lg: 'column' }}
                    //justify={{ base: "center", md: "space-between", lg: "" }}
                    align={{ base: "center", md: "center" }}
                  >
                    <Text color={txtColorLaCo} fontSize={"18px"} fontWeight={"700"}>SUPPORT</Text>
                    <Link href="/faq">FAQ</Link>
                    <Link
                      href="mailto: contact@yubiai.market"
                    >
                      {t("Contact Us")}
                    </Link>
                    <Link
                      href={"https://app.yubiai.market/help/terms-and-conditions"}

                    >
                      {t("Terms of Service")}
                    </Link>
                    <Link
                      href={"/privacypolicy"}
                      style={{ textAlign: "center" }}
                    >
                      {t("Privacy Policy")}
                    </Link>
                  </Flex>
                  <Box

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
                      <Text color={txtColorLaCo} fontSize={"18px"} fontWeight={"700"}
                        textAlign={"center"}>{t("OUR COMMUNITY")}</Text>
                      <Container
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"space-between"}>
                        <Stack direction={"column"} spacing={2}>
                          <SocialButton label={"Telegram"} href={"https://t.me/yubiai"}>
                            <FaTelegramPlane fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                          <SocialButton label={"Linktree"} href={"https://linktr.ee/Yubiai"}>
                            <SiLinktree fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                          <SocialButton
                            label={"Twitter"}
                            href={"https://github.com/yubiai"}
                          >
                            <FaGithub fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                        </Stack>
                        <Stack direction={"column"} spacing={2}>
                          <SocialButton
                            label={"Discord"}
                            href={"https://discord.gg/a9CQKJXb8X"}
                          >
                            <FaDiscord fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                          <SocialButton
                            label={"Twitter"}
                            href={"https://twitter.com/YubiaiM"}
                          >
                            <FaTwitter fontSize={45} color={txtColorLaCo} />
                          </SocialButton>
                          <SocialButton
                            label={"YouTube"}
                            href={"https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA"}
                          >
                            <FaYoutube fontSize={45} color={txtColorLaCo} />
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

                  >
                    <LogoYblue />
                    <Stack direction={"column"} spacing={2}>
                      <Text textAlign={"center"}><span style={{ color: txtColorLaCo }}>Yubiai </span>-  {t("the first")}.</Text>
                      <Text color="black" fontWeight={"600"} textAlign={"center"}>
                        © {new Date().getFullYear()} Yubiai Marketplace. {t("All rights reserved")}
                      </Text>
                    </Stack>
                  </Flex>
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
