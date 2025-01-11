import { AppBar, Toolbar, IconButton, Tooltip, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../assets/BookDev_logo.png'
import { To, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../component/Loading';

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleNavigate = (path: To) => {
    if (location.pathname !== path) {
      setLoading(true);
      navigate(path);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      {loading && <Loading />}
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

          <Box
            component="img"
            src={Logo}
            alt="BookDev Logo"
            sx={{
              width: '10rem',
              height: '3rem',
            }}
          />

          <Box display="flex" alignItems="center" gap="1.5rem">
            <Tooltip title="Home">
              <IconButton
                color="inherit"
                onClick={() => handleNavigate('/home')}
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

            <Tooltip title="About">
              <IconButton
                color="inherit"
                onClick={() => handleNavigate('/About')}
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

          <Box display="flex" alignItems="center">
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <FaMoon size={20} color="blue" /> : <FaSun size={20} color="yellow" />}
            </IconButton>
          </Box>

        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Topbar;