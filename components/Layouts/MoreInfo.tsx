import { Text, Flex, Image } from "@chakra-ui/react"


const MoreInfo = () => {

    return (
        <Flex
            direction="column"
            w="full"
            h="100%"
            maxH={"483px"}
            justifyContent="center"
            alignItems="center"
            
        >
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
                    <Flex className={"slide"} style={{ maxWidth: "253px", justifyContent:"space-between"}}>
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
                    <Flex className={"slide"} style={{ maxWidth: "202px", justifyContent:"space-between"}}>
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
                    <Flex className={"slide"} style={{ maxWidth: "273px", justifyContent:"space-between"}}>
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
                    <Flex className={"slide"} style={{ maxWidth: "232px", justifyContent:"space-between"}}>
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
                    <Flex className={"slide"} style={{ maxWidth: "219px", justifyContent:"space-between"}}>
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
                    <Flex className={"slide"} style={{ maxWidth: "375px", justifyContent:"space-between"}}>
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
    )
}

export default MoreInfo;