import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import EcosystemCard from "../components/Cards/ecosystemCard";
import HeroFather from "../components/Layouts/HeroFather";

const listEcosystem = {
  eth: {
    image: "/static/ecosystem/ethlogo.png",
    title: "Ethereum",
    info: "Ethereum is a technology for building apps and organizations, holding assets, transacting and communicating without being controlled by a central authority. There is no need to hand over all your personal details to use Ethereum - you keep control of your own data and what is being shared.",
  },
  poh: {
    image: "/static/ecosystem/poh.webp",
    title: "Proof Of Humanity",
    info: "Proof of Humanity, a system combining webs of trust, with reverse Turing tests, and dispute resolution to create a sybil-proof list of humans.",
  },
  kleros: {
    image: "/static/ecosystem/kleros.png",
    title: "Kleros",
    info: "Kleros is an open source online dispute resolution protocol which uses blockchain and crowdsourcing to fairly adjudicate disputes.",
  },
  metamask: {
    image: "/static/ecosystem/metamasklogo.png",
    title: "Metamask",
    info: "A crypto wallet & gateway to blockchain apps, log in with your metamask wallet.",
  },
  ubi: {
    image: "/static/ecosystem/ubilogo.svg",
    title: "UBI",
    info: "UBI is a Universal Basic Income token that gets streamed using Ethereum to verified Proof of Humanity profiles. From a grandparent in Buenos Aires to young children in Mumbai: everyone gets the same amount.",
  },
  gnosis: {
    image: "/static/ecosystem/gnosislogo.svg",
    title: "Gnosis",
    info: "Gnosis builds new market mechanisms for decentralized finance. Their three interoperable product lines allow you to securely create, trade, and hold digital assets on Ethereum at very cheap gas fees.",
  },
  polygon: {
    image: "/static/ecosystem/polygonlogo.svg",
    title: "Polygon",
    info: "Polygon is a decentralised Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.",
  },
  arbitrum: {
    image: "/static/ecosystem/arbitrumlogo.svg",
    title: "Arbitrum",
    info: "Arbitrum is a type of technology known as an optimistic rollup. This technology allows smart contracts from Ethereum to scale by sending messages between smart contracts and those in the Arbitrum second chain layer.",
  },
};

const Ecosystem = () => {
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
              Explore the Yubiai <br />
              <Text as={"span"} color={"white"}>
                ecosystem
              </Text>
            </Heading>
          </Stack>
          <Box
            w={{ base: "full", md: "50%" }}
            mt={{ base: "10em", md: "30em" }}
          >
            <Text color={"white"} fontSize="20px">
              Yubiai integrates different protocols to give his users the best
              UX and security when using the platform
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt="3em">
            <EcosystemCard item={listEcosystem.eth} />
            <EcosystemCard item={listEcosystem.poh} />
            <EcosystemCard item={listEcosystem.kleros} />
          </SimpleGrid>
        </Container>
      </HeroFather>
      <Container maxW={"7xl"}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <EcosystemCard item={listEcosystem.metamask} />
          <EcosystemCard item={listEcosystem.ubi} />
          <EcosystemCard item={listEcosystem.gnosis} />
          <EcosystemCard item={listEcosystem.polygon} />
          <EcosystemCard item={listEcosystem.arbitrum} />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Ecosystem;
