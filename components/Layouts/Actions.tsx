import { SimpleGrid, Box } from "@chakra-ui/react";
import ActionCard from "../Cards/actionCard";
import useTranslation from 'next-translate/useTranslation';

const listActions = {
  upload: {
    image: "/static/featuresIcons/uploadIcon.svg",
    title: "uploadTitle",
    info: "uploadInfo"
  },
  search: {
    image: "/static/featuresIcons/searchIcon.svg",
    title: "searchTitle",
    info: "searchInfo"
  },
  connect: {
    image: "/static/featuresIcons/connectIcon.svg",
    title: "connectTitle",
    info: "connectInfo"
  }
};

const Actions = () => {
  const { t } = useTranslation("home");
  // Translate the title and info for each card before rendering
  listActions.upload.title = t("Upload your work");
  listActions.upload.info = t("Is it being an UX/UI designer");

  listActions.search.title = t("Search your best fit");
  listActions.search.info = t("Whatever you’re looking for");

  listActions.connect.title = t("Connect and start working");
  listActions.connect.info = t("Yubiai's mission");

  return (
    <>

      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
        spacing={5}
        h={{ base: "auto", sm: "auto", md: "auto", lg: "auto", xl: "auto" }}
        m={{ base: "0 2em", sm: "0 2em", md: "2em", lg: "1em" }}

      >
        <Box mt={{ base: "2em", md: "0", lg: "0" }}>
          <ActionCard item={listActions.upload} />
        </Box>
        <Box mt={{ base: "0.75em", md: "1.5em", lg: "0" }}>
          <ActionCard item={listActions.search} />
        </Box>
        <Box
          height={{ base: "100%", md: "480px", lg: "492px" }}
          mt={{ base: "0.75em", md: "1.5em", lg: "0" }}

        >
          <ActionCard item={listActions.connect} />
        </Box>
      </SimpleGrid>

    </>
  );
};

export default Actions;
