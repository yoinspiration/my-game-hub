import {Box, HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding={{
      base: 2,
      md: 4
    }} paddingLeft={{
      base: 1,
      md: 3
    }}>
      <Link to='/'>
        <Box boxSize="60px">
      <Image objectFit='cover' src={logo} alt="" />
        </Box>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
