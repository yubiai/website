import { Box, Center, Heading, Text } from "@chakra-ui/react";

const BuyerFaqCard = () => {
  return (
    <Box
      id="buyerSection"
      width={{ base: "100%", md: "50%" }}
      position={"relative"}
      height={{ base: "890px", md: "840px" }}
      padding={"1.5em"}
      borderRadius={"30px"}
      boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
      backgroundColor={" rgba(0, 22, 100, 0.55)"}
      color="white"
    >
      <Center>
        <Heading fontSize={"3xl"}>
          If you are a buyer
        </Heading>
      </Center>
      <Heading fontSize={"2xl"} mt="1em">
        <Text>How do I start buying?</Text>
      </Heading>
      <Text mt={"1em"}>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>1. Explore listings:</a> Once you&apos;re logged in, browse through the available listings to find the services you&apos;re interested in. You can search for specific categories to refine your search.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>2. View listing details:</a> Click on a listing to view more information about the service, including the description, price, and any additional details provided by the seller. Take your time to review the details and ensure it meets your requirements.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>3. Contact the seller:</a> If you have any questions or need more information, you can use the platform chat to communicate directly with the seller. This will help you clarify any doubts and discuss the service in more detail as well as secure evidence in case of dispute.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>4. Make a purchase:</a> When you&apos;re ready to proceed, you can initiate the purchase by following the seller&apos;s instructions. Yubiai currently uses xDAI(1xDAI = 1USD)cryptocurrency for transactions, so ensure you have sufficient xDAI in your Metamask wallet to complete the payment.
      </Text>
      <Text>
        <a style={{ fontWeight: "700", fontStyle: "italic" }}>5. Confirm the transaction:</a> To protect both buyers and sellers, the payment will be held in escrow until the transaction is completed successfully. Follow the instructions provided in the platform to confirm and finalize the transaction.
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
