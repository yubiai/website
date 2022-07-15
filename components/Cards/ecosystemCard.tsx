import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";

interface itemEcosystem {
    image: string;
    title: string;
    info: string;
  }

const EcosystemCard = ({
  item
}: {
  item: itemEcosystem
}) => {
  return (
    <Box
      height={{base: "full", md: "360px", lg: "330px"}}
      padding="1em"
      borderRadius="5px"
      boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
      bg={"#191b30"}
    >
      <HStack>
        <Link href={"/"}>
          <Image
            w={"75px"}
            h={"75px"}
            m="5px"
            alt={"Logo"}
            src={item.image}
            fallbackSrc={item.image}
          />
        </Link>
        <Text color="white" fontSize={"24px"} fontWeight="800">{item.title}</Text>
      </HStack>
      <Box>
        <Text color="white" fontSize={"15px"} mt="10px">{item.info}</Text>
      </Box>
    </Box>
  );
};

export default EcosystemCard;
