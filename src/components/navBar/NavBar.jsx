import { HStack, Box } from "@chakra-ui/react";

import CartIcon from "../button/CartIcon";
import Logo from "./Logo";
import NavLink from "./NavLink";
import "./navBar.css";
import SearchItem from "./SearchItem";

const NavBar = () => {
  return (
    <Box
      bg="#6a6a6a"
      position="fixed"
      zIndex={5}
      width={"100%"}
      paddingBottom="3px"
    >
      <HStack justifyContent="space-Between">
        <Logo />
        <NavLink />
        <SearchItem />
        <CartIcon />
      </HStack>
    </Box>
  );
};

export default NavBar;
