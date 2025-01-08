import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import WorkIcon from '@mui/icons-material/Work';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import AngularLogo from '../assets/icon/angular.png';
import ReactLogo from '../assets/icon/react.png';
import NestLogo from '../assets/icon/nestjs.png';
import CodigniterLogo from '../assets/icon/ci3.png';
import MongoDBLogo from '../assets/icon/mongodbpng.png';
import MySQLLogo from '../assets/icon/mysql.png';
import GitLogo from '../assets/icon/git.png';
import JsLogo from '../assets/icon/JavaScript-logo.png';
import TsLogo from '../assets/icon/typescript.png';
import HtmlLogo from '../assets/icon/html.png';
import CssLogo from '../assets/icon/css-3.png';
import PhpLogo from '../assets/icon/php.png';
import PostmanLogo from '../assets/icon/postman.png';
import NodeLogo from '../assets/icon/nodejs.png';

function Skill() {
  const skills = [
    {
      title: 'Languages',
      description: 'Languages I am proficient in for programming.',
      items: [
        { name: 'JavaScript', img: JsLogo, link: 'https://www.w3schools.com/js/' },
        { name: 'TypeScript', img: TsLogo, link: 'https://www.typescriptlang.org/' },
        { name: 'Html', img: HtmlLogo, link: 'https://www.w3schools.com/html/' },
        { name: 'Css', img: CssLogo, link: 'https://www.w3schools.com/css/' },
        { name: 'PHP', img: PhpLogo, link: 'https://www.php.net/' },
      ],
    },
    {
      title: 'Frameworks',
      description: 'Popular frameworks I have worked with.',
      items: [
        { name: 'React', img: ReactLogo, link: 'https://react.dev/' },
        { name: 'Angular', img: AngularLogo, link: 'https://angular.io/' },
        { name: 'Codinigter3', img: CodigniterLogo, link: 'https://codeigniter.com/' },
        { name: 'Nest.js', img: NestLogo, link: 'https://nestjs.com/' },
      ],
    },
    {
      title: 'Other',
      description: 'Databases and tools I have experience with.',
      items: [
        { name: 'MongoDB', img: MongoDBLogo, link: 'https://www.mongodb.com/' },
        { name: 'MySQL', img: MySQLLogo, link: 'https://www.mysql.com/' },
        { name: 'Git', img: GitLogo, link: 'https://git-scm.com/' },
        { name: 'Node.js', img: NodeLogo, link: 'https://nodejs.org/' },
        { name: 'Postman', img: PostmanLogo, link: 'https://www.postman.com/' },
      ],
    },
  ];

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem', color: '#333' }}
      >
        <WorkIcon style={{ fontSize: '4.2vh' }}></WorkIcon> Work Skills
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ height: '23rem' }}
      >
        {skills.map((category, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ marginBottom: '1rem', color: '#00BCD4' }}>
                {category.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#6c757d', marginBottom: '2rem' }}>
                {category.description}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                {category.items.map((item, idx) => (
                  <Card
                    key={idx}
                    sx={{
                      width: '15%',
                      backgroundColor: '#fff',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      borderRadius: '10px',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <CardActionArea
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textDecoration: 'none' }}
                    >
                      <CardContent
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem' }}
                      >
                        <Box sx={{ mb: 2 }}>
                          <img
                            src={item.img}
                            alt={item.name}
                            style={{ width: '60px', height: '60px', borderRadius: '5px' }}
                          />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 'medium', color: '#333' }}>
                          {item.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Skill;
