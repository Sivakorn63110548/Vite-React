import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Topbar from './topbar/Topbar';
import Home from './page/Home';
import About from './page/About';

function App() {


  return (
    <>
      <div className="topbar">
        <Router>
          <Topbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/skills" element={<Skills />} />
            <Route path="/history" element={<History />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
