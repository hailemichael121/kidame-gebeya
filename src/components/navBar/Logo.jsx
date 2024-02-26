import React from "react";
import { Image, HStack, Text } from "@chakra-ui/react";

import logo from "../../assets/Logo/logo3.jpg";
const Logo = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={60} objectFit="cover" />
      <Text as="b" fontFamily={"sans-serif"}>
        Kidame Gebeya
      </Text>
    </HStack>
  );
};

export default Logo;
