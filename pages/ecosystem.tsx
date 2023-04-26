import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import EcosystemCard from "../components/Cards/ecosystemCard";
import HeroFather from "../components/Layouts/HeroFather";

const listEcosystem = {
  eth: {
    image: "/static/ecosystem/ethlogo.png",
    title: "Ethereum",
    info: "Ethereum is a technology for building apps and organizations, holding assets, transacting and communicating without being controlled by a central authority. Ethereum has its own cryptocurrency, Ether, which is used to pay for certain activities on the Ethereum network. By deploying on ethereum we benefit from the highest securities that this blockchain has to offer for anything that is worth the price.",
    link: "https://ethereum.org/"
  },
  poh: {
    image: "/static/ecosystem/poh.webp",
    title: "Proof Of Humanity",
    info: "Proof of Humanity, a system combining webs of trust, with reverse Turing tests, and dispute resolution to create a sybil-proof list of humans. This is Yubiai's main authentication layer, by leveraging proof of humanity you know for sure that you are operating with a real human.",
    link: "https://www.proofofhumanity.id/"
  },
  kleros: {
    image: "/static/ecosystem/kleros.png",
    title: "Kleros",
    info: "Kleros is an open source online dispute resolution protocol which uses blockchain and crowdsourcing to fairly adjudicate disputes. We use Kleros escrow, dispute resolution and curate as security and guarantee to make easier and safer transactions.",
    link: "https://kleros.io/"
  },
  ubi: {
    image: "/static/ecosystem/ubilogo.svg",
    title: "UBI",
    info: "UBI is a Universal Basic Income token that gets streamed using Ethereum to verify Proof of Humanity profiles. From a grandparent in Buenos Aires to young children in Mumbai: everyone gets the same amount. As a registered user of ProofOfHumanity you will receive $UBI tokens, we dedicate a default % of the fee of every transaction to the purchase and burn of $UBI, later also we are checking ways that people can use their  $UBIs as collateral for loans to buy on Yubiai.",
    link: "https://www.proofofhumanity.id/"
  },
  gnosis: {
    image: "/static/ecosystem/gnosislogo.svg",
    title: "Gnosis",
    info: "Gnosis builds new market mechanisms for decentralized finance. Their three interoperable product lines allow you to securely create, trade, and hold digital assets on Ethereum at very cheap gas fees. Yubiai deploying on gnosis is a must, enjoy the p2p transactions of everything there is on our platform at the cheapest gas prices.",
    link: "https://gnosis.io/"
  },
  lens: {
    image: "/static/ecosystem/lenslogo.png",
    title: "Lens Protocol",
    info: "Lens Protocol is a blockchain-based open-source social graph created to reshape the future of social media concepts in the era of Web3 and decentralization. It enables content creators to 'own their digital roots' and enable people to uncompromisingly own the connections between themselves and the communities, forming a fully composable, user-owned social graph with modularity in mind.",
    link: "https://www.lens.xyz/"
  },
  polygon: {
    image: "/static/ecosystem/polygonlogo.svg",
    title: "Polygon",
    info: "Polygon is a decentralized Ethereum scaling platform that enables developers to build scalable user-friendly dApps with low transaction fees without ever sacrificing on security.",
    link: "https://polygon.technology/"
  },
  arbitrum: {
    image: "/static/ecosystem/arbitrumlogo.svg",
    title: "Arbitrum",
    info: "Arbitrum is a type of technology known as an optimistic rollup. This technology allows smart contracts from Ethereum to scale by sending messages between smart contracts and those in the Arbitrum second chain layer.",
    link: "https://portal.arbitrum.one/"
  },
  talentLayer: {
    image: "/static/ecosystem/TalentLayer_Circle_Light.png",
    title: "TalentLayer",
    info: "TalentLayer is the interoperability layer for work reputation. When you complete a job on Yubiai, you and the person you transact with give each other a review; growing your reputation over time. TalentLayer IDs allow freelancers on Yubiai to own your reputation as a soul-bound NFT. TalentLayer IDs are interoperable: your reputation can work on any integrated marketplaces. If you lose access to your wallet, your TalentLayer ID can be recovered to a new wallet via an emergency recovery process.",
    link: "https://www.talentlayer.org/"
  },
  filecoin: {
    image: "/static/ecosystem/filecoin-logo.svg",
    title: "Filecoin",
    info: "Filecoin is a decentralized storage network designed to store humanity's most important information. An open-source cloud storage marketplace, protocol, and incentive layer. Yubiai data will be stored & retrieved using Filecoin, their powerful, dynamic and robust protocol will be inherited by this integration.",
    link: "https://filecoin.io/"
  }
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
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={5} m="2em">
          <EcosystemCard item={listEcosystem.eth} />
          <EcosystemCard item={listEcosystem.poh} />
          <EcosystemCard item={listEcosystem.kleros} />
          {/*           <EcosystemCard item={listEcosystem.ubi} />
 */}          <EcosystemCard item={listEcosystem.gnosis} />
          <EcosystemCard item={listEcosystem.lens} />
          <EcosystemCard item={listEcosystem.polygon} />
          <EcosystemCard item={listEcosystem.arbitrum} />
          <EcosystemCard item={listEcosystem.talentLayer} />
          <EcosystemCard item={listEcosystem.filecoin} />
        </SimpleGrid>
      </HeroFather>
    </>
  );
};

export default Ecosystem;
