import React from "react";
import ItemCard from "./ItemCard";
import { HStack } from "@chakra-ui/react";

const ItemGrid = () => {
  const Items = [1, 2, 3];
  return (
    <>
      <HStack padding={20} spacing={5}>
        {Items.map((item) => (
          <ItemCard key={item} />
        ))}
      </HStack>
    </>
  );
};

export default ItemGrid;
