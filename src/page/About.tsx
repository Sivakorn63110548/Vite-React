
import { Box } from '@mui/material';
import Profile from '../component/Profile';
import Map from '../component/map'

function About() {
  return (
    <div className="page">
      <div
        className="main-contain"
        style={{
          width: '97%',
          borderRadius: '15px',
          border: '2px solid #ccc',
          padding: '20px',
          margin: '7rem auto 0px',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
        }}
      >
        <Box>
          <Box sx={{ marginBottom: '4rem' }}>
            <Profile />
          </Box>

          <Box sx={{ marginBottom: '4rem' }}>
            <Map />
          </Box>
         
        </Box>
      </div>

    </div>
  )
}

export default About