import React from 'react';
import LocationPinIcon from '@mui/icons-material/LocationPin';

export default function AddressDisplay() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <LocationPinIcon />
      <span className="h4" style={{ marginLeft: '8px' }}>Address</span>
    </div>
  );
}
