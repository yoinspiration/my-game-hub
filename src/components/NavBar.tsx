import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding="10px">
      <Image boxSize='60px' src={logo} alt="" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
