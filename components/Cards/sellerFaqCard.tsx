import { Box, Center, Heading, Text } from "@chakra-ui/react";

const SellerFaqCard = () => {
  return (
    <Box
      width={{ base: "100%", md: "50%" }}
      position={"relative"}
      height={{ base: "900px", md: "900px" }}
      padding={"1.5em"}
      borderRadius={"5px"}
      boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
      bg="#191b30"
      color="white"
    >
      <Center>
        <Heading fontSize={"3xl"}>
          <Text as="u">Seller</Text>
        </Heading>
      </Center>
      <Heading fontSize={"2xl"} mt="1em">
        <Text>How do I start selling?</Text>
      </Heading>
      <Text>
        Create a service listing: Once logged in, and with your profile information filled, click on the Sell button below the search field on the navigation bar. Provide a clear and detailed description of the service you want to offer, including pricing, delivery timeframe, and any other relevant information. This will help potential buyers understand what you&apos;re offering.
      </Text>
      <Text>
        Manage your listings: You can view and manage your listings by clicking on the Profile Icon and Listings. Here, you can edit & send for review your listings or pause it by selecting Unpublish as needed.
      </Text>
      <Text>
        Respond to buyer inquiries: As potential buyers have questions or require more information, you&apos;ll receive notifications through the platform. Make sure to respond promptly and provide helpful answers to their queries. This will help build trust and facilitate the buying process
      </Text>
      <Text>
        Receive purchase requests: When a buyer is interested to hire you, they can start a chat within the listing they are on, and a chat will open up between both parties to settle the specific requirements of the serivce. Be prepared to receive purchase requests and communicate with buyers to finalize the transaction.
      </Text>
      <Text>
        Complete the service: Once the buyer has confirmed the transaction and send the payment to the escrow, you can proceed with providing the service as agreed upon. Communicate effectively with the buyer, deliver the service within the specified timeframe, and address any additional requirements or questions they may have.
      </Text>
      <Text>
        Confirm transaction completion: After the service has been successfully delivered, follow the instructions provided by the platform to confirm the completion of the transaction. This will release the payment from escrow and ensure a smooth and secure transaction for both parties.
      </Text>
      <Text>
        Receive feedback: After the transaction is completed, the buyer will have the option to leave feedback for your service. Feedback plays an important role in building trust and credibility on the platform. Provide excellent service to encourage positive feedback from buyers.
      </Text>
      <Text>
        By following these steps as a Seller on Yubiai, you can showcase your services, communicate with potential buyers, complete transactions securely, and receive feedback to enhance your reputation within the Yubiai community.
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
