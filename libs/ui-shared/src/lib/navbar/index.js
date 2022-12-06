import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import Logo from '../../../../../apps/host/dashboard/dashboard/src/assets/svg/Logo.svg';

import { styles } from './styles';

const pages = [
  { label: 'Home', icon: <HomeTwoToneIcon /> },
  { label: 'Broadcasts', icon: <SensorsOutlinedIcon /> },
  { label: 'Chats', icon: <ForumTwoToneIcon /> },
  { label: 'Analytics', icon: <ShowChartOutlinedIcon /> },
  { label: 'My Lists', icon: <GroupsOutlinedIcon /> },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'background.light',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container gap={1} sx={styles.logoContainer}>
            <img src={Logo} alt="Logo" />
          </Grid>
          <Box sx={styles.menuBoxXs}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ label, icon }) => (
                <MenuItem key={label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={styles.titleTypoXs}
          >
            COMMUNICATE
          </Typography>
          <Box sx={styles.menuBox}>
            {pages.map(({ label, icon }) => (
              <Button
                key={label}
                onClick={handleCloseNavMenu}
                disableElevation
                startIcon={icon}
                size="medium"
                sx={styles.menuButton}
              >
                {label}
              </Button>
            ))}
          </Box>

          <Box>
            <Grid container gap={1}>
              <Tooltip title="Notifications">
                <IconButton aria-label="notifications" sx={styles.iconButton}>
                  <NotificationsNoneTwoToneIcon sx={styles.iconStyle} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton
                  aria-label="settings"
                  onClick={handleOpenUserMenu}
                  sx={styles.iconButton}
                >
                  <PersonOutlineTwoToneIcon sx={styles.iconStyle} />
                </IconButton>
              </Tooltip>
            </Grid>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;