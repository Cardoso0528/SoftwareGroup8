import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavBar from '../components/TopNavBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/AccountSetting.css';

const userType: string = "client";

export default function AccountSetting() {
  return (
    <Box>
      <NavBar
        navText="Settings"
        drawerOptions={ (userType === "client") ? 
          [
            {label: "Dashboard", path: "/client-dashboard"},
            {label: "Make Appointment", path: "/make-appointment"},
            {label: "Logout", path: "logout"}
          ] :
          [
          { label: "Dashboard", path: "/hairstylist-dashboard" },
          { label: "Edit Services", path: "/edit-services" },
          { label: "Set Availability", path: "/set-availability" },
          { label: "Logout", path: "logout" }
          ]
        }
      />
      <Box className="settings-container">
        <Box className="settings-content">
          <form className="settings-form">
            <Box className="settings-section">
              <Typography variant="h4" className="settings-title">Personal Information</Typography>
              <Box className="settings-field">
                <Typography variant="h6" className="settings-field-label">First Name</Typography>
                <TextField fullWidth variant="outlined" placeholder="Enter your first name" />
              </Box>
              <Box className="settings-field">
                <Typography variant="h6" className="settings-field-label">Last Name</Typography>
                <TextField fullWidth variant="outlined" placeholder="Enter your last name" />
              </Box>
              <Box className="settings-field">
                <Typography variant="h6" className="settings-field-label">Email</Typography>
                <TextField fullWidth variant="outlined" placeholder="Enter your email" type="email" />
              </Box>
            </Box>

            <Box className="settings-section">
              <Typography variant="h4" className="settings-title">Account Information</Typography>
              <Box className="settings-field">
                <Typography variant="h6" className="settings-field-label">Username</Typography>
                <TextField fullWidth variant="outlined" placeholder="Enter your username" />
              </Box>
              <Box className="settings-field">
                <Typography variant="h6" className="settings-field-label">Password</Typography>
                <TextField
                  fullWidth
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  placeholder="Enter your password"
                />
              </Box>
              <Box className="settings-button-container">
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: '#db2778',
                    '&:hover': {
                      backgroundColor: '#be185d',
                    }
                  }}
                >
                  Save Changes
                </Button>
              </Box>
            </Box>

            <Box className="settings-section">
              <Box className="settings-field">
                <Typography variant="h6" className="settings-field-label">
                  Delete Account
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  This will permanently delete your account and all associated data. This action cannot be undone.
                </Typography>
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: '#ef4444',
                    '&:hover': {
                      backgroundColor: '#dc2626',
                    }
                  }}
                >
                  Delete Account
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
