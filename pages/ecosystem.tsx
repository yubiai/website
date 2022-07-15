import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import EcosystemCard from "../components/Cards/ecosystemCard";
import HeroFather from "../components/Layouts/HeroFather";

const listEcosystem = {
  eth: {
    image: "/static/ecosystem/ethlogo.png",
    title: "Ethereum",
    info: "Ethereum is a technology for building apps and organizations, holding assets, transacting and communicating without being controlled by a central authority. Ethereum has its own cryptocurrency, Ether, which is used to pay for certain activities on the Ethereum network. By deploying on ethereum we benefit from the highest securities that this blockchain has to offer for anything that is worth the price.",
  },
  poh: {
    image: "/static/ecosystem/poh.webp",
    title: "Proof Of Humanity",
    info: "Proof of Humanity, a system combining webs of trust, with reverse Turing tests, and dispute resolution to create a sybil-proof list of humans. This is Yubiai's main authentication layer, by leveraging proof of humanity you know for sure that you are operating with a real human.",
  },
  kleros: {
    image: "/static/ecosystem/kleros.png",
    title: "Kleros",
    info: "Kleros is an open source online dispute resolution protocol which uses blockchain and crowdsourcing to fairly adjudicate disputes. We use Kleros escrow, dispute resolution and curate as security and guarantee to make easier and safer transactions.",
  },
  metamask: {
    image: "/static/ecosystem/metamasklogo.png",
    title: "Metamask",
    info: "A crypto wallet & gateway to blockchain apps, log in with your metamask wallet that you used to register on PoH and start buying and selling on Yubiai.",
  },
  ubi: {
    image: "/static/ecosystem/ubilogo.svg",
    title: "UBI",
    info: "UBI is a Universal Basic Income token that gets streamed using Ethereum to verify Proof of Humanity profiles. From a grandparent in Buenos Aires to young children in Mumbai: everyone gets the same amount. As a registered user of ProofOfHumanity you will receive $UBI tokens, we dedicate a default % of the fee of every transaction to the purchase and burn of $UBI, later also we are checking ways that people can use their  $UBIs as collateral for loans to buy on Yubiai.",
  },
  gnosis: {
    image: "/static/ecosystem/gnosislogo.svg",
    title: "Gnosis",
    info: "Gnosis builds new market mechanisms for decentralized finance. Their three interoperable product lines allow you to securely create, trade, and hold digital assets on Ethereum at very cheap gas fees. Yubiai deploying on gnosis is a must, enjoy the p2p transactions of everything there is on our platform at the cheapest gas prices.",
  },
  polygon: {
    image: "/static/ecosystem/polygonlogo.svg",
    title: "Polygon",
    info: "Polygon is a decentralized Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.",
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
      <HeroFather
        titleHead={"Yubiai Landing - Ecosystem"}
        titleFirst={"Explore the Yubiai"}
        titleSecond={"ecosystem"}
        description={
          "Yubiai integrates different protocols to give his users the best UX and security when using the platform"
        }
      >
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={5} mt="2em">
          <EcosystemCard item={listEcosystem.eth} />
          <EcosystemCard item={listEcosystem.poh} />
          <EcosystemCard item={listEcosystem.kleros} />
          <EcosystemCard item={listEcosystem.metamask} />
          <EcosystemCard item={listEcosystem.ubi} />
          <EcosystemCard item={listEcosystem.gnosis} />
          <EcosystemCard item={listEcosystem.polygon} />
          <EcosystemCard item={listEcosystem.arbitrum} />
        </SimpleGrid>
      </HeroFather>
    </>
  );
};

export default Ecosystem;
