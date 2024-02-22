import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import "./app.css";

import { HomePage } from "./pages";

function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
