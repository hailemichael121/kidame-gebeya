import { Box, Heading } from "@chakra-ui/react";

const CartItem = () => {
  return (
    <>
      <Box
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="md"
        p={4}
        bg="white"
      >
        <Heading>Cart Items</Heading>
      </Box>
    </>
  );
};

export default CartItem;
