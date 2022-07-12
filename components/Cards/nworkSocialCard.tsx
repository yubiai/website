import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";

interface itemNwSocial {
  image: string;
  title: string;
  info: string;
  link: string;
}

const NetworkSocialCard = ({ item }: { item: itemNwSocial }) => {
  return (
    <Link href={item.link} isExternal>
      <Box
        height="full"
        width="full"
        mt={"1em"}
        bg={"#191b30"}
        borderRadius="5px"
        boxShadow="0 5px 5px 0 rgba(0, 0, 0, 0.25)"
        cursor={"pointer"}
        _hover={{
          bg: "red",
          textDecorationLine:"none"
        }}
      >
        <Flex justifyContent={"space-between"} position="relative">
          <HStack>
            <Image
              w={"50px"}
              h={"50px"}
              m="0.8em"
              alt={"Logo"}
              src={item.image}
              fallbackSrc={item.image}
            />
            <Text color="white" fontSize={"24px"} fontWeight="800">
              {item.title}
            </Text>
          </HStack>
          <Text color="white" m="0.7em">
            <ExternalLinkIcon />
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default NetworkSocialCard;
