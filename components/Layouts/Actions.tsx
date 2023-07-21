import {  SimpleGrid } from "@chakra-ui/react";
import ActionCard from "../Cards/actionCard";
import UploadIcon from '../Icons/uploadIcon'; 
import ReactDOMServer from "react-dom/server";
import Icon from "../Icons/TelephoneIcon";

const uploadIconDataUrl = URL.createObjectURL(
  new Blob([ReactDOMServer.renderToStaticMarkup(<Icon
     fill={"#001664"}
     />)], {
    type: "image/svg+xml",
  })
);

const listActions = {
  upload: {
    image: uploadIconDataUrl,
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
      
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={5} m="2em">
          <ActionCard item={listActions.upload} />
          <ActionCard item={listActions.search} />
          <ActionCard item={listActions.connect} />
        </SimpleGrid>
      
    </>
  );
};

export default Actions;
