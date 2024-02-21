import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo2.jpg";
import ColorModeSwitch from "../ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack padding="19px" justifyContent="space-between">
      <Image src={logo} boxSize="90px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;