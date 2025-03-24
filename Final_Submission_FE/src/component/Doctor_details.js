import React from 'react'
import { useNavigate } from "react-router-dom";
import './Register.css';

const Doctor_details = () => {

  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="login-container-1">
      <h1 className="text-center text-2xl font-bold mb-8">Select Detail Type</h1>
      
      <div className="card-grid-1">
        <div className="card" onClick={() => handleNavigation("/Doc_Pat")}>
          <h2>Patient Details</h2>
          <p>Get All Patient Details</p>
        </div>

        <div className="card" onClick={() => handleNavigation("/Doc_Doc")}>
          <h2>Doctor Details</h2>
          <p>Get all the doctor Details</p>
        </div>

        <div className="card" onClick={() => handleNavigation("/Doc_Ins")}>
          <h2>Insurer Details</h2>
          <p>Get all the Insurer Details</p>
        </div>

        <div className="card" onClick={() => handleNavigation("/Doc_Bill")}>
          <h2>All Bills</h2>
          <p>Get all the Bills</p>
        </div>

        <div className="card" onClick={() => handleNavigation("/Doc_Queries")}>
          <h2>All Queries</h2>
          <p>Get all Queries</p>
        </div>

        <div className="card" onClick={() => handleNavigation("/Doc_Appointment")}>
          <h2>All Appointments</h2>
          <p>Get all Appointments</p>
        </div>
      </div>

      {/* <div className="dummy-content mt-8">
        <h2>Why Choose Our Platform?</h2>
        <ul>
          <li>Seamless healthcare management for patients, doctors, and insurers.</li>
          <li>Data security and privacy ensured with advanced encryption.</li>
          <li>24/7 support for all your healthcare needs.</li>
        </ul>
      </div> */}
    </div>
  );
};


export default Doctor_details