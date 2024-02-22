import React from "react";
import { Image, VStack, Text } from "@chakra-ui/react";

import logo from "../../assets/Logo/logo2.jpg";
const Logo = () => {
  return (
    <VStack height={35}>
      <Image src={logo} boxSize="80px" />
      <Text> ቅዳሜ ገበያ </Text>
    </VStack>
  );
};

export default Logo;
