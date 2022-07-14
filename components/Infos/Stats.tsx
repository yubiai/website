import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber
} from "@chakra-ui/react";

interface StatsCardProps {
  title: string;
  stat: string;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
      <Stat px={{ base: 2, md: 10 }} py={"3"} rounded={"lg"} alignItems="center">
      <Box pl={{ base: 2, md: 4 }}>
        <StatNumber fontSize={"5xl"} fontWeight={"medium"}>
          {stat}
        </StatNumber>
        <StatLabel fontSize={"1xl"} fontWeight={"medium"}>{title}</StatLabel>
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
        <StatsCard title={"Users"} stat={"0"}  />
        <StatsCard title={"Publications"} stat={"0"} />
        <StatsCard title={"Transactions"} stat={"0"} />
        <StatsCard title={"Disputes"} stat={"0"} />
      </SimpleGrid>
    </Box>
  );
}
