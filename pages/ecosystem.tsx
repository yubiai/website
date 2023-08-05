import { SimpleGrid, Text } from "@chakra-ui/react";
import EcosystemCard from "../components/Cards/ecosystemCard";
import TeamCard from "../components/Cards/teamCard";
import HeroFather from "../components/Layouts/HeroFather";

const listEcosystem = {
  eth: {
    image: "/static/ecosystem/etherlogo.png",
    title: "Ethereum",
    info: "Ethereum is a technology for building apps and organizations, holding assets, transacting and communicating without being controlled by a central authority. Ethereum has its own cryptocurrency, Ether, which is used to pay for certain activities on the Ethereum network. By leveraging eth we benefit from the highest securities that this blockchain has to offer for anything that is worth the price.",
    link: "https://ethereum.org/"
  },
  poh: {
    image: "/static/ecosystem/poh.webp",
    title: "Proof Of Humanity",
    info: "Proof of Humanity, a system combining webs of trust, with reverse Turing tests, and dispute resolution to create a sybil-proof list of humans. This is Yubiai's main badge layer for future governance and token eligibility criteria for rewards, by leveraging proof of humanity you know for sure that you are operating with a real human.",
    link: "https://www.proofofhumanity.id/"
  },
  kleros: {
    image: "/static/ecosystem/kleros.png",
    title: "Kleros",
    info: "Kleros is an open source online dispute resolution protocol which uses blockchain and crowdsourcing to fairly adjudicate disputes. We use Kleros escrow, dispute resolution and curate(soon) as security and guarantee to make easier and safer transactions.",
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
    info: "Gnosis builds new market mechanisms for decentralized finance. Their three interoperable product lines allow you to securely create, trade, and hold digital assets on Ethereum at very cheap gas fees. Yubiai deployed on gnosis was a must, enjoy the p2p transactions of everything there is on our platform at the cheapest gas prices with the security of Ethereum.",
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
    image: "/static/ecosystem/talentlayer.jpg",
    title: "TalentLayer",
    info: "TalentLayer is the interoperability layer for work reputation. When you complete a job on Yubiai, you and the person you transact with give each other a review; growing your reputation over time. TalentLayer IDs allow freelancers on Yubiai to own your reputation as a soul-bound NFT.",
    link: "https://www.talentlayer.org/"
  },
  filecoin: {
    image: "/static/ecosystem/filecoin-logo.svg",
    title: "Filecoin",
    info: "Filecoin is a decentralized storage network designed to store humanity's most important information. An open-source cloud storage marketplace, protocol, and incentive layer. Yubiai data will be stored & retrieved using Filecoin, their powerful, dynamic and robust protocol will be inherited by this integration.",
    link: "https://filecoin.io/"
  },
  sequence: {
    image: "/static/ecosystem/sequence-logo.png",
    title: "Sequence",
    info: "Sequence provides users with a seamless web3 wallet to access Ethereum-compatible networks, and a powerful web3 infrastructure stack for developers that makes it easy to build web3 apps and games. By integrating Sequence as the sign-in method, Yubiai will provide users with a seamless web3 wallet experience, simplifying onboarding and eliminating the need for separate wallets or complex private key management.",
    link: "https://sequence.xyz/welcome"
  },
  push: {
    image: "/static/ecosystem/push.png",
    title: "Push",
    info: "Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services. With the Push Protocol in place, Yubiai users can receive real-time updates and notifications about transactions, listings, and other important activities happening on different chains.",
    link: "https://sequence.xyz/welcome"
  },
  connext: {
    image: "/static/ecosystem/connext.png",
    title: "Connext",
    info: "Connext is a crosschain liquidity network that enables fast, fully-noncustodial transfers between EVM-compatible chains and L2 systems.. onnext is the most secure interoperability protocol, allowing users to bridge funds and developers to build asynchronous Solidity for the first time.",
    link: "https://sequence.xyz/welcome"
  },
  ignacio: {
    image: "/static/ecosystem/ignacio.png",
    title: "Ignacio Britos",
    info: "Entrepreneur by nature, been involved in technologies all his life, with 7 years of experience managing teams, knowledgeable in Javascript, Python and solidity.",
    link: "https://www.linkedin.com/in/ignacio-britos-7939978a/"
  },
  benjapi: {
    image: "/static/ecosystem/benjapi.png",
    title: "Benjamin Pieres",
    info: "BA business admin with 10 years of experience in software development and 8 years managing development and designers teams.",
    link: "https://www.linkedin.com/in/benjapieres/"
  },
  leandro: {
    image: "/static/ecosystem/leandro.png",
    title: "Leandro Venezia",
    info: "Full Stack Web Dev. Leng based JavaScript, which extends with various technologies. MERN main stack (MDB, Exp JS, React JS and Node JS) with experience in Next.js, Angular, TypeScript and dif CSS Frameworks.",
    link: "https://www.linkedin.com/in/leandrovenezia/"
  },
  benjafri: {
    image: "/static/ecosystem/benjafri.png",
    title: "Benjamin Frias",
    info: "Experienced UX/UI Web Designer in crypto and web2.",
    link: "https://www.linkedin.com/in/benjamin-frias-ba8722131/"
  },
  joaquin: {
    image: "/static/ecosystem/joaquin.png",
    title: "Joaquin Bravo",
    info: "Marketer as a profession, crypto as a passion. Helped multiple projects reach its goals from its beginning stages,  in charge of marketing teams that reached high m. caps",
    link: "https://www.linkedin.com/in/joaquin-bravo/"
  },
  ruben: {
    image: "/static/ecosystem/ruben.png",
    title: "Ruben Santana",
    info: "Builder of dapps using Eth SCs. Master in C.Science Eng & Soft Dev. Eth dev cert from B9LabAcademy.Worked as a Sap Abap Dev in Unic-ArcMittal for 2 y & 7ys  as Teacher for UPT Arag.",
    link: "https://www.linkedin.com/in/rubensantana/"
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
          "Yubiai integrates different protocols to give his users the best UX and security when using the platform."
        }

      >
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={5} m="2em">
          <EcosystemCard item={listEcosystem.eth} />
          <EcosystemCard item={listEcosystem.poh} />
          <EcosystemCard item={listEcosystem.kleros} />
          {/*           <EcosystemCard item={listEcosystem.ubi} />
 */}          <EcosystemCard item={listEcosystem.gnosis} />
          <EcosystemCard item={listEcosystem.lens} />
          {/* <EcosystemCard item={listEcosystem.polygon} /> */}
          {/*<EcosystemCard item={listEcosystem.arbitrum} /> */}
          <EcosystemCard item={listEcosystem.filecoin} />
          <EcosystemCard item={listEcosystem.sequence} />
          <EcosystemCard item={listEcosystem.push} />
        </SimpleGrid>
        <Text
          fontSize={"64px"}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
          color={"white"}
        >Coming soon</Text>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={5} m="2em">
          <EcosystemCard item={listEcosystem.polygon} />
          <EcosystemCard item={listEcosystem.arbitrum} />
          <EcosystemCard item={listEcosystem.connext} />
          <EcosystemCard item={listEcosystem.talentLayer} />
        </SimpleGrid>
        <Text
          fontSize={"64px"}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
          color={"#001664"}
        >The Team</Text>

        <div className="text-container">
          <Text
            color={"#001664"}
            width={{ base: "auto", md: "auto", lg: "100%" }}
            fontSize={"24px"}
            p={{ base: "1rem 1rem", md: "2", lg: "0 9rem 2rem" }}
            fontWeight={"normal"}
            lineHeight={1.2}
            fontStyle={"normal"}
            style={{ wordWrap: "break-word" }}
          >
            Most of the Yubiai platform was developed in <span >Latam</span> but also had <span >contributions from people all over the globe</span>; it’s a project that aims to be the <span >web3-based online marketplace</span> , initially focused on<span >hiring and offering services.</span>The goal is to provide a <span> safe and reliable platform</span> for service hiring, where users can easily find and engage with <span>qualified professionals.</span>
          </Text>
        </div>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={5} m="2em">
          <TeamCard item={listEcosystem.ignacio} />
          <TeamCard item={listEcosystem.benjapi} />
          <TeamCard item={listEcosystem.leandro} />
          <TeamCard item={listEcosystem.joaquin} />
          <TeamCard item={listEcosystem.benjafri} />
          <TeamCard item={listEcosystem.ruben} />
        </SimpleGrid>
      </HeroFather>
    </>
  );
};

export default Ecosystem;
