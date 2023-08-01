import { Button, Image } from "@chakra-ui/react";
import Link from "next/link";

const LogoYb = () => {
  return (
    <Button
      bg="transparent"
      p="1.5em"
      w={"200px"}
      _hover={{
        boxShadow: '2px 2px 5px black'
      }}
    >
      <Link href={"/"}>
        <Image
          w={"100px"}
          h={"39.16px"}
          alt={"Logo"}
          src={"/static/images/logoyubiai.png"}
          fallbackSrc={"/static/images/logoyubiai.png"}
        />
      </Link>
    </Button>
  );
};

export default LogoYb;
