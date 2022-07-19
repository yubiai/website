import { Box, Center, Heading, Text } from "@chakra-ui/react";

const BuyerFaqCard = () => {
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
        <Heading as="u" fontSize={"3xl"}>
          Buyer
        </Heading>
      </Center>
      <Heading fontSize={"2xl"} mt="1em">
        <Text>How do I start buying?</Text>
      </Heading>
      <Text>
        Start by clicking on “Connect” on the top right corner then head over to
        the search bar on the middle of the navigation area, search whatever you
        want and then click on the item card that will appear.
      </Text>
      <Heading fontSize={"2xl"} mt="1em">
        <Text>What is `UBI Burning Amount`?</Text>
      </Heading>
      <Text>
        UBI Burning Amount lets you choose on a dinamyc and optional way how
        much % will be deducted and sent from the total price of the item you
        are buying to the UBI Burner to increase the value of $UBI.
      </Text>
    </Box>
  );
};

export default BuyerFaqCard;
