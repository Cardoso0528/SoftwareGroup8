import { useState, useEffect } from 'react'
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
import '../styles/MakeAppointment.css'
import { Service } from '../types/Service'
import CloseIcon from '@mui/icons-material/Close'
import convertDuration from '../utils/convertDuration';
import getTimeSlots from '../utils/getTimeSlots';

const defaultServices: Service[] = [
  {
    _id: '1',
    name: "Women's Haircut",
    description: "Custom haircut by our expert stylists",
    cost: 60,
    duration: 60
  },
  {
    _id: '2',
    name: "Men's Haircut",
    description: "Custom haircut by our expert stylists",
    cost: 30,
    duration: 30
  },
  {
    _id: '3',
    name: "Kid's Haircut",
    description: "Custom haircut by our expert stylists",
    cost: 25,
    duration: 45
  },
  {
    _id: '4',
    name: "Brazilian Blowout",
    description: "Expert hair coloring and highlights",
    cost: 200,
    duration: 60
  },
  {
    _id: '5',
    name: "Blowout",
    description: "Expert hair coloring and highlights",
    cost: 45,
    duration: 60
  },
  {
    _id: '6',
    name: "Formal Style",
    description: "Expert hair coloring and highlights",
    cost: 100,
    duration: 90
  },
  {
    _id: '7',
    name: "Silk Press Hair Styling",
    description: "Expert hair coloring and highlights",
    cost: 80,
    duration: 90
  },
  {
    _id: '8',
    name: "Styling Class",
    description: "Custom haircut by our expert stylists",
    cost: 100,
    duration: 60
  },
  {
    _id: '9',
    name: "Balayage Hair Coloring",
    description: "Custom haircut by our expert stylists",
    cost: 200,
    duration: 190
  },
  {
    _id: '10',
    name: "Ombre Hair Coloring",
    description: "Custom haircut by our expert stylists",
    cost: 180,
    duration: 120
  },
  {
    _id: '11',
    name: "All Over Color",
    description: "Custom haircut by our expert stylists",
    cost: 110,
    duration: 180
  },
  {
    _id: '12',
    name: "Partial Highlights",
    description: "Custom haircut by our expert stylists",
    cost: 150,
    duration: 120
  },
  {
    _id: '13',
    name: "Signature Service",
    description: "Custom haircut by our expert stylists",
    cost: 350,
    duration: 210
  },
  {
    _id: '14',
    name: "Babylights",
    description: "Custom haircut by our expert stylists",
    cost: 250,
    duration: 180
  },
  {
    _id: '15',
    name: "Root Touch Up",
    description: "Custom haircut by our expert stylists",
    cost: 90,
    duration: 120
  },
  {
    _id: '16',
    name: "Men's Root Touch Up",
    description: "Custom haircut by our expert stylists",
    cost: 70,
    duration: 70
  },
  {
    _id: '17',
    name: "Custom Hair Extension",
    description: "Custom haircut by our expert stylists",
    cost: 500,
    duration: 120
  },
  {
    _id: '18',
    name: "Extension Maintenance",
    description: "Custom haircut by our expert stylists",
    cost: 100,
    duration: 60
  },
  {
    _id: '19',
    name: "Extension Removal",
    description: "Custom haircut by our expert stylists",
    cost: 85,
    duration: 30
  },
  {
    _id: '20',
    name: "Scalp Exfoliation",
    description: "Custom haircut by our expert stylists",
    cost: 15,
    duration: 10
  },
  {
    _id: '21',
    name: "Hair Gloss Treatment",
    description: "Custom haircut by our expert stylists",
    cost: 70,
    duration: 45
  },
  {
    _id: '22',
    name: "Hair Chalking",
    description: "Custom haircut by our expert stylists",
    cost: 55,
    duration: 60
  },
  {
    _id: '23',
    name: "Hair Glazing Treatment",
    description: "Custom haircut by our expert stylists",
    cost: 65,
    duration: 45
  },
  {
    _id: '24',
    name: "Keratin Treatment",
    description: "Custom haircut by our expert stylists",
    cost: 200,
    duration: 180
  },
  {
    _id: '25',
    name: "Aromatherapy Scalp Treatment",
    description: "Custom haircut by our expert stylists",
    cost: 30,
    duration: 30
  }
];

const timeSlots = getTimeSlots("08:00 AM", "05:00 PM");

export default function MakeAppointment() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(defaultServices);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    const newFiltered = defaultServices.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(newFiltered);
  }, [searchQuery]);

  return (
    <Box>
      <NavBar
        navText="Make Appointment"
        drawerOptions={[{label: "Dashboard", path: "/client-dashboard"},
          {label: "Account Settings", path: "/account-settings"},
          {label: "Logout", path: "/"}
        ]}
      />
      <Box className="make-appointment-container">
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
            <DatePicker sx={{ flex: "1 1 auto", minWidth: "300px", maxWidth: "100%", mb: 2}}/>

            <Typography variant="h6" align="left" gutterBottom>
              Select Time
            </Typography>
            <Grid container className="make-appointment-time-grid">
              {selectedTime ? (
                <Grid>
                  <Button variant="contained" onClick={() => setSelectedTime(null)} endIcon={<CloseIcon/>}>
                    {selectedTime}
                  </Button>
                </Grid>
              ) : (
                timeSlots.map((time, index) => (
                  <Grid key={index}>
                    <Button variant="contained" onClick={() => setSelectedTime(time)}>
                      {time}
                    </Button>
                  </Grid>
                ))
              )}
            </Grid>
            
            <Typography variant="h6" align="left" gutterBottom mt={2}>
              Select Services
            </Typography>
            <TextField
              label="Search Services"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {filteredServices.length === 0 ? 
            (<Typography variant="h6" sx={{ textAlign: "center", mt: 2 }}>No services found.</Typography>) : 
            (<Grid container className="make-appointment-service-grid">
              {filteredServices.map((service, index) => (
                <Grid
                  key={index}
                  sx={{
                    flex: "0 0 auto",
                  }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      image={"/images/placeholder.png"}
                      alt={service.name} 
                      sx={{
                        width: { xs: 250, md: 400 },
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ textAlign: "center"}}>{service.name}</Typography> 
                      <Typography variant="body1">{service.description}</Typography> 
                      <Box display="flex" sx={{flexDirection: "row", justifyContent: "space-evenly"}}>
                        <Typography variant="body1" fontWeight="bold">${service.cost}</Typography> 
                        <Typography variant="body1">{convertDuration(service.duration)}</Typography> 
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained">Add</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            )}

            <Box m={2} display="flex" justifyContent="space-around" gap={2}>
              <Button variant="contained">Confirm Appointment</Button>
              <Button variant="contained">Cancel</Button>
            </Box>

          </LocalizationProvider>
        </form>
      </Box>
    </Box>
  );
}