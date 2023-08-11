import {
  Box, Heading, Link, Stack, Text, Divider, Flex,
  useColorMode
} from "@chakra-ui/react";
import BuyerFaqCard from "../components/Cards/buyerFaqCard";
import SellerFaqCard from "../components/Cards/sellerFaqCard";
import HeroFather from "../components/Layouts/HeroFather";
import useTranslation from "next-translate/useTranslation";


const Faq = () => {
  const { t } = useTranslation("faq");
  const { colorMode } = useColorMode();
  const textColor = colorMode === "light" ? "#001664" : "white";
  const txtColorLaCo = colorMode === "light" ? "#001664" : "#00BCD4";
  const bgColorFaq = colorMode === "light" ? "#0016648c" : "#00BCD480";
  const bgColorOnHover = colorMode === "dark" ? "#00BCD4" : "#0016648c";
  const { lang } = useTranslation('common');

  return (
    <>

      <HeroFather
        titleHead={"Yubiai Landing - Faqs"}
        titleFirst={t("Here are some of the frequent asked questions")}
        titleSecond={""}
        description={""}
      >
        <Flex flexDir={"column"} w={"100%"}>
          <Flex
            flexDir={"column"}
            w={{ base: "100%", md: "100%", lg: "799px" }}


          >
            <Text
              fontSize={"24px"}
              color={"white"}
            >
              {t("For any other questions, don’t hesitate to contact us at")}{" "}
              <Link textDecoration={"underline"} href="mailto:contact@yubiai.market">contact@yubiai.market</Link> {t("or on our social media")}.
            </Text>
            <Box
              padding={"1.5em"}
              //borderRadius={"5px"}
              //boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
              //bg="#191b30"
              color="white"
            >
              <Heading>
                <Text
                  fontSize={"42px"}
                  color="white"
                  _hover={{color:txtColorLaCo}}
                  >{t("What is Yubiai?")}</Text>
              </Heading>
              <Text mt={"1em"} color={textColor}>
                {t("Yubiai is a decentralized marketplace that allows anyone with a wallet in metamask, and soon smart wallets, to buy and sell services using crypto")}.
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text fontSize={"42px"} color="white"  _hover={{color:txtColorLaCo}}>{t("How do I use Yubiai?")}</Text>
              </Heading>
              <Text mt={"1em"} color={textColor}>
                <a style={{ fontWeight: "600" }}>1. {t("Set up a Metamask wallet")}:</a> {t("If you")} <Link href="https://metamask.io/" color={txtColorLaCo} isExternal>{t("Metamask website")}</Link>  {t("and install the extension for your web browser or use the MetaMask Mobile Browser from the MetaMask mobile app")}.
              </Text>
              <Text color={textColor}>
                <a style={{ fontWeight: "600" }}>2. {t("Visit Yubiai")}:</a> {t("Go to the")} <Link href="https://app.yubiai.market/" color={txtColorLaCo} isExternal>{t("Yubiai app")}</Link>
              </Text>
              <Text color={textColor}>
                <a style={{ fontWeight: "600" }}>3. {t("Login")}:</a> {t("Connect your")}
              </Text>
              <Text color={textColor}>
                <a style={{ fontWeight: "600" }}>4. {t("Complete profile information")}:</a> {t("Head on")}.
              </Text>
              <Text color={textColor}>
                {t("Follow the instructions as")} <Link href="#sellerSection" color={txtColorLaCo}>{t("Seller")}</Link> {t("or")} <Link href="#buyerSection" color={txtColorLaCo}>{t("Buyer")}</Link> {t("below")}.
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text fontSize={"42px"} color="white"  _hover={{color:txtColorLaCo}}>{t("How does Yubiai work?")}</Text>
              </Heading>
              <Text mt={"1em"} color={textColor}>
                {t("Yubiai utilizes multiple layers of security to ensure a safe and trustworthy marketplace environment")}:
              </Text>
              <Text mt={"0.25em"} color={textColor}>
                <a style={{ fontWeight: "600" }}>{t("Interface Security")}:</a> {t("Yubiai employs")}.
              </Text>
              <Text color={textColor}>
                <a style={{ fontWeight: "600" }}>{t("Kleros Escrow")}:</a> {t("The Kleros Escrow")}.
              </Text>
              <Text color={textColor}>
                <a style={{ fontWeight: "600" }}>{t("Dispute Resolution")}:</a> {t("In the event")}.
              </Text>
              <Text color={textColor}>
                <a style={{ fontWeight: "600" }}>{t("Verified Accounts")}:</a> {t("Yubiai implements")}.
              </Text>
              <Text color={textColor}>
                <a style={{ fontWeight: "600" }}>{t("Curate (Not yet implemented)")}:</a> {t("Yubiai plans")}.
              </Text>
              <Text mt={"0.25em"} color={textColor}>
                {t("By combining")}.
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text fontSize={"42px"} color="white"  _hover={{color:txtColorLaCo}}>{t("I want to invest")}</Text>
              </Heading>
              <Text mt={"1em"} color={textColor}>
                {t("Yes, we are")}.
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text fontSize={"42px"} color="white"  _hover={{color:txtColorLaCo}}>{t("How much you have raised so far?")}</Text>
              </Heading>
              <Text mt={"1em"} color={textColor}>
                {t("So far")}
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text color="white"  _hover={{color:txtColorLaCo}}>{t("Are you incorporated?")}</Text>
              </Heading>
              <Text mt={"1em"} color={textColor}>
                {t("We are in process of being incorporated")}
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text color="white"  _hover={{color:txtColorLaCo}}>{t("I have a question that is not answered here")}.</Text>
              </Heading>
              <Text mt={"1em"} color={textColor}>
                {t("For any other questions, don’t hesitate to contact us at")} <Link href="mailto:contact@yubiai.market" color={txtColorLaCo}>contact@yubiai.market</Link>
              </Text>
              <Divider my={4} borderColor={"black"} />
            </Box>
            <Stack
              direction={["column", "row"]}
              spacing={{ base: "24px", md: "24px" }}
              mt="0.2em"
              mb="2em"
            >
              <BuyerFaqCard t={t} lng={lang} bgColorFaq={bgColorFaq} bgColorOnHover={bgColorOnHover} />
              <SellerFaqCard t={t} lng={lang} bgColorFaq={bgColorFaq} bgColorOnHover={bgColorOnHover} />
            </Stack>
          </Flex>
        </Flex >
      </HeroFather>

    </>
  );
};

export default Faq;
