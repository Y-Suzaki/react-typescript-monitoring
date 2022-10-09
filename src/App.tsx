import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import './App.css';
import { UserCard } from './components/UserCard';
import { useUsers } from './hooks/useUsers';
import theme from './thema/theme';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  const { getUsers, userProfiles, isLoading, isError } = useUsers();

  const onClick = () => {
    getUsers();
  };

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
