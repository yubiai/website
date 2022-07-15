import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import NetworkSocialCard from "../components/Cards/nworkSocialCard";
import HeroFather from "../components/Layouts/HeroFather";
import { Timeline } from "react-twitter-widgets";

const Community = () => {
  const listNetworkSocial = [
    {
      image: "/static/networksocial/linktreelogo.png",
      title: "Linktree",
      info: "Linktree Linktree",
      link: "https://linktr.ee/Yubiai",
    },
    {
      image: "/static/networksocial/telegramlogo.png",
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
        titleFirst={"Follow us in the Yubiai"}
        titleSecond={"community"}
        description={
          "The Yubiai community is an ecosystem of real humans interacting between each other on our socials. Join us"
        }
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt="3em">
          {listNetworkSocial &&
            listNetworkSocial.map((item, i) => (
              <NetworkSocialCard key={i} item={item} />
            ))}
        </SimpleGrid>
        <Box mt={{base: "2em", md: "4em"}} p={{md: "1em"}}>
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
      </HeroFather>
    </>
  );
};

export default Community;
