import Search from "../componant/search";
import Contact from "../componant/contactUs"
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Banner from '../componant/bannar';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <Banner />
      <Search  />
      <Contact />
    </Box>
  );
};

export default Home;
