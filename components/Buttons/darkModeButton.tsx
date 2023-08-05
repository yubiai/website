import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header >
      {colorMode === "light" ? (
        <Button leftIcon={<MoonIcon />} onClick={toggleColorMode} style={{width: '40px', margin: '0 0.5em', backgroundColor:"transparent"}}/>
      ) : (
        <Button leftIcon={<SunIcon />} onClick={toggleColorMode} style={{width: '40px', margin: '0 0.5em'}}/>
      )}
    </header>
  );
};
