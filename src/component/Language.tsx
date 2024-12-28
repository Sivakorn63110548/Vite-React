import { Box, Typography, LinearProgress, Grid } from '@mui/material';
import EngLogo from '../assets/icon/eng.png'

interface LanguageSkillBarProps {
  label: string;
  value: number;
}

function LanguageSkillBar({ label, value }: LanguageSkillBarProps) {
  return (
    <Box sx={{ marginBottom: '1.5rem' }}>
      <Typography
        variant="body1"
        sx={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}
      >
        {label}
      </Typography>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={8}>
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{
              height: '10px',
              borderRadius: '5px',
              backgroundColor: '#e0e0e0',
              transition: 'width 1s ease-in-out',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#007bff',
                borderRadius: '5px',
              },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#007bff', textAlign: 'right' }}>
            {value}%
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function Language() {
  const skills = [
    { label: 'Listening', value: 85 },
    { label: 'Speaking', value: 75 },
    { label: 'Reading', value: 90 },
    { label: 'Writing', value: 80 },
  ];

  return (
    <Box
      sx={{
        margin: '0 auto',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        marginRight: '0px'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: '2rem',
          textAlign: 'center',
          color: '#333',
        }}
      >
        <img
          src={EngLogo}
          alt="English Logo"
          style={{ width: '60px', height: '30px', objectFit: 'contain' }}
        />
        English
      </Typography>
      {skills.map((skill, index) => (
        <LanguageSkillBar key={index} label={skill.label} value={skill.value} />
      ))}
    </Box>
  );
}

export default Language;