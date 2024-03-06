import React from "react";
import ItemCard from "./ItemCard";
import { HStack } from "@chakra-ui/react";

const ItemGrid = () => {
  const Items = [1, 2, 3];
  return (
    <>
      <HStack m="50px" padding={20} spacing={5} className="Item_grid">
        {Items.map((item) => (
          <ItemCard key={item} />
        ))}
      </HStack>
    </>
  );
};

export default ItemGrid;
