import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Doc_Pat.css'; 
import Ct from '../Ct';
const Doc_Pat = () => {
  const [patients, setPatients] = useState([]);
  const [message, setMessage] = useState("");
  let obj = useContext(Ct)
  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/get_patient",{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id,"insu_id":obj.state._id}});
      if (res.data.length > 0) {
        setPatients(res.data);
      } else {
        setMessage("No patient data found.");
      }
    } catch (error) {
      setMessage("Error fetching patient data.");
    }
  };

  return (
    <div className="pat-container">
      <h1  className="pat-title">All Patient Details</h1>

      {/* Display message if no data */}
      {message && <p className="error-message" >{message}</p>}

      {/* Patient Table */}
      {patients.length > 0 && (
        <table className="pat-table">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Name</th>
              <th>Phone No</th>
              <th>Consulting Doctor</th>
              <th>Insurance ID</th>
              <th>Policy ID</th>
              <th>Admission Date</th>
            </tr>
          </thead>
          <tbody>
          {patients.map((patient, index) => (
          <tr key={index}>
                <td>{index + 1}</td> {/* Serial Number Column */}
                <td>{patient.name}</td>
                <td>{patient.phone_no}</td>
                <td>{patient.consulting_dr}</td>
                <td>{patient.insurance_id}</td>
                <td>{patient.policy_id}</td>
                <td>{patient.admission_date.slice(0,10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Doc_Pat;
