import { AppBar, Toolbar, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useEffect, useState } from 'react';
import Logo from '../assets/BookDev_logo.png';
import { To, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../component/Loading';

const Topbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: To) => {
    if (location.pathname !== path) {
      setLoading(true);
      navigate(path);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [location]);

  const isActive = (path: string) => {
    if(path == '/'){
      path = path + 'home'
    }
    return location.pathname === path || (path === '/' && location.pathname === '/');
  };

  return (
    <>
      {loading && <Loading />}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'black',
          width: '80%',
          borderRadius: '50px',
          margin: '10px auto',
          right: '10%',
          top: 0,
          zIndex: 1100,
          color: '#73738d',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {/* Left Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-start' }}>
            <Button
              sx={{
                color: 'white',
                textTransform: 'none',
                width: '100%',
                borderRadius: '25px',
                '&:hover': {
                  backgroundColor: '#FF6B2B',
                },
                backgroundColor: isActive('/') ? '#FF6B2B' : 'transparent',
              }}
              startIcon={<HomeIcon />}
              onClick={() => handleNavigate('/')}
            >
              Home
            </Button>
            <Button
              sx={{
                color: 'white',
                textTransform: 'none',
                width: '100%',
                borderRadius: '25px',
                '&:hover': {
                  backgroundColor: '#FF6B2B',
                },
                backgroundColor: isActive('/about') ? '#FF6B2B' : 'transparent',
              }}
              startIcon={<InfoIcon />}
              onClick={() => handleNavigate('/about')}
            >
              About
            </Button>
            <Button
              sx={{
                color: 'white',
                textTransform: 'none',
                width: '100%',
                borderRadius: '25px',
                '&:hover': {
                  backgroundColor: '#FF6B2B',
                },
                backgroundColor: isActive('/skill') ? '#FF6B2B' : 'transparent',
              }}
              startIcon={<SchoolIcon />}
              onClick={() => handleNavigate('/skill')}
            >
              Skill
            </Button>
          </Box>

          {/* Logo */}
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <Box
              sx={{
                position: 'absolute',
                top: '41%',
                left: '33.5%',
                width: '51px',
                height: '50px',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#FF6B2B',
                borderRadius: '50%',
                padding: '0.5rem',
                zIndex: 0,
              }}
            />
            <Box
              component="img"
              src={Logo}
              alt="BookDev Logo"
              sx={{
                width: '15rem',
                height: '3rem',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </Box>

          {/* Right Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
            <Button
              sx={{
                color: 'white',
                textTransform: 'none',
                width: '100%',
                borderRadius: '25px',
                '&:hover': {
                  backgroundColor: '#FF6B2B',
                },
                backgroundColor: isActive('/experience') ? '#FF6B2B' : 'transparent',
              }}
              startIcon={<WorkIcon />}
              onClick={() => handleNavigate('/experience')}
            >
              Experience
            </Button>

            <Button
              sx={{
                color: 'white',
                textTransform: 'none',
                width: '100%',
                borderRadius: '25px',
                '&:hover': {
                  backgroundColor: '#FF6B2B',
                },
                backgroundColor: isActive('/project') ? '#FF6B2B' : 'transparent',
              }}
              startIcon={<BuildIcon />}
              onClick={() => handleNavigate('/project')}
            >
              Project
            </Button>

            <Button
              sx={{
                color: 'white',
                textTransform: 'none',
                width: '100%',
                borderRadius: '25px',
                '&:hover': {
                  backgroundColor: '#FF6B2B',
                },
                backgroundColor: isActive('/contact') ? '#FF6B2B' : 'transparent',
              }}
              startIcon={<ContactsIcon />}
              onClick={() => handleNavigate('/contact')}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Topbar;
