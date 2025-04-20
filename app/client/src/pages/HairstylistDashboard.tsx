import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Calendar from '../components/Calendar'
import NavBar from '../components/TopNavBar';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import dayjs from 'dayjs'

interface Appointment {
  title: string;
  services: string;
  date: string;
  time: string;
  duration: number;
}

const appointments: Appointment[] = [
  { title: "Appointment 1", services: "Haircut", date: "Thursday 3/13/25", time: "2:00 pm", duration: 60 },
  { title: "Appointment 2", services: "Haircut", date: "Wednesday 3/26/25", time: "1:45 pm", duration: 45 },
  { title: "Appointment 3", services: "Haircut", date: "Friday 4/11/25", time: "11:30 am", duration: 30 },
];

const events = appointments.map((appointment) => {
  const startDateTime = dayjs(`${appointment.date} ${appointment.time}`, "dddd MM/DD/YY h:mm a");
  return {
    title: appointment.title,
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
          {label: "Edit Services", path: "/edit-services"},
          {label: "Set Availability", path: "/set-availability"},
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
                    <Typography variant="h6">{appointment.title}</Typography>
                    <Typography variant="subtitle1">{appointment.date}</Typography>
                    <Typography variant="body2">{appointment.time}</Typography>
                    <Typography variant="body2">{appointment.services}</Typography>
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
