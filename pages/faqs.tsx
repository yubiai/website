import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import BuyerFaqCard from "../components/Cards/buyerFaqCard";
import SellerFaqCard from "../components/Cards/sellerFaqCard";
import HeroFather from "../components/Layouts/HeroFather";

const Faqs = () => {
  return (
    <>
      <HeroFather titleHead={"Yubiai Landing - Faqs"} titleFirst={"FAQ"} titleSecond={""} description={"asdasd"}> 
          <Stack direction={["column", "row"]} spacing={{base: "280px", md: "24px"}} mt="1em">
              <BuyerFaqCard />
              <SellerFaqCard />
          </Stack>
      </HeroFather>
    </>
  );
};

export default Faqs;
