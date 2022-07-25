import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { Container } from './components/styles/Container.styled';
import { sidebarProps } from './config/menu';
import Routes from './Routes';
// @ts-ignore
import {QueryClientProvider, QueryClient} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
    <QueryClientProvider client={queryClient}>
      <Container>
        <Sidebar {...sidebarProps}></Sidebar>
        <Routes/>    
      </Container>
    </QueryClientProvider>
    </div>
  );
}

export default App;
