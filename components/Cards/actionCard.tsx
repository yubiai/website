import { Flex, HStack, Text, Image } from "@chakra-ui/react";



interface itemActions {
  image: string,
  title: string;
  info: string;

}

const ActionCard = ({ item }: { item: itemActions }) => {
  return (
    <Flex
      height={{ base: "420px", md: "480px", lg: "492px" }}
      width={{ base: "full", md: "360px", lg: "388px" }}
      borderRadius="20px"
      bg={"white"}
      color={"#00BCD4"}

      transition="transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out, fill 0.3s ease-in-out"
      _hover={{
        color: "white",
        backgroundColor: "#00BCD4",
        transform: "translateY(-20px)"

      }}
      className={"parent"}
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
          fontSize={{base:"26px", sm:"26px", md: "28px", lg:"36px"}}
          fontWeight="700"
          lineHeight={1}
          textAlign={"center"}
          height={"72px"}
        >
          {item.title}
        </Text>
        <Text
          fontSize={{base:"16px", sm:"18px", md: "18px", lg:"20px"}}
          fontWeight="300"
          textAlign={"center"}
          marginTop={{ base: "1px", sm: "10px", md: "20px", lg:"20px" }}
          width={"90%"}
        >
          {item.info}
        </Text>
      </HStack>
    </Flex>

  );
};

export default ActionCard; 
