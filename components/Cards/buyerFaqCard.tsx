import { Box, Center, Heading, Text } from "@chakra-ui/react";

const BuyerFaqCard = () => {
  return (
    <Box
      width={{base: '100%', md: "50%"}}
      position={"relative"}
      height={"700px"}
      padding={"1.5em"}
      borderRadius={"5px"}
      boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
      backgroundImage={
        "linear-gradient(to bottom, rgba(57, 61, 92, 0.94) 2%, rgba(39, 48, 122, 0) 100%)"
      }
      color="white"
    >
      <Center>
        <Heading as="h2" size="2xl">
          Buyer
        </Heading>
      </Center>
      <Heading as="h4" mt="5px">
        <Text>Faq 1</Text>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum deserunt aliquam praesentium rerum expedita? Veritatis error,
        nihil cupiditate ad iure voluptas maxime modi nesciunt vero et magni
        ullam consectetur.
      </Text>
      <Heading as="h4" mt="5px">
        <Text>Faq 2</Text>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum deserunt aliquam praesentium rerum expedita? Veritatis error,
        nihil cupiditate ad iure voluptas maxime modi nesciunt vero et magni
        ullam consectetur.
      </Text>
      <Heading as="h4" mt="5px">
        <Text>Faq 3</Text>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum deserunt aliquam praesentium rerum expedita? Veritatis error,
        nihil cupiditate ad iure voluptas maxime modi nesciunt vero et magni
        ullam consectetur.
      </Text>
      <Heading as="h4" mt="5px">
        <Text>Faq 4</Text>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum deserunt aliquam praesentium rerum expedita? Veritatis error,
        nihil cupiditate ad iure voluptas maxime modi nesciunt vero et magni
        ullam consectetur.
      </Text>
      <Heading as="h4" mt="5px">
        <Text>Faq 5</Text>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum deserunt aliquam praesentium rerum expedita? Veritatis error,
        nihil cupiditate ad iure voluptas maxime modi nesciunt vero et magni
        ullam consectetur.
      </Text>
    </Box>
  );
};

export default BuyerFaqCard;
