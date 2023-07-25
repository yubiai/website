import {

  Flex,
  Image,
  Box,
  Text,

} from "@chakra-ui/react";
import About from "../Infos/About";
import Actions from "./Actions";


export default function Hero() {
  return (
    <Box
      className={"hero-container"}
      w={{ base: "100%", md: "50%", lg: "100%" }}
      h={{ base: "auto", md: "1728px" }}
      style={{ flexDirection: "column", display: "flex" }}
      
    >
      <Box style={{ display: "contents" }}>
        <Box 
          h={{base:"auto", md:"750%", lg:"438px"}}
          w={{base:"auto", md:"75%", lg:"800px"}}
          style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "flex-end",
          alignItems: "flex-end",
          justifyContent: "space-around",
        }}>
          <Image
            py={{base:"10", md: "10", lg: "0"}}
            w={{base:"50%", md: "100%", lg: "594px"}}
            h={{base:"50%", md: "100%", lg: "232px"}}
            alt={"Logo"}
            src={"/static/images/logoyubiai.png"}
            fallbackSrc={"/static/images/logoyubiai.png"}
          />

        </Box>
        <Box 
          marginLeft={{base:"0",md:"0", lg:"85px"}}
          width={{base:"auto",md:"50%", lg:"auto"}}
          border={"1px dotted black"}
          style={{
          display: "flex",
          flexDirection: "column"
          }} >
          <About />
        </Box>
        <Flex style={{ display: "flex", justifyContent: "center", margin: "4rem" }}

        >
          <Text
            color={"white"}
            fontSize={"64px"}
            fontWeight={"600"}
            fontStyle={"normal"}
            alignSelf={"center"}

          >
            What can you do in Yubiai?
          </Text>
        </Flex>
        <Flex style={{ display: "flex", justifyContent: "center" }} >
          <Actions />
        </Flex>
      </Box>
    </Box>
  );
}
