import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function NameFields() {
    return (
    <Stack spacing={4} direction="row">
        {}
        <Stack direction="column" spacing={1} alignItems="flex-start">
            <span className='h2'>First</span>

  
        <TextField id="first" label="First Name" variant="outlined" 
        sx={{
          width: 135,
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
</Stack>
    {}
<Stack direction="column" spacing={1} alignItems="flex-start">
<span className='h2'>Last</span>
  <TextField id="last" label="Last Name" variant="outlined"
        sx={{
          width: 135,
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
    </Stack>
</Stack>
    );
}