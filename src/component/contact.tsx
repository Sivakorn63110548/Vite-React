import React, { useState } from 'react';
import { Box, Container, Typography, Grid, IconButton, Stack } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import '../css/component/Contact.css';

const EMAIL = 'sivakorn.987@gmail.com';
const PHONE = '065-840-6400';
const ADDRESS = 'Ko Yao, Phang Nga 83000, Thailand';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1200);
    } catch (e) {
      // noop
    }
  };

  const open = (url: string) => window.open(url, '_blank');

  const tiles: Array<{
    key: string;
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
    onContextMenu?: (e: React.MouseEvent) => void;
  }> = [
      {
        key: 'email',
        label: 'Email',
        icon: <EmailRoundedIcon />,
        onClick: () => (window.location.href = `mailto:${EMAIL}`),
        onContextMenu: (e) => {
          e.preventDefault();
          copy('email', EMAIL);
        },
      },
      {
        key: 'phone',
        label: 'Phone',
        icon: <PhoneIphoneRoundedIcon />,
        onClick: () => (window.location.href = `tel:${PHONE}`),
        onContextMenu: (e) => {
          e.preventDefault();
          copy('phone', PHONE);
        },
      },
      {
        key: 'github',
        label: 'GitHub',
        icon: <GitHubIcon />,
        onClick: () => open('https://github.com/Sivakorn63110548'),
      },
      {
        key: 'instagram',
        label: 'Instagram',
        icon: <InstagramIcon />,
        onClick: () => open('https://www.instagram.com/bookkkk_7/'),
      },
      {
        key: 'facebook',
        label: 'Facebook',
        icon: <FacebookIcon />,
        onClick: () => open('https://www.facebook.com/sivakorn.tanyupak.7/'),
      },
      {
        key: 'linkedin',
        label: 'LinkedIn',
        icon: <LinkedInIcon />,
        onClick: () => open('https://www.linkedin.com/'),
      },
      {
        key: 'location',
        label: 'Location',
        icon: <LocationOnRoundedIcon />,
        onClick: () => open(`https://maps.google.com/?q=${encodeURIComponent(ADDRESS)}`),
      },
    ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Stack alignItems="center" spacing={1.2} className="contact-head">
          <Typography variant="overline" className="eyebrow">Contact</Typography>
          <Typography variant="h4" className="title">Let’s connect</Typography>
          <Typography variant="body1" className="sub">Available for work & collabs</Typography>
        </Stack>

        <Grid container spacing={2.4} className="contact-grid">
          {tiles.map((t) => (
            <Grid item xs={6} sm={4} md={3} key={t.key}>
              <Box
                className={`tile ${copied === t.key ? 'is-copied' : ''}`}
                role="button"
                tabIndex={0}
                onClick={t.onClick}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && t.onClick()}
                onContextMenu={t.onContextMenu}
              >
                <div className="tile-icon-wrap">
                  <span className="ring" aria-hidden />
                  <IconButton className="tile-icon" aria-label={t.label}>
                    {copied === t.key ? <CheckCircleRoundedIcon /> : t.icon}
                  </IconButton>
                </div>
                <Typography className="tile-label">{t.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography variant="caption" className="tip">Right‑click Email/Phone to copy.</Typography>
      </Container>
    </section>
  );
};

export default Contact;