import { HStack, Image, VStack, Text, Box } from "@chakra-ui/react";

import logo from "../../assets/Logo/logo2.jpg";
import CartItem from "../cart/CartItem";

const NavBar = () => {
  return (
    <Box position="sticky" top="0" zIndex="10" bg={"#141230"} height={40}>
      <HStack padding="50px" justifyContent="space-between" height={30}>
        <VStack height={35}>
          <Image src={logo} boxSize="80px" />
          <Text> ቅዳሜ ገበያ </Text>
        </VStack>
        <Text fontSize="6xl" fontFamily={"sans-serif"} fontWeight={"xl"}>
          Kidame Gebeya{" "}
        </Text>
        <CartItem />
      </HStack>
    </Box>
  );
};

export default NavBar;
