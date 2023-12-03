import React from 'react'
import CustomWrapper from "../components/PageWrappers/CustomWrapper";
import ConnectBack from "../assets/ConnectBack.png";
import img from "../assets/register-profile.png";


export default function Welcome() {
  return (
    <CustomWrapper style={{backgroundImage: `url(${ConnectBack})`}}>
        <div className='main-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
            <img src={img} style={{height: '200px'}} alt="Profile Icon" className="profile-icon" />
            <p className='welcome-msg'>Welcome to G</p>
        </div>
    </CustomWrapper>
  )
}
