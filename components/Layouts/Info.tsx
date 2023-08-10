import { Box, Text, Flex, Image, Spacer, useColorMode } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import MoreInfo from "./MoreInfo";
import SwiperComparison from "./SwiperComparison";
import { useBreakpointValue } from "@chakra-ui/react";
import useTranslation from 'next-translate/useTranslation';




const Info = () => {
  const { t } = useTranslation("home");
  const isBaseOrMd = useBreakpointValue({ base: true, md: true, lg: true, xl: false });
  const { lang } = useTranslation('common');
  const { colorMode } = useColorMode();
  const textColor = colorMode === "light" ? "#001664" : "white";
  const textColorDesc = colorMode === "light" ? "white" : "#00BCD4";
  const textColorEq = colorMode === "light" ? "black" : "white";
  const bgColor = colorMode === "light" ? "#d972f199" : "#EB71FF";
  const bgColorFt1 = colorMode === "light" ? "#0016644d" : "#9746FF";
  const bgColorFt2 = colorMode === "light" ? "#00bcd44d" : "#00BCD4";
  const textColorOnHover = colorMode === "light" ? "#001664" : "#00BCD4";
  let filterStyle = "";
  if (colorMode === "dark") {
    filterStyle = "invert(100%) sepia(9%) saturate(7470%) hue-rotate(184deg) brightness(114%) contrast(100%)";
  }
  const hoverStyle = {
    filter: colorMode === "dark" ? "brightness(2)" : "brightness(20)",
    transition: "filter 0.3s"
  };
  return (
    <Box
      className={"info-container"}
      w="full"
      h="auto"
      display={"flex"}
      flexDirection={"column"}
    //style={{ border: "1px dotted black" }}
    >
      <Text
        color={textColor}
        fontSize={{ base: "32px", md: "32px", lg: "64px" }}
        fontWeight="700"
        lineHeight={1}
        textAlign={"center"}
        height={{ base: "32px", md: "32px", lg: "64px" }}
        margin={"4rem 0"}
      >
        {t("Why choose Yubiai?")}
      </Text>
      <Flex
        //width="auto"
        height={{ base: "auto", md: "auto", lg: "auto" }}
        maxWidth={{ base: "auto", md: "auto", lg: "auto" }}
        width={{ base: "100%", md: "100%", lg: "100%" }}
        padding={{ base: "0 2em", md: "0 2em", lg: "0 1em" }}
        justifyContent={{ base: "space-around", md: "space-around", lg: "space-around" }}

      >
        <div className="text-container" >
          <Text
            color={textColor}
            _hover={{ color: textColorOnHover }}
            width={{ base: "auto", md: "auto", lg: "100%" }}
            fontSize={"24px"}
            p={{ base: "1rem 1rem", md: "2", lg: "0 9rem 2rem" }}
            fontWeight={"normal"}
            lineHeight={1.2}
            fontStyle={"normal"}
            style={{ wordWrap: "break-word" }}
          >
            {t("Yubiai is an")} <span>{t("online marketplace")}</span> {t("where people can buy or sell services using")} <span>{t("digital money")}</span> <br />{t("Adopts")} <span>{t("soon-to-be decentralized governance")}</span> {t("which means it’s")} <span>{t("not controlled by one company")}</span> {t("in particular but")} <span> {t("by the whole community")}</span> {t("itself")}<br /><br />{t("The platform features key components such as the")} <span>{t("Proof of Humanity")}</span> {t("sybil-resistance protocol which is used as a")} <span>{t("badge to authenticate users and ensure user integrity,")}</span> {t("rather than a mandatory authentication method")} {t("It also uses")} <span>{t("Kleros")}</span> {t("when a problem")} <span>{t("most important pillar of our platform")}</span>, {t("Kleros is a")} <span>{t("decentralized arbitration service")}</span> {t("for the disputes")} <span>{t("what is fair and right")}<br /></span><br />{t("In the future, Yubiai will have a new feature called")} <span>{t("Curate")}</span>. {t("This feature will help make sure that")} <span>{t("only good and trustworthy things")}</span> {t("are listed for sale It will also help")} <span>{t("answer any questions")}</span> {t("people have about the things they want to buy")}<br />{t("Eventually")} <span>{t("our mission")}</span> {t("is to create a")} <span>{t("marketplace")}</span> {t("where people can buy and sell everything")}<span> {t("without any worries")}</span>
          </Text>

        </div>
      </Flex>
      <Flex
        width="auto"
        height={{ base: "auto", md: "auto", lg: "405px" }}
        style={{ justifyContent: "center", display: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          marginTop={"1rem"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          _hover={hoverStyle}

          width={{ base: "260px", md: "491px", lg: "491px" }}
          h={{ base: "calc(464px / (16/9))", md: "calc(491px / (16/9))", lg: "341px" }}
          m={{ base: "0 3rem", md: "0 2rem" }}
        >
          <Text
            fontSize={{ base: "30px", md: "35px", lg: "50px" }}
            fontWeight={"700"}
            color={textColor}
            textAlign={"center"}
          >
            {t("More reasons to work with us")}
          </Text>
          <Image
            color={"#001664"}
            width={{ base: "216px", md: "296px", lg: "296px" }}
            h={{ base: "calc(162px / (16/9))", md: "calc(203px / (16/9))", lg: "106px" }}
            alt={"Logo"}
            src={"/static/images/lgybilargblue.png"}
            fallbackSrc={"/static/images/lgybilargblue.png"}
            style={{ filter: filterStyle }}
            _hover={hoverStyle}
          />

        </Flex>
        <Flex
          style={{ display: "flex", flexDirection: "column" }}
          m={{ base: "0 3rem", md: "0" }}

        >

          <Image
            width={"723px"}
            h={{ base: "calc(17vw / 1)", md: "calc(15vw / 1)", lg: "132px" }}
            alt={"lowFees"}
            src={"/static/featuresIcons/lowFeesIcon.png"}
            fallbackSrc={"/static/featuresIcons/lowFeesIcon"}
            style={{ filter: filterStyle }}
            _hover={hoverStyle}
          />
          <Image
            width={"723px"}
            h={{ base: "calc(15vw / 1)", md: "calc(14vw / 1)", lg: "132px" }}
            alt={"cryptoPaym"}
            src={"/static/featuresIcons/cryptoPaymIcon.png"}
            fallbackSrc={"/static/featuresIcons/cryptoPaymIcon.png"}
            style={{ filter: filterStyle }}
            _hover={hoverStyle}
          />
          <Image
            width={"723px"}
            alt={"svcsIcon"}
            h={{ base: "calc(15vw / 1)", md: "calc(16vw / 1)", lg: "132px" }}
            src={"/static/featuresIcons/servicesIcon.png"}
            fallbackSrc={"/static/featuresIcons/servicesIcon.png"}
            style={{ filter: filterStyle }}
            _hover={hoverStyle}
          />
        </Flex>
      </Flex>
      <Flex
        width="auto"
        height="auto"
        style={{ justifyContent: "flex-start", flexDirection: "column", alignItems: "center", display: "flex" }}
      >
        <Text
          color={textColor}
          fontSize={{ base: "26px", md: "26px", lg: "48px" }}
          m={{ base: "1rem", md: "1rem", lg: "2rem 0" }}
          fontWeight={"500"}
          width={"100%"}
          maxWidth={"auto"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          {t("In Yubiai we believe in the future of a fair and transparent digital workspace")}
        </Text>
        <Text
          color={"white"}
          fontSize={{ base: "22px", md: "22px", lg: "32px" }}
          fontWeight={"500"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          {t("Check some of our key features in comparison to the competition below")}
        </Text>
        <>
          {isBaseOrMd ? (
            <Flex
              flexDirection={"row"}
              width={"100%"}
              p={2}
            >
              <Flex flexDirection={"column"} width={"100%"}>
                <Flex p={"3.9rem 0 0 0 "} direction={"column"}
                  //border={{ base: "1px dotted red", sm: "1px dotted blue", md: "1px dotted green", lg: "1px dotted pink" }}
                  width={{ base: "250px", sm: "250px", md: "250px", lg: "310px" }}>
                  <Text display={"flex"} h={"50px"} backgroundColor={"rgba(0, 22, 100, 0.30)"} borderRadius={"20px 0 0 20px"} alignItems={"center"} justifyContent={"center"} color={"black"}>
                    {t("Client Fee")}
                  </Text>
                  <Text display={"flex"} backgroundColor={bgColorFt2} h={"50px"} borderRadius={"20px 0 0 20px"} alignItems={"center"} justifyContent={"center"} color={"black"}>
                    {t("Freelance Fee")}
                  </Text>
                  <Text display={"flex"} h={"50px"} backgroundColor={"rgba(0, 22, 100, 0.30)"} borderRadius={"20px 0 0 20px"} alignItems={"center"} justifyContent={"center"} color={"black"}>
                    {t("Withdrawal Fee")}
                  </Text>
                  <Text display={"flex"} h={"50px"} borderRadius={"20px 0 0 20px"} alignItems={"center"} justifyContent={"center"} color={"black"}>
                    {t("Decentralized")}
                  </Text>
                  <Text display={"flex"} h={"50px"} backgroundColor={"rgba(0, 22, 100, 0.30)"} borderRadius={"20px 0 0 20px"} alignItems={"center"} justifyContent={"center"} color={"black"}>
                    {t("Content Ownership")}
                  </Text>
                  <Text display={"flex"} h={"50px"} borderRadius={"20px 0 0 20px"} alignItems={"center"} justifyContent={"center"} color={"black"}>
                    {t("Efficient Escrow")}
                  </Text>
                  <Text display={"flex"} h={"50px"} backgroundColor={"rgba(0, 22, 100, 0.30)"} borderRadius={"20px 0 0 20px"} alignItems={"center"} justifyContent={"center"} color={"black"}>
                    {t("No Limit on Task Size")}
                  </Text>
                  <Text display={"flex"} h={"50px"} borderRadius={"20px 0 0 20px"} alignItems={"center"} justifyContent={"center"} color={"black"}>
                    {t("Scalable Dispute System")}
                  </Text>
                </Flex>

              </Flex>
              <SwiperComparison
                t={t}
                bgColor={bgColor}
                bgColorFt1={bgColorFt1}
                bgColorFt2={bgColorFt2}
              />
            </Flex>
          ) : (
            <>
              <Box
                width={"1212px"}
                //border={{ base: "1px dotted green", sm: "1px dotted red", md: "1px dotted blue", lg: "1px dotted black" }}
                height={"60px"}
                margin={"0.5rem"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                background={bgColor}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "100%", maxWidth: "738px" }}
                >
                  <Image
                    w={"110px"}
                    h={"46.25px"}
                    alt={"Logo"}
                    src={"/static/images/logoyubiai.png"}
                    fallbackSrc={"/static/images/logoyubiai.png"}
                  //filter={"drop-shadow(2px 4px 6px black)"}
                  //background={bgColor}

                  />
                  <Image
                    alt={"freelancerIcon"}
                    src={"/static/images/freelancerIcon.png"}
                    fallbackSrc={"/static/images/freelancerIcon.png"}
                  />
                  <Image
                    alt={"upworklogo"}
                    src={"/static/images/upworklogo.png"}
                    fallbackSrc={"/static/images/upworklogo.png"}
                  />
                  <Image
                    alt={"fiverrlogo"}
                    src={"/static/images/fiverrIcon.png"}
                    fallbackSrc={"/static/images/fiverrIcon.png"}
                  />
                </Spacer>
              </Box>
              <Box
                width={"1212px"}
                height={"60px"}
                margin={"0.5rem"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                backgroundColor={bgColorFt1}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text
                  width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>{t("Client Fee")}</Text>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", maxWidth: "738px" }} >
                  <Text>0% *</Text>
                  <Text>3%</Text>
                  <Text>3.5%</Text>
                  <Text>20%</Text>
                </Spacer>
              </Box>
              <Box
                width={"1212px"}
                margin={"0.5rem"}
                height={"60px"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                backgroundColor={bgColorFt2}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text
                  width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}> {t("Freelancer Fee")}</Text>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", maxWidth: "738px" }} >
                  <Text>0%</Text>
                  <Text>10%</Text>
                  <Text>20%</Text>
                  <Text>20%</Text>
                </Spacer>
              </Box>
              <Box
                width={"1212px"}
                height={"60px"}
                margin={"0.5rem"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: bgColorFt1, alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>{t("Withdrawal Fee")}</Text>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", maxWidth: "738px" }} >
                  <Text>{t("Crypto/Instant")}</Text>
                  <Text
                    display={"flex"}
                    flexWrap={"wrap"}
                    fontSize={"20px"}
                    justifyContent={"center"}
                  >{t("Min Payout $100")}<br /><span style={{ fontSize: "15px" }}>{t("275% Fee per Withdrawal")}</span></Text>
                  <Text
                    display={"flex"}
                    flexWrap={"wrap"}
                    fontSize={"20px"}
                    justifyContent={"center"}
                  >{t("Min Payout $100")}<br /><span style={{ fontSize: "15px" }}>{t("5% Fee per Withdrawal")}</span></Text><Text
                    display={"flex"}
                    flexWrap={"wrap"}
                    fontSize={"20px"}
                    justifyContent={"center"}
                  >{t("Min Payout $100")}<br /><span style={{ fontSize: "15px" }}>{t("5% Fee per Withdrawal")}</span></Text>
                </Spacer>
              </Box>
              <Box
                width={"1212px"}
                margin={"0.5rem"}
                height={"60px"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: bgColorFt2, alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>{t("Decentralized")}</Text>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", maxWidth: "738px" }} >
                  <CheckIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                </Spacer>
              </Box>
              <Box
                width={"1212px"}
                height={"60px"}
                margin={"0.5rem"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: bgColorFt1, alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>{t("Content Ownership")}</Text>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", maxWidth: "738px" }} >
                  <CheckIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                </Spacer>
              </Box>
              <Box
                width={"1212px"}
                margin={"0.5rem"}
                height={"60px"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: bgColorFt2, alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>{t("Efficient Escrow")}</Text>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "100%", maxWidth: "738px" }} >
                  <Text>{t("Yes")}</Text>
                  <Text position={"relative"} left={"1.83rem"}>{t("No/Partial")}</Text>
                  <Text position={"relative"} left={"1.83rem"}>{t("No/Partial")}</Text>
                  <Text position={"relative"} left={"1.83rem"}>{t("No/Partial")}</Text>
                </Spacer>
              </Box>
              <Box
                width={"1212px"}
                height={"60px"}
                margin={"0.5rem"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: bgColorFt1, alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>{t("No Limit on Task Size")}</Text>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", maxWidth: "738px" }} >
                  <CheckIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                </Spacer>
              </Box>
              <Box
                width={"1212px"}
                margin={"0.5rem"}
                height={"60px"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: bgColorFt2, alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}> {t("Scalable Dispute System")}</Text>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", maxWidth: "738px" }} >
                  <CheckIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                  <CloseIcon
                    w={"30px"}
                    h={"30px"}
                    border={"1px solid black"}
                    borderRadius={"14px"}
                    padding={"3px"} />
                </Spacer>
              </Box>
            </>
          )}
        </>
        <Text
          color={textColorEq}
          m={"0 1em"}

        >
          {t("equivalent")}<br />{t("** The fee goes directly to the liquidity of the $YBI token")}</Text>
      </Flex>

      <MoreInfo
        t={t}
        textColor={textColor}
        textColorDesc={textColorDesc}
        lng={lang} />
    </Box >
  );
};

export default Info;
