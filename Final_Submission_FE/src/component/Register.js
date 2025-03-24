// import axios from 'axios'
// import React, { useState } from 'react'
// import './Register.css'
// import {useNavigate} from 'react-router-dom'
// const Register= () => {
//     let [data,setData]=useState({"_id":"","name":"","email":"","password":"","phone_no":"","gender":"","dob":"","blood_grp":"",
//         "consulting_dr":"","address":"","insurance_id":"","policy_id":"","admission_date":""})
//     let [msg,setMsg]=useState("")
//     let navigate=useNavigate()
//     let fun=(e)=>{
//         setData({...data,[e.target.name]:e.target.value})
//     }
//     let add=()=>{
//         if(data._id!=""&&data.name!=""&&data.password!=""&&data.phone_no!=""&&data.gender!=""&&data.dob!=""&&data.consulting_dr!=""&&data.email!=""
//             &&data.admission_date!=""&&data.address!=""&&data.insurance_id!=""&&data.blood_grp!=""&&data.policy_id!="")
//         {
// axios.post("http://localhost:5000/reg_patient",data).then((res)=>{
//     setMsg(res.data.msg)
//    if(res.data.msg=="register successfully")
//    {
//     navigate("/login")
//    }
//         })
//         }
//         else{
//             setMsg("all details are require")
//         }
//     }
//   return (
//     <div className='con'>
//         <div className='form'>
//             <div className='msg'>{msg}</div>
//             <input type='text' placeholder='Enter Id' name="_id" onChange={fun} value={data._id}/>
//             <input type='text' placeholder='Enter Name' name="name" onChange={fun} value={data.name}/>
//             <input type='text' placeholder='Enter Phne No.' name="phone_no" onChange={fun} value={data.phone_no}/>
//             <input type='text' placeholder='Enter Gender' name="gender" onChange={fun} value={data.gender}/>
//             <input type='text' placeholder='Enter DOB' name="dob" onChange={fun} value={data.dob}/>
//             <input type='text' placeholder='Enter consulting doctor' name="consulting_dr" onChange={fun} value={data.consulting_dr}/>
//             <input type='text' placeholder='Enter BloodGroup' name="blood_grp" onChange={fun} value={data.blood_grp}/>
//             <input type='text' placeholder='Attach Email' name="email" onChange={fun} value={data.email}/>
//             <input type='text' placeholder='Enter Address' name="address" onChange={fun} value={data.address}/>
//             <input type='text' placeholder='Enter Insurance Id' name="insurance_id" onChange={fun} value={data.insurance_id}/>
//             <input type='text' placeholder='Enter Policy_id' name="policy_id" onChange={fun} vaule={data.policy_id}/>
//             <input type='text' placeholder='Enter your admission_date' name="admission_date" onChange={fun} value={data.admission_date}/>
//             <input type='password' placeholder='Enter password' name="password" onChange={fun} value={data.password}/>

//             <button onClick={add}>Register</button>
//         </div>
//     </div>
//   )
// }
// export default Register


import React from "react";
import { useNavigate } from "react-router-dom";

const RegistrationSelection = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="register-page">
    <div className="registration-container">
      <h1 className="text-center text-2xl font-bold mb-8">Select Registration Type</h1>
      <div className="card-grid">
        <div className="card" onClick={() => handleNavigation("/reg_patient")}>
          <h2>Patient Registration</h2>
          <p>Register as a patient to manage your treatments and appointments.</p>
        </div>

        <div className="card" onClick={() => handleNavigation("/reg_doctor")}>
          <h2>Doctor Registration</h2>
          <p>Register as a doctor to consult and assist patients.</p>
        </div>

        <div className="card" onClick={() => handleNavigation("/reg_insurer")}>
          <h2>Insurer Registration</h2>
          <p>Register as an insurer to manage health policies and claims.</p>
        </div>
        </div>
    </div>

    </div>
  );
};

export default RegistrationSelection;
