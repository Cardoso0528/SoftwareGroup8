import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" sx ={{color: 'black', textTransform:  'none'}}>About Us</Button>
      <Button variant="text" sx ={{color: 'black', textTransform:  'none'}}>Service</Button>
      <Button variant="text" sx ={{color: 'black', textTransform:  'none'}}>Login</Button>
    </Stack>
  );
}