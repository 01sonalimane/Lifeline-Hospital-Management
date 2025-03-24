import axios from 'axios'
import React, { useState } from 'react'
import './Register.css'
import {useNavigate} from 'react-router-dom'
const Reg_patient= () => {
    let [data,setData]=useState({"_id":"","name":"","email":"","password":"","phone_no":"","gender":"","dob":"","blood_grp":"","consulting_dr":"","address":"","insurance_id":"","policy_id":"","company":"","admission_date":""})
    let [msg,setMsg]=useState("")
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        if(data._id!=""&&data.name!=""&&data.password!=""&&data.phone_no!=""&&data.dob!=""&&data.email!=""&&data.address!=""&&data.insurance_id!=""&&data.policy_id!=""&&data.company!="")
        {
axios.post("http://localhost:5000/reg_patient",data).then((res)=>{
    setMsg(res.data.msg)
   if(res.data.msg=="Account Created Successfully...")
   {
    navigate("/login")
   }
        })
        }
        else{
            setMsg("all details are require")
        }
    }
  return (
    <div className='con'>
        <div className='form'>
            <div className='msg'>{msg}</div>
            <input type='text' placeholder='Enter Id' name="_id" onChange={fun} value={data._id}/>
            <input type='text' placeholder='Enter Name' name="name" onChange={fun} value={data.name}/>
            <input type='text' placeholder='Enter Phne No.' name="phone_no" onChange={fun} value={data.phone_no}/>
            {/* <input type='text' placeholder='Enter Gender' name="gender" onChange={fun} value={data.gender}/> */}
            <select name="gender" onChange={fun} value={data.gender}>
          <option value="">Select Gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
            Enter DOB <input type='date' placeholder='Enter DOB' name="dob" onChange={fun} value={data.dob}/>
            {/* <input type='text' placeholder='Enter consulting doctor' name="consulting_dr" onChange={fun} value={data.consulting_dr}/> */}
            {/* <input type='text' placeholder='Enter BloodGroup' name="blood_grp" onChange={fun} value={data.blood_grp}/> */}
            <select name="blood_grp" onChange={fun} value={data.blood_grp}>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
            <input type='text' placeholder='Enter Email' name="email" onChange={fun} value={data.email}/>
            <select name="consulting_dr" onChange={fun} value={data.consulting_dr}>
          <option value="">Select Consulting Doctor</option>
          <option value="Dr. Richa Fersk">Dr. Richa Fersk</option>
          <option value="Dr. Jane Smith">Dr. Jane Smith</option>
          <option value="Dr. Emily Clark">Dr. Emily Clark</option>
          <option value="Dr. John Doe">Dr. John Doe</option>
          <option value="Dr. Ava Rodriguez">Dr. Ava Rodriguez</option>
          <option value="Dr. David Chen">Dr. David Chen</option>
          <option value="Dr. Sophia Lee">Dr. Sophia Lee</option>
          <option value="Dr. Wilion Darkus">Dr. Wilion Darkus</option>
          <option value="Dr. Alice Gaurd">Dr. Alice Gaurd</option>
          <option value="Dr. Mia Garcia">Dr. Mia Garcia</option>
          <option value="Dr. Ethan Wilson">Dr. Ethan Wilson</option>
          <option value="Dr. Isabella Davis">Dr. Isabella Davis</option>
          <option value="Dr. Michael Brown">Dr. Michael Brown</option>
          <option value="Dr. Liam Jackson">Dr. Liam Jackson</option>
          <option value="Dr. Charlotte Thomas">Dr. Charlotte Thomas</option>
          <option value="Dr. Noah Anderson">Dr. Noah Anderson</option>
        </select>
            <input type='text' placeholder='Enter Address' name="address" onChange={fun} value={data.address}/>
            <input type='text' placeholder='Enter Insurance Id' name="insurance_id" onChange={fun} value={data.insurance_id}/>
            <input type='text' placeholder='Enter Policy_id' name="policy_id" onChange={fun} value={data.policy_id}/>
            {/* <input type='text' placeholder='Enter company' name="company" onChange={fun} value={data.company}/> */}
            
            <select name="company" onChange={fun} value={data.company}>
              <option value="">Select Insurance Company</option>
              <option value="LIC" >LIC</option>
              <option value="HDFC Ergo">HDFC_Ergo</option>
              <option value="ICICI Lombard">ICICI_Lombard</option>
              <option value="Bajaj Allianz">Bajaj_Allianz</option>
              <option value="Star Health">Star_Health</option>
              <option value="NA">NA</option>
           </select>
            Admission_Date: <input type='date' placeholder='Enter your admission_date' name="admission_date" onChange={fun} value={data.admission_date}/>
            <input type='password' placeholder='Enter password' name="password" onChange={fun} value={data.password}/>
            <button onClick={add}>Register</button>
        </div>
    </div>
  )
}
export default Reg_patient