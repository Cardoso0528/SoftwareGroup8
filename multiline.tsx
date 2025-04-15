import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
    return (
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1 } }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
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
        </div>
        </Box>
  );
}