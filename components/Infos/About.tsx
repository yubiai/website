import { Button, Heading, Text, Stack } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Heading
        textAlign={{base: "center", md: "left"}}
        lineHeight={1.1}
        fontWeight={600}
        color={"white"}
        fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
      >
        <Text
          as={"span"}
          position={"relative"}
        >
         About the proyect
        </Text>
      </Heading>
      <Text color={"white"} fontSize={"20px"} fontWeight={"normal"} fontStyle={"normal"}>
      Yubiai stands for `You UBI And I` is a community born project from some ProofOfHumanity members, a platform where buyers & sellers meet to exchange in a secure, easy, transparent and cheap way everything they want while making social impact.
      </Text>
      <Text color={"white"} fontSize={"20px"} fontWeight={"normal"} fontStyle={"normal"}>
      As every transaction between buyers and sellers has a small fee intended to buy and burn $UBI (The Universal Basic Income Token) thus increasing his value.
      </Text>
    </>
  );
};

export default About;
