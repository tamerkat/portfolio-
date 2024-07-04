import React from 'react'
import "../css/contactUs.css"
import { Box, Stack, Typography } from '@mui/material'


const contactUs = () => {
    return (
        <Box class="mt-5 contact" color='white' id="contact">
            <Box class="text-box row row-cols-2">
                <Stack class=" text col-lg-5 col-md-7 col-sm-12 col-xs-12">
                    <Typography class="info"><h2>Contact Us</h2></Typography>
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
                            <label>Name</label>
                            <input class="contact-input" type="text" name="Name" required></input>
                        </div>
                        <div class="">      
                            <label>Email</label>
                            <input class="contact-input" type="text" name="Email" required></input>
                        </div>
                        <div class="">      
                            <label>Message</label>
                            <input class="contact-input" type="text" name="Message" required></input>
                        </div>  
                        <input class="check mt-4 mb-5" type="checkbox" checked name="Like"></input>
                        <label class="like">I Like it!</label>
                        <button class="send me-5 mt-3" type="submit">Send</button>
                    </form>
                </Stack>
            </Box>
        </Box>
  )
}

export default contactUs
