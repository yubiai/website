import { Flex, HStack, Text, Image } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";



interface itemActions {
  image: string,
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
      color={"#00BCD4"}
      
      transition="transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out, fill 0.3s ease-in-out"
      _hover={{
        color: "white",
        backgroundColor: "#00BCD4",
        transform: "translateY(-40px)"
        
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
          fontSize={"36px"}
          fontWeight="700"
          lineHeight={1}
          textAlign={"center"}
          height={"72px"}
        >
          {item.title}
        </Text>
        <Text
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
