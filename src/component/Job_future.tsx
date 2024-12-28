import { Box, Typography } from '@mui/material';
import BackgroundCard from '../assets/backgrond_card.png';
import { TouchApp } from '@mui/icons-material';

function Job_future() {
  return (
    <Box
      sx={{
        perspective: '1000px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          '&:hover': {
            transform: 'rotateY(180deg)',
          },
        }}
      >
        {/* ฝั่งหน้า */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            borderRadius: '10px',
            backgroundImage: `url(${BackgroundCard})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            boxSizing: 'border-box',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            transition: 'background-color 1s ease',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TouchApp sx={{ fontSize: '3rem', marginRight: '1rem' }} />
          </Typography>

          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '4rem' }}>
            Future goals <br></br> About
          </Typography>

          <Typography variant="body2">
            this line of work Developer development and growth.
          </Typography>
        </Box>

        {/* ฝั่งหลัง */}
        <Box
          sx={{
            position: 'absolute',
            backfaceVisibility: 'hidden',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: '#f8f9fa',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#333',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            transform: 'rotateY(180deg)',
            padding: '1rem',
            lineHeight: 1.5,
            boxSizing: 'border-box',
            borderRadius: '10px',
            textAlign: 'center',
          }}
        >
          <Typography sx={{ fontSize: '1.8rem', textAlign: 'center' }}>
            Striving for excellence in my profession and always improving.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Job_future;