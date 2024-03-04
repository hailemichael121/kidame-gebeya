import {
  Button,
  HStack,
  Link,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

import React from "react";
import { IoIosCart } from "react-icons/io";
import CartItem from "../cart/CartItem";

const CartIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button
        colorScheme="white"
        variant="outline"
        _hover={{ bg: "white", color: "black" }}
        onClick={handleOpenModal}
      >
        <IoIosCart size={60} />
      </Button>
      <Modal
        closeOnOverlayClick={false}
        scrollBehavior="inside"
        size="1080px"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(5px) hue-rotate(50deg)"
        />
        <ModalContent width="60%">
          <HStack justifyContent="space-between">
            <ModalHeader whiteSpace="nowrap">Sign Up</ModalHeader>
            <Text fontSize="10px" fontWeight={350} mt="40px" mr="10px">
              Already have an account?{" "}
              <Link fontSize="15px" href="#">
                Log In
              </Link>
            </Text>
            <ModalCloseButton />
          </HStack>

          <Box overflow="auto">
            <CartItem />
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartIcon;
