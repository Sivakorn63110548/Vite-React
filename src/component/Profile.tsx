import { Box, Typography, Stack } from '@mui/material';
import { CalendarToday, LocationOn, Phone } from '@mui/icons-material';
import bookImage from '../assets/Book2.png';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProfileProps {
  name: string;
  bio?: string;
  jobTitle?: string;
  avatarUrl?: string;
  birthDate?: string;
  address?: string;
  phone?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
  git?: string;
}

export class Profile extends React.Component<ProfileProps> {
  static defaultProps: ProfileProps = {
    name: "Sivakorn Tanyupak  ( Book )",
    jobTitle: "⚙️ Full Stack Developer",
    bio: "Passionate about building scalable web applications and exploring today's new technologies. Want to learn about this line of work Accumulate experience and want to see a future world where technology takes part in people's daily lives.",
    avatarUrl: bookImage,
    birthDate: 'March 17, 2001 ( 21 years old )',
    address: '11/2 หมู่ 1 ต.พรุใน อ.เกาะยาว จ.พังงา 83000',
    phone: '065-840-6400',
    email: 'sivakorn.987@gmail.com',
    facebook: 'Sivakorn Tanyupak',
    instagram: 'bookkkk_7',
    git: 'Sivakorn63110548',
  };

  render() {
    const { name, bio, jobTitle, birthDate, address, phone, email, facebook, instagram, git } = this.props;
    return (
      <Box
        sx={{
          display: 'flex',
          padding: '20px',
          borderRadius: '8px',
          margin: '20px auto'
        }}
      >
        {/* รูปโปรไฟล์ */}
        <img
          alt={name}
          src={bookImage}
          style={{
            width: '25rem',
            height: '25rem',
            borderRadius: '50%',
            marginRight: '40px',
            marginLeft: '-35px',
            objectFit: 'cover',
          }}
        />

        <Stack spacing={2} sx={{ flex: 1 }}>
          {/* ข้อมูลชื่อ */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
            {name}
          </Typography>
          <Typography variant="h6" sx={{ color: 'gray' }}>
            {jobTitle}
          </Typography>

          {/* ข้อมูลชีวประวัติ */}
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            {bio}
          </Typography>

          {/* ข้อมูลเพิ่มเติม */}
          <Stack spacing={1} sx={{ marginTop: '20px' }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <CalendarToday sx={{ color: '#00bcd4' }} />
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                <strong>Birth Date:</strong> {birthDate}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOn sx={{ color: '#00bcd4' }} />
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                <strong>Address:</strong> {address}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <Phone sx={{ color: '#00bcd4' }} />
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                <strong>Phone:</strong> {phone}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <EmailIcon sx={{ color: '#00bcd4' }} />
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                <strong>Email:</strong> {email}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <InstagramIcon sx={{ color: '#00bcd4' }} />
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                <strong>Instagram:</strong> <a href={'https://www.instagram.com/bookkkk_7/'} target="_blank" rel="noopener noreferrer">{instagram}</a>
              </Typography>
            </Stack>

            {/* Facebook */}
            <Stack direction="row" spacing={2} alignItems="center">
              <FacebookIcon sx={{ color: '#00bcd4' }} />
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                <strong>Facebook:</strong> <a href={'https://www.facebook.com/sivakorn.tanyupak.7/'} target="_blank" rel="noopener noreferrer">{facebook}</a>
              </Typography>
            </Stack>

            {/* GitHub */}
            <Stack direction="row" spacing={2} alignItems="center">
              <GitHubIcon sx={{ color: '#00bcd4' }} />
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                <strong>GitHub:</strong> <a href={'https://github.com/Sivakorn63110548'} target="_blank" rel="noopener noreferrer">{git}</a>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    );
  }
}

export default Profile;