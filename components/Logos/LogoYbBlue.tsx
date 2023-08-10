import { Button, Image, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

const LogoYblue = () => {

  const { colorMode } = useColorMode();
  let filterStyleSocial = "";
  if (colorMode === "dark") {
    filterStyleSocial = "invert(53%) sepia(62%) saturate(2222%) hue-rotate(148deg) brightness(98%) contrast(101%)";
  }

  return (
    <Button
    bg="transparent"
    p="1.5em"
    _hover={{
      boxShadow: '2px 2px 5px black'
    }}
  >
      <Link href={"/"}>
        <Image
          style={{filter:filterStyleSocial}}
          w={"100px"}
          h={"39.16px"}
          alt={"Logo"}
          src={"/static/images/logoyubiaiBLUE.png"}
          fallbackSrc={"/static/images/logoyubiai.png"}
        />
      </Link>
    </Button>
  );
};

export default LogoYblue;
