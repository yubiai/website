import {
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  UnorderedList,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { PieChart } from "react-minimal-pie-chart";

const BurnInfo1 = () => {
  const firstYear = [
    { title: "PlatForm Fee", value: 1, color: "rgba(0, 171, 209, 0.2)" },
    { title: "Ubi Burner Fee", value: 0.6, color: "#01abd0" },
    { title: "dynamic buyer & seller optional ubi burner fee", value: 10, color: "#1c548b" },
  ];

  const secondYear = [
    { title: "One", value: 88, color: "rgba(0, 171, 209, 0.2)" },
    { title: "Two", value: 2, color: "#01abd0" },
    { title: "Three", value: 5, color: "#1c548b" },
    { title: "Three", value: 5, color: "#52e120" },
  ];

  return (
    <>
      <Container
        maxW={"7xl"}
        mt={{ base: "1em", md: "0px" }}
        mb={{ base: "5em", md: "0px" }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt="1em">
          <Stack flex={1} spacing={"1.2em"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"white"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
              textAlign={"center"}
            >
              <Text as={"span"} position={"relative"}>
                Burn Information
              </Text>
            </Heading>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"white"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
              textAlign={"center"}
            >
              <Text as={"span"}>
                First Year
              </Text>
            </Heading>
            <PieChart
              data={firstYear}
              label={({ dataEntry }) => dataEntry.value + "%"}
              labelStyle={(index) => ({
                fill: firstYear[index].color,
                fontSize: "5px",
                fontFamily: "sans-serif"
              })}
              radius={25}
              labelPosition={110}
            />
          </Stack>
          <Stack flex={1} spacing={"1em"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"white"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
              textAlign={"center"}
            >
              <Text as={"span"} position={"relative"}>
                Burn Information
              </Text>
            </Heading>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"white"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
              textAlign={"center"}
            >
              <Text as={"span"}>
              After first year
              </Text>
            </Heading>
            <PieChart
              data={secondYear}
              label={({ dataEntry }) => dataEntry.value + "%"}
              labelStyle={(index) => ({
                fill: secondYear[index].color,
                fontSize: "5px",
                fontFamily: "sans-serif",
              })}
              radius={25}
              labelPosition={110}
            />
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default BurnInfo1;
