import * as React from 'react';
import { useState } from 'react'
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';
import User from './username';
import Pass from './password';
import Demo from './button';
import Phone from './phone'
import Address from './address'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Multi from './multiline';
import Name from './name';
import Space from '@mui/material/Chip';
import Service from './service'
import Account from './createAccount';
import Profile from './user'
import Chip from './chip'
import myImage from './salon.jpg';
import location from './Screenshot 2025-04-14 221732.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <svg width="600" height="10">
      <line x1="0" y1="10" x2="500" y2="10" stroke="black" strokeWidth="10" />
    </svg>
      <span className='title'>Welcome to Galaxy Of Salons</span>
    <svg width="600" height="10">
      <line x1="0" y1="10" x2="500" y2="10" stroke="black" strokeWidth="10" />
    </svg>
      <Demo />
      <img src={myImage} alt="My Image" style={{ width: 300, height: 300 }}/>
      <span className="h9">Customer Reviews</span>


      <span className="heading"style={{marginTop: 100, display: 'inline-block'}}>Login</span>
      <span className="h2">Username</span>
      <User />
      <span className="h2">Password</span>
      <Pass />
      <Stack spacing={.5} direction="row"><span className="h3">Forget your password? </span>
      <a href='' target="_blank"><span className="h3" style={{color: 'blue'}}>Reset Password </span> </a></Stack>
      

      <Stack spacing={.5} direction="row">
      <span className='h1'> Don't have an account?</span> 
      <a href='' target="_blank"><span className="h1" style={{color: 'blue'}}> Sign up now</span></a></Stack>
      <Stack direction="column" spacing={1}>
      <Button variant="outlined" sx ={{color: 'black', textTransform:  'none', borderColor: 'black', width: 300, height: 40}}>Login</Button>
      <Button variant="outlined" sx ={{color: 'black', textTransform:  'none', borderColor: 'black', width: 300, height: 40}}>Continue as Guest</Button>
    </Stack>
    
   <Account/>

    <span className="heading" style={{marginTop: 50, display: 'inline-block'}}>About Us</span>
    <Address/>
    <span className='h4'>2770 Virginia Pkwy, Mckinney, TX, 75071</span>
    <img src={location} alt="My Image" style={{ width: 300, height: 300 }}/>
    <span className='h5'>Contact us</span>
    <svg width="300" height="10">
      <line x1="0" y1="10" x2="200" y2="10" stroke="black" strokeWidth="5" />
    </svg>
    <Phone/>
    <span className='h4'>(972)-768-8572</span>
    <svg width="300" height="10">
      <line x1="0" y1="10" x2="200" y2="10" stroke="black" strokeWidth="5" />
    </svg>
    <span className='h6'>How can we help you?</span>
    <Name />

    <span className='h2'>Email</span>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1} }}
      noValidate
      autoComplete="off"
    >
      <TextField id="email" label="Enter your email" variant="outlined" 
            sx={{
              width: 300,
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: 'black', // or 'transparent' to remove
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'black', // or any color you want
              },
            }}/>
    </Box>
    <span className='h2'>Description</span>
    <Multi />
    
    <span className='heading' style={{marginTop: 50, display: 'inline-block'}}>Our Services</span>
    
    <svg width="600" height="100">
      <line x1="0" y1="10" x2="500" y2="10" stroke="black" strokeWidth="5" />
    </svg>
    <Service />
    <Profile />
    <span className='h7'>Select Date</span>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1} }}
      noValidate
      autoComplete="off"
    >
      <TextField id="date" label="MM/DD/YYYY" variant="outlined" sx={{
              width: 300,
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: 'black', // or 'transparent' to remove
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'black', // or any color you want
              },
            }}/>
    </Box>
    <span className='h8'>Choose a date for your appointment</span>
    <span className='h9'>Services Available</span>

    <span className='h7'>Select Time</span>
    <Chip />
    <span className='h8'>Choose the time for your appointment</span>
    <Stack direction="column" spacing={1}>
      <Button variant="outlined"sx ={{color: 'black', textTransform:  'none', borderColor: 'black', width: 300, height: 40}}>Cancel</Button>
      <Button variant="outlined"sx ={{backgroundColor: 'black', color: 'white', textTransform:  'none', borderColor: 'black', width: 300, height: 40}}>Comfirm Appointment</Button>
      <Button variant="outlined"sx ={{color: 'black', textTransform:  'none', borderColor: 'black', width: 300, height: 40}}>Back</Button>
    </Stack>
    </div>


  );
}

export default App;
