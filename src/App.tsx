import Topbar from './topbar/Topbar';
import SentMail from './component/SentMail';
import Profile from './component/Profile';
import Skill from './component/Skill';
import Language from './component/Language';

import { Box } from '@mui/material';
import Job_future from './component/Job_future';

function App() {


  return (
    <>
      <div className="topbar">
        <Topbar />
      </div>

      <div className="page">
        <SentMail />
        <div
          className="main-contain"
          style={{
            width: '97%',
            borderRadius: '15px',
            border: '2px solid #ccc',
            padding: '20px',
            margin: '0 auto',
            marginTop: '-3rem',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
          }}
        >
          <Box>
            <Box sx={{ marginBottom: '4rem' }}>
              <Profile />
            </Box>

            <Box sx={{ marginBottom: '4rem' }}>
              <Skill />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', width: '80%', marginLeft: '10%' }}>
              <Box sx={{ flex: 1 }}>
                <Job_future />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Language />
              </Box>
            </Box>
          </Box>
        </div>

      </div>
    </>
  );
}

export default App;
