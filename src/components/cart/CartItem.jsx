import { Box, Heading } from "@chakra-ui/react";
import CartItemCard from "./CartItemCard";

const CartItem = () => {
  return (
    <>
      <Box
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="md"
        p={4}
        bg="white"
      >
        <CartItemCard />
      </Box>
    </>
  );
};

export default CartItem;
