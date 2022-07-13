import {
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { PieChart } from "react-minimal-pie-chart";

const BurnInfo = () => {
  const dataMock = [
    { title: "One", value: 88, color: "rgba(0, 171, 209, 0.2)" },
    { title: "Two", value: 2, color: "#01abd0" },
    { title: "Three", value: 5, color: "#1c548b" },
    { title: "Three", value: 5, color: "#52e120" },
  ];

  return (
    <>
      <Container maxW={"7xl"} mt={{ base: "1em", md: "0px" }} mb={{ base: "5em", md: "0px" }}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={"1.2em"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"white"}
              fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
              textAlign={{base: "center", md: "left"}}
            >
              <Text as={"span"} position={"relative"}>
                Burn Information
              </Text>
            </Heading>
            <PieChart
              data={dataMock}
              label={({ dataEntry }) => dataEntry.value + "%"}
              labelStyle={(index) => ({
                fill: dataMock[index].color,
                fontSize: "5px",
                fontFamily: "sans-serif",
              })}
              radius={35}
              labelPosition={110}
            />
          </Stack>
          <Flex flex={2}>
            <UnorderedList color="white">
              <ListItem><Text fontSize={"2xl"}>% Loren Lorena Loren</Text></ListItem>
              <ListItem><Text fontSize={"2xl"}>% Loren Lorena Loren</Text></ListItem>
              <ListItem><Text fontSize={"2xl"}>% Loren Lorena Loren</Text></ListItem>
              <ListItem><Text fontSize={"2xl"}>% Loren Lorena Loren</Text></ListItem>
            </UnorderedList>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default BurnInfo;
