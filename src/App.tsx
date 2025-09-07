import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Topbar from './topbar/Topbar';
import Home from './page/Home';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { fontSize: '90%' },
      },
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="topbar">
        <Router>
          <Topbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;
