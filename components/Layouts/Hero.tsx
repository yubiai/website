import {

  Flex,
  Image,
  Box,
  Text,

} from "@chakra-ui/react";
import About from "../Infos/About";
import styles from "./hero.module.css";
import Actions from "./Actions";


export default function Hero() {
  return (
    <Box
      className={styles["hero-container"]}
      w="full"
      h="1728px"
      style={{ flexDirection: "column", display: "flex" }}
    >
      <Box style={{ display: "contents" }}>
        <Box style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "flex-end",
          height: "438px",
          alignItems: "flex-end",
          width: "800px",
          justifyContent: "space-around",
        }}>
          <Image
            w={"594px"}
            h={"232px"}
            alt={"Logo"}
            src={"/static/images/logoyubiai.png"}
            fallbackSrc={"/static/images/logoyubiai.png"}
          />

        </Box>
        <Box style={{
          display: "flex",
          flexDirection: "column",
          width: "auto",
          marginLeft: "85px"
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
