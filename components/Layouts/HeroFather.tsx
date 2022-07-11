import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const HeroFather = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      w="full"
      h={{ base: "full", md: "1100px" }}
      backgroundImage={"/static/images/bgimage1.png"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {children}
    </Box>
  );
};

export default HeroFather;
