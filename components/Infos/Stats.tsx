import {
  Box,
  Center,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

interface StatsCardProps {
  title: string;
  stat: string;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
      <Stat px={{ base: 2, md: 10 }} py={"3"} rounded={"lg"} alignItems="center">
      <Box pl={{ base: 2, md: 4 }}>
        <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
          {stat}
        </StatNumber>
        <StatLabel fontWeight={"medium"}>{title}</StatLabel>
      </Box>
    </Stat>
  );
}

export default function Statistics() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        spacing={{ base: 2, lg: 4 }}
        color="white"
      >
        <StatsCard title={"Users"} stat={"5,000"} />
        <StatsCard title={"Publications"} stat={"2,000"} />
        <StatsCard title={"Transactions"} stat={"10,000"} />
        <StatsCard title={"Disputes"} stat={"1,000"} />
      </SimpleGrid>
    </Box>
  );
}
