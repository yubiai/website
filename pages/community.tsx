import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import NetworkSocialCard from "../components/Cards/nworkSocialCard";
import HeroFather from "../components/Layouts/HeroFather";

const Community = () => {
  const listNetworkSocial = [
    {
      image: "/static/networksocial/twlogo.png",
      title: "Twitter",
      info: "Tw",
      link: "https://twitter.com/YubiaiM",
    },
    {
      image: "/static/networksocial/linktreelogo.png",
      title: "Linktree",
      info: "Linktree Linktree",
      link: "https://linktr.ee/Yubiai",
    },
    {
      image: "/static/networksocial/telegramlogo.png",
      title: "Telegram",
      info: "TTelegramTelegramTelegram",
      link: "https://t.me/yubiai",
    },
    {
      image: "/static/networksocial/ytlogo.webp",
      title: "YouTube",
      info: "YT",
      link: "https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA",
    },
  ];

  return (
    <>
      <HeroFather
        titleHead={"Yubiai Landing - Community"}
        titleFirst={"Follow us in the Yubiai"}
        titleSecond={"community"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eoseius non distinctio nisi te"
        }
      >
        <Box mt="3em" h="300px">
          {listNetworkSocial &&
            listNetworkSocial.map((item, i) => (
              <NetworkSocialCard key={i} item={item} />
            ))}
        </Box>
      </HeroFather>
    </>
  );
};

export default Community;
