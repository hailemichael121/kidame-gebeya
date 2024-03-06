import { Button } from "@chakra-ui/react";
import { useState } from "react";

import React from "react";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Link to="/cart">
        <Button
          colorScheme="white"
          variant="outline"
          _hover={{ bg: "white", color: "black" }}
          onClick={handleOpenModal}
        >
          <IoIosCart size={60} />
        </Button>
      </Link>
    </>
  );
};

export default CartIcon;
