import React, { useState } from 'react';
import { Box, Typography, Button, Rating } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import Book from '../assets/Book.png';
import { motion } from 'framer-motion';
import Skill from '../component/Skill';
import Contact from '../component/contact';
import '../css/Home.css';
import About_me from '../component/about_me';

const Home = () => {
  const [selected, setSelected] = useState('Portfolio');
  const handleSelect = (button: React.SetStateAction<string>) => setSelected(button);

  return (
    <>
      <section id="home" className="anchor-section">
        <Box className="home-root">
          <Box className="hero-wrap">
            <Box className="hero">
              <Box className="bg-arch" />

              <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <Typography variant="h5" className="hello-chip">
                  Hello 👋
                </Typography>

                <Typography variant="h2" className="headline">
                  I'm <span>Book</span>,<br />⚙️ Full Stack Developer
                </Typography>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
                <Box component="img" src={Book} alt="Profile" className="profile-image" />
              </motion.div>

              <Box className="cta-switch">
                <Button
                  variant="contained"
                  onClick={() => handleSelect('Portfolio')}
                  className={`cta-btn ${selected === 'Portfolio' ? 'is-active' : ''}`}
                  endIcon={<ArrowOutwardIcon sx={{ transform: 'rotate(-45deg)' }} />}
                >
                  Portfolio
                </Button>

                <Button
                  variant="contained"
                  onClick={() => handleSelect('Hire me')}
                  className={`cta-btn ${selected === 'Hire me' ? 'is-active' : ''}`}
                >
                  Hire me
                </Button>
              </Box>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                <Box className="left-badge">
                  <Typography variant="body1" className="left-badge-text">
                    Exceptional product design,<br />our website's success.<br />Recommended
                  </Typography>
                </Box>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
                <Box className="right-stats">
                  <Rating value={5} readOnly size="medium" className="rating-orange" />
                  <Typography variant="h4" className="years">1 Year</Typography>
                  <Typography variant="body2" className="years-sub">Experience</Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>
      </section>

      <div className="gradient-section">
        <div className="blob" />
        <div className="texture-overlay" />

        <div className="content-wrap">
          <h2 className="section-title">Get to know me</h2>
          <p className="section-sub">You can get my information, my skills, and my work experience.</p>

          <section id="about" className="anchor-section">
            <About_me />
          </section>

          <section id="skill" className="anchor-section">
            <div className="slot skill-component">
              <Skill />
            </div>
          </section>

          {/* <section id="experience" className="anchor-section" aria-hidden="true" style={{ height: 0, overflow: 'hidden' }} />

          <section id="project" className="anchor-section" aria-hidden="true" style={{ height: 0, overflow: 'hidden' }} /> */}

          <section id="contact" className="anchor-section">
            <div className="slot contact-component">
              <Contact />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;