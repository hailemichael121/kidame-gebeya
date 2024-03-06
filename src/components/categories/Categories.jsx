import { Box, Button, Heading } from "@chakra-ui/react";
import LoremIpsum from "react-lorem-ipsum";
import ItemGrid from "../item/ItemGrid";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <Box textAlign={"center"}>
      <Heading> Catagories</Heading>
      <LoremIpsum p={1} />
      <Link to="./shop">
        <Button
          as="b"
          textDecoration="greenyellow"
          fontSize="x-large"
          fontWeight={700}
        >
          Catagories
        </Button>
      </Link>

      <ItemGrid />
    </Box>
  );
};

export default Categories;
