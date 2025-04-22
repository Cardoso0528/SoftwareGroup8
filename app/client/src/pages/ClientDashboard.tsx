import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Calendar from '../components/Calendar'
import NavBar from '../components/TopNavBar';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'

interface Appointment {
  username: string;
  service: string;
  time: string;
  stylist: string;
  notes: string;
  confirm: boolean;
  duration: number; // assuming in minutes for now
}

const appointments: Appointment[] = [
  { username: "JohnDoe", service: "Haircut", time: "Thursday 3/13/25 2:00 pm", stylist: "Alice", notes: "Regular trim", confirm: true, duration: 60},
  { username: "JaneSmith", service: "Coloring", time: "Wednesday 3/26/25 1:45 pm", stylist: "Bob", notes: "Touch-up", confirm: false, duration: 30 },
  { username: "MikeBrown", service: "Shaving", time: "Friday 4/11/25 11:30 am", stylist: "Charlie", notes: "Add beard trim", confirm: true, duration: 45 },
];

const events = appointments.map((appointment) => {
  const startDateTime = dayjs(appointment.time, "dddd MM/DD/YY h:mm a");
  return {
    title: `${appointment.service} with ${appointment.stylist}`,
    start: startDateTime.toDate(),
    end: startDateTime.add(appointment.duration, 'minute').toDate(),
  };
});

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
          <Calendar 
            style={{
              height: "100%",
              width: "100%",
              minHeight: "500px",
            }}
            events={events}/>
        </Box>

        <Box flex={1}>
          <Grid container spacing={3}>
            {appointments.map((appointment, index) => (
              <Grid key={index} sx={{xs:12, sm:6, md:4}} >
                <Card>
                  <CardContent>
                    <Typography variant="h6">{"Appointment " + (index + 1) + ": " + appointment.service}</Typography>
                    <Typography variant="subtitle1">{dayjs(appointment.time).format("MMMM D")}</Typography>
                    <Typography variant="body2">{dayjs(appointment.time).format("h:mm A")}</Typography>
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
