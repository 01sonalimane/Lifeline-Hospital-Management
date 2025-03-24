import React, { useContext } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Ct from "./Ct";
import Services from "./Services";


const Hero = () => {
let obj = useContext(Ct)

  const navigate = useNavigate();

  const handleNavigation = (route) => {
    if(obj.state.token && obj.state.role!=="doctor"){
    navigate(route);
    }
    else{
      navigate("/login")
    }
  };

  return (
    <>
   
    <div className="hero-section">
      <div className="hero-content">
        <h1>Your Partner in Health and Wellness</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        {/* {obj.state.role=="patient" && <button onClick={() => handleNavigation("/Appointment")} className="appointment-btn">Book an Appointment</button>} */}
        <h2>Book your appointment today.</h2>
        {/* <h6>Login as patient to book your appointment.</h6> */}
      </div>


    </div>
    </>
  );
};

export default Hero;
