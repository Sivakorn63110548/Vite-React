import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const LoadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1100,
  background: theme.palette.mode === 'dark'
  ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(44, 44, 84, 0.5))'
  : 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(207, 223, 243, 0.5))',
}));

const RobotBody = styled(Box)({
  width: '30px',
  height: '50px',
  backgroundColor: '#0202F2',
  borderRadius: '5px',
  position: 'relative',
  animation: 'walk 1s infinite linear',
  '@keyframes walk': {
    '0%': {
      transform: 'translateX(0px)',
    },
    '50%': {
      transform: 'translateX(10px)',
    },
    '100%': {
      transform: 'translateX(0px)',
    },
  },
});

const RobotHead = styled(Box)({
  width: '30px',
  height: '30px',
  backgroundColor: '#0202F2',
  borderRadius: '50%',
  position: 'absolute',
  top: '-35px',
  left: '10px',
});

const RobotLeg = styled(Box)({
  position: 'absolute',
  bottom: '-20px',
  width: '10px',
  height: '29px',
  backgroundColor: '#0202F2',
  animation: 'walkLeg 1s infinite linear',
  '@keyframes walkLeg': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '50%': {
      transform: 'rotate(45deg)',
    },
    '100%': {
      transform: 'rotate(0deg)',
    },
  },
});

const RobotLegLeft = styled(RobotLeg)({
  left: '10px',
  animationDelay: '0s',
});

const RobotLegRight = styled(RobotLeg)({
  right: '10px',
  animationDelay: '0.5s',
});

const LoadingText = styled(Typography)({
  marginTop: '2rem',
  fontSize: '1.2rem',
  marginLeft: '1.5rem',
  fontWeight: 500,
  color: '#0202F2',
  animation: 'text 1s infinite linear',
  '@keyframes text': {
    '0%': {
      transform: 'translateX(0px)',
    },
    '50%': {
      transform: 'translateX(15px)',
    },
    '100%': {
      transform: 'translateX(0px)',
    },
  },
});

const Loading = () => {
  return (
    <LoadingContainer>
      <Box display="flex" flexDirection="column" alignItems="center">
        <RobotBody>
          <RobotHead />
          <RobotLegLeft />
          <RobotLegRight />
        </RobotBody>
        <LoadingText>Loading ...</LoadingText>
      </Box>
    </LoadingContainer>
  );
};

export default Loading;
