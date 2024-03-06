import { HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <>
      <HStack>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/shop">Shops</Link>
        <Link to="/contact">Contact Us</Link>
      </HStack>
    </>
  );
};

export default NavLink;
