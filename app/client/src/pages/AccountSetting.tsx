import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavBar from '../components/TopNavBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider'
import styles from '../styles/colors.module.css'
const userType: string = "client";

export default function AccountSetting() {
  return (
    <Box
    sx={{
      minHeight: "100vh",       
      width: {xs: 300, sm: 600, md: 900, lg: 1200},           
      justifyContent: "center"
    }}>
      <NavBar
        navText="Settings"
        drawerOptions={[(userType === "client") ? { label: "Dashboard", path: "/client-dashboard" } : { label: "Dashboard", path: "/hairstylist-dashboard" }, 
          {label: "Logout", path: "/"}
        ]}
      />
      <Box display="flex" flexDirection="column" >
        <form>
          <Typography variant="h4" align="left" my={2}>Personal</Typography>
          <Divider/>
          <Typography variant="h6" align="left" gutterBottom mt={2}>
            First Name
          </Typography>
          <TextField fullWidth variant="outlined" 
          sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100%"}}/>
          <Typography variant="h6" align="left" gutterBottom>
            Last Name
          </Typography>
          <TextField fullWidth variant="outlined" 
          sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100%" }}/>
          <Typography variant="h6" align="left" gutterBottom>
            Email
          </Typography>
          <TextField fullWidth variant="outlined" 
          sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100%" }}/>
          <Typography variant="h4" align="left" my={2}>Account</Typography>
          <Divider/>
          <Typography variant="h6" align="left" gutterBottom mt={2}>
            Username
          </Typography>
          <TextField fullWidth variant="outlined" 
          sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100%" }}/>
          <Typography variant="h6" align="left" gutterBottom>
            Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            autoComplete="current-password"
            variant="outlined"
            sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100%"}}
          />
          <Box m={2}>
            <Button variant="contained" className={styles.primary}>Save</Button>
          </Box>
          <Box>
            <Typography variant="h4" align="left" my={2}>Delete Account</Typography>
            <Divider/>
            <Typography variant="h6" align="left" gutterBottom mt={2}>This will permanently delete your account. There is no going back.</Typography>
            <Button variant="contained" className={styles.warning}>Delete</Button>
          </Box>
        </form>
        </Box>
    </Box>
  );
}