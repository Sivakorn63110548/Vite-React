import React, { useState } from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Book from '../assets/Book.png';

const Home = () => {
  const [selected, setSelected] = useState('Portfolio');

  const handleSelect = (button: React.SetStateAction<string>) => {
    setSelected(button);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px',
        marginTop: '4rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '80vh',
              height: '37vh',
              borderRadius: '250px 250px 0 0',
              backgroundColor: '#f8986e',
              zIndex: 0,
              left: '50%',
              top: '77%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center',
              zIndex: 1,
              '& span': {
                color: '#FF6B2B',
              },
            }}
          >
            I'm <span>Book</span>,<br />
            ⚙️ Full Stack Developer
          </Typography>

          <Box
            component="img"
            src={Book}
            alt="Profile"
            sx={{
              width: '40rem',
              height: '33rem',
              objectFit: 'cover',
              borderRadius: '16px',
              position: 'relative',
              zIndex: 1,
              marginTop: '-6rem'
            }}
          />

          <Box
            sx={{
              display: 'flex',
              mt: 2,
              zIndex: 1,
              padding: '6px',
              borderRadius: '16px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              position: 'absolute',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              marginTop: '73vh'
            }}
          >
            <Button
              variant="contained"
              onClick={() => handleSelect('Portfolio')}
              sx={{
                borderRadius: '25px',
                backgroundColor:
                  selected === 'Portfolio' ? '#FF6B2B' : 'transparent',
                color: selected === 'Portfolio' ? '#fff' : '#fff',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#FF6B2B',
                  color: '#fff',
                },
              }}
              endIcon={<ArrowOutwardIcon sx={{ transform: 'rotate(-45deg)' }} />}
            >
              Portfolio
            </Button>

            <Button
              variant="contained"
              onClick={() => handleSelect('Hire me')}
              sx={{
                borderRadius: '25px',
                backgroundColor:
                  selected === 'Hire me' ? '#FF6B2B' : 'transparent',
                color: selected === 'Hire me' ? '#fff' : '#fff',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#FF6B2B',
                  color: '#fff',
                },
              }}
            >
              Hire me
            </Button>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              left: '9rem',
              top: '50%',
              transform: 'translateY(-50%)',
              textAlign: 'center',
              background: '#fff',
              padding: '8px 16px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 3,
              }}
            >
              Exceptional product design,<br />
              our website's success.<br />
              Recommended
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              right: '9rem',
              top: '50%',
              transform: 'translateY(-50%)',
              textAlign: 'center',
              background: '#fff',
              padding: '8px 16px',
            }}
          >
            <Rating value={5} readOnly size="medium" sx={{ color: '#FF6B2B' }} />
            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
              1 Years
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign="right">
              Experience
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;