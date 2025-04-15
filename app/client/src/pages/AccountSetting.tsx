import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import NavBar from '../components/TopNavBar';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function AccountSetting() {
  return (
    <Box>
      <NavBar/>
      <Grid container rowSpacing={2} columnSpacing={2} justifyContent={"center"}>
        <Typography>
          Account Settings
        </Typography>
        <Grid container rowSpacing={1} justifyContent={"center"}>
          <Grid>
            <TextField
              label="First Name"
            />
          </Grid>
          <Grid>
            <TextField
              label="Last Name"
            />
          </Grid>
          <Grid>
            <TextField
              label="Email"
            />
          </Grid>
          <Grid>
            <TextField
              label="Username"
            />
          </Grid>
          <Grid>
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Button variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
