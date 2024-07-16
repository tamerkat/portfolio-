import React from 'react'
import "../css/body.css"
import { Box, Stack, Button, Typography } from '@mui/material'


const contactUs = () => {
    const divStyle = {backgroundColor: '#f0f0f0'}
    const textBox = {margin: '20px'}
    const info = {
        responsiveFontSizes: '1.2rem',
        fontweight: '700',
        position: 'relative',
        display: 'inline-block',
        margin: '20px 0',
    }
    const span = {
            position: 'absolute',
            left: 0,
            bottom: '0px',
            width: '100%',
            height: '5px',
            backgroundColor: 'rgb(184, 255, 92)',
            content: '',
        }

    return (
        <Box style={divStyle} sx={{ color: 'white'}} class="mt-5">
            <Box style={textBox} class="row row-cols-2">
                <Stack class=" text col-lg-5 col-md-7 col-sm-12 col-xs-12">
                    <Typography style={info} class=""><h2>Contact Us 
                    <span style={span}>
                    </span></h2></Typography>
                    <h3>Address</h3>
                    <p>Swing by for a cup of coffee, or whatever.</p>
                    <p class="space">
                        <svg color='rgb(184, 255, 92)' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>&nbsp;&nbsp;
                        Cairo, Eg
                    </p>
                    <p class="space">
                        <svg color='rgb(184, 255, 92)' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>&nbsp;&nbsp;
                        +20 1515151515
                    </p>
                    <p class="space">
                        <svg color='rgb(184, 255, 92)' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                        </svg>&nbsp;&nbsp;
                        mahamd10taha@gmail.com
                    </p>
                </Stack>
                <Stack class=" form col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <form class="" action="/" target="_blank">
                        <div class="all">      
                            <Typography sx={{padding: '10px'}}>Name</Typography>
                            <input style={{borderRadius: '5px', width: '90%', height: '50px', border: 'none'}} class="contact-input" type="text" name="Name" required></input>
                        </div>
                        <div class="">      
                            <Typography sx={{padding: '10px'}}>Email</Typography>
                            <input style={{borderRadius: '5px', width: '90%', height: '50px', border: 'none'}} class="contact-input" type="text" name="Email" required></input>
                        </div>
                        <div class="">      
                            <Typography sx={{padding: '10px'}}>Message</Typography>
                            <input style={{borderRadius: '5px', width: '90%', height: '50px', border: 'none'}} class="contact-input" type="text" name="Message" required></input>
                        </div>  
                        <input style={{width: '20px', height: '20px'}} class="mt-4 mb-5" type="checkbox" checked name="Like"></input>
                        <Typography style={{padding: '10px', display: 'inline'}} class="like">I Like it!</Typography>
                        <Button
                            id="btn-gpt"
                            sx={{
                            position: 'absolute',
                            backgroundColor: 'rgb(184, 255, 92)',
                            color: 'black',
                            width: '100px',
                            right: '7.5%',
                            height: '50px',
                            borderRadius: '4px',
                            border: '2px solid black',
                            margin: '5px auto',
                            '&:hover': {
                                backgroundColor: 'black',
                                color: 'rgb(184, 255, 92)',
                                borderColor: 'rgb(184, 255, 92)',
                            },
                            }}>
                            Send
                    </Button>
                    </form>
                </Stack>
            </Box>
        </Box>
  )
}

export default contactUs

