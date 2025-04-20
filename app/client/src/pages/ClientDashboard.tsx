import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Calendar from '../components/Calendar'
import NavBar from '../components/TopNavBar';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

interface Appointment {
  title: string;
  date: string;
  time: string;
}

const appointments: Appointment[] = [
  { title: "Appointment 1", date: "Thursday 3/13/25", time: "2:00 pm" },
  { title: "Appointment 2", date: "Wednesday 3/26/25", time: "1:45 pm" },
  { title: "Appointment 3", date: "Friday 4/11/25", time: "11:30 am" },
];

export default function ClientDashboard() {
  return (
    <Box>
      <NavBar 
        navText="Dashboard"
        drawerOptions={[
          {label: "Account Settings", path: "/account-settings"},
          {label: "Make Appointment", path: "/"},
          {label: "Logout", path: "/"}
        ]}/>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={3} p={2}>
        <Box flex={1} display="flex" justifyContent="center" alignItems="center" 
        sx={{ height: { xs: "85vh", md: "95vh" }, flexGrow: 2}}>
          <Calendar style={{
            height: "100%",
            width: "100%",
            minHeight: "500px",
            }}/>
        </Box>

        <Box flex={1}>
          <Grid container spacing={3}>
            {appointments.map((appointment, index) => (
              <Grid key={index} sx={{xs:12, sm:6, md:4}} >
                <Card>
                  <CardContent>
                    <Typography variant="h6">{appointment.title}</Typography>
                    <Typography variant="subtitle1">{appointment.date}</Typography>
                    <Typography variant="body2">{appointment.time}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
