import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavBar from '../components/TopNavBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const userType: string = "client";

export default function AccountSetting() {
  return (
    <Box>
      <NavBar
        navText="Account Settings"
        drawerOptions={[(userType === "client") ? { label: "Account Settings", path: "/client-dashboard" } : { label: "Account Settings", path: "/hairstylist-dashboard" }]}
      />
      <Box display="flex" flexDirection="column" sx={{ xs: 12 }} >
        <form>
          <Typography variant="h6" align="left" gutterBottom>
            First Name
          </Typography>
          <TextField fullWidth variant="outlined" 
          sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100vh"}}/>
          <Typography variant="h6" align="left" gutterBottom>
            Last Name
          </Typography>
          <TextField fullWidth variant="outlined" 
          sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100vh" }}/>
          <Typography variant="h6" align="left" gutterBottom>
            Email
          </Typography>
          <TextField fullWidth variant="outlined" 
          sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100vh" }}/>
          <Typography variant="h6" align="left" gutterBottom>
            Username
          </Typography>
          <TextField fullWidth variant="outlined" 
          sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100vh" }}/>
          <Typography variant="h6" align="left" gutterBottom>
            Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            autoComplete="current-password"
            variant="outlined"
            sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "1280px" }}
          />
          <Box m={2}>
            <Button variant="contained">
              Save
            </Button>
          </Box>
        </form>
        </Box>
    </Box>
  );
}
