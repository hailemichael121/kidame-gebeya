import React from "react";
import { Categories, LatestItemDisplay, ProductDisplay } from "../components";
import ScrollableImageGrid from "../components/scrollableImageGrid/ScrollableImageGrid";
import { NavBar } from "../components";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <ScrollableImageGrid />
      <Categories />
      <LatestItemDisplay />
      <ProductDisplay />
    </>
  );
};

export default HomePage;
