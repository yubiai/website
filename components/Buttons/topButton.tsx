import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const TopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollPosition > 500 && (
        <Box position="fixed" bottom="20px" right={["40px", "30px"]} zIndex={1}>
          <Button onClick={() => {
            goToTop()
          }}>
            <FaArrowUp />
          </Button>
        </Box>
      )}
    </>
  );
};

export default TopButton;
