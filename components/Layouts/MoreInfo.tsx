import { Text, Flex, Image, Button, Stack, Link, useBreakpointValue } from "@chakra-ui/react"
import { FaDiscord, FaTelegramPlane, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";


interface MoreInfoProps {
    t: (key: string) => string;
    textColor: string;
    textColorDesc: string;
    lng: string;
    filterStyle: string;
    txtColorLaCo: string;
    bgColorOnHover: string;
    
}

const MoreInfo: React.FC<MoreInfoProps> = ({ t, textColor, textColorDesc, lng, filterStyle, txtColorLaCo, bgColorOnHover }) => {
    const marginLeft = (lng === "es")
        ? { lg: "1em" }
        : { lg: "0" };
    const marginRight = (lng === "es")
        ? { lg: "1em" }
        : { lg: "0" };
    const breakpointSize = useBreakpointValue({
        base: "40px",
        sm: "40px",
        md: "60px",
        lg: "80px",
        xl: "80px",
    });

    return (
        <Flex
            direction="column"
            w="full"
            h="100%"
            maxH={"2100px"}
            justifyContent="center"
            alignItems="center"

        >
            <Flex
                direction="column"
                w="full"
                h="auto"
                //maxH={"490px"}
                justifyContent="center"
                alignItems="center"
            >
                <Text
                    textAlign={"center"}
                    fontSize={{ base: "26px", md: "36px", lg: "50px" }}
                    color={textColor}
                    fontWeight={"700"}
                    margin={"2rem 0"}
                >{t("Join Our Thriving Web3 Community")}</Text>
                <Text
                    fontSize={{ base: "22px", md: "20px", lg: "36px" }}
                    color={textColorDesc}
                    fontWeight={"700"}
                    width={"auto"}
                    maxWidth={"1212px"}
                    textAlign={"center"}
                >{t("Our community")}</Text>
                <> {(lng === "es") ? (
                    <>
                        <Flex
                            direction={{ base: "column", md: "row", lg: "row" }}
                            justifyContent={"space-evenly"}
                            alignItems={"center"}
                            width={"100%"}
                            maxWidth={"700px"}

                        >
                            <Text
                                fontSize={{ base: "22px", md: "20px", lg: "36px" }}
                                color={textColorDesc}
                                display={"flex"}
                                flexDirection={"column"}
                                fontWeight={"800"}
                                alignItems={"center"}
                                marginRight={marginRight}
                            >+{"99"}<span style={{ color: "white", textShadow: "1px 1px #161414" }}>{t("Sellers")}</span>
                            </Text>
                            <Text
                                fontSize={{ base: "22px", md: "20px", lg: "36px" }}
                                color={textColorDesc}
                                display={"flex"}
                                flexDirection={"column"}
                                fontWeight={"800"}
                                alignItems={"center"}

                            >+{"99"}<span style={{ color: "white", textShadow: "1px 1px #161414" }}>{t("Buyers")}</span>
                            </Text>
                            <Text
                                fontSize={{ base: "22px", md: "20px", lg: "36px" }}
                                color={textColorDesc}
                                display={"flex"}
                                flexDirection={"column"}
                                fontWeight={"800"}
                                alignItems={"center"}
                                marginLeft={marginLeft}
                            >+{"99"}<span style={{ color: "white", textShadow: "1px 1px #161414" }}>{t("Transactions")}</span>
                            </Text>
                        </Flex>
                    </>
                ) : (
                    <>
                        <Flex
                            direction={{ base: "row" }}
                            justifyContent={"space-evenly"}
                            alignItems={"center"}
                            width={"100%"}
                            maxWidth={"700px"}

                        >
                            <Text
                                fontSize={{ base: "22px", md: "20px", lg: "36px" }}
                                color={textColorDesc}
                                display={"flex"}
                                flexDirection={"column"}
                                fontWeight={"800"}
                                alignItems={"center"}
                                marginRight={marginRight}
                            >+{"99"}<span style={{ color: "white", textShadow: "1px 1px #161414" }}>{t("Sellers")}</span>
                            </Text>
                            <Text
                                fontSize={{ base: "22px", md: "20px", lg: "36px" }}
                                color={textColorDesc}
                                display={"flex"}
                                flexDirection={"column"}
                                fontWeight={"800"}
                                alignItems={"center"}

                            >+{"99"}<span style={{ color: "white", textShadow: "1px 1px #161414" }}>{t("Buyers")}</span>
                            </Text>
                            <Text
                                fontSize={{ base: "22px", md: "20px", lg: "36px" }}
                                color={textColorDesc}
                                display={"flex"}
                                flexDirection={"column"}
                                fontWeight={"800"}
                                alignItems={"center"}
                                marginLeft={marginLeft}
                            >+{"99"}<span style={{ color: "white", textShadow: "1px 1px #161414" }}>{t("Transactions")}</span>
                            </Text>
                        </Flex>
                    </>
                )}
                </>
                <Flex
                    direction={"row"}
                    className={"slider"}


                >
                    <Flex className={"slide-track"}>
                        <Flex className={"slide"}
                            maxWidth={{ base: "200px", sm: "200px", md: "220px", lg: "253px", xl: "253px" }}
                            style={{ justifyContent: "space-evenly", alignItems: "center" }}>
                            <Image
                                w={"40px"}
                                h={"43px"}
                                alt={"ethlogo"}
                                src={"/static/ecosystem/ethlogo.png"}
                                fallbackSrc={"/static/ecosystem/ethlogo.png"} />
                            <Text
                                color={"white"}
                                fontSize={{ base: "24px", md: "28px", lg: "36px" }}
                                fontWeight={"700"}
                            >ETHEREUM</Text>
                        </Flex>
                        <Flex className={"slide"}
                            maxWidth={{ base: "150px", sm: "160px", md: "180px", lg: "223px", xl: "223px" }}
                            style={{ justifyContent: "space-evenly", alignItems: "center" }}>
                            <Image
                                w={"58px"}
                                h={"43px"}
                                alt={"gnologo"}
                                src={"/static/ecosystem/gnosislogo.svg"}
                                fallbackSrc={"/static/ecosystem/gnosislogo.svg"} />
                            <Text
                                color={"white"}
                                fontSize={{ base: "24px", md: "28px", lg: "36px" }}
                                fontWeight={"700"}
                            >GNOSIS</Text>
                        </Flex>
                        <Flex className={"slide"}
                            maxWidth={{ base: "210px", sm: "230px", md: "240px", lg: "273px", xl: "273px" }}
                            style={{ justifyContent: "space-evenly", alignItems: "center" }}>
                            <Image
                                w={"58px"}
                                h={"43px"}
                                alt={"seqlogo"}
                                src={"/static/ecosystem/sequence-logo.png"}
                                fallbackSrc={"/static/ecosystem/sequence-logo.png"} />
                            <Text
                                color={"white"}
                                fontSize={{ base: "24px", md: "28px", lg: "36px" }}
                                fontWeight={"700"}
                            >SEQUENCE</Text>
                        </Flex>
                        <Flex className={"slide"}
                            maxWidth={{ base: "180px", sm: "175px", md: "190px", lg: "232px", xl: "232px" }}
                            style={{ justifyContent: "space-evenly", alignItems: "center" }}>
                            <Image
                                w={"58px"}
                                h={"43px"}
                                alt={"filelogo"}
                                src={"/static/ecosystem/filecoin-logo.svg"}
                                fallbackSrc={"/static/ecosystem/filecoin-logo.svg"} />
                            <Text
                                color={"white"}
                                fontSize={{ base: "24px", md: "28px", lg: "36px" }}
                                fontWeight={"700"}
                            >FILECOIN</Text>
                        </Flex>
                        <Flex className={"slide"}
                            maxWidth={{ base: "160px", sm: "170px", md: "190px", lg: "212px", xl: "222px" }}
                            style={{ justifyContent: "space-evenly", alignItems: "center" }}
                        >
                            <Image
                                w={"48px"}
                                h={"43px"}
                                alt={"kleroslogo"}
                                src={"/static/ecosystem/kleros.png"}
                                fallbackSrc={"/static/ecosystem/kleros.png"} />
                            <Text
                                color={"white"}
                                fontSize={{ base: "24px", md: "28px", lg: "36px" }}
                                fontWeight={"700"}
                            >KLEROS</Text>
                        </Flex>
                        <Flex className={"slide"}
                            maxWidth={{ base: "330px", sm: "330px", md: "450px", lg: "450px", xl: "450px" }}
                            style={{ justifyContent: "space-evenly", alignItems: "center" }}

                        >
                            <Image
                                w={"51px"}
                                h={"43px"}
                                alt={"pohlogo"}
                                src={"/static/ecosystem/poh.webp"}
                                fallbackSrc={"/static/ecosystem/poh.webp"} />
                            <Text
                                color={"white"}
                                fontSize={{ base: "24px", md: "28px", lg: "36px" }}
                                fontWeight={"700"}
                            >PROOF OF HUMANITY</Text>
                        </Flex>
                        <Flex className={"slide"}
                            maxWidth={{ base: "280px", sm: "290px", md: "330px", lg: "390px", xl: "390px" }}
                            style={{ justifyContent: "space-evenly", alignItems: "center" }}
                        >
                            <Image
                                w={"58px"}
                                h={"43px"}
                                alt={"lenslogo"}
                                src={"/static/ecosystem/lenslogo.png"}
                                fallbackSrc={"/static/ecosystem/lenslogo.png"} />
                            <Text
                                color={"white"}
                                fontSize={{ base: "24px", md: "28px", lg: "36px" }}
                                fontWeight={"700"}
                            >LENS PROTOCOL</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                direction="column"
                w="full"
                h="100%"
                maxH={"1300px"}
                justifyContent="flex-start"
                alignItems="center">
                <Text
                    color={textColor}
                    fontSize={{ base: "24px", md: "28px", lg: "56px" }} fontWeight={"700"}
                    margin={"2rem 0 0 0"}>{t("How a transaction works")}</Text>
                <Image
                    h={"85%"}
                    w={"75%"}
                    alt={"howitworks"}
                    style={{ filter: filterStyle }}
                    src={"/static/featuresIcons/howitworks.png"}
                    fallbackSrc={"/static/featuresIcons/howitworks.png"} />
            </Flex>
            <Flex
                direction={"column"}
                w="full"
                h="100%"
                maxH={{ base: "740px", sm: "740px", md: "740px", lg: "448px", xl: "448px" }}
                justifyContent={{ base: "space-evenly", sm: "space-evenly", md: "space-between", lg: "space-around", xl: "space-around" }}
                marginBottom={"5em"}
                alignItems={{ base: "center", sm: "center", md: "center", lg: "center", xl: "center" }}>
                <Flex
                    direction={{ base: "column", sm: "column", md: "column", lg: "row", xl: "row" }}
                    w="full"
                    justifyContent={{ base: "flex-start", sm: "flex-start", md: "space-evenly", lg: "center", xl: "center" }}
                    h={{ base: "440px", sm: "440px", md: "446px", lg: "448px", xl: "448px" }}

                >
                    <Flex
                        direction="column"
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        width={{ base: "auto", sm: "auto", md: "auto", lg: "594px" }}
                        textAlign={"center"}
                        height={{ base: "250px", sm: "250px", md: "446px", lg: "446px" }}

                    >
                        <Text
                            color={textColor}
                            fontSize={{ base: "32px", md: "32px", lg: "64px" }}
                            fontWeight={"700"}
                            _hover={{
                                color: "white"
                            }}
                        >{t("Join the Yubiai community")}</Text>
                        <Text color={textColor} fontSize={{ base: "22px", md: "20px", lg: "33px" }}>{t("Learn more about our community, get support and start working with us")}</Text>
                        <Stack
                            marginTop={"1rem"}


                        >
                            <Link
                                width={{ base: "175px", sm: "175px", md: "175px", lg: "288px", xl: "288px" }}
                                height={{ base: "auto", sm: "auto", md: "auto", lg: "50px", xl: "50px" }}
                                _hover={{ textDecoration: "none" }}
                                style={{

                                    backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px"
                                }}
                                href={"https://app.yubiai.market"} target="_blank" rel="noopener noreferrer">
                                <Button
                                    color={txtColorLaCo}
                                    fontSize={"25px"}
                                    fontWeight={"700"}
                                    size={{ base: "sm", sm: "sm", md: "md", lg: "lg", xl: "xl" }}
                                    bg="transparent"
                                    h={"100%"}
                                    maxH={"50px"}
                                    w={"100%"}
                                    maxW={"288px"}
                                    _hover={{ backgroundColor: bgColorOnHover, color:"white" }}
                                >{t("LAUNCH APP")}</Button>
                            </Link>
                            <Link
                                width={{ base: "175px", sm: "175px", md: "175px", lg: "288px", xl: "288px" }}
                                height={{ base: "auto", sm: "auto", md: "auto", lg: "50px", xl: "50px" }}
                                _hover={{ textDecoration: "none" }} style={{ backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px" }} href="mailto: contact@yubiai.market">
                                <Button
                                    color={txtColorLaCo}
                                    fontSize={"25px"}
                                    fontWeight={"700"}
                                    size={{ base: "sm", sm: "sm", md: "md", lg: "lg", xl: "xl" }}
                                    bg="transparent"
                                    h={"100%"}
                                    maxH={"50px"}
                                    w={"100%"}
                                    maxW={"288px"}
                                    _hover={{ backgroundColor: bgColorOnHover, color:"white" }}>{t("CONTACT US")}</Button>
                            </Link>
                        </Stack>
                    </Flex>
                    <Flex
                        direction="column"
                        justifyContent={"space-around"}
                        alignItems={"center"}
                        w={"100%"} maxW={{ base: "auto", sm: "auto", md: "auto", lg: "500px", xl: "500px" }}
                        h={{ base: "196px", md: "203px", lg: "303px" }}
                        mt="10px">
                        <Flex
                            direction="row"
                            justifyContent={"space-around"}
                            alignItems={"center"}
                            w={{ base: "auto", sm: "auto", md: "auto", lg: "100%", xl: "100%" }}
                            h={{ base: "auto", sm: "auto", md: "auto", lg: "100%", xl: "100%" }}>
                            <Link
                                backgroundColor={txtColorLaCo} borderRadius={"50px"}
                                height={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                width={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                justifyContent={"center"}
                                alignItems={"center"}
                                className="icon"
                                href={"https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA"}
                                target="_blank">
                                <FaYoutube size={breakpointSize} color={"white"} />
                            </Link>
                            <Link
                                backgroundColor={txtColorLaCo} borderRadius={"50px"}
                                height={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                width={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                justifyContent={"center"}
                                alignItems={"center"}
                                className="icon" href={"https://twitter.com/YubiaiM"} target="_blank">
                                <FaTwitter size={breakpointSize} color={"white"} />
                            </Link>
                            <Link
                                backgroundColor={txtColorLaCo} borderRadius={"50px"}
                                height={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                width={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                justifyContent={"center"}
                                alignItems={"center"}
                                className="icon" href={"https://linktr.ee/Yubiai"} target="_blank">
                                <SiLinktree size={breakpointSize} color={"white"} />
                            </Link>

                        </Flex>
                        <Flex
                            direction="row"
                            justifyContent={"space-around"}
                            alignItems={"center"}
                            w={{ base: "auto", sm: "auto", md: "auto", lg: "100%", xl: "100%" }}
                            h={{ base: "auto", sm: "auto", md: "auto", lg: "100%", xl: "100%" }}>
                            <Link
                                backgroundColor={txtColorLaCo} borderRadius={"50px"}
                                height={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                width={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                justifyContent={"center"}
                                alignItems={"center"}
                                className="icon" href={"https://discord.gg/a9CQKJXb8X"} target="_blank">
                                <FaDiscord size={breakpointSize} color={"white"} />
                            </Link>
                            <Link
                                backgroundColor={txtColorLaCo} borderRadius={"50px"}
                                height={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                width={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                justifyContent={"center"}
                                alignItems={"center"}
                                className="icon" href={"https://t.me/yubiai"} target="_blank">
                                <FaTelegramPlane size={breakpointSize} color={"white"} />
                            </Link>
                            <Link
                                backgroundColor={txtColorLaCo} borderRadius={"50px"}
                                height={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                width={{ base: "60px", sm: "60px", md: "80px", lg: "104px", xl: "104px" }}
                                justifyContent={"center"}
                                alignItems={"center"}
                                className="icon" href={"https://github.com/yubiai"} target="_blank">
                                <FaGithub size={breakpointSize} color={"white"} />
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}

export default MoreInfo;