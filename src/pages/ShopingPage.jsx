import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { ItemGrid, NavBar } from "../components";

const ShopingPage = () => {
  return (
    <>
      <NavBar />
      <Stack>
        <Heading>Look What WE Have </Heading>
        <ItemGrid />
        <ItemGrid />
        <ItemGrid />
        <ItemGrid />
      </Stack>
    </>
  );
};

export default ShopingPage;
