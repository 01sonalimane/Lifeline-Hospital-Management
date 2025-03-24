// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import './Doc_Pat.css'; 
// import Ct from '../Ct';
// const Doc_Pat = () => {
//   const [patients, setPatients] = useState([]);
//   const [message, setMessage] = useState("");
//   let obj = useContext(Ct)
//   useEffect(() => {
//     fetchPatients();
//   }, []);

//   const fetchPatients = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/get_patient",{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id,"insu_id":obj.state._id}});
//       if (res.data.length > 0) {
//         setPatients(res.data);
//         console.log(res.data)
//       } else {
//         setMessage("No patient data found.");
//       }
//     } catch (error) {
//       setMessage("Error fetching patient data.");
//     }
//   };

//   return (
//     <div className="pat-container">
//       <h1  className="pat-title">All Patient Details</h1>

//       {/* Display message if no data */}
//       {message && <p className="error-message" >{message}</p>}

//       {/* Patient Table */}
//       {patients.length > 0 && (
//         <table className="pat-table">
//           <thead>
//             <tr>
              // <th>Sr.no</th>
              // <th>Name</th>
              // <th>Phone No</th>
              // <th>Email</th>
              // <th>Blood Group</th>
              // <th>Insurance Company</th>
              // <th>Consulting Doctor</th>
              // <th>Insurance ID</th>
              // <th>Policy ID</th>
              // <th>Admission Date</th>
//             </tr>
//           </thead>
//           <tbody>
//           {patients.map((patient, index) => (
//           <tr key={index}>
//                 <td>{index + 1}</td> {/* Serial Number Column */}
//                 <td>{patient.name}</td>
//                 <td>{patient.phone_no}</td>
//                 <td>{patient.email}</td>
//                 <td>{patient.blood_grp}</td>
//                 <td>{patient.company}</td>
//                 <td>{patient.consulting_dr}</td>
//                 <td>{patient.insurance_id}</td>
//                 <td>{patient.policy_id}</td>
//                 <td>{patient.admission_date.slice(0,10)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Doc_Pat;



import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Doc_Pat.css'; 
import Ct from '../Ct';

const Doc_Pat = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [filters, setFilters] = useState({
    name: '',
    phone_no: '',
    email: '',
    blood_grp: '',
    company: '',
    consulting_dr: '',
    insurance_id: '',
    policy_id: '',
    admission_date: ''
  });
  const [message, setMessage] = useState("");
  let obj = useContext(Ct);

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, patients]);

  const fetchPatients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/get_patient", {
        headers: {
          Authorization: obj.state.token,
          doct_id: obj.state._id,
          insu_id: obj.state._id
        }
      });
      if (res.data.length > 0) {
        setPatients(res.data);
        setFilteredPatients(res.data);
      } else {
        setMessage("No patient data found.");
      }
    } catch (error) {
      setMessage("Error fetching patient data.");
    }
  };

  const handleFilterChange = (e, key) => {
    setFilters({ ...filters, [key]: e.target.value });
  };

  const applyFilters = () => {
    const filteredData = patients.filter(patient =>
      Object.keys(filters).every(key =>
        patient[key]?.toString().toLowerCase().includes(filters[key].toLowerCase())
      )
    );
    setFilteredPatients(filteredData);
  };

  return (
    <div className="pat-container" style={{"padding":"2px"}}>
      <h1 className="pat-title">All Patient Details</h1>
      {message && <p className="error-message">{message}</p>}
      {patients.length > 0 && (
        <table className="pat-table">
          <thead>
            <tr>
            <th>Sr.no</th>
              <th>Name</th>
              <th>Phone No</th>
              <th>Email</th>
              <th>Blood Group</th>
              <th>Insurance Company</th>
              <th>Consulting Doctor</th>
              <th>Insurance ID</th>
              <th>Policy ID</th>
              <th>Admission Date</th>
              </tr>
              <tr>
              <th>Search</th>
              <th><input placeholder="Name" onChange={(e) => handleFilterChange(e, 'name')} /></th>
              <th><input placeholder="Phone No" onChange={(e) => handleFilterChange(e, 'phone_no')} /></th>
              <th><input placeholder="Email" onChange={(e) => handleFilterChange(e, 'email')} /></th>
              <th><input placeholder="Blood Group" onChange={(e) => handleFilterChange(e, 'blood_grp')} /></th>
              <th><input placeholder="Insurance Company" onChange={(e) => handleFilterChange(e, 'company')} /></th>
              <th><input placeholder="Consulting Doctor" onChange={(e) => handleFilterChange(e, 'consulting_dr')} /></th>
              <th><input placeholder="Insurance ID" onChange={(e) => handleFilterChange(e, 'insurance_id')} /></th>
              <th><input placeholder="Policy ID" onChange={(e) => handleFilterChange(e, 'policy_id')} /></th>
              <th><input placeholder="Admission Date" onChange={(e) => handleFilterChange(e, 'admission_date')} /></th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>{patient.phone_no}</td>
                <td>{patient.email}</td>
                <td>{patient.blood_grp}</td>
                <td>{patient.company}</td>
                <td>{patient.consulting_dr}</td>
                <td>{patient.insurance_id}</td>
                <td>{patient.policy_id}</td>
                <td>{patient.admission_date.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Doc_Pat;