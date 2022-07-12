import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode, useState } from "react";

const HeroFather = ({ children, title }: { children: ReactNode, title: String }) => {


  const listImages = [
    "bg0.png", "bg1.jpg", "bg2.jpg", "bg3.png", "bg4.png", "bg5.jpg", "bg6.jpg", "bg7.jpg", "bg8.png", "bg9.jpg", "bg10.png", "bg11.jpg"
  ]

  const [selectImage, setSelectImage] = useState(listImages[0])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
      {listImages && listImages.map((item, i) => (
            <Button h="1em" key={i} onClick={() => setSelectImage(item)}>{i}</Button>
          ))}
        <Box
          w="full"
          h={{ base: "full", md: "800px" }}
          backgroundImage={`/static/images/${selectImage}`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        >

          {children}
        </Box>
      </main>
    </>
  );
};

export default HeroFather;
