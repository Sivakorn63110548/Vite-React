import { AppBar, Toolbar, IconButton, Tooltip, Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import { FaReact } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Topbar = () => {
  // State to manage theme toggle
  const [darkMode, setDarkMode] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Create theme based on darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          width: '80%',
          borderRadius: '10px',
          margin: '10px auto',
          right: '10%',
          top: 0,
          zIndex: 1100,
          color: '#73738d',
          
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

          {/* Left Section: Logo and Menu */}
          <Box display="flex" alignItems="center" gap="0.5rem">
            <FaReact
              size={32}
              color="blue"
              style={{
                animation: 'spin 2s linear infinite',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: '"Sour Gummy", sans-serif',
                fontWeight: 700,
                letterSpacing: 2,
                color: 'blue',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                fontSize: '19px',
              }}
            >
              BookDev
            </Typography>
          </Box>

          {/* Center Section: Navigation Menu */}
          <Box display="flex" alignItems="center" gap="1.5rem">
            {/* Home Icon */}
            <Tooltip title="Home">
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>

            {/* About Icon */}
            <Tooltip title="About">
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>

            {/* Skills Icon */}
            <Tooltip title="Skills">
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <SchoolIcon />
              </IconButton>
            </Tooltip>

            {/* History Icon */}
            <Tooltip title="History">
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <WorkIcon />
              </IconButton>
            </Tooltip>

            {/* Education Icon */}
            <Tooltip title="Education">
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <SchoolIcon />
              </IconButton>
            </Tooltip>

            {/* Work Experience Icon */}
            <Tooltip title="Work Experience">
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <WorkIcon />
              </IconButton>
            </Tooltip>

            {/* Contact Icon */}
            <Tooltip title="Contact">
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <ContactsIcon />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Right Section: Theme Toggle */}
          <Box display="flex" alignItems="center">
            <IconButton onClick={toggleTheme} color="inherit">
              {/* Toggle between Sun and Moon Icons based on darkMode */}
              {darkMode ? (
                <FaMoon size={20} color="blue" />
              ) : (
                <FaSun size={20} color="yellow" />
              )}
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Topbar;