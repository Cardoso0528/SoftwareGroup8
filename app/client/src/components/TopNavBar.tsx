import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { createTheme, ThemeProvider } from '@mui/material/styles'

interface navBarProps {
  navText: string; 
  drawerOptions: { label: string; path: string }[]; 
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#ef69a7",
      main: "#db2778",
      dark: "#ae226b",
      contrastText: "#fff",
    },
  },
});

export default function NavBar({ navText, drawerOptions }: navBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const navigate = useNavigate()

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleNavigation = async (path: string) => {
    if (path === "logout") {
      try {
        await fetch('/api/logout', {
          method: 'POST',
          credentials: 'include', // Include cookies in the request
        });
        navigate('/');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    } else {
      navigate(path);
    }
    setDrawerOpen(false); 
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1200 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)} 
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              {navText}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left" 
          open={drawerOpen} 
          onClose={toggleDrawer(false)} 
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)} 
            onKeyDown={toggleDrawer(false)} 
          >
            <List>
              {drawerOptions.map((option, index) => (
                <ListItemButton 
                  key={index}
                  onClick={() => handleNavigation(option.path)}>
                  <ListItemText primary={option.label} /> 
                </ListItemButton>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </ThemeProvider>
    </Box>
  );
}
