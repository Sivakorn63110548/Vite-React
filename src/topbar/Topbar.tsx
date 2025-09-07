import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  LinearProgress
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BuildIcon from '@mui/icons-material/Build';
import ContactsIcon from '@mui/icons-material/Contacts';
import CloseIcon from '@mui/icons-material/Close';

import Logo from '../assets/BookDev_logo.png';
import './Topbar.css';

const SECTIONS = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  { id: 'about', label: 'About', icon: <InfoIcon /> },
  { id: 'skill', label: 'Skill', icon: <SchoolIcon /> },
  { id: 'experience', label: 'Experience', icon: <WorkIcon /> },
  { id: 'project', label: 'Project', icon: <BuildIcon /> },
  { id: 'contact', label: 'Contact', icon: <ContactsIcon /> },
] as const;

type SectionId = typeof SECTIONS[number]['id'];

const Topbar: React.FC = () => {
  const appbarRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<SectionId>('home');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const isMobile = useMediaQuery('(max-width: 992px)');

  const scrollToId = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    const appbarH = appbarRef.current?.offsetHeight ?? 0;
    const offset = 12;
    const y = el.getBoundingClientRect().top + window.scrollY - appbarH - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setOpen(false);
  };

  // Scroll spy to highlight active menu
  const observers = useMemo(() => new Map<string, IntersectionObserver>(), []);
  useEffect(() => {
    const opts: IntersectionObserverInit = { root: null, threshold: 0.55 };
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const ob = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(id as SectionId);
        });
      }, opts);
      ob.observe(el);
      observers.set(id, ob);
    });
    return () => {
      observers.forEach((ob, id) => {
        const el = document.getElementById(id);
        if (el) ob.unobserve(el);
      });
      observers.clear();
    };
  }, [observers]);

  // Elevation on scroll + scroll progress
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const pct = total > 0 ? (y / total) * 100 : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar
      ref={appbarRef}
      position="fixed"
      className={`topbar-appbar ${scrolled ? 'is-scrolled' : ''}`}
    >
      {/* subtle scroll progress */}
      <LinearProgress variant="determinate" value={progress} className="topbar-progress" />

      <Toolbar className="topbar-toolbar">
        {/* Left (desktop) */}
        {!isMobile && (
          <Box className="topbar-menu left">
            {SECTIONS.slice(0, 3).map((s) => (
              <Button
                key={s.id}
                className={`topbar-btn ${active === s.id ? 'active' : ''}`}
                startIcon={s.icon}
                onClick={() => scrollToId(s.id)}
              >
                {s.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Logo center */}
        <Box className="topbar-logo-wrap">
          <span className="topbar-glow" aria-hidden />
          <Box className="topbar-logo-chip">
            <Box component="img" src={Logo} alt="BookDev Logo" className="topbar-logo-img" />
          </Box>
        </Box>

        {/* Right (desktop) */}
        {!isMobile && (
          <Box className="topbar-menu right">
            {SECTIONS.slice(3).map((s) => (
              <Button
                key={s.id}
                className={`topbar-btn ${active === s.id ? 'active' : ''}`}
                startIcon={s.icon}
                onClick={() => scrollToId(s.id)}
              >
                {s.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Burger (mobile) */}
        {isMobile && (
          <IconButton className="topbar-burger" onClick={() => setOpen(true)} aria-label="open menu">
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer (mobile) */}
        <Drawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{ className: 'topbar-drawer' }}
        >
          <Box className="drawer-header">
            <Box component="img" src={Logo} alt="BookDev Logo" className="drawer-logo" />
            <IconButton onClick={() => setOpen(false)} aria-label="close" className="drawer-close">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {SECTIONS.map((s) => (
              <ListItem key={s.id} disablePadding>
                <ListItemButton onClick={() => scrollToId(s.id)} selected={active === s.id} className="drawer-item">
                  <ListItemIcon className="drawer-icon">{s.icon}</ListItemIcon>
                  <ListItemText primary={s.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;