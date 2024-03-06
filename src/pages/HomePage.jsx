import React from "react";
import {
  Categories,
  Footer,
  LatestItemDisplay,
  ProductDisplay,
} from "../components";
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
      <Footer />
    </>
  );
};

export default HomePage;
