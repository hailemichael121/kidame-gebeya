import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import LoremIpsum from "react-lorem-ipsum";
import { ItemGrid } from "..";
import { Link } from "react-router-dom";

const ProductDisplay = () => {
  return (
    <Box textAlign="center">
      <Heading as="b" fontSize="20px">
        Our products
      </Heading>
      <LoremIpsum p={1} />
      <Link to="./shop">
        <Button
          as="b"
          textDecoration="greenyellow"
          fontSize="x-large"
          fontWeight={700}
        >
          Shop Now!
        </Button>
      </Link>
      <ItemGrid />
    </Box>
  );
};

export default ProductDisplay;
