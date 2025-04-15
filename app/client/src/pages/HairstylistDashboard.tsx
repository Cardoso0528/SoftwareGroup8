import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Card from '@mui/material/Card'
import Calendar from '../components/LabeledCalendar'
import NavBar from '../components/TopNavBar';
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function HairstylistDashboard() {
  return (
    <Box>
      <NavBar/>
      <Grid container rowSpacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={"center"}>
        <Grid>
          <Calendar/>
        </Grid>
        <Grid sx={{size: "grow"}}>
          <List sx={{justifyContent: "center"}}>
            <ListItem>
              <Card sx={{width: "100%"}}>
                <CardContent>
                  <Typography>
                    Appointment 1
                  </Typography>
                  <Typography>
                    Services: Haircut
                  </Typography>
                  <Typography>
                     Thursday 3/13/25
                  </Typography>
                  <Typography>
                    2:00 pm
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem>
              <Card sx={{width: "100%"}}>
                <CardContent>
                  <Typography>
                    Appointment 2
                  </Typography>
                  <Typography>
                    Services: Some other service
                  </Typography>
                  <Typography>
                    Wednesday 3/26/25
                  </Typography>
                  <Typography>
                    1:45 pm
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
            <ListItem>
              <Card sx={{width: "100%"}}>
                <CardContent>
                  <Typography>
                    Appointment 3
                  </Typography>
                  <Typography>
                    Services: Placeholder service
                  </Typography>
                  <Typography>
                    Friday 4/11/25
                  </Typography>
                  <Typography>
                    11:30 am
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
