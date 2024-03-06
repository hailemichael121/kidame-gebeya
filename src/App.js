import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, LightMode } from "@chakra-ui/react";

import "./app.css";

import { HomePage, ShopingPage } from "./pages";

function App() {
  return (
    <ChakraProvider theme={LightMode}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopingPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
