import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import LoremIpsum from "react-lorem-ipsum";
import { ItemGrid } from "..";

const ProductDisplay = () => {
  return (
    <Box textAlign="center">
      <Heading as="b" fontSize="20px">
        Our products
      </Heading>
      <LoremIpsum p={1} />
      <Button bg="grey">Shop</Button>
      <ItemGrid />
    </Box>
  );
};

export default ProductDisplay;
