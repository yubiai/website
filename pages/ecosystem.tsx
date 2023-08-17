import { SimpleGrid, Text, useColorMode } from "@chakra-ui/react";
import EcosystemCard from "../components/Cards/ecosystemCard";
import TeamCard from "../components/Cards/teamCard";
import HeroFather from "../components/Layouts/HeroFather";
import useTranslation from "next-translate/useTranslation";



const Ecosystem = () => {
  const { t } = useTranslation("ecosystem");
  const { colorMode } = useColorMode();
  const textColor = colorMode === "light" ? "#001664" : "white";
  const txtColorLaCo = colorMode === "light" ? "#001664" : "#00BCD4";
  const listEcosystem = {
    eth: {
      image: "/static/ecosystem/etherlogo.png",
      title: "Ethereum",
      info: t("Ethereum"),
      link: "https://ethereum.org/"
    },
    poh: {
      image: "/static/ecosystem/poh.webp",
      title: "Proof Of Humanity",
      info: t("Proof of Humanity"),
      link: "https://www.proofofhumanity.id/"
    },
    kleros: {
      image: "/static/ecosystem/kleros.png",
      title: "Kleros",
      info: t("Kleros"),
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
      info: t("Gnosis"),
      link: "https://gnosis.io/"
    },
    lens: {
      image: "/static/ecosystem/lenslogo.png",
      title: "Lens Protocol",
      info: t("Lens Protocol"),
      link: "https://www.lens.xyz/"
    },
    polygon: {
      image: "/static/ecosystem/polygonlogo.svg",
      title: "Polygon",
      info: t("Polygon"),
      link: "https://polygon.technology/"
    },
    arbitrum: {
      image: "/static/ecosystem/arbitrumlogo.svg",
      title: "Arbitrum",
      info: t("Arbitrum"),
      link: "https://portal.arbitrum.one/"
    },
    talentLayer: {
      image: "/static/ecosystem/talentlayer.jpg",
      title: "TalentLayer",
      info: t("TalentLayer"),
      link: "https://www.talentlayer.org/"
    },
    filecoin: {
      image: "/static/ecosystem/filecoin-logo.svg",
      title: "Filecoin",
      info: t("Filecoin"),
      link: "https://filecoin.io/"
    },
    sequence: {
      image: "/static/ecosystem/sequence-logo.png",
      title: "Sequence",
      info: t("Sequence"),
      link: "https://sequence.xyz/welcome"
    },
    push: {
      image: "/static/ecosystem/push.png",
      title: "Push",
      info: t("Push Protocol"),
      link: "https://sequence.xyz/welcome"
    },
    connext: {
      image: "/static/ecosystem/connext.png",
      title: "Connext",
      info: t("Connext"),
      link: "https://sequence.xyz/welcome"
    },
    ignacio: {
      image: "/static/ecosystem/ignacio.png",
      title: "Ignacio Britos",
      info: t("Entrepreneur"),
      link: "https://www.linkedin.com/in/ignacio-britos-7939978a/"
    },
    benjapi: {
      image: "/static/ecosystem/benjapi.png",
      title: "Benjamin Pieres",
      info: t("BA"),
      link: "https://www.linkedin.com/in/benjapieres/"
    },
    leandro: {
      image: "/static/ecosystem/leandro.png",
      title: "Leandro Venezia",
      info: t("Full Stack"),
      link: "https://www.linkedin.com/in/leandrovenezia/"
    },
    benjafri: {
      image: "/static/ecosystem/benjafri.png",
      title: "Benjamin Frias",
      info: t("Experienced"),
      link: "https://www.linkedin.com/in/benjamin-frias-ba8722131/"
    },
    joaquin: {
      image: "/static/ecosystem/joaquin.png",
      title: "Joaquin Bravo",
      info: t("Marketer"),
      link: "https://www.linkedin.com/in/joaquin-bravo/"
    },
    ruben: {
      image: "/static/ecosystem/ruben.png",
      title: "Ruben Santana",
      info: t("Builder"),
      link: "https://www.linkedin.com/in/rubensantana/"
    },
  };

  return (
    <>
      <HeroFather
        titleHead={"Yubiai Landing - Ecosystem"}
        titleFirst={t("Explore the Yubiai")}
        titleSecond={t("ecosystem")}
        description={
          t("Yubiai integrates different protocols to give his users the best UX and security when using the platform")
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
          fontSize={{ base: "28px", md: "38px", lg: "56px" }}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
          color={"white"}
        >{t("Coming soon")}</Text>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} spacing={5} m="2em">
          <EcosystemCard item={listEcosystem.polygon} />
          <EcosystemCard item={listEcosystem.arbitrum} />
          <EcosystemCard item={listEcosystem.connext} />
          <EcosystemCard item={listEcosystem.talentLayer} />
        </SimpleGrid>
        <Text
          fontSize={{ base: "28px", md: "38px", lg: "56px" }}
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
          color={textColor}
        >{t("The Team")}</Text>

        <div className="text-container">
          <Text
            color={txtColorLaCo}
            width={{ base: "auto", md: "auto", lg: "100%" }}
            fontSize={{ base: "20px", md: "22px", lg: "24px" }}
            p={{ base: "1rem 1rem", md: "2", lg: "0 9rem 2rem" }}
            fontWeight={"normal"}
            lineHeight={1.2}
            fontStyle={"normal"}
            style={{ wordWrap: "break-word" }}
          >
            {t("Most of the Yubiai platform was developed in")}
            <span>{t("Latam")}</span>{t("but also had")}<span>{t("contributions from people all over the globe")}</span>;{t("it’s a project that aims to be the")}<span>{t("web3-based online marketplace")}</span>,{t("initially focused on")}<span>{t("hiring and offering services")}</span>{t("The goal is to provide a")}<span>{t("safe and reliable platform")}</span>{t("for service hiring, where users can easily find and engage with")}<span> {t("qualified professionals")}</span>
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
