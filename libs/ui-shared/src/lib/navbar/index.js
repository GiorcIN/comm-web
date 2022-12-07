import * as React from 'react';
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';

import { styles } from './styles';
import Logo from '../../../../../apps/host/dashboard/dashboard/src/assets/svg/Logo.svg';

const pages = [
  { label: 'Home', icon: <HomeTwoToneIcon />, route: '/home' },
  { label: 'Broadcasts', icon: <SensorsOutlinedIcon />, route: '/broadcast' },
  { label: 'Chats', icon: <ForumTwoToneIcon />, route: '/chats' },
  { label: 'Analytics', icon: <ShowChartOutlinedIcon />, route: '/' },
  { label: 'My Lists', icon: <GroupsOutlinedIcon />, route: '/' },
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
    <AppBar position="static" sx={styles.appBar}>
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
              sx={styles.rootMenuXs}
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
