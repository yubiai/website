import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


export const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconSpanStyles = {
    marginInlineEnd: "0",
  };
  return (
    <header >
      {colorMode === "light" ? (
        <Button
          onClick={toggleColorMode}
          width="40px"
          margin={"0 0.5em"}
          backgroundColor="transparent"
        >
          {/* Apply the custom styles to the span */}
          <span >
            <MoonIcon />
          </span>
        </Button>
      ) : (
        <Button
          onClick={toggleColorMode} width={'40px'} margin={"0 0.5em"} backgroundColor={"#00BCD4"}>
          <span >
            <SunIcon />
          </span>
        </Button>
      )}
    </header>
  );
};
