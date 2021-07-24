import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './components/pages/HomePage';
import { Box, makeStyles } from '@material-ui/core';
import Image from './images/HeaderBackground.png';

function App() {
  return (
    <Box >
      <HomePage/>
    </Box>
    
  );
}
 
export default App;
 