import { HStack, Box } from "@chakra-ui/react";

import CartIcon from "../button/CartIcon";
import Logo from "./Logo";
import NavLink from "./NavLink";
import "./navBar.css";
import SearchItem from "./SearchItem";

const NavBar = () => {
  return (
    <Box>
      <HStack justifyContent="space-between" alignContent="flex-start">
        <Logo />
        <SearchItem />
        <NavLink />
        <CartIcon />
      </HStack>
    </Box>
  );
};

export default NavBar;
