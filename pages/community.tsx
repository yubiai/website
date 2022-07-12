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
      }
  ];


  return (
    <>
      <HeroFather title={"Yubiai Landing - Community"}>
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
              Follow us in the Yubiai
              <br />
              <Text as={"span"} color={"white"}>
                community
              </Text>
            </Heading>
          </Stack>
          <Box
            w={{ base: "full", md: "50%" }}
            mt={{ base: "10em", md: "30em" }}
          >
            <Text color={"white"} fontSize="20px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos
              eius non distinctio nisi tenetur vitae omnis earum eaque laborum
              nam, repudiandae mollitia odit. Doloremque error nesciunt velit
              autem eum?
            </Text>
          </Box>
            <Box mt="2em">
            {listNetworkSocial &&
          listNetworkSocial.map((item, i) => (
            <NetworkSocialCard key={i} item={item} />
          ))}
            </Box>
        </Container>
      </HeroFather>
      <Box h={{base: "1em", md: "400px"}}></Box>
    </>
  );
};

export default Community;
