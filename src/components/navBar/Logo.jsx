import React from "react";
import { Image, HStack, Text } from "@chakra-ui/react";

import logo from "../../assets/Logo/logo3.jpg";
const Logo = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={100} objectFit="cover" p={(10, 10)} />
      <Text as="b"> Kidame Gebeya </Text>
    </HStack>
  );
};

export default Logo;
