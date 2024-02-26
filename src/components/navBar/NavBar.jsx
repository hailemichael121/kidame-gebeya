import { HStack, Box } from "@chakra-ui/react";

import CartIcon from "../button/CartIcon";
import Logo from "./Logo";
import NavBarLink from "./NavBarLink";
import "./navBar.css";

const NavBar = () => {
  return (
    <Box>
      <HStack justifyContent="space-between" alignContent="flex-start">
        <Logo />
        <NavBarLink />
        <CartIcon />
      </HStack>
    </Box>
  );
};

export default NavBar;
