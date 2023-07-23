import { Flex, Heading, Text, Stack } from "@chakra-ui/react";
import useTranslation from 'next-translate/useTranslation';
import React from "react";
import AutoPlay from "../CarouselPreview/carouselPreview";

const About = ({ }) => {
  const { t } = useTranslation("home");

  return (
    <>
      <Heading
        textAlign={{ base: "center", md: "left" }}
        lineHeight={1.1}
        fontWeight={600}
        color={"white"}
        fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
        style={{ width: "1440px", padding: "25px", display: "flex", justifyContent: "center" }}
      >
        <Text as={"span"} position={"relative"} style={{ fontSize: "64px"}}>
          {t("About Yubiai")}
        </Text>

      </Heading>
      <Stack
        spacing={4}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "start" }}
        justifyContent={"center"}
        >
        <Text
          color={"white"}
          fontSize={"24px"}
          fontWeight={"normal"}
          fontStyle={"normal"}
          w={"491px"}
          style={{
            wordWrap: "break-word",
          }}
        >
          Yubiai stands for <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>You UBI And I.</span><br />
          It is a <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>community-born</span> project initiated by some <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>ProofOfHumanity</span> members. Yubiai is a <span style={{ color: "white", fontSize: 24, fontWeight: 500 }}>platform</span> where <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>buyers & sellers</span> meet to exchange in a <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>secure, easy, transparent, and cheap</span> way their services while making <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>social impact</span>.
        </Text>
        <Flex style={{ width: "599px", height: "400px" }}>
          <AutoPlay  />
        </Flex>
      </Stack>
      {/* <Text
        color={"white"}
        fontSize={"20px"}
        fontWeight={"normal"}
        fontStyle={"normal"}
      >
        As every transaction between buyers and sellers has a small fee intended
        to buy and burn $UBI (The Universal Basic Income Token) thus increasing
        his value.
      </Text> */}
    </>
  );
};

export default About;
