import { Flex, HStack, Text, Image } from "@chakra-ui/react";

interface itemActions {
  image: string;
  title: string;
  info: string;

}

const ActionCard = ({ item }: { item: itemActions }) => {
  return (
    <Flex
      height={{ base: "full", md: "360px", lg: "492px" }}
      width={{ base: "full", md: "360px", lg: "388px" }}
      borderRadius="20px"
      bg={"white"}

    >
      <HStack flexDirection={"column"}>
        <Image
          w={"130px"}
          h={"125px"}
          m="5px"
          alt={"Logo"}
          src={item.image}
          fallbackSrc={item.image}
          marginTop={"20px"}
        />
        <Text
          color="#00BCD4"
          fontSize={"36px"}
          fontWeight="700"
          lineHeight={1}
          textAlign={"center"}
          height={"72px"}
        >
          {item.title}
        </Text>
        <Text
          color="#00BCD4"
          fontSize={"20px"}
          fontWeight="300"
          textAlign={"center"}
          style={{ marginTop: "20px" }}
          width={"90%"}
        >
          {item.info}
        </Text>
      </HStack>



    </Flex>
  );
};

export default ActionCard; 
