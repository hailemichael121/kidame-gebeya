import React from "react";
import { Categories, Header, ItemGrid } from "../components";
import ScrollableImageGrid from "../components/scrollableImageGrid/ScrollableImageGrid";

const HomePage = () => {
  return (
    <>
      <Header />
      <ScrollableImageGrid />
      <Categories />
      <ItemGrid />
    </>
  );
};

export default HomePage;
