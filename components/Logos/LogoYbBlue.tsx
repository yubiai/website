import { Button, Image } from "@chakra-ui/react";
import Link from "next/link";

const LogoYblue = () => {
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
