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
    <Box
      height="90px"
      width={{base: 'full', md: '50%'}}
      mt={"1em"}
      borderRadius="5px"
      boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
      backgroundImage="linear-gradient(to bottom, rgba(57, 61, 92, 0.94) 2%, rgba(39, 48, 122, 0) 100%)"
    >
      <Flex justifyContent={"space-between"} position="relative">
        <HStack>
          <Link href={item.link} isExternal>
            <Image
              w={"50px"}
              h={"50px"}
              m="0.8em"
              alt={"Logo"}
              src={item.image}
              fallbackSrc={item.image}
            />
          </Link>
          <Text color="white" fontSize={"24px"} fontWeight="800">
            {item.title}
          </Text>
        </HStack>
        <Text color="white">
          <Button bg="transparent" _hover={{
            bg:"gray.600"
          }}><Link href={item.link} isExternal>
          <ExternalLinkIcon /></Link></Button>
        </Text>
      </Flex>

    </Box>
  );
};

export default NetworkSocialCard;
