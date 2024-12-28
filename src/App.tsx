import Topbar from './topbar/Topbar';
import SentMail from './component/SentMail';
import Profile from './component/Profile';
import Skill from './component/Skill';

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
          <Profile />
          <br></br>
          <br></br>
          <br></br>
          <Skill />
        </div>

      </div>
    </>
  );
}

export default App;
