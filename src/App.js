import * as React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, LightMode } from "@chakra-ui/react";

import "./app.css";

import { CartPage, HomePage, ShopingPage } from "./pages";
import CartItem from "./components/cart/CartItem";

function App() {
  return (
    <ChakraProvider theme={LightMode}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopingPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
