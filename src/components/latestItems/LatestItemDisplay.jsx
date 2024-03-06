import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import LoremIpsum from "react-lorem-ipsum";
import ItemGrid from "../item/ItemGrid";
import { Link } from "react-router-dom";

const LatestItemDisplay = () => {
  return (
    <Box textAlign={"center"}>
      <Heading fontWeight={500}> Latest Arival</Heading>
      <LoremIpsum p={1} />
      <Button fontWeight={300} size={"xl"} bg={"grey"}>
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
      </Button>
      <ItemGrid />
    </Box>
  );
};

export default LatestItemDisplay;
