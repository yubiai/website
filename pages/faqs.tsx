import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import BuyerFaqCard from "../components/Cards/buyerFaqCard";
import SellerFaqCard from "../components/Cards/sellerFaqCard";
import HeroFather from "../components/Layouts/HeroFather";

const Faqs = () => {
  return (
    <>
      <HeroFather>
        <Container maxW={"7xl"}>
          <Stack
            as={Box}
            spacing={{ base: 8, md: 30 }}
            py={{ base: 20, md: 46 }}
          >
            <Heading
              fontWeight={800}
              fontSize={{ base: "2xl", md: "36px" }}
              lineHeight={"normal"}
              color="white"
            >
              Faqs
            </Heading>
          </Stack>
          <Box
            w={{ base: "full", md: "50%" }}
            mt={{ base: "10em", md: "30em" }}
          >
            <Text color={"white"} fontSize="20px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos
              eius non distinctio nisi tenetur vitae omnis earum eaque laborum
              nam, repudiandae mollitia odit. Doloremque error nesciunt velit
              autem eum?
            </Text>
          </Box>

          <Stack direction={["column", "row"]} spacing={{base: "280px", md: "24px"}} mt="1em">
              <BuyerFaqCard />
          
              <SellerFaqCard />
          </Stack>
        </Container>
      </HeroFather>
      <Box h={{ base: "300px", md: "500px" }}></Box>
    </>
  );
};

export default Faqs;
