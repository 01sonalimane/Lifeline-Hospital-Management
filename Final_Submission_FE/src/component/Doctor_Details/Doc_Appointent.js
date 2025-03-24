import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import './Doc_Pat.css'; 
import Ct from "../Ct";

const Doc_Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState("");
  let obj =useContext(Ct)

  // Fetch appointment data
  useEffect(() => {
    axios
      .get("http://localhost:5000/get_appointment",{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id}})
      .then((res) => {
        if (res.data.data.length > 0) {
          setAppointments(res.data.data);
        } else {
          setMessage("No appointments found.");
        }
      })
      .catch(() => setMessage("Error fetching appointments."));
  }, []);

  return (
    <div className="pat-container">
      <h2 className="pat-title">Doctor Appointments</h2>

      {message && <p className="error-message">{message}</p>}

      {appointments.length > 0 && (
  <table className="pat-table">
    <thead>
      <tr>
        <th>Sr. No.</th> {/* Added Serial Number Column */}
        <th>Appointment ID</th>
        <th>Patient ID</th>
        <th>Patient Name</th>
        <th>Doctor Name</th>
        <th>Time Slot</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {appointments.map((appt, index) => (
        <tr key={appt._id}>
          <td>{index + 1}</td> {/* Serial Number starts from 1 */}
          <td>{appt._id}</td>
          <td>{appt.patient_id}</td>
          <td>{appt.patient_name}</td>
          <td>{appt.doctor_name}</td>
          <td>{appt.time_slot}</td>
          <td>{appt.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}

    </div>
  );
};

export default Doc_Appointment;
