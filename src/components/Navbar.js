import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to login page on icon click
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        {/* Left Icon (Person) for Login */}
        <IconButton edge="start" color="inherit" aria-label="login" onClick={handleLoginClick}>
          <PersonIcon />
        </IconButton>

        {/* Center Logo */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <img 
            src={`${process.env.PUBLIC_URL}/logo.jpeg`}  // Dynamic path to the logo
            alt="AASTRA" 
            style={{ height: '52px' }}  // Adjust height if needed
          />
        </Box>

        {/* Right Icon (Notifications) */}
        <IconButton edge="end" color="inherit" aria-label="notifications">
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
