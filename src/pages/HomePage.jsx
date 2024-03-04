import React from "react";
import { Categories, LatestItemDisplay, ProductDisplay } from "../components";
import ScrollableImageGrid from "../components/scrollableImageGrid/ScrollableImageGrid";

const HomePage = () => {
  return (
    <>
      <ScrollableImageGrid />
      <Categories />
      <LatestItemDisplay />
      <ProductDisplay />
    </>
  );
};

export default HomePage;
