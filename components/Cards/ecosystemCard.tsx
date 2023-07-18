import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";

interface itemEcosystem {
  image: string;
  title: string;
  info: string;
  link: string;
}

const EcosystemCard = ({ item }: { item: itemEcosystem }) => {
  return (
    <Box
      height={{ base: "full", md: "360px", lg: "360px" }}
      padding="1em"
      borderRadius="5px"
      boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
      bg={"white"}
      opacity={0.88}
    >
      <Link href={item.link} isExternal>
        <HStack>
          <Image
            w={"75px"}
            h={"75px"}
            m="5px"
            alt={"Logo"}
            src={item.image}
            fallbackSrc={item.image}
          />
          <Text color="#00BCD4" fontSize={"24px"} fontWeight="800">
            {item.title}
          </Text>
        </HStack>
      </Link>

      <Box>
        <Text color="#00BCD4" fontSize={"15px"} mt="10px">
          {item.info}
        </Text>
      </Box>
    </Box>
  );
};

export default EcosystemCard;
