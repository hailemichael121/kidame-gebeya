import * as React from "react";

import { ChakraProvider, LightMode } from "@chakra-ui/react";

import "./app.css";

import { HomePage } from "./pages";

function App() {
  return (
    <ChakraProvider theme={LightMode}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
