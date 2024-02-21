import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react';

import './app.css';
import { NavBar,ItemCard,Header,Footer,Cart } from './components'
function App() {

  return (
    <ChakraProvider>
     <NavBar />
     <Header />
     <ItemCard />
     <Cart />
     <Footer />
    </ChakraProvider>
  )
}

export default App

