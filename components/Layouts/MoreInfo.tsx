import { Text, Flex, Image, Button } from "@chakra-ui/react"


const MoreInfo = () => {

    return (
        <Flex
            direction="column"
            w="full"
            h="100%"
            maxH={"1123px"}
            justifyContent="center"
            alignItems="center"

        >
            <Flex
                direction="column"
                w="full"
                h="100%"
                maxH={"490px"}
                justifyContent="center"
                alignItems="center">
                <Text
                    fontSize={"50px"}
                    color={"#001664"}
                    fontWeight={"700"}
                >Join Our Thriving Web3 Community</Text>
                <Text
                    fontSize={"36px"}
                    color={"#F0F3FF"}
                    fontWeight={"700"}
                    width={"auto"}
                    maxWidth={"1212px"}
                    textAlign={"center"}
                >Our community is the driving force behind Yubiai, promoting collaboration and the exchange of ideas. Together, we shape an extraordinary future</Text>
                <Flex
                    direction="row"
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    width={"100%"}
                    maxWidth={"700px"}
                >
                    <Text
                        fontSize={"36px"}
                        color={"#001664"}
                        display={"flex"}
                        flexDirection={"column"}
                        fontWeight={"800"}
                        alignItems={"center"}
                    >+{"n"}<span style={{ color: "white", textShadow: "1px 1px #161414" }}>Sellers</span>
                    </Text>
                    <Text
                        fontSize={"36px"}
                        color={"#001664"}
                        display={"flex"}
                        flexDirection={"column"}
                        fontWeight={"800"}
                        alignItems={"center"}
                    >+{"n"}<span style={{ color: "white", textShadow: "1px 1px #161414" }}>Buyers</span>
                    </Text>
                    <Text
                        fontSize={"36px"}
                        color={"#001664"}
                        display={"flex"}
                        flexDirection={"column"}
                        fontWeight={"800"}
                        alignItems={"center"}
                    >+{"n"}<span style={{ color: "white", textShadow: "1px 1px #161414" }}>Transactions</span>
                    </Text>
                </Flex>
                <Flex
                    direction={"row"}
                    className={"slider"}
                >
                    <Flex className={"slide-track"}>
                        <Flex className={"slide"} style={{ maxWidth: "253px", justifyContent: "space-between" }}>
                            <Image
                                w={"40px"}
                                h={"43px"}
                                alt={"ethlogo"}
                                src={"/static/ecosystem/ethlogo.png"}
                                fallbackSrc={"/static/ecosystem/ethlogo.png"} />
                            <Text
                                color={"white"}
                                fontSize={"36px"}
                                fontWeight={"700"}
                            >ETHEREUM</Text>
                        </Flex>
                        <Flex className={"slide"} style={{ maxWidth: "202px", justifyContent: "space-between" }}>
                            <Image
                                w={"58px"}
                                h={"43px"}
                                alt={"gnologo"}
                                src={"/static/ecosystem/gnosislogo.svg"}
                                fallbackSrc={"/static/ecosystem/gnosislogo.svg"} />
                            <Text
                                color={"white"}
                                fontSize={"36px"}
                                fontWeight={"700"}
                            >GNOSIS</Text>
                        </Flex>
                        <Flex className={"slide"} style={{ maxWidth: "273px", justifyContent: "space-between" }}>
                            <Image
                                w={"58px"}
                                h={"43px"}
                                alt={"seqlogo"}
                                src={"/static/ecosystem/sequence-logo.png"}
                                fallbackSrc={"/static/ecosystem/sequence-logo.png"} />
                            <Text
                                color={"white"}
                                fontSize={"36px"}
                                fontWeight={"700"}
                            >SEQUENCE</Text>
                        </Flex>
                        <Flex className={"slide"} style={{ maxWidth: "232px", justifyContent: "space-between" }}>
                            <Image
                                w={"58px"}
                                h={"43px"}
                                alt={"filelogo"}
                                src={"/static/ecosystem/filecoin-logo.svg"}
                                fallbackSrc={"/static/ecosystem/filecoin-logo.svg"} />
                            <Text
                                color={"white"}
                                fontSize={"36px"}
                                fontWeight={"700"}
                            >FILECOIN</Text>
                        </Flex>
                        <Flex className={"slide"} style={{ maxWidth: "219px", justifyContent: "space-between" }}>
                            <Image
                                w={"48px"}
                                h={"43px"}
                                alt={"kleroslogo"}
                                src={"/static/ecosystem/kleros.png"}
                                fallbackSrc={"/static/ecosystem/kleros.png"} />
                            <Text
                                color={"white"}
                                fontSize={"36px"}
                                fontWeight={"700"}
                            >KLEROS</Text>
                        </Flex>
                        <Flex className={"slide"}>
                            <Image
                                w={"58px"}
                                h={"43px"}
                                alt={"pohlogo"}
                                src={"/static/ecosystem/poh.webp"}
                                fallbackSrc={"/static/ecosystem/poh.webp"} />
                            <Text
                                color={"white"}
                                fontSize={"36px"}
                                fontWeight={"700"}
                            >PROOF OF HUMANITY</Text>
                        </Flex>
                        <Flex className={"slide"} style={{ maxWidth: "375px", justifyContent: "space-between" }}>
                            <Image
                                w={"58px"}
                                h={"43px"}
                                alt={"lenslogo"}
                                src={"/static/ecosystem/lenslogo.png"}
                                fallbackSrc={"/static/ecosystem/lenslogo.png"} />
                            <Text
                                color={"white"}
                                fontSize={"36px"}
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
                maxH={"630px"}
                justifyContent="flex-start"
                alignItems="center">
                <Text color={"#001664"} fontSize={"64px"} fontWeight={"700"}>How a transaction works in Yubiai</Text>
                <Text color={"#001664"} fontSize={"64px"} fontWeight={"700"}>IMAGEN DE COMO FUNCIONA</Text>
            </Flex>
            <Flex
                direction="column"
                w="full"
                h="100%"
                maxH={"600px"}
                justifyContent="flex-start"
                alignItems="center">
                <Flex
                    direction="row"
                    w="full"
                    justifyContent={"center"}
                    h={"100%"}
                    maxH={"600px"}
                >
                    <Flex
                        direction="column"
                        justifyContent={"space-around"}
                        alignItems={"center"}
                    >
                        <Text color={"#001664"} fontSize={"64px"} fontWeight={"700"}
                            _hover={{
                                color: "white"
                            }}
                        >Join the Yubiai community</Text>
                        <Text color={"#001664"} fontSize={"24px"} fontWeight={"300"}>Learn more about our community, get support and start working with us</Text>
                        <a
                            style={{ width: "100%", maxWidth: "288px", height: "100%", maxHeight: "50px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px" }}
                            href={"https://app.yubiai.market"} target="_blank" rel="noopener noreferrer">
                            <Button
                                color={"#001664"}
                                fontSize={"25px"}
                                fontWeight={"700"}
                                bg="transparent"
                                h={"100%"}
                                maxH={"50px"}
                                w={"100%"}
                                maxW={"288px"}
                                _hover={{
                                    textDecoration: "none",
                                    backgroundColor: "#001664",
                                    color: "white"
                                }}
                            >LAUNCH APP</Button>
                        </a>
                        <a style={{ width: "100%", maxWidth: "288px", height: "100%", maxHeight: "50px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px" }} href="mailto: contact@yubiai.market">
                            <Button
                                color={"#001664"}
                                fontSize={"25px"}
                                fontWeight={"700"}
                                bg="transparent"
                                h={"100%"}
                                maxH={"50px"}
                                w={"100%"}
                                maxW={"288px"}
                                _hover={{
                                    textDecoration: "none",
                                    backgroundColor: "#001664",
                                    color: "white"
                                }}>CONTACT US</Button>
                        </a>
                    </Flex>
                    <Flex direction="column" justifyContent={"space-around"} alignItems={"center"} w={"100%"} maxW={"500px"}>
                        <Flex direction="row" justifyContent={"space-around"} alignItems={"center"} w={"100%"}>
                            <a className="icon" href={"https://www.youtube.com/channel/UCbxVCRRIO3xGnZuPywJ_0TA"} target="_blank">
                                <Image
                                    alt={"youtube"}
                                    src={"/static/networksocial/youtube.png"}
                                    fallbackSrc={"/static/networksocial/youtube.png"} />
                            </a>
                            <a className="icon" href={"https://twitter.com/YubiaiM"} target="_blank">
                                <Image
                                    alt={"twitter"}
                                    src={"/static/networksocial/Twitter.png"}
                                    fallbackSrc={"/static/networksocial/Twitter.png"} />
                            </a>
                            <a className="icon" href={"https://linktr.ee/Yubiai"} target="_blank">
                                <Image
                                    alt={"linktree"}
                                    src={"/static/networksocial/Linktree.png"}
                                    fallbackSrc={"/static/networksocial/Linktree.png"} />
                            </a>

                        </Flex>
                        <Flex direction="row" justifyContent={"space-around"} alignItems={"center"} w={"100%"}>
                            <a className="icon" href={"https://discord.gg/a9CQKJXb8X"} target="_blank">
                                <Image
                                    alt={"discord"}
                                    src={"/static/networksocial/Discord.png"}
                                    fallbackSrc={"/static/networksocial/Discord.png"} />
                            </a>
                            <a className="icon" href={"https://t.me/yubiai"} target="_blank">
                                <Image
                                    alt={"telegram"}
                                    src={"/static/networksocial/Telegram.png"}
                                    fallbackSrc={"/static/networksocial/Telegram.png"} />
                            </a>
                            <a className="icon" href={"https://github.com/yubiai"} target="_blank">
                                <Image
                                    alt={"github"}
                                    src={"/static/networksocial/Github.png"}
                                    fallbackSrc={"/static/networksocial/Github.png"} />
                            </a>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex >
    )
}

export default MoreInfo;