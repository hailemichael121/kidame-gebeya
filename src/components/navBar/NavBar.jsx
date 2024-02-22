import { HStack, Image, VStack, Text, Box } from "@chakra-ui/react";

import logo from "../../assets/Logo/logo2.jpg";
import cartIcon from "../index";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <Box position="sticky" top="0" zIndex="10" bg={"#141230"} height={40}>
      <HStack padding="50px" justifyContent="space-between" height={30}>
        <Logo />
        <Text fontSize="6xl" fontFamily={"sans-serif"} fontWeight={"xl"}>
          Kidame Gebeya{" "}
        </Text>
        <CartIcon />
      </HStack>
    </Box>
  );
};

export default NavBar;
