import {
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Box,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { PieChart } from "react-minimal-pie-chart";

const BurnInfo = () => {
  const firstYear = [
    { title: "PlatForm fee", value: 0, label: "0%", color: "#dd6a6a" },
    /* {
      title: "Dynamic seller optional ubi burner fee",
      value: 10,
      label: "0.6% - 10%",
      color: "#4898ce",
    },
    {
      title: "Dynamic buyer optional ubi burner fee",
      value: 10,
      label: "0% - 10%",
      color: "#14b765",
    }, */
    { title: "", value: 80, label: "", color: "#143850" },
  ];

  const secondYear = [
    { title: "PlatForm fee", value: 0.1, label: "0.1%", color: "#dd6a6a" },
   /*  {
      title: "Dynamic seller optional ubi burner fee",
      value: 10,
      label: "0.6% - 10%",
      color: "#4898ce",
    },
    {
      title: "Dynamic buyer optional ubi burner fee",
      value: 10,
      label: "0% - 10%",
      color: "#14b765",
    }, */
    { title: "", value: 79.9, label: "", color: "#143850" },
  ];

  return (
    <>
      <Container
        maxW={"7xl"}
        mt={{ base: "1em", md: "0px" }}
        mb={{ base: "5em", md: "0px" }}
      >
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          color={"white"}
          fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
          textAlign={"center"}
        >
          <Text as={"span"} position={"relative"}>
            Fee
          </Text>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt="1em">
          <Stack flex={1} spacing={"1.2em"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"white"}
              fontSize={{ base: "2xl", sm: "2xl", lg: "3xl" }}
              textAlign={"center"}
            >
              <Text as={"span"}>First year</Text>
            </Heading>
            <PieChart
              data={firstYear}
              label={({ dataEntry }) => dataEntry.label}
              labelStyle={(index) => ({
                fill: firstYear[index].color,
                fontSize: "4px",
                fontFamily: "sans-serif",
              })}
              radius={25}
              labelPosition={110}
              style={{ height: "25em" }}
            />
            <Box
              display={{ base: "block", sm: "block", md: "none" }}
              position={"relative"}
              textAlign={{ base: "left", md: "center" }}
              height={"5em"}
              width={"full"}
              padding={"2em"}
              borderRadius={"5px"}
              mb={"3em"}
              boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
              backgroundImage={
                "linear-gradient(to bottom, rgba(57, 61, 92, 0.94) 2%, rgba(39, 48, 122, 0) 100%)"
              }
            >
              <Text color="#dd6a6a">
                <b>Platform Fee:</b> 0% 
              </Text>
             {/*  <Text color="#4898ce">
                <b>Dynamic seller optional Ubi Burner Fee:</b> 0.6% - 10% 
              </Text>
              <Text color="#14b765">
                <b>Dynamic buyer optional Ubi Burner Fee:</b> 0% - 10% 
              </Text> */}
            </Box>
          </Stack>
          <Stack flex={1} spacing={"1em"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"white"}
              fontSize={{ base: "2xl", sm: "2xl", lg: "3xl" }}
              textAlign={"center"}
            >
              <Text as={"span"}>After first year</Text>
            </Heading>
            <PieChart
              data={secondYear}
              label={({ dataEntry }) => dataEntry.label}
              labelStyle={(index) => ({
                fill: secondYear[index].color,
                fontSize: "4px",
                fontFamily: "sans-serif",
              })}
              radius={25}
              labelPosition={110}
              style={{ height: "25em" }}
            />
          </Stack>
        </SimpleGrid>
        <Box
          display={{ base: "block", sm: "block", md: "none" }}
          position={"relative"}
          textAlign={{ base: "left", md: "center" }}
          height={"5em"}
          width={"full"}
          padding={"2em"}
          borderRadius={"5px"}
          mb={"3em"}
          boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
          backgroundImage={
            "linear-gradient(to bottom, rgba(57, 61, 92, 0.94) 2%, rgba(39, 48, 122, 0) 100%)"
          }
        >
          <Text color="#dd6a6a">
            <b>Platform Fee:</b> 0.3%
          </Text>
          {/* <Text color="#4898ce">
            <b>Dynamic seller optional Ubi Burner Fee:</b> 0.6% - 10%
          </Text>
          <Text color="#14b765">
            <b>Dynamic buyer optional Ubi Burner Fee:</b> 0% - 10%
          </Text> */}
        </Box>
        <Box
          display={{ base: "none", sm: "none", md: "block" }}
          position={"relative"}
          textAlign={{ base: "left", md: "center" }}
          height={"full"}
          width={"full"}
          padding={"2em"}
          borderRadius={"5px"}
          mb={"3em"}
          boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
          backgroundImage={
            "linear-gradient(to bottom, rgba(57, 61, 92, 0.94) 2%, rgba(39, 48, 122, 0) 100%)"
          }
        >
          <Text color="#dd6a6a">
            <b>Platform Fee:</b> 0% (First year) | 0.1% (After first year)
          </Text>
          {/* <Text color="#4898ce">
            <b>Dynamic seller optional Ubi Burner Fee:</b> 0.6% - 10% (First
            year) | 0.6% - 10% (After first year)
          </Text>
          <Text color="#14b765">
            <b>Dynamic buyer optional Ubi Burner Fee:</b> 0% - 10% (First year)
            | 0% - 10% (After first year)
          </Text> */}
        </Box>
      </Container>
    </>
  );
};

export default BurnInfo;
