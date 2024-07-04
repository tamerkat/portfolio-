import React from 'react'
import '../css/bannar.css';
import { Box, Stack,Typography } from '@mui/material'


const bannar = () => {
    return (
        <Box class="text-center">
            <Stack class="row row-cols-2" sx={{width: {xs: "100%", sm: "100%"}}}>
                <Stack class="col-lg-8 col-md-12 col-sm-12 image" sx={{flex: {sm: '12'}}}>
                    <Typography sx={{ display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' }}}>
                        <img src={require("../assets/images/slide.jpg")} alt='bannar'></img>
                    </Typography>
                </Stack>
                <Stack class="col-lg-4 col-md-12 col-sm-12 col-xs-12 text" sx={{flex: {sm: '12'}}}>
                    <Typography color="rgb(184, 255, 92)" fontWeight="600" fontSize="26px">Fitness Club</Typography>
                    <Typography color="white" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                        Sweat, Smile <br />
                        And Repeat
                    </Typography>
                    <Typography color="white" fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                        Check out the most effective exercises personalized to you
                    </Typography>
                    <Stack class="boxs" >
                        <a class="explore" type="submit">Explore Exercises</a>
                    </Stack>
                    <Typography fontWeight={600} color="rgb(184, 255, 92)" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '100px' }}>
                        Exercise
                    </Typography>
                </Stack>
            </Stack>
        </Box>
  )
}

export default bannar
