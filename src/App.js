import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Navbar from './componant/navbar';
import Footer from './componant/footer';
import Home from './pages/Home';


const App = () => {
  return (
    <Box width="400px" sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App