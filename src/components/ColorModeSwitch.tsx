import { HStack, Image, Switch, Text, useColorMode } from "@chakra-ui/react";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      {colorMode === "dark" && (
        <Image
          width={10}
          rounded={50}
          onClick={toggleColorMode}
          className="fa-regular fa-sun"
          src={sun}
        />
      )}
      {colorMode != "dark" && (
        <Image
          width={10}
          rounded={50}
          onClick={toggleColorMode}
          className="fa-regular fa-sun"
          src={moon}
        />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;
