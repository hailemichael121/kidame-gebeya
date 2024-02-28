import React from "react";
import { Categories, Header, ItemGrid } from "../components";
import ScrollableImageGrid from "../components/scrollableImageGrid/ScrollableImageGrid";
import { HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <HStack justifyContent="space-evenly">
        <Header />
        <ScrollableImageGrid />
      </HStack>
      <Categories />
      <ItemGrid />
    </>
  );
};

export default HomePage;
