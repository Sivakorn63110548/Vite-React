import React, { useState } from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Book from '../assets/Book.png';
import { motion } from 'framer-motion';

const Home = () => {
  const [selected, setSelected] = useState('Portfolio');

  const handleSelect = (button: React.SetStateAction<string>) => {
    setSelected(button);
  };

  return (
    <>
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
              width: '100%',
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
                top: '76%',
                transform: 'translate(-50%, -50%)',
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  textAlign: 'center',
                  zIndex: 1,
                  position: 'relative',
                  borderRadius: '16px',
                  border: '1px solid black',
                  width: '7rem',
                  marginLeft: '42.5%',
                  color: '#000',
                  '& span': {
                    color: '#FF6B2B',
                  }
                }}
              >
                Hello 👋
              </Typography>

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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
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
                  marginTop: '-6rem',
                }}
              />
            </motion.div>

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
                marginTop: '73vh',
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

            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: '9rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  textAlign: 'center',
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: '0' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  right: '9rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  textAlign: 'center',
                  padding: '8px 16px',
                }}
              >
                <Rating value={5} readOnly size="medium" sx={{ color: '#FF6B2B' }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
                  1 Year
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="right">
                  Experience
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Box >

      <div
        className="main-contain"
        style={{
          width: '97%',
          borderRadius: '15px',
          padding: '20px',
          margin: '-2.5rem auto 0px',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 50%, rgba(255, 107, 43, 0.8) 50%)',
          color: '#fff',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden',
          height: '50rem',
        }}
      >
        <h2 style={{ textAlign: 'center', margin: 0 }}>Your Content Here</h2>
      </div>


    </>

  );
};

export default Home;