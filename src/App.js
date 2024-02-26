import * as React from "react";

import { ChakraProvider, LightMode } from "@chakra-ui/react";

import "./app.css";

import { HomePage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <ChakraProvider theme={LightMode}>
      <NavBar />
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
