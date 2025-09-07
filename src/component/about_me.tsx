import '../css/component/About_me.css';
import ProfileFallback from '../assets/Profile.png';
import WU_logo from '../assets/wu_logo.png'
import { Typography, Stack } from '@mui/material';
import { CalendarToday, LocationOn } from '@mui/icons-material';
import {
  School,
  Psychology,
  Sensors,
  ElectricalServices,
  DeveloperBoard,
  Science,
} from '@mui/icons-material';

interface ProfileProps {
  name: string;
  bio?: string;
  jobTitle?: string;
  avatarUrl?: string;
  birthDate?: string;
  address?: string;
  phone?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
  git?: string;
}

const defaultProfile: ProfileProps = {
  name: 'Sivakorn Tanyupak  ( Book )',
  jobTitle: '⚙️ Full Stack Developer',
  bio: "Passionate about building scalable web applications and exploring today's new technologies. Want to learn about this line of work Accumulate experience and want to see a future world where technology takes part in people's daily lives.",
  avatarUrl: ProfileFallback,
  birthDate: 'March 17, 2001 ( 21 years old )',
  address: '11/2 หมู่ 1 ต.พรุใน อ.เกาะยาว จ.พังงา 83000',
  phone: '065-840-6400',
  email: 'sivakorn.987@gmail.com',
  facebook: 'Sivakorn Tanyupak',
  instagram: 'bookkkk_7',
  git: 'Sivakorn63110548',
};

const AboutMe: React.FC<Partial<ProfileProps>> = (props) => {
  const data = { ...defaultProfile, ...props };
  const {
    name,
    bio,
    jobTitle,
    birthDate,
    address,
    avatarUrl,
  } = data;

  return (
    <section className="about-section">
      <br></br>
      <div className="about-row alt">
        <div className="about-image">
          <img src={avatarUrl || ProfileFallback} alt="About Me" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <Stack spacing={2} className="about-stack">
            <Typography variant="h4" className="about-name">{name}</Typography>
            <Typography variant="h6" className="about-title">{jobTitle}</Typography>
            <Typography variant="body1" className="about-bio">{bio}</Typography>

            <Stack spacing={1} className="about-items">
              <Stack direction="row" spacing={1.5} alignItems="center" className="about-item">
                <CalendarToday className="about-icon" />
                <Typography variant="body1"><strong>Birth Date:</strong> {birthDate}</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center" className="about-item">
                <LocationOn className="about-icon" />
                <Typography variant="body1"><strong>Address:</strong> {address}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>

      <br></br>

      <div className="about-row">
        <div className="about-text">
          <h2>Education</h2>

          <Typography variant="h4" className="about-uni" gutterBottom>
            Bachelor of Engineering (Computer Engineering & Intelligent Systems)
          </Typography>
          <Typography variant="h6" className="about-degree" gutterBottom>
            Walailak University
          </Typography>

          <Typography variant="body1" className="about-bio" sx={{ mt: 2 }}>
            I studied modern computing disciplines with a strong foundation in mathematics and electronics,
            focusing on building intelligent, connected systems.
          </Typography>

          <ul className="edu-list">
            <li>
              <School className="edu-icon" />
              <span><strong>Core:</strong> Algorithms, Data Structures, Computer Architecture</span>
            </li>
            <li>
              <Psychology className="edu-icon" />
              <span><strong>AI & ML:</strong> Machine Learning, Deep Learning, Model Evaluation</span>
            </li>
            <li>
              <Sensors className="edu-icon" />
              <span><strong>IoT Systems:</strong> Sensors, Edge Computing, Networking</span>
            </li>
            <li>
              <ElectricalServices className="edu-icon" />
              <span><strong>Electrical Circuits:</strong> Analog/Digital Circuits, Signal Basics</span>
            </li>
            <li>
              <DeveloperBoard className="edu-icon" />
              <span><strong>Embedded:</strong> Microcontrollers, PCB basics, Real-time I/O</span>
            </li>
            <li>
              <Science className="edu-icon" />
              <span><strong>Projects:</strong> AI-driven prototypes, IoT dashboards, automation</span>
            </li>
          </ul>
        </div>

        <div className="about-image-logo">
          <img src={WU_logo} alt="Walailak University Logo" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;