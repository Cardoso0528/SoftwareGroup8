import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function AccountInfo() {
    return (
    <div style={{display: 'flex', alignItems: 'center', gap: 16, marginTop: 50}}>
        <AccountCircleIcon/>
        <div style={{ display: "flex", flexDirection: "column" }}>
        <span className="h10" >Name</span>
        <span className="h8" >Hairstylist</span>
      </div>
    </div>

    );
}