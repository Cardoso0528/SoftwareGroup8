import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import NavBar from '../components/TopNavBar';
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function AccountSetting() {
  return (
    <Box>
      <NavBar
        navText="Set Availability"
        drawerOptions={[
          {label: "Dashboard", path: "/hairstylist-dashboard"},
          {label: "Account Settings", path: "/account-settings"},
          {label: "Edit Services", path: "/edit-services"},
          {label: "Logout", path: "/"}
        ]}/>
      <Grid container rowSpacing={2} columnSpacing={2} justifyContent={"center"}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid container rowSpacing={1} columnSpacing={2} justifyContent={"center"}>
          <Grid>
            <DatePicker label="Select Start Date"/>
          </Grid>
          <Grid justifyContent={"center"}>
            <Typography>
              Available Time
            </Typography>
            <Grid container columnSpacing={1} direction={"row"}>
              <TimePicker/>
              <TimePicker/>
            </Grid>
          </Grid>
          <Grid justifyContent={"center"}>
            <Typography>
              Break
            </Typography>
            <Grid container columnSpacing={1} direction={"row"}>
              <TimePicker/>
              <TimePicker/>
            </Grid>
          </Grid>
          <Grid justifyContent={"center"}>
            <Typography>
              Repeat
            </Typography>
            <FormGroup row={true}>
              <FormControlLabel control={<Checkbox/>} labelPlacement="top" label="Sat" />
              <FormControlLabel control={<Checkbox/>} labelPlacement="top" label="Mon" />
              <FormControlLabel control={<Checkbox/>} labelPlacement="top" label="Tues" />
              <FormControlLabel control={<Checkbox/>} labelPlacement="top" label="Wed" />
              <FormControlLabel control={<Checkbox/>} labelPlacement="top" label="Thurs" />
              <FormControlLabel control={<Checkbox/>} labelPlacement="top" label="Fri" />
              <FormControlLabel control={<Checkbox/>} labelPlacement="top" label="Sun" />
            </FormGroup>
          </Grid>
          <Grid>
            <DatePicker label="Select End Date"/>
          </Grid>
        </Grid>
        <Grid>
          <Grid>
            <Button variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
        </LocalizationProvider>
      </Grid>
    </Box>
  );
}

