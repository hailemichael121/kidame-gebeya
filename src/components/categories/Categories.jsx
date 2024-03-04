import { Box, Button, Heading } from "@chakra-ui/react";
import LoremIpsum from "react-lorem-ipsum";
import ItemGrid from "../item/ItemGrid";

const Categories = () => {
  return (
    <Box textAlign={"center"}>
      <Heading> Catagories</Heading>
      <LoremIpsum p={1} />
      <Button size="lg" bg="gray" color="aquamarine" shadow="revert">
        Catagories
      </Button>
      <ItemGrid />
    </Box>
  );
};

export default Categories;
