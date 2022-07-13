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
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos eius non distinctio nisi tenetur vitae omnis earum eaque laborum nam, repudiandae mollitia odit. Doloremque error nesciunt velit autem eum?
      </Text>
      <Text color={"white"} fontSize={"20px"} fontWeight={"normal"} fontStyle={"normal"}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos eius non distinctio nisi tenetur vitae omnis earum eaque laborum nam, repudiandae mollitia odit. Doloremque error nesciunt velit autem eum?
      </Text>
    </>
  );
};

export default About;
