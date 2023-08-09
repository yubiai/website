import {
  Box,
  SimpleGrid,
  Text,
  Image,
  Link,
  Flex
} from "@chakra-ui/react";
import HeroFather from "../components/Layouts/HeroFather";
import { Timeline } from "react-twitter-widgets";
import useTranslation from "next-translate/useTranslation";

const Community = () => {
  const { t } = useTranslation("community");
  const listNetworkSocial = [
    {
      image: "/static/networksocial/linktreelogo.png",
      title: "Linktree",
      info: "Linktree Linktree",
      link: "https://linktr.ee/Yubiai",
    },
    {
      image: "/static/community/tgcardcomm.png",
      title: "Telegram",
      info: "Telegram",
      link: "https://t.me/yubiai",
    },
    {
      image: "/static/networksocial/twlogo.png",
      title: "Twitter",
      info: "Tw",
      link: "https://twitter.com/YubiaiM",
    },

    {
      image: "/static/networksocial/ytlogo.webp",
      title: "YouTube",
      info: "YT",
      link: "https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA",
    },
    {
      image: "/static/networksocial/discordlogo.png",
      title: "Discord",
      info: "Discord",
      link: "https://discord.gg/a9CQKJXb8X",
    },
    {
      image: "/static/networksocial/githublogo.png",
      title: "Github",
      info: "Github",
      link: "https://github.com/yubiai",
    },
    {
      image: "/static/networksocial/discourselogo.png",
      title: "Governance forum (Coming soon..)",
      info: "Governance forum (Coming soon..)",
      link: "https://github.com/yubiai",
    }
  ];


  return (
    <>
      <HeroFather
        titleHead={"Yubiai Landing - Community"}
        titleFirst={t("Welcome to the Yubiai")}
        titleSecond={t("Community")}
        description={t("The Yubiai community is an ecosystem of real humans interacting between each other on our socials")}
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}
          marginTop={"2em"}
        >
          <Image
            alt={"Vision"}
            src={"/static/community/vision.png"}
            fallbackSrc={"/static/community/vision.png"}
          />
          <Box
            display="flex"
            flexDirection={"column"}
            margin={"2em"}
          >
            <Text
              fontSize={{ base: "32px", md: "32px", lg: "64px" }}
              color={"white"}
            >{t("What’s our vision?")}</Text>
            <Text
              fontSize={"24px"}
              color={"white"}
            >{t("To become")}</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}

        >
          <Box
            display="flex"
            flexDirection={"column"}
            margin={"2em"}
          >
            <Text
              fontSize={{ base: "32px", md: "32px", lg: "64px" }}
              color={"white"}>{t("What’s our mission?")}</Text>
            <Text
              fontSize={"24px"}
              color={"white"}>{t("To empower")}</Text>
          </Box>
          <Image
            alt={"Mission"}
            src={"/static/community/ourmission.png"}
            fallbackSrc={"/static/community/ourmission.png"}
          />
        </Box>
        <Box>
          <Text
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
            fontSize={{ base: "26px", md: "32px", lg: "50px" }}
            color={"#001664"}
            fontWeight={"800"}
          >{t("Collectively, we are building the future marketplace we need")}</Text>
          <Text
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
            fontSize={{ base: "24px", md: "26px", lg: "38px" }}
            color={"#001664"}
          >{t("Follow us on social media")}</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mt="3em">
          <Link href={"https://t.me/yubiai"} target={"_blank"}>
            <Image
              alt={"Telegram"}
              src={"/static/community/tgcardcomm.png"}
              fallbackSrc={"/static/community/tgcardcomm.png"}
            />
          </Link>
          <Link href="https://twitter.com/YubiaiM" target={"_blank"}>
            <Image
              alt={"Twitter"}
              src={"/static/community/twcardcomm.png"}
              fallbackSrc={"/static/community/twcardcomm.png"}
            />
          </Link>
          <Link href="https://linktr.ee/Yubiai" target={"_blank"}>
            <Image
              alt={"LinkTree"}
              src={"/static/community/linktreecardcom.png"}
              fallbackSrc={"/static/community/linktreecardcom.png"}
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA" target={"_blank"}>
            <Image
              alt={"YouTube"}
              src={"/static/community/ytardcomm.png"}
              fallbackSrc={"/static/community/ytcardcomm.png"}
            />
          </Link>
          <Link
            href={"https://discord.gg/a9CQKJXb8X"}
            target={"_blank"}
          >
            <Image
              alt={"Discord"}
              src={"/static/community/discardcomm.png"}
              fallbackSrc={"/static/community/discardcomm.png"}
            />
          </Link>
          <Link
            href={"https://github.com/yubiai"}
            target={"_blank"}
          >
            <Image
              alt={"GitHub"}
              src={"/static/community/ghubcardcomm.png"}
              fallbackSrc={"/static/community/ghubcardcomm.png"}
            />
          </Link>
          <Image
            alt={"GovFor"}
            src={"/static/community/govcardcomm.png"}
            fallbackSrc={"/static/community/govcardcomm.png"}
          />
        </SimpleGrid>
        <Box display={"flex"} flexDirection={"column"} mt={"2em"}>
          <Text
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
            fontSize={{ base: "22px", md: "24px", lg: "26px" }}
            color={"#001664"}
          >{t("Yubiai community")}</Text>
          <Text
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
            fontSize={{ base: "26px", md: "28px", lg: "36px" }}
            color={"#001664"}
          >{t("Follow our latest news on Twitter & Youtube")}</Text>
        </Box>
        <Box display={"flex"} flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }} >

          <Box
            w={"50%"}
            h={"auto"}
            maxH={"600px"}
            m={{ base: "1em", md: "2em" }} p={{ md: "1em" }}
            style={{ background: "rgba(255, 255, 255, 0.15)", boxShadow: "10px 10px 50px 50px rgba(0, 0, 0, 0.07)", borderRadius: "35px", border: "1px white solid" }}></Box>
          <Box
            w={"50%"}
            m={{ base: "1em", md: "2em" }} p={{ md: "1em" }}
            style={{ background: "rgba(255, 255, 255, 0.15)", boxShadow: "10px 10px 50px 50px rgba(0, 0, 0, 0.07)", borderRadius: "35px", border: "1px white solid" }}
          >
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "YubiaiM",
              }}
              options={{
                height: "600px",
                theme: "dark"
              }}
            />

          </Box>
        </Box>
      </HeroFather>
    </>
  );
};

export default Community;
