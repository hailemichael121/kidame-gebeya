import React from "react";
import { Text, VStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <VStack>
        <Header
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
        >
          Dive into Kidame Gebeya
        </Header>
        <Text width="500px">
          Your One-Stop Shop for Everything! Remember the bustling energy of
          Addis Ababa's Saturday market, where vibrant colors, delectable
          aromas, and the hum of commerce fill the air? Kidame Gebeya captures
          that spirit and brings it online, offering you a treasure trove of
          Ethiopian and international delights! Just like the iconic Saturday
          market, you'll find everything you could ever desire within our
          virtual walls, from handcrafted treasures to everyday essentials.
        </Text>
      </VStack>
    </>
  );
};

export default Header;
