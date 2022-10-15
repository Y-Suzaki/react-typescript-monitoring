import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import theme from './thema/theme';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
