import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Features = () => {
  return (
    <>
      <Box
        position={"relative"}
        height={"479px"}
        width={"full"}
        padding={"1.5em"}
        borderRadius={"5px"}
        boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
        backgroundImage={
          "linear-gradient(to bottom, rgba(57, 61, 92, 0.94) 2%, rgba(39, 48, 122, 0) 100%)"
        }
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          color={"white"}
          fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
        >
          <Text as={"span"} position={"relative"}>
            Features
          </Text>
        </Heading>
        <Heading
          mt="10px"
          lineHeight={1.1}
          fontWeight={600}
          color={"white"}
          fontSize={{ base: "10px", sm: "15px", lg: "20px" }}
        >
          Q1
        </Heading>
        <Text
          mt={"1em"}
          color={"white"}
          fontSize={"17px"}
          fontWeight={"normal"}
          fontStyle={"normal"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos eius
          non distinctio nisi tenetur vitae omnis earum eaque laborum nam,
          repudiandae mollitia odit. Doloremque error nesciunt velit autem eum?
        </Text>
        <Heading
          mt="10px"
          lineHeight={1.1}
          fontWeight={600}
          color={"white"}
          fontSize={{ base: "10px", sm: "15px", lg: "20px" }}
        >
          Q2
        </Heading>
        <Text
          mt={"1em"}
          color={"white"}
          fontSize={"17px"}
          fontWeight={"normal"}
          fontStyle={"normal"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos eius
          non distinctio nisi tenetur vitae omnis earum eaque laborum nam,
          repudiandae mollitia odit. Doloremque error nesciunt velit autem eum?
        </Text>
        <Heading
          mt="10px"
          lineHeight={1.1}
          fontWeight={600}
          color={"white"}
          fontSize={{ base: "10px", sm: "15px", lg: "20px" }}
        >
          Q3
        </Heading>
        <Text
          mt={"1em"}
          color={"white"}
          fontSize={"17px"}
          fontWeight={"normal"}
          fontStyle={"normal"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic eos eius
          non distinctio nisi tenetur vitae omnis earum eaque laborum nam,
          repudiandae mollitia odit. Doloremque error nesciunt velit autem eum?
        </Text>
      </Box>
    </>
  );
};

export default Features;
