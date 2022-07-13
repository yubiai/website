import { Box, Center, Heading, Text } from "@chakra-ui/react";

const SellerFaqCard = () => {
  return (
    <Box
      width={{ base: "100%", md: "50%" }}
      position={"relative"}
      height={{base: "full", md: "700px"}}
      padding={"1.5em"}
      borderRadius={"5px"}
      boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
      bg="#191b30"
      color="white"
    >
      <Center>
        <Heading fontSize={"3xl"}>
          <Text as='u'>Seller</Text>
        </Heading>
      </Center>
      <Heading fontSize={"2xl"}>
        <Text>Faq 1</Text>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum deserunt aliquam praesentium rerum expedita? Veritatis error,
        nihil cupiditate ad iure voluptas maxime modi nesciunt vero et magni
        ullam consectetur.
      </Text>
      <Heading fontSize={"2xl"}>
        <Text>Faq 2</Text>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum deserunt aliquam praesentium rerum expedita? Veritatis error,
        nihil cupiditate ad iure voluptas maxime modi nesciunt vero et magni
        ullam consectetur.
      </Text>
      <Heading fontSize={"2xl"}>
        <Text>Faq 3</Text>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum deserunt aliquam praesentium rerum expedita? Veritatis error,
        nihil cupiditate ad iure voluptas maxime modi nesciunt vero et magni
        ullam consectetur.
      </Text>
      <Heading fontSize={"2xl"}>
        <Text>Faq 4</Text>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        ipsum deserunt aliquam praesentium rerum expedita? Veritatis error,
        nihil cupiditate ad iure voluptas maxime modi nesciunt vero et magni
        ullam consectetur.
      </Text>
      <Heading fontSize={"2xl"}>
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

export default SellerFaqCard;
