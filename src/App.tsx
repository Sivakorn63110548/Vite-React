import React, { useState } from 'react';
import { Stack, Typography, TextField, Button, Link } from '@mui/material';

function App() {
  const [email, setEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Email submitted:', email);
  };

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '8rem',
        background: '#f4f7fc',
      }}
    >
      <div
        style={{
          width: '40%',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h3">
            React&nbsp;<span style={{ color: 'blue', fontWeight: 'bold' }}>Sivakorn</span>
          </Typography>
          <Typography variant="body1">
            Made to be a real work that shows various information about me for everyone to get to know me in order to consider my abilities.
          </Typography>

          <Stack spacing={2}>
            <Typography variant="h6">Subscribe to our Newsletter</Typography>

            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: '15px' }}
            />

            <Button variant="contained" onClick={handleSubmit} fullWidth>
              Start now
            </Button>

            <Typography variant="caption" sx={{ marginTop: '10px' }}>
              By clicking "Start now" you agree to our&nbsp;
              <Link href="#" underline="none" sx={{ color: 'blue' }}>Terms & Conditions</Link>.
            </Typography>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default App;