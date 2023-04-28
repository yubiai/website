import { Box, Center, Heading, Text } from "@chakra-ui/react";

const SellerFaqCard = () => {
  return (
    <Box
      width={{ base: "100%", md: "50%" }}
      position={"relative"}
      height={{ base: "660px", md: "400px" }}
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
      Begin by clicking on ´Login´ located at the top right corner. A new window will appear, offering you the option to sign in with either ´Proof of Humanity´ (PoH) or ´Lens´. After you´ve logged in, find the ´Sell´ button located below the search bar in the middle of the navigation area (top middle) and click on it. Follow the steps from Category to Product Images, filling out each field. Once you´ve completed this, click on ´Preview & Submit for review´, verify that all the details are correct, and then click on ´Submit for review´.
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
