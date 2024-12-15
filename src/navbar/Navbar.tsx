import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  ListSubheader
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  Analytics as AnalyticsIcon,
  Folder as FolderIcon,
  People as PeopleIcon
} from '@mui/icons-material';
import logo from '../assets/react.svg';

const MyNavBar = () => {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1); // กำหนดค่าเริ่มต้นให้เลือกเมนูแรก

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navItems = [
    {
      category: 'Main',
      items: [
        { index: 1, icon: <DashboardIcon />, text: 'Dashboard' },
        { index: 2, icon: <HomeIcon />, text: 'Home' },
        { index: 3, icon: <AnalyticsIcon />, text: 'Analytics' }
      ]
    },
    {
      category: 'Management',
      items: [
        { index: 4, icon: <FolderIcon />, text: 'Projects' },
        { index: 5, icon: <PeopleIcon />, text: 'Teams' },
        { index: 6, icon: <SettingsIcon />, text: 'Settings' }
      ]
    }
  ];

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index); // เลือกเมนูที่ถูกคลิก
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={open}
      sx={{
        width: open ? 240 : 72,
        transition: 'width 0.3s ease',
        '& .MuiDrawer-paper': {
          width: open ? 240 : 72,
          boxSizing: 'border-box',
          backgroundColor: '#1e293b',
          color: '#ffffff',
          overflowX: 'hidden',
          transition: 'width 0.3s ease',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 1.5,
          backgroundColor: '#0f172a'
        }}
      >
        <img
          src={logo}
          alt="React Logo"
          style={{ width: 30, height: 30, marginRight: 8 }}
        />
        {open && (
          <Typography
            sx={{
              fontWeight: 600,
              ml: 1,
              color: '#64748b'
            }}
          >
            BookReact Dev
          </Typography>
        )}

        <Tooltip title={open ? 'Collapse' : 'Expand'}>
          <IconButton
            onClick={toggleDrawer}
            sx={{
              color: '#64748b',
              '&:hover': {
                backgroundColor: 'rgba(100,116,139,0.1)'
              }
            }}
          >
            <ChevronLeftIcon
              sx={{
                transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
                transition: 'transform 0.3s ease'
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>

      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.12)' }} />

      {navItems.map((group, groupIndex) => (
        <List
          key={groupIndex}
          subheader={
            open && (
              <ListSubheader
                sx={{
                  backgroundColor: '#1e293b',
                  color: '#94a3b8',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  textAlign: 'left'
                }}
              >
                {group.category}
              </ListSubheader>
            )
          }
        >
          {group.items.map((item) => (
            <ListItemButton
              key={item.index}
              selected={selectedIndex === item.index}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(100,116,139,0.3)',
                  borderRadius: '8px'
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(100,116,139,0.4)',
                  borderRadius: '8px',
                  '& .MuiListItemIcon-root': {
                    color: '#3b82f6'
                  }
                }
              }}
              onClick={() => handleListItemClick(item.index)}
            >
              <ListItemIcon sx={{ minWidth: 48 }}>
                {React.cloneElement(item.icon, {
                  sx: {
                    color: selectedIndex === item.index ? '#3b82f6' : 'inherit'
                  }
                })}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          ))}
        </List>
      ))}
    </Drawer>
  );
};

export default MyNavBar;