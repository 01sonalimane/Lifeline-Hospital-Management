import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Ct from "./Ct";
import "./Navbar.css";
import Avatar from '@mui/material/Avatar';
import {deepOrange,blueGrey, deepPurple } from '@mui/material/colors';

// import Stack from '@mui/material/Stack';

function Navbar() {
  let obj = useContext(Ct);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/" style={{textDecoration:"none",color:"black"}}>Life Line Hospital</Link>
        {/* Life Line Hospital */}
        </div>


      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className={`navbar-links ${showMenu ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact us</Link>

        {!obj.state.token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            {obj.state.role === "doctor" && <Link to="/addbill">Add Bill</Link>}
            {obj.state.role === "patient" && <Link to="/Patient_details">Dashboard</Link>}
            {obj.state.role === "insurer" && <Link to="/Insurer_details">Dashboard</Link>}
            {obj.state.role === "doctor" && <Link to="/Doctor_details">Dashboard</Link>}

            <Link to="/logout">Logout</Link>
            <div className="user-info">
              {/* Hi, <span className="user-name">{obj.state.name}</span>! */}

              {/* <Avatar sx={{ bgcolor: deepPurple[500] }}>{obj.state.name.slice(1)}</Avatar> */}
              <Avatar sx={{ bgcolor: blueGrey[500] }}>{obj.state.name.slice(0,2).toUpperCase()}</Avatar>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;