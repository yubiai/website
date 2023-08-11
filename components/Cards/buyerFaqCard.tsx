import { Box, Center, Heading, Text } from "@chakra-ui/react";

interface BuyerFaqCardProps {
  t: (key: string) => string;
  lng: string;
  bgColorFaq: string;
  bgColorOnHover: string;
}

const BuyerFaqCard: React.FC<BuyerFaqCardProps> = ({ t, lng, bgColorFaq, bgColorOnHover }) => {
  const isSpanish = lng === "es";
  //console.log("idioma es: " + lng);
  const height = isSpanish
    ? { base: "970px", md: "940px" }
    : { base: "890px", md: "840px" };
  return (
    <Box
      id="buyerSection"
      width={{ base: "100%", md: "50%" }}
      position={"relative"}
      height={height}
      padding={"1.5em"}
      borderRadius={"30px"}
      boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
      backgroundColor={bgColorFaq}
      color="white"
      _hover={{ backgroundColor: "white", color: bgColorOnHover }}
    >
      <Center>
        <Heading fontSize={"3xl"}>
          {t("If you are a buyer")}
        </Heading>
      </Center>
      <Heading fontSize={"2xl"} mt="1em">
        <Text>{t("How do I start buying?")}</Text>
      </Heading>
      <Text mt={"1em"}>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>1. {t("Explore listings")}:</a> {t("Once you")}.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>2. {t("View listing details")}:</a> {t("Click on")}.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>3. {t("Contact the seller")}:</a> {t("If you have")}.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>4. {t("Make a purchase")}:</a> {t("When you")}.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>5. {t("Confirm the transaction")}:</a> {t("To protect")}.
      </Text>
      {/* <Heading fontSize={"2xl"} mt="1em">
        <Text>What is `UBI Burning Amount`?</Text>
      </Heading>
      <Text>
        UBI Burning Amount lets you choose on a dinamyc and optional way how
        much % will be deducted and sent from the total price of the item you
        are buying to the UBI Burner to increase the value of $UBI.
      </Text> */}
    </Box>
  );
};

export default BuyerFaqCard;
