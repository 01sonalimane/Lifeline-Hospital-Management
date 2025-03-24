import React from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';

const Login = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="login-container">
      <h1 className="text-center text-2xl font-bold mb-8">Select Login Type</h1>
      
      <div className="card-grid">
        <div className="card" onClick={() => handleNavigation("/login_patient")}>
          <h2>Patient Login</h2>
          <p>Access your health records, schedule appointments, and get secure updates from doctors.</p>
        </div>

        <div className="card" onClick={() => handleNavigation("/login_doctor")}>
          <h2>Doctor Login</h2>
          <p>Manage patient records, view schedules, and access diagnostic tools efficiently.</p>
        </div>

        <div className="card" onClick={() => handleNavigation("/login_insurer")}>
          <h2>Insurer Login</h2>
          <p>Verify claims, process applications, and access patient data securely.</p>
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

export default Login;


