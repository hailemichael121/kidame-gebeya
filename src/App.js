import * as React from "react";

import { Box, ChakraProvider, LightMode } from "@chakra-ui/react";

import "./app.css";

import { HomePage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <ChakraProvider theme={LightMode}>
      <Box>
        <NavBar />
      </Box>
      <Box padding="100px">
        <HomePage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
