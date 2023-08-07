import { Flex, Heading, Text, Stack } from "@chakra-ui/react";
import useTranslation from 'next-translate/useTranslation';
import React from "react";
import AutoPlay from "../CarouselPreview/carouselPreview";
import { useBreakpointValue } from "@chakra-ui/react";

const About = ({ }) => {
  const { t } = useTranslation("home");
  
  const justifyHeading = useBreakpointValue({
    base:"center",
    sm: "center",
    md: "center",
    lg: "center",
  });
  
  const widthHeading = useBreakpointValue({
    base:"auto",
    sm: "auto",
    md: "auto",
    lg: "100%",
  });

  return (
    <>
      <Heading
        textAlign={{ base: "center", md: "left" }}
        justifyContent={justifyHeading}
        lineHeight={1.1}
        py={5}
        fontWeight={600}
        width={ "widthHeading"}
        color={"white"}
        fontSize={{base:"32px",md:"32px", lg:"64px"}}
        style={{ display: "flex" }}
        
      >
        <Text as={"span"} position={"relative"} >
          {t("About Yubiai")}
        </Text>

      </Heading>
      <Stack
        spacing={4}
        direction={{ base: "column", md: "column", lg:"row", xl:"row" }}
        align={{ base: "center", md: "start" }}
        justifyContent={"center"}
      >
        <Text
          color={"white"}
          p={{ base: "5", md: "2", lg: "0" }}
          fontSize={"24px"}
          fontWeight={"normal"}
          fontStyle={"normal"}
          w={{base:"auto", md:"auto", lg: "491px"}}
          style={{
            wordWrap: "break-word",
          }}
        >
          {t("Yubiai stands for")} <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>{t("YouUBIAndI")}</span><br />
          {t("It is a")} <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>{t("community-born")}</span> {t("project initiated by some")} <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>{t("ProofOfHumanity")}</span> {t("Yubiai is a")} <span style={{ color: "white", fontSize: 24, fontWeight: 500 }}>{t("platform")}</span> {t("where")} <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>{t("buyers & sellers")}</span> {t("meet to exchange in a")} <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>{t("secure, easy, transparent, and cheap")}</span> {t("way their services while making")} <span style={{ color: "white", fontSize: 24, fontWeight: 600 }}>{t("social impact")}</span>.

        </Text>
        <Flex
          w={{base:"290px", md:"599px", lg: "599px"}}
          h={{base:"auto", md:"auto", lg: "400px"}}
          justifyContent={{base:"center", md:"center"}}
          
          //</Stack>style={{ width: "599px", height: "400px" }}
          >
          <AutoPlay />
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
