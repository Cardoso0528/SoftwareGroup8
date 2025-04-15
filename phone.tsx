import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';

export default function PhoneDisplay() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <PhoneIcon/>
      <span className="h4" style={{ marginLeft: '8px' }}>Phone</span>
    </div>
  );
}
