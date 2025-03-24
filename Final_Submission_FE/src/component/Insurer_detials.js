// import axios from 'axios';
// import React, { useContext, useState } from 'react';
// import "./Insurer_css.css"
// import { jsPDF } from 'jspdf';
// import Ct from './Ct';


// const Insurer_details = () => {
//   const [patientId, setPatientId] = useState("");
//   const [patientData, setPatientData] = useState(null);
//   const [billData, setBillData] = useState(null);
//   const [allPatients, setAllPatients] = useState([]);
//   const [message, setMessage] = useState("");
//   const [patient_data, set_patient_data] = useState("");
//   let obj = useContext(Ct)
//   const handleInputChange = (e) => {
//     setPatientId(e.target.value);
//   };


//   const fetchDetails = async () => {
//     try {
//       setMessage("");
//       setPatientData(null);
//       setBillData(null);
//       // console.log(obj)

//       const patientResponse = await axios.get(
//         `http://localhost:5000/get_patient_self/${patientId}`,{"headers":{"Authorization":obj.state.token}}
//       );
//       if (patientResponse.data) {
//         set_patient_data(patientResponse.data)
//         setPatientData(patientResponse.data);
//         // console.log(patientData.data)
//       } else {
//         setMessage("No patient data found.");
//       }

//       const billResponse = await axios.get(
//         `http://localhost:5000/get_bill/${patientId}`,{"headers":{"Authorization":obj.state.token}}
//       );
//       if (billResponse.data.data) {
//         setBillData(billResponse.data.data);
//         // console.log(billData.data.data)
//       } else {
//         setMessage("No billing data found.");
//       }
//     } catch (error) {
//       // setMessage("Error fetching details.");
//     }
//   };





//   const fetchAllInsuredPatients = async () => {
//     try {
//       setMessage("");
//       setAllPatients([]);

//       const response = await axios.get(`http://localhost:5000/get_insured_patient/${obj.state.company}` ,{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id,"insu_id":obj.state._id}});
//       // console.log(response.data)
//       if (response.data.length > 0) {
//         setAllPatients(response.data);
//       } else {
//       // console.log(response.data)
        
//         setMessage("No insured patients found.");

//       }
//     } catch (error) {
//       setMessage("Error fetching insured patients.");
//     }
//   };









// // Function to download details as PDF
//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.text("Patient Details", 10, 10);

//     if (patientData) {
//       doc.text(`Patient ID: ${patientData._id || "N/A"}`, 10, 100);
//       doc.text(`Name: ${patientData.name || "N/A"}`, 10, 20);
//       doc.text(`Email: ${patientData.email || "N/A"}`, 10, 30);
//       doc.text(`Phone No: ${patientData.phone_no || "N/A"}`, 10, 40);
//       doc.text(`DOB: ${patientData.dob || "N/A"}`, 10, 50);
//       doc.text(`Gender: ${patientData.gender || "N/A"}`, 10, 60);
//       doc.text(`Blood Group: ${patientData.blood_grp || "N/A"}`, 10, 70);
//       doc.text(`Address: ${patientData.address || "N/A"}`, 10, 80);
//       doc.text(`Consulting Doctor: ${patientData.consulting_dr || "N/A"}`, 10, 90);
//       doc.text(`Insurance ID: ${patientData.insurance_id || "N/A"}`, 10, 100);
//       doc.text(`Policy ID: ${patientData.policy_id || "N/A"}`, 10, 110);
//       doc.text(`Admission Date: ${patientData.admission_date || "N/A"}`, 10, 120);
//     }

//     if (billData) {
//       doc.text("Billing Details", 10, 140);
//       doc.text(`Patient ID: ${billData._id}`, 10, 150);
//       doc.text(`Appointment Date: ${new Date(billData.appointment_date).toLocaleDateString()}`, 10, 160);

//       let y = 180;
//       doc.text("Billing Entries", 10, y);
      
//       if (billData.billing_entries) {
//         billData.billing_entries.forEach((entry, index) => {
//           doc.text(`${index + 1}. ${entry.particular} - ₹${entry.amount}`, 10, y + (index + 1) * 10);
//         });

//         const totalBill = billData.billing_entries.reduce((sum, entry) => sum + entry.amount, 0);
//         doc.text(`Total Bill: ₹${totalBill}`, 10, y + (billData.billing_entries.length + 2) * 10);
//       }
//     }

//     doc.save(`Patient_Details_${patientId}.pdf`);
//   };


//   return (
//     <>

//     {console.log("ins_obj")}
//     {console.log(obj.state.company)}
//     {console.log("patient_data")}
//     {console.log(patient_data.company)}

//     <div>
//         <button onClick={fetchAllInsuredPatients} style={{"width":"35vw","marginLeft":"31%"}} >
//         Fetch All Insured Patients</button>
//       </div>

//     {allPatients.length > 0 && (
//         <div>
//         <div  className="doc-container">
//           <h2 className="doc-title">All Insured Patients</h2>
//           <table className="doc-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Phone No</th>
//                 <th>Consulting Doctor</th>
//                 <th>Patient ID</th>
//                 <th>Policy ID</th>
//                 <th>Admission Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {allPatients.map((patient, index) => (
//                 <tr key={index}>
//                   <td>{patient.name}</td>
//                   <td>{patient.phone_no}</td>
//                   <td>{patient.consulting_dr}</td>
//                   <td>{patient._id}</td>
//                   <td>{patient.policy_id}</td>
//                   <td>{patient.admission_date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         </div>
//       )}









//     <div  className="doc-container">
//       <h1 >Patient & Billing Details</h1>

//       <div>
//         <input
//           type="text"
//           placeholder="Enter Patient ID"
//           value={patientId}
//           onChange={handleInputChange}
//         />
//         <button onClick={fetchDetails} >Fetch Details</button>
//         <div style={{"height":"2vh"}}></div>
//         </div>

      

//       {message && <p style={{ color: "red" }}>{message}</p>}






//       {patientData && obj.state.company == patient_data.company && (
//         <div>
//           <h2 className="doc-title">Patient Details</h2>
//           <table className="doc-table">
//             <tbody>
//             <tr><th>Patient ID</th><td>{patientData._id}</td></tr>
//               <tr><th>Name</th><td>{patientData.name}</td></tr>
//               <tr><th>Phone No</th><td>{patientData.phone_no}</td></tr>
//               <tr><th>Company</th><td>{patientData.company}</td></tr>
//               <tr><th>Consulting Doctor</th><td>{patientData.consulting_dr}</td></tr>
//               <tr><th>Insurance ID</th><td>{patientData.insurance_id}</td></tr>
//               <tr><th>Policy ID</th><td>{patientData.policy_id}</td></tr>
//               <tr><th>Admission Date</th><td>{patientData.admission_date}</td></tr>
//             </tbody>
//           </table>
//         </div>
//       )}

//       {billData 
//       && obj.state.company == patient_data.company && (
//         <div  className="doc-container">
//           {/* {console.log(billData.billing_entries[0])} */}
//           <h2 className="doc-title">Billing Details</h2>
//           <table className="doc-table">
//             <tbody>
//               <tr><th>Patient ID</th><td>{billData._id}</td></tr>
//               <tr><th>Appointment Date</th><td>{new Date(billData.appointment_date).toLocaleDateString()}</td></tr>
//             </tbody>
//           </table>

//           <h2 className="doc-title">Billing Entries</h2>
//           {billData.billing_entries.length > 0 ? (
//             <table className="doc-table">
//               <thead>
//                 <tr>
//                   <th>Sr. No</th>
//                   <th>Particular</th>
//                   <th>Amount</th>
//                   {/* <th>Entry ID</th> */}
//                 </tr>
//               </thead>
//               <tbody>
//                 {billData.billing_entries.map((entry, index) => (
//                   <tr key={entry._id || index}>
//                     <td>{entry.sr_no}</td>
//                     <td>{entry.particular}</td>
//                     <td>{entry.amount}</td>
//                     {/* <td>{entry._id}</td> */}
//                   </tr>
//                 ))}
//                 <tr>
//                   <th colSpan="2">Total Bill</th>
//                   <th>{billData.billing_entries.reduce((sum, entry) => sum + entry.amount, 0)}</th>
//                 </tr>
//               </tbody>
//             </table>
//           ) : (
//             <p>No billing entries found.</p>
//           )}
//         </div>
//       )}
//       </div>
      



// <div>
// {/* Download Button */}
// <button onClick={downloadPDF} style={{ height:"5vh", width:"25vw", marginLeft:"36%", marginTop: "20px",paddingBottom:"10px", padding: "10px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
//         Download Details
//       </button>
// </div>





       
      



//     </>
//   );
// };
// export default Insurer_details;



import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import "./Insurer_css.css"
import { jsPDF } from 'jspdf';
import Ct from './Ct';


const Insurer_details = () => {
  const [patientId, setPatientId] = useState("");
  const [patientData, setPatientData] = useState(null);
  const [billData, setBillData] = useState(null);
  const [allPatients, setAllPatients] = useState([]);
  const [message, setMessage] = useState("");
  const [patient_data, set_patient_data] = useState("");
  let obj = useContext(Ct)
  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };


  const fetchDetails = async () => {
    try {
      setMessage("");
      setPatientData(null);
      setBillData(null);
      // console.log(obj)

      const patientResponse = await axios.get(
        `http://localhost:5000/get_patient_self/${patientId}`,{"headers":{"Authorization":obj.state.token}}
      );
      if (patientResponse.data) {
        set_patient_data(patientResponse.data)
        setPatientData(patientResponse.data);
        // console.log(patientData.data)
      } else {
        setMessage("No patient data found.");
      }

      const billResponse = await axios.get(
        `http://localhost:5000/get_bill/${patientId}`,{"headers":{"Authorization":obj.state.token}}
      );
      if (billResponse.data.data) {
        setBillData(billResponse.data.data);
        // console.log(billData.data.data)
      } else {
        setMessage("No billing data found.");
      }
    } catch (error) {
      // setMessage("Error fetching details.");
    }
  };


  


// Function to download details as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Patient Details", 10, 10);

    if (patientData) {
      doc.text(`Patient ID: ${patientData._id || "N/A"}`, 10, 100);
      doc.text(`Name: ${patientData.name || "N/A"}`, 10, 20);
      doc.text(`Email: ${patientData.email || "N/A"}`, 10, 30);
      doc.text(`Phone No: ${patientData.phone_no || "N/A"}`, 10, 40);
      doc.text(`DOB: ${patientData.dob || "N/A"}`, 10, 50);
      doc.text(`Gender: ${patientData.gender || "N/A"}`, 10, 60);
      doc.text(`Blood Group: ${patientData.blood_grp || "N/A"}`, 10, 70);
      doc.text(`Address: ${patientData.address || "N/A"}`, 10, 80);
      doc.text(`Consulting Doctor: ${patientData.consulting_dr || "N/A"}`, 10, 90);
      doc.text(`Insurance ID: ${patientData.insurance_id || "N/A"}`, 10, 100);
      doc.text(`Policy ID: ${patientData.policy_id || "N/A"}`, 10, 110);
      doc.text(`Admission Date: ${patientData.admission_date || "N/A"}`, 10, 120);
    }

    if (billData) {
      doc.text("Billing Details", 10, 140);
      doc.text(`Patient ID: ${billData._id}`, 10, 150);
      doc.text(`Appointment Date: ${new Date(billData.appointment_date).toLocaleDateString()}`, 10, 160);

      let y = 180;
      doc.text("Billing Entries", 10, y);
      
      if (billData.billing_entries) {
        billData.billing_entries.forEach((entry, index) => {
          doc.text(`${index + 1}. ${entry.particular} - ₹${entry.amount}`, 10, y + (index + 1) * 10);
        });

        const totalBill = billData.billing_entries.reduce((sum, entry) => sum + entry.amount, 0);
        doc.text(`Total Bill: ₹${totalBill}`, 10, y + (billData.billing_entries.length + 2) * 10);
      }
    }

    doc.save(`Patient_Details_${patientId}.pdf`);
  };

  const fetchAllInsuredPatients = async () => {
    try {
      setMessage("");
      setAllPatients([]);

      const response = await axios.get(
        `http://localhost:5000/get_insured_patient/${obj.state.company}`,
        {
          headers: {
            Authorization: obj.state.token,
            doct_id: obj.state._id,
            insu_id: obj.state._id,
          },
        }
      );

      if (response.data.length > 0) {
        setAllPatients(response.data);
      } else {
        setMessage("No insured patients found.");
      }
    } catch (error) {
      setMessage("Error fetching insured patients.");
    }
  };



  useEffect(() => {
    fetchAllInsuredPatients();
  }, []);

// Function to download all insured patients as PDF
const downloadAllPatientsPDF = () => {
  const doc = new jsPDF();
  doc.text("All Insured Patients", 10, 10);

  if (allPatients.length > 0) {
    let y = 20;
    allPatients.forEach((patient, index) => {
      doc.text(`${index + 1}. Name: ${patient.name || "N/A"}`, 10, y);
      doc.text(`   Phone No: ${patient.phone_no || "N/A"}`, 10, y + 10);
      doc.text(`   Consulting Doctor: ${patient.consulting_dr || "N/A"}`, 10, y + 20);
      doc.text(`   Patient ID: ${patient._id || "N/A"}`, 10, y + 30);
      doc.text(`   Policy ID: ${patient.policy_id || "N/A"}`, 10, y + 40);
      doc.text(`   Admission Date: ${patient.admission_date || "N/A"}`, 10, y + 50);
      y += 70; // Move to the next section
    });
  } else {
    doc.text("No insured patients found.", 10, 20);
  }

  doc.save("All_Insured_Patients.pdf");
};



  return (
    <>

    {console.log("ins_obj")}
    {console.log(obj.state.company)}
    {console.log("patient_data")}
    {console.log(patient_data.company)}

    {/* <div>
        <button onClick={fetchAllInsuredPatients} style={{"width":"35vw","marginLeft":"31%"}} >
        Fetch All Insured Patients</button>
      </div> */}

    {/* {allPatients.length > 0 && (
        <div className="doc-container">
        <h2 className="doc-title">All Insured Patients</h2>
        <table className="doc-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No</th>
              <th>Consulting Doctor</th>
              <th>Patient ID</th>
              <th>Policy ID</th>
              <th>Admission Date</th>
            </tr>
          </thead>
          <tbody>
            {allPatients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.phone_no}</td>
                <td>{patient.consulting_dr}</td>
                <td>{patient._id}</td>
                <td>{patient.policy_id}</td>
                <td>{patient.admission_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )} */}









    <div  className="doc-container">
      <h1 >Patient & Billing Details</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={handleInputChange}
        />
        <button onClick={fetchDetails} style={{
  height: "5vh",
  width: "25vw",
  padding: "10px 0",  // Ensures vertical centering
  background: "blue",
  color: "white",
  border: "none",
  cursor: "pointer",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",  // Centers text both vertically & horizontally
  fontSize: "1rem",
  fontWeight: "bold",
  borderRadius: "5px",  // Optional: Adds rounded corners
  transition: "background 0.3s ease",  // Optional: Smooth hover effect
}}>Fetch Details</button>
        <div style={{"height":"2vh"}}></div>
        </div>

      

      {message && <p style={{ color: "red" }}>{message}</p>}






      {patientData && obj.state.company == patient_data.company && (
        <div>
          <h2 className="doc-title">Patient Details</h2>
          <table className="doc-table">
            <tbody>
            <tr><th>Patient ID</th><td>{patientData._id}</td></tr>
              <tr><th>Name</th><td>{patientData.name}</td></tr>
              <tr><th>Phone No</th><td>{patientData.phone_no}</td></tr>
              <tr><th>Company</th><td>{patientData.company}</td></tr>
              <tr><th>Consulting Doctor</th><td>{patientData.consulting_dr}</td></tr>
              <tr><th>Insurance ID</th><td>{patientData.insurance_id}</td></tr>
              <tr><th>Policy ID</th><td>{patientData.policy_id}</td></tr>
              <tr><th>Admission Date</th><td>{patientData.admission_date}</td></tr>
            </tbody>
          </table>
        </div>
      )}

      {billData 
      && obj.state.company == patient_data.company && (
        <div  className="doc-container">
          {/* {console.log(billData.billing_entries[0])} */}
          <h2 className="doc-title">Billing Details</h2>
          <table className="doc-table">
            <tbody>
              <tr><th>Patient ID</th><td>{billData._id}</td></tr>
              <tr><th>Appointment Date</th><td>{new Date(billData.appointment_date).toLocaleDateString()}</td></tr>
            </tbody>
          </table>

          <h2 className="doc-title">Billing Entries</h2>
          {billData.billing_entries.length > 0 ? (
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Particular</th>
                  <th>Amount</th>
                  {/* <th>Entry ID</th> */}
                </tr>
              </thead>
              <tbody>
                {billData.billing_entries.map((entry, index) => (
                  <tr key={entry._id || index}>
                    <td>{entry.sr_no}</td>
                    <td>{entry.particular}</td>
                    <td>{entry.amount}</td>
                    {/* <td>{entry._id}</td> */}
                  </tr>
                ))}
                <tr>
                  <th colSpan="2">Total Bill</th>
                  <th>{billData.billing_entries.reduce((sum, entry) => sum + entry.amount, 0)}</th>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>No billing entries found.</p>
          )}
        </div>
      )}
      <div>
{/* Download Button */}
<button onClick={downloadPDF} style={{
  height: "5vh",
  width: "25vw",
  padding: "10px 0",  // Ensures vertical centering
  background: "blue",
  color: "white",
  border: "none",
  cursor: "pointer",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",  // Centers text both vertically & horizontally
  fontSize: "1rem",
  fontWeight: "bold",
  borderRadius: "5px",  // Optional: Adds rounded corners
  transition: "background 0.3s ease",  // Optional: Smooth hover effect
}}

>
        Download Details
      </button>
</div>
      </div>
      






{/* {allPatients.length > 0 && (
        <div className="doc-container">
        <h2 className="doc-title">All Insured Patients</h2>
        <table className="doc-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No</th>
              <th>Consulting Doctor</th>
              <th>Patient ID</th>
              <th>Policy ID</th>
              <th>Admission Date</th>
            </tr>
          </thead>
          <tbody>
            {allPatients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.phone_no}</td>
                <td>{patient.consulting_dr}</td>
                <td>{patient._id}</td>
                <td>{patient.policy_id}</td>
                <td>{patient.admission_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}

 */}



{allPatients.length > 0 && (
      <div className="doc-container">
        <h2 className="doc-title">All Insured Patients</h2>
        <table className="doc-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No</th>
              <th>Consulting Doctor</th>
              <th>Patient ID</th>
              <th>Policy ID</th>
              <th>Admission Date</th>
            </tr>
          </thead>
          <tbody>
            {allPatients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.phone_no}</td>
                <td>{patient.consulting_dr}</td>
                <td>{patient._id}</td>
                <td>{patient.policy_id}</td>
                <td>{patient.admission_date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Download Button for All Insured Patients */}
        <button onClick={downloadAllPatientsPDF} style={{
          height: "5vh",
          width: "25vw",
          padding: "10px 0",
          background: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1rem",
          fontWeight: "bold",
          borderRadius: "5px",
          marginTop: "10px",
        }}>
          Download All Patients
        </button>
      </div>
    )}



       
      



    </>
  );
};
export default Insurer_details;