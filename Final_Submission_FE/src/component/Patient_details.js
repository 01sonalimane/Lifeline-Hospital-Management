import React, { useContext, useEffect, useState } from 'react';
import Ct from './Ct';
import axios from 'axios';
import "./Doctor_Details/Doc_Doc.css";
import { jsPDF } from 'jspdf';
import { useNavigate } from 'react-router-dom';

const PatientDetails = () => {
  let navigate = useNavigate()
  const obj = useContext(Ct);
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const pat_id = obj.state._id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patientResponse = await axios.get(`http://localhost:5000/get_patient_self/${pat_id}`,{"headers":{"Authorization":obj.state.token}});
        setData(patientResponse.data);
      } catch (err) {
        console.error("Error fetching patient data:", err);
        setError("Failed to fetch patient data.");
      }

      try {
        const billResponse = await axios.get(`http://localhost:5000/get_bill/${pat_id}`,{"headers":{"Authorization":obj.state.token}});
        setData1(billResponse.data);
      } catch (err) {
        console.error("Error fetching bills data:", err);
        setError("Failed to fetch bills data.");
      }
      
      setLoading(false);
    };

    fetchData();
  }, [pat_id]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Patient Details", 10, 10);
    
    if (data) {
      doc.text(`Name: ${data.name || "N/A"}`, 10, 20);
      doc.text(`Email: ${data.email || "N/A"}`, 10, 30);
      doc.text(`Phone No: ${data.phone_no || "N/A"}`, 10, 40);
      doc.text(`DOB: ${data.dob || "N/A"}`, 10, 50);
      doc.text(`Gender: ${data.gender || "N/A"}`, 10, 60);
      doc.text(`Blood Group: ${data.blood_grp || "N/A"}`, 10, 70);
      doc.text(`Address: ${data.address || "N/A"}`, 10, 80);
      doc.text(`Consulting Doctor: ${data.consulting_dr || "N/A"}`, 10, 90);
      doc.text(`Insurance ID: ${data.insurance_id || "N/A"}`, 10, 100);
      doc.text(`Policy ID: ${data.policy_id || "N/A"}`, 10, 110);
      doc.text(`Admission Date: ${data.admission_date || "N/A"}`, 10, 120);
    }

    if (data1?.data) {
      doc.text("Billing Details", 10, 140);
      doc.text(`Patient ID: ${data1.data._id}`, 10, 150);
      doc.text(`Appointment Date: ${new Date(data1.data.appointment_date).toLocaleDateString()}`, 10, 160);

      let y = 180;
      doc.text("Billing Entries", 10, y);
      if (data1.data.billing_entries) {
        data1.data.billing_entries.forEach((entry, index) => {
          doc.text(`${index + 1}. ${entry.particular} - ₹${entry.amount}`, 10, y + (index + 1) * 10);
        });
        const totalBill = data1.data.billing_entries.reduce((sum, entry) => sum + entry.amount, 0);
        doc.text(`Total Bill: ₹${totalBill}`, 10, y + (data1.data.billing_entries.length + 2) * 10);
      }
    }
    
    doc.save(`Patient_Details_${pat_id}.pdf`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleNavigation = (route) => {
    if(obj.state.token && obj.state.role!=="doctor"){
    navigate(route);
    }
    else{
      navigate("/login")
    }
  };


  return (
    <div>
      {obj.state.role=="patient" && <button onClick={() => handleNavigation("/Appointment")} className="appointment-btn">Book an Appointment</button>}
      {data && (
        <div className="doc-container">
          <h2 className="doc-title">Patient Details</h2>
          <table className="doc-table">
            <tbody>
              <tr><th>Name</th><td>{data.name || "N/A"}</td></tr>
              <tr><th>Email</th><td>{data.email || "N/A"}</td></tr>
              <tr><th>Phone No</th><td>{data.phone_no || "N/A"}</td></tr>
              <tr><th>DOB</th><td>{data.dob || "N/A"}</td></tr>
              <tr><th>Gender</th><td>{data.gender || "N/A"}</td></tr>
              <tr><th>Blood Group</th><td>{data.blood_grp || "N/A"}</td></tr>
              <tr><th>Address</th><td>{data.address || "N/A"}</td></tr>
              <tr><th>Consulting Doctor</th><td>{data.consulting_dr || "N/A"}</td></tr>
              <tr><th>Insurance ID</th><td>{data.insurance_id || "N/A"}</td></tr>
              <tr><th>Policy ID</th><td>{data.policy_id || "N/A"}</td></tr>
              <tr><th>Admission Date</th><td>{data.admission_date || "N/A"}</td></tr>
            </tbody>
          </table>
        </div>
      )}
      
      {data1?.data && (
        <div className="doc-container">
          <h2 className="doc-title">Billing Details</h2>
          <table className="doc-table">
            <tbody>
              <tr><th>Patient ID</th><td>{data1.data._id}</td></tr>
              <tr><th>Appointment Date</th><td>{new Date(data1.data.appointment_date).toLocaleDateString()}</td></tr>
            </tbody>
          </table>
          <h2 className="doc-title">Billing Entries</h2>
          <table className="doc-table">
            <thead>
              <tr><th>Sr. No</th><th>Particular</th><th>Amount</th></tr>
            </thead>
            <tbody>
              {data1.data.billing_entries.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.particular}</td>
                  <td>{entry.amount}</td>
                </tr>
              ))}
              <tr><th colSpan="2">Total Bill</th><th>{data1.data.billing_entries.reduce((sum, entry) => sum + entry.amount, 0)}</th></tr>
            </tbody>
          </table>
        </div>
      )}
      
      <button onClick={downloadPDF} style={{ height:"5vh", width:"25vw", marginLeft:"39%",paddingBottom:"10px", marginTop: "20px", padding: "10px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
        Download Details
      </button>
    </div>
  );
};

export default PatientDetails;
