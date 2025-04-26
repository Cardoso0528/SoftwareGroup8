import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import NavBar from '../components/TopNavBar'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TextField from '@mui/material/TextField';
import { DatePicker } from  '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styles from '../styles/colors.module.css'
import '../styles/scrollbar.css'

const services = [
  { name: "Haircut", cost: 50, image: "/images/placeholder.png" },
  { name: "Coloring", cost: 35, image: "/images/placeholder.png" },
  { name: "Styling", cost: 55, image: "/images/placeholder.png" }
];

export default function MakeAppointment() {
  return (
    <Box
    sx={{
      minHeight: "100vh",       
      width: {xs: 300, sm: 600, md: 900, lg: 1200},           
      justifyContent: "center"
    }}>
      <NavBar
        navText="Make Appointment"
        drawerOptions={[{label: "Dashboard", path: "/client-dashboard"},
          {label: "Account Settings", path: "/account-settings"},
          {label: "Logout", path: "/"}
        ]}
      />
      <Box>
        <form>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Typography variant="h6" align="left" gutterBottom>
              Stylist
            </Typography>
            <TextField fullWidth variant="outlined" 
            sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100%"}}/>
            <Typography variant="h6" align="left" gutterBottom>
              Select Date
            </Typography>
            <DatePicker sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100%", my: 2}}/>
            <Typography variant="h6" align="left" gutterBottom>
              Select Services
            </Typography>
            <Grid
              container
              direction="row"
              wrap="nowrap"
              className="custom-scrollbar"
              sx={{
                overflowX: "auto",
                display: "flex",
                flexDirection: "row",
                gap: 2,
                padding: 1,
              }}
              
            >
              {services.map((service, index) => (
                <Grid
                  key={index}
                  sx={{
                    flex: "0 0 auto",
                  }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      image={service.image}
                      alt={service.name} 
                      sx={{
                        width: { xs: 250, md: 400 },
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography>{service.name}</Typography> 
                      <Typography>${service.cost}</Typography> 
                    </CardContent>
                    <CardActions>
                      <Button variant="contained">Add</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Typography variant="h6" align="left" gutterBottom mt={2}>
              Select Time
            </Typography>
            <Grid container>
              <Grid>
                <Button></Button>
              </Grid>
            </Grid>
            <Box m={2} display="flex" justifyContent="space-around">
              <Button variant="contained" className={styles.confirm}>Confirm Appointment</Button>
              <Button variant="contained" className={styles.warning}>Cancel</Button>
            </Box>
          </LocalizationProvider>
        </form>
      </Box>
    </Box>
  );
}