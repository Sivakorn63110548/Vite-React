import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Topbar from './topbar/Topbar';
import Home from './page/Home';

function App() {


  return (
    <>
      <div className="topbar">
        <Router>
          <Topbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
