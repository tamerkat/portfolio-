import Search from "../componant/search";
import Contact from "../componant/contactUs"
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Banner from '../componant/bannar';

const Home = () => {
  return (
    <Box>
      <Banner />
      <Search  />
      <Contact />
    </Box>
  );
};

export default Home;
