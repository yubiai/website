import {
  Box,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const Features = () => {
  return (
    <>
      <Box
        position={"relative"}
        height={{ base: "full", md: "479px" }}
        width={"full"}
        padding={"1.5em"}
        borderRadius={"5px"}
        boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
        backgroundImage={
          "linear-gradient(to bottom, rgba(57, 61, 92, 0.94) 2%, rgba(39, 48, 122, 0) 100%)"
        }
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          color={"white"}
          fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
        >
          <Text as={"span"} position={"relative"}>
            Features
          </Text>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt="10px">
          <Box>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"white"}
              fontSize={{ base: "3xl", sm: "15px", lg: "20px" }}
            >
              <Text fontSize={"1.2em"}>2022</Text>
              <Text fontSize={"1em"} mt={"0.7em"}>
                Q3
              </Text>
            </Heading>

            <UnorderedList color="white" mt="0.7em">
              <ListItem>Pre-Testing</ListItem>
              <ListItem>Payments</ListItem>
              <ListItem>Notifications</ListItem>
              <ListItem>Token</ListItem>
              <ListItem>Reputation</ListItem>
            </UnorderedList>
            <Heading
              mt="10px"
              lineHeight={1.1}
              fontWeight={600}
              color={"white"}
              fontSize={{ base: "3xl", sm: "15px", lg: "20px" }}
            >
              <Text fontSize={"1em"} mt={"0.8em"}>
                Q4
              </Text>
            </Heading>

            <UnorderedList color="white" mt="0.7em">
              <ListItem >Tootip guide help</ListItem>
              <ListItem>Curate</ListItem>
              <ListItem>Testing</ListItem>
              <ListItem>Dashboard Admin</ListItem>
              <ListItem>NFT minting & trading</ListItem>
              <ListItem>Deploy plan (Gnosis & Polygon)</ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"white"}
              fontSize={{ base: "3xl", sm: "15px", lg: "20px" }}
            >
              <Text fontSize={"1.2em"}>2023</Text>
              <Text fontSize={"1em"} mt={"0.7em"}>
                Q1
              </Text>
            </Heading>

            <UnorderedList color="white" mt="0.7em">
              <ListItem> Products module</ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Features;
