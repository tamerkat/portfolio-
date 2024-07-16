import React from 'react';
import { Box, Stack, Typography, Container, InputBase, Button } from '@mui/material';

const Search = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container>
        <Typography
          color="white"
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '30px' }, mb: "49px", textAlign: "center" }}
        >
          Awesome Exercises You <br /> Should Know
        </Typography>
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            <Box sx={{ width: { lg: '50%', xs: '100%' } }}>
              <InputBase
                id="value-gpt"
                placeholder="Search Exercises"
                sx={{
                  width: '100%',
                  height: '60px',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  border: 'none',
                  outline: 'none',
                  borderRadius: '40px',
                  backgroundColor: '#fff',
                  padding: '0 50px',
                }}
              />
            </Box>
            <Box sx={{ width: { lg: '15%', xs: '100%' }, position: 'relative', mt: { xs: '20px', lg: 0 } }}>
              <Button
                id="btn-gpt"
                sx={{
                  backgroundColor: 'rgb(184, 255, 92)',
                  color: 'black',
                  textTransform: 'none',
                  width: '100%',
                  height: '60px',
                  fontSize: '20px',
                  borderRadius: '10px',
                  border: '2px solid black',
                  margin: '5px auto',
                  '&:hover': {
                    backgroundColor: 'black',
                    color: 'rgb(184, 255, 92)',
                    borderColor: 'rgb(184, 255, 92)',
                  },
                }}
              >
                Search
              </Button>
            </Box>
          </Stack>
          <Typography
            variant="body1"
            className="text-area"
            sx={{
              minHeight: '100px',
              display: 'flex',
              alignItems: 'center',
              color: 'black',
              backgroundColor: '#fff',
              width: 'calc(100% - 20px)',
              borderRadius: '5px',
              margin: '40px auto',
              padding: '20px',
            }}
          >
            Your text area content goes here 
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Search;
