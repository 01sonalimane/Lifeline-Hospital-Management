import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Doc_Doc.css";
import Ct from "../Ct"

const Doc_Doc = () => {
  const [doctors, setDoctors] = useState([]);
  const [message, setMessage] = useState("");
  let obj = useContext(Ct)

  // Fetch doctor data when component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/get_doctor",{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id}})
      .then((res) => {
        if (res.data.length > 0) {
          setDoctors(res.data);
          setMessage("");
        } else {
          setMessage("No doctor data found.");
        }
      })
      .catch(() => {
        setMessage("Error fetching doctor data.");
      });
  }, []);

  return (
    <div className="doc-container">
      <h1 className="doc-title">Doctor Details</h1>

      {/* Display message if data is unavailable */}
      {message && <p className="error-message" style={{ color: "red" }}>{message}</p>}

      {/* Render doctor details in a table */}
      {doctors.length > 0 && (
        <table border="1" cellPadding="8" className="doc-table">
          <thead>
            <tr>
              <th>Sr.no.</th>
              <th>Name</th>
              <th>Department</th>
              <th>Phone No</th>
              <th>Specialization</th>
              {/* <th>Experience (Years)</th> */}
              {/* <th>Hospital</th> */}
            </tr>
          </thead>
          <tbody>
          {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <td>{index + 1}</td> {/* Serial Number Column */}
                <td>{doctor.name}</td>
                <td>{doctor.department}</td>
                <td>{doctor.phone_no}</td>
                <td>{doctor.specialization}</td>
                {/* <td>{doctor.experience}</td> */}
                {/* <td>{doctor.hospital}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Doc_Doc;
