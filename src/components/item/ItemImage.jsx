import React from "react";
import { Image } from "@chakra-ui/react";
import Item from "../../assets/Item2.jpg";

const ItemImage = () => {
  return (
    <Image
      className="Item_image"
      src={Item}
      alt="Item for sell"
      borderRadius="lg"
    />
  );
};

export default ItemImage;
