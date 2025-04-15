import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import myImage from './src/salon.jpg';

export default function AccountFields() {
    return (
        <><span className="heading"style={{marginTop: 50, display: 'inline-block'}}>Create Account</span>
            <span className="h2">First Name</span><Box
            component="form"
            sx={{ '& > :not(style)': { m: 1 } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="email" label="Enter your first name" variant="outlined"
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
                }} />
        </Box>
        <span className="h2">Last Name</span><Box
            component="form"
            sx={{ '& > :not(style)': { m: 1 } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="email" label="Enter your last name" variant="outlined"
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
                }} />
        </Box>
        <span className="h2">Username</span><Box
            component="form"
            sx={{ '& > :not(style)': { m: 1 } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="email" label="Enter your username" variant="outlined"
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
                }} />
        </Box>
        <span className="h2">Password</span><Box
            component="form"
            sx={{ '& > :not(style)': { m: 1 } }}
            noValidate
            autoComplete="off"
        >
            <TextField id="email" label="Enter your password" variant="outlined"
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
                }} />
        </Box>
        <Stack spacing={.5} direction="row"><span className="h2">Already have an account? </span>
        <a href='' target="_blank"><span className="h2" style={{color: 'blue'}}>Login</span> </a></Stack>
        <Button variant="outlined"sx ={{color: 'black', textTransform:  'none', borderColor: 'black', width: 300, height: 40}}>Sign Up</Button>
        </>
    );
    }