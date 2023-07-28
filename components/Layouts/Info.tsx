import { Box, Text, Flex, Image, Spacer } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import MoreInfo from "./MoreInfo";
import SwiperComparison from "./SwiperComparison";
import { useBreakpointValue } from "@chakra-ui/react";





const Info = () => {
  const isBaseOrMd = useBreakpointValue({ base: true, md: true, lg: true, xl: false });

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
        color="#001664"
        fontSize={{ base: "32px", md: "32px", lg: "64px" }}
        fontWeight="700"
        lineHeight={1}
        textAlign={"center"}
        height={{ base: "32px", md: "32px", lg: "64px" }}
        margin={"10px"}
      >
        Why choose Yubiai?
      </Text>
      <Flex
        //width="auto"
        height={{ base: "auto", md: "auto", lg: "auto" }}
        maxWidth={{ base: "auto", md: "auto", lg: "auto" }}
        width={{ base: "100%", md: "100%", lg: "100%" }}
        padding={{ base: "0 2em", md: "0 2em", lg: "0 1em" }}
        justifyContent={{ base: "space-around", md: "space-around", lg: "space-around" }}

      >
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
            Yubiai is an <span >online marketplace</span> where people can buy or sell services using <span >digital money.</span> <br />It is a <span >soon-to-be decentralized governance</span> which means it’s <span >not controlled by one company</span> in particular but <span>by the whole community</span> itself.<br /><br />The platform features key components such as the<span> Proof of Humanity</span> sybil-resistance protocol which is used as a <span>badge to authenticate users and ensure user integrity,</span> rather than a mandatory authentication method. It also uses<span> Kleros</span> when a problem with a purchase occures. Which is one of the <span>most important pillar of our platform</span>, Kleros is a <span>decentralized arbitration service</span> for the disputes. Imagine having a group of judges who help solve disagreements; listens to both sides of the story and looks at the evidence or information provided. Then, it makes a decision based on <span>what is fair and right.<br /></span><br />In the future, Yubiai will have a new feature called <span>Curate</span>. This feature will help make sure that <span>only good and trustworthy things</span> are listed for sale. It will also help <span>answer any questions</span> people have about the things they want to buy.<br />Eventually<span> our mission </span>is to create a <span>marketplace</span> where people can buy and sell everything<span> without any worries.</span>
          </Text>
        </div>
      </Flex>
      <Flex
        width="auto"
        height={{ base: "auto", md: "auto", lg: "405px" }}
        style={{ justifyContent: "center", display: "flex", flexDirection: "row" }}
      >
        <Flex >
          <Image
            width={"491px"}
            h={{ base: "calc(30vw / 1)", md: "calc(491px / (16/9))", lg: "276px" }}
            alt={"logoblue"}
            src={"/static/images/yubiaiblue.png"}
            fallbackSrc={"/static/images/logoyubiai.png"}
            _hover={{
              filter: "brightness(20)"
            }}
          />
        </Flex>
        <Flex
          style={{ display: "flex", flexDirection: "column" }}


        >
          <Image
            width={"723px"}
            h={{ base: "calc(17vw / 1)", md: "calc(17vw / 1)", lg: "132px" }}
            alt={"lowFees"}
            src={"/static/featuresIcons/lowFeesIcon.png"}
            fallbackSrc={"/static/featuresIcons/lowFeesIcon"}
            _hover={{
              filter: "brightness(20)"
            }}
          />
          <Image
            width={"723px"}
            h={{ base: "calc(15vw / 1)", md: "calc(17vw / 1)", lg: "132px" }}
            alt={"cryptoPaym"}
            src={"/static/featuresIcons/cryptoPaymIcon.png"}
            fallbackSrc={"/static/featuresIcons/cryptoPaymIcon.png"}
            _hover={{
              filter: "brightness(20)"
            }}
          />
          <Image
            width={"723px"}
            alt={"svcsIcon"}
            h={{ base: "calc(15vw / 1)", md: "calc(17vw / 1)", lg: "132px" }}
            src={"/static/featuresIcons/servicesIcon.png"}
            fallbackSrc={"/static/featuresIcons/servicesIcon.png"}
            _hover={{
              filter: "brightness(20)"
            }}
          />
        </Flex>
      </Flex>
      <Flex
        width="auto"
        height="auto"
        style={{ justifyContent: "flex-start", flexDirection: "column", alignItems: "center", display: "flex" }}
      >
        <Text
          color={"#001664"}
          fontSize={{ base: "26px", md: "26px", lg: "48px" }}
          m={{ base: "1rem", md: "1rem", lg: "1rem" }}
          fontWeight={"500"}
          width={"100%"}
          maxWidth={"auto"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          In Yubiai we believe in the future of a fair and transparent digital workspace
        </Text>
        <Text
          color={"white"}
          fontSize={{ base: "22px", md: "22px", lg: "32px" }}
          fontWeight={"500"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          Check some of our key features in comparison to the competition below
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
                  <Text
                    display={"flex"}
                    h={"50px"}
                    backgroundColor={"rgba(0, 22, 100, 0.30)"}
                    borderRadius={"20px 0 0 20px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"black"}
                  >Client Fee</Text>
                  <Text display={"flex"}
                    h={"50px"}
                    //backgroundColor={"rgba(217, 114, 241, 0.6)"}
                    borderRadius={"20px 0 0 20px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"black"}
                  >Freelance Fee</Text>
                  <Text
                    display={"flex"}
                    h={"50px"}
                    backgroundColor={"rgba(0, 22, 100, 0.30)"}
                    borderRadius={"20px 0 0 20px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"black"}
                  >Withdrawal Fee</Text>
                  <Text display={"flex"}
                    h={"50px"}
                    //backgroundColor={"rgba(217, 114, 241, 0.6)"}
                    borderRadius={"20px 0 0 20px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"black"}
                  >Decentralized</Text>
                  <Text
                    display={"flex"}
                    h={"50px"}
                    backgroundColor={"rgba(0, 22, 100, 0.30)"}
                    borderRadius={"20px 0 0 20px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"black"}
                  >Content Ownership</Text>
                  <Text display={"flex"}
                    h={"50px"}
                    //backgroundColor={"rgba(217, 114, 241, 0.6)"}
                    borderRadius={"20px 0 0 20px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"black"}
                  >Efficient Escrow</Text>
                  <Text
                    display={"flex"}
                    h={"50px"}
                    backgroundColor={"rgba(0, 22, 100, 0.30)"}
                    borderRadius={"20px 0 0 20px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"black"}
                  >No Limit on Task Size</Text>
                  <Text display={"flex"}
                    h={"50px"}
                    //backgroundColor={"rgba(217, 114, 241, 0.6)"}
                    borderRadius={"20px 0 0 20px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    color={"black"}
                  >Scalable Dispute System</Text>
                </Flex>

              </Flex>
              <SwiperComparison />
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
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: "rgba(217, 114, 241, 0.6)", alignItems: "center" }}>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "100%", maxWidth: "738px" }}
                >
                  <Image
                    w={"110px"}
                    h={"46.25px"}
                    alt={"Logo"}
                    src={"/static/images/logoyubiai.png"}
                    fallbackSrc={"/static/images/logoyubiai.png"}
                    filter={"drop-shadow(2px 4px 6px black)"}
                    background={"rgba(0, 148.40, 212, 0.15)"}
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
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: "rgba(0, 22, 100, 0.30)", alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text
                  width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}> Client Fee</Text>
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
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: "rgba(0, 188, 212, 0.30)", alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text
                  width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}> Freelancer Fee</Text>
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
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: "rgba(0, 22, 100, 0.30)", alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>Withdrawal Fee</Text>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", maxWidth: "738px" }} >
                  <Text>Crypto/Instant</Text>
                  <Text
                    display={"flex"}
                    flexWrap={"wrap"}
                    fontSize={"20px"}
                    justifyContent={"center"}
                  >Min Payout $100<br /><span style={{ fontSize: "15px" }}>2.75% Fee per Withdrawal</span></Text>
                  <Text
                    display={"flex"}
                    flexWrap={"wrap"}
                    fontSize={"20px"}
                    justifyContent={"center"}
                  >Min Payout $100<br /><span style={{ fontSize: "15px" }}>5% Fee per Withdrawal</span></Text><Text
                    display={"flex"}
                    flexWrap={"wrap"}
                    fontSize={"20px"}
                    justifyContent={"center"}
                  >Min Payout $100<br /><span style={{ fontSize: "15px" }}>5% Fee per Withdrawal</span></Text>
                </Spacer>
              </Box>
              <Box
                width={"1212px"}
                margin={"0.5rem"}
                height={"60px"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: "rgba(0, 188, 212, 0.30)", alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>Decentralized</Text>
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
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: "rgba(0, 22, 100, 0.30)", alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>Content Ownership</Text>
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
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: "rgba(0, 188, 212, 0.30)", alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>Efficient Escrow</Text>
                <Spacer
                  style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: "100%", maxWidth: "738px" }} >
                  <Text>Yes</Text>
                  <Text>No/Partial</Text>
                  <Text>No/Partial</Text>
                  <Text>No/Partial</Text>
                </Spacer>
              </Box>
              <Box
                width={"1212px"}
                height={"60px"}
                margin={"0.5rem"}
                boxShadow={"0px 5px 16px 3px rgba(0, 0, 0, 0.15)"}
                borderRadius={"20px"}
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: "rgba(0, 22, 100, 0.30)", alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}>No Limit on Task Size</Text>
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
                style={{ justifyContent: "flex-end", display: "flex", flexDirection: "row", backgroundColor: "rgba(0, 188, 212, 0.30)", alignItems: "center", fontSize: "24px", fontWeight: "400" }}
                color={"black"}
                _hover={{
                  color: "#FFFFFF"
                }}>
                <Text width={"100%"}
                  maxWidth={"455px"}
                  display={"flex"}
                  justifyContent={"space-evenly"}> Scalable Dispute System</Text>
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
          color={"black"}
          m={"0 1em"}
        >
          *0% equivalent for the first year, after first year only 0.3% for PREMIUM clients with higher visualization impact for a low subscription cost<br />** The fee goes directly to the liquidity of the $YBI token</Text>
      </Flex>

      <MoreInfo />
    </Box >
  );
};

export default Info;
