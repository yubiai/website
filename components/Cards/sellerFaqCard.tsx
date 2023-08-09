import { Box, Center, Heading, Text } from "@chakra-ui/react";


interface SellerFaqCardProps {
  t: (key: string) => string;
  lng: string; 
}

const SellerFaqCard: React.FC<SellerFaqCardProps> = ({ t, lng }) => {
  const isSpanish = lng === "es";
  //console.log("idioma es: " + lng);
  const height = isSpanish
    ? { base: "1850px", md: "1730px", lg: "1736px" }
    : { base: "1550px", md: "1520px", lg: "1490px" };
  return (
    <Box
      id="sellerSection"
      width={{ base: "100%", md: "50%" }}
      position={"relative"}
      height={height}
      padding={"1.5em"}
      borderRadius={"30px"}
      boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
      backgroundColor={" rgba(0, 22, 100, 0.55)"}
      color="white"
    >
      <Center>
        <Heading fontSize={"3xl"}>
          <Text>{t("If you are a seller")}</Text>
        </Heading>
      </Center>
      <Heading fontSize={"2xl"} mt="1em">
        <Text >{t("How do I start selling?")}</Text>
      </Heading>
      <Text mt="1em">
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>1. {t("Create a service listing")}:</a> {t("Once logged")}.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>2. {t("Manage your listings")}:</a> {t("You can view")}.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>3. {t("Respond to buyer inquiries")}:</a> {t("As potential")}.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>4. {t("Receive purchase requests")}:</a> {t("When a buyer")}.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>5. {t("Complete the service")}:</a> {t("Once the buyer")}.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>6. {t("Confirm transaction completion")}:</a> {t("After the service")}.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>7. {t("Receive feedback")}:</a> {t("After the transaction")}.
      </Text>
      <Text>
        {t("By following")}.
      </Text>
      {/* <Heading fontSize={"2xl"} mt="1em">
        <Text>What is `UBI Burning Amount`?</Text>
      </Heading>
      <Text>
        UBI Burning Amount lets you choose on a dinamyc and optional way how
        much % will be deducted and sent from the total price of the item you
        are selling to the UBI Burner to increase the value of $UBI.
      </Text> */}
    </Box>
  );
};

export default SellerFaqCard;
