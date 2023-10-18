import React, { useState } from 'react';

import styled from '@emotion/styled';
import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { Notifications } from '@mui/icons-material';
import { theme } from '../theme';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: '5px',
  width: '40%',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

// This is only allowed on one Box and not both so weird
const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      position='sticky'
      color='secondary'
    >
      <StyledToolbar>
        <Typography
          variant='h6'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          MUI
        </Typography>
        <AccessibilityIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='Search...' />
        </Search>
        <IconWrapper theme={theme}>
          <Badge
            badgeContent={4}
            color='error'
          >
            <MailIcon />
          </Badge>
          <Badge
            badgeContent={2}
            color='error'
          >
            <Notifications />
          </Badge>
          <UserBox>
            <Avatar
              alt='logged in user avatar'
              onClick={(e) => setOpen(true)}
              sx={{ height: 30, width: 30 }}
              src='https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1287'
            />
            <Typography variant='span'>Gil</Typography>
          </UserBox>
        </IconWrapper>
        {/* Note: The spacing isn't set correctly when trying to put the user box outside move outside of the icon wrapper */}
      </StyledToolbar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
