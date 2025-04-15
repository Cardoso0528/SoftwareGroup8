import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1  } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="password" label="Enter your password" variant="outlined" 
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
      }}
      />
    </Box>
  );
}