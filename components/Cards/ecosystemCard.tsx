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
      height="300px"
      padding="1em"
      borderRadius="5px"
      boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
      backgroundImage="linear-gradient(to bottom, rgba(57, 61, 92, 0.94) 2%, rgba(39, 48, 122, 0) 100%)"
    >
      <HStack>
        <Link href={"/"}>
          <Image
            w={"75px"}
            h={"75px"}
            m="1em"
            alt={"Logo"}
            src={item.image}
            fallbackSrc={item.image}
          />
        </Link>
        <Text color="white" fontSize={"24px"} fontWeight="800">{item.title}</Text>
      </HStack>
      <Box>
        <Text mt="1em" color="white" fontSize={"15px"}>{item.info}</Text>
      </Box>
    </Box>
  );
};

export default EcosystemCard;
