import { Box, HStack, Image, Link, Text } from "@chakra-ui/react";

interface itemEcosystem {
  image: string;
  title: string;
  info: string;
  link: string;
}

const TeamCard = ({ item }: { item: itemEcosystem }) => {
  return (
    <Box
      height={{ base: "full", md: "360px", lg: "auto" }}
      padding="1em"
      borderRadius="30px"
      boxShadow="20px 12px 5px 5px rgba(0, 0, 0, 0.25)"
      bg={"white"}
      opacity={0.88}

      color={"#00BCD4"}

      transition="transform 0.3s ease-in-out, background-color 0.3s ease-in-out, color 0.3s ease-in-out, fill 0.3s ease-in-out"
      _hover={{
        color: "white",
        backgroundColor: "#00BCD4",
        transform: "translateY(-20px)"
      }}
      className={"parent"}
    >
      <Link
        href={item.link}
        isExternal
        _hover={{
          textDecoration: "none"
        }}
      >
        <HStack
          display={"flex"}
          flexDirection={"column"}>
          <Image
            objectFit={"cover"}
            w={{ base:"126px", md: "126px", lg: "230px" }}
            h={{ base:"143px", md: "143px", lg: "262px" }}
            objectPosition={"center 40%"}
            clipPath={{ base:"circle(71px at 59px 49px)", md: "circle(71px at 59px 49px)", lg: "circle(113px at 120px 119px)" }}
            m="5px"
            alt={"Logo"}
            src={item.image}
            fallbackSrc={item.image}
          />
          <Text
            textAlign={"center"}
            fontSize={{ md: "14px", lg: "24px" }} fontWeight="700">
            {item.title}
          </Text>
        </HStack>
      </Link>

      <Box>
        <Text

          fontSize={"17px"}
          mt="10px">
          {item.info}
        </Text>
      </Box>
    </Box>
  );
};

export default TeamCard;
