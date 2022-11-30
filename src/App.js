import React from 'react';
import AnimatedRoutes from './AnimatedRoutes.js';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import customTheme from './theme/theme';
import {
  useColorMode,
  ChakraProvider,
} from '@chakra-ui/react';
import Header from './Layout/header';
import Footer from './Layout/footer';
import './theme/styles.css';

function App() {
  const { colorMode, setColorMode } = useColorMode();
  if (colorMode === undefined) setColorMode('light');
  const brandColorTheme =
    customTheme.colors.mode[colorMode ? colorMode : 'light'];

  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
