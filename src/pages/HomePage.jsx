import React from "react";
import { Categories, Header, ItemGrid, NavBar } from "../components";
import ScrollableImageGrid from "../components/scrollableImageGrid/ScrollableImageGrid";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <ScrollableImageGrid />
      <Categories />
      <ItemGrid />
    </>
  );
};

export default HomePage;
