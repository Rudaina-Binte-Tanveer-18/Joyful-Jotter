import React, { useState } from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Box, Drawer, IconButton, List, ListItem, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box>
      {/* Navbar or Header */}
      <IconButton onClick={toggleDrawer(true)} aria-label="menu" size="large" sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%',
        '@media (max-width: 600px)': {flexDirection: 'column', fontSize: '12px',}}}>
        <MenuIcon fontSize="large" />

        <marquee
          behavior="scroll"
          direction="left"
          style={{
            width: '100%',
            whiteSpace: 'nowrap',
            fontSize: '18px',
            '@media (max-width: 600px)': {
              fontSize: '12px', // Adjust font size for small screens
            }
          }}>
          🎀 Dive into the World of Joyful Jotter! 🌈 Where Your Dreams Meet Reality, Your Notes Turn into Masterpieces, and Your Creativity Knows No Bounds! 📝 Let’s Explore Together! 🌸
        </marquee>
      </IconButton>


      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 300,
            backgroundColor: '#EFCFE3',// Simple white background
            color: '#3f541f', // Simple black text color
            padding: '16px', // Adding some padding
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={RouterLink} to="/" sx={{ padding: '10px 0' }}>
              Home
            </ListItem>
            <ListItem button component={RouterLink} to="/TaskManager" sx={{ padding: '10px 0' }}>
              Task Manager
            </ListItem>
            <ListItem button component={RouterLink} to="/AiChatBot" sx={{ padding: '10px 0' }}>
              AI Chatbot
            </ListItem>
            <ListItem button component={RouterLink} to="/AiImageGenerator" sx={{ padding: '10px 0' }}>
              Image Generator
            </ListItem>
            <ListItem button component={RouterLink} to="/Notes" sx={{ padding: '10px 0' }}>
              Taking Notes
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Main content area */}
      <Container maxWidth="5xl" sx={{ padding: '2rem 0', background: 'linear-gradient(135deg, #e8f0f2, #d3d3d3)', marginTop: '20px' }}>

        <Outlet />
        {/* Footer */}
        <Box className="bg-lime-200 text-lime-800 py-9 text-center">
          <p>
            © 2024 JoyfulJotter. All Rights Reserved to Aqsa & Rudaina.
          </p>
        </Box>
      </Container>


    </Box>
  );
};

export default Layout;
