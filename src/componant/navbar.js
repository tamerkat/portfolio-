import React from 'react';
import { Box, Stack, useMediaQuery, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import '../css/body.css'

const Navbar = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{display: 'flex', alignItems: 'center', backgroundColor: 'rgb(60, 60, 60)', padding: '10px', width: '80%', margin: 'auto'}}>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between', }} className="navbar">
        <Stack sx={{ color: 'rgb(184, 255, 92)', fontWeight: '600', fontSize: '1.5rem', cursor: 'pointer', }}>
          Fitness Gym
        </Stack>
        
        {isLargeScreen ? (
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', }} className="navbar-nav">
            <Box component="a" sx={{ color: 'white', textDecoration: 'none', margin: '0 40px', '&:hover': {color: 'rgb(184, 255, 92)', }, }} href="#">
              Home
            </Box>
            <Box component="a" sx={{ color: 'white', textDecoration: 'none', margin: '0 40px', '&:hover': {color: 'rgb(184, 255, 92)', },}} href="#">
              Class
            </Box>
            <Box component="a" sx={{ color: 'white', textDecoration: 'none', margin: '0 40px', '&:hover': { color: 'rgb(184, 255, 92)', }, }} href="#">
              Contact Us
            </Box>
            <Box component="a" sx={{ color: 'white', textDecoration: 'none', margin: '0 40px', '&:hover': {color: 'rgb(184, 255, 92)', }, }} href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </Box>
          </Box>
        ) : (
          <Box>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose} component="a" href="#">
                Home
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#">
                Class
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#">
                Contact Us
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;