import { Box } from "@chakra-ui/react";
import React from "react";
import { IoIosCart } from "react-icons/io";

const CartIcon = () => {
  return (
    <>
      <Box>
        <IoIosCart size={60} />
      </Box>
    </>
  );
};

export default CartIcon;
