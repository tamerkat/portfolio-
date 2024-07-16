import React from 'react';
import { Box, Stack, Typography, Container } from '@mui/material';

const Bannar = () => {
  return (
    <Box sx={{ backgroundColor: 'rgb(60, 60, 60)', py: 5 }}>
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
          sx={{ width: '100%' }}
        >
          <Stack
            sx={{
              flex: { xs: 12, sm: 12, md: 8, lg: 8 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ display: { lg: 'block', md: 'block', sm: 'block', xs: 'block' }, paddingRight: '100px', margin: 'auto'}}>
              <img
                src={require("../assets/images/slide.jpg")}
                alt="bannar"
                style={{
                  width: '100%',
                  maxHeight: '90vh',
                  objectFit: 'cover',
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              />
            </Typography>
          </Stack>
          <Stack
            sx={{
              flex: { xs: 12, sm: 12, md: 4, lg: 4 },
              textAlign: 'left',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            <Typography
              sx={{
                color: 'rgb(184, 255, 92)',
                fontWeight: 600,
                fontSize: '26px',
              }}
            >
              Fitness Club
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { lg: '44px', xs: '40px' },
                mb: '23px',
                mt: '30px',
              }}
            >
              Sweat, Smile <br />
              And Repeat
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: '22px',
                fontFamily: 'Alegreya',
                lineHeight: '35px',
              }}
            >
              Check out the most effective exercises personalized to you
            </Typography>
            <Stack sx={{ cursor: 'pointer', mt: '45px' }}>
              <Box
                component="a"
                href="#"
                sx={{
                  textDecoration: 'none',
                  backgroundColor: 'rgb(184, 255, 92)',
                  color: 'black',
                  padding: '14px',
                  fontSize: '22px',
                  textTransform: 'none',
                  borderRadius: '10px',
                  border: '2px solid black',
                  width: '200px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'black',
                    borderColor: 'rgb(184, 255, 92)',
                    color: 'rgb(184, 255, 92)',
                  },
                }}
              >
                Explore Exercises
              </Box>
            </Stack>
            <Typography
              sx={{
                fontWeight: 600,
                color: 'rgb(184, 255, 92)',
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' },
                fontSize: '100px',
              }}
            >
              Exercise
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Bannar;
