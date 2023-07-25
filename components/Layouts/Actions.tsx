import { SimpleGrid, Box } from "@chakra-ui/react";
import ActionCard from "../Cards/actionCard";

const listActions = {
  upload: {
    image: "/static/featuresIcons/uploadIcon.svg",
    title: "Upload your work",
    info: "Is it being an UX/UI designer? Making memes? Working as an Scuba diving professor? We want to know your talent, let us know what you’re best at and wait for future clients to contact you!"
  },
  search: {
    image: "/static/featuresIcons/searchIcon.svg",
    title: "Search your best fit",
    info: "Whatever you’re looking for, we’re sure you’ll find it in Yubiai - Yubiai is a pioneering Web3 marketplace that connects service providers and clients to conduct secure and efficient transactions."
  },
  connect: {
    image: "/static/featuresIcons/connectIcon.svg",
    title: "Connect and start working",
    info: "Yubiai's mission is to empower entrepreneurs and individuals by providing a secure web3 marketplace environment where they can interact, transact, and innovate safely. Once you’ve find what you need, all that rest is start working!"
  }
};

const Actions = () => {
  return (
    <>

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3 }}
        spacing={5}
        m="2em"

      >
        <Box py={{ base: "1.2rem", md: "0", lg: "0" }}>
          <ActionCard item={listActions.upload} />
        </Box>
        <ActionCard item={listActions.search} />
        <Box py={{ base: "1.2rem", md: "0", lg: "0" }}>
          <ActionCard item={listActions.connect} />
        </Box>
      </SimpleGrid>

    </>
  );
};

export default Actions;
