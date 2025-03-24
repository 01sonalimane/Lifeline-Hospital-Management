import axios from 'axios'
import React, { useState } from 'react'
import './Register.css'
import Doclogin from './Doclogin'

import {useNavigate} from 'react-router-dom'
// console.log("hello")
const Doctor= () => {
    let [data,setData]=useState({"_id":"","name":"","password":"","phone_no":"","specialization":"","department":""
        ,"address":""})
    let [msg,setMsg]=useState("")
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        if(data._id!=""&&data.name!=""&&data.password!=""&&data.phone_no!=""&&data.specialization!=""&&data.department!=""
            &&data.address!="")
        {
axios.post("http://localhost:5000/reg_doctor",data).then((res)=>{
    setMsg(res.data.msg)
   if(res.data.msg=="Account Created Successfully...")
   {
    setTimeout(setMsg("Registered Sucessfully!"),5000)
    navigate("/login")
    setMsg("Registered Sucessfully!")
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
            <input type='password' placeholder='Enter password' name="password" onChange={fun} value={data.password}/>
            {/* <input type='text' placeholder='Enter specialization' name="specialization" onChange={fun} value={data.specialization}/> */}
{/* Specialization Dropdown */}
<select name="specialization" onChange={fun} value={data.specialization}>
          <option value="">Select Specialization</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Psychiatrist">Psychiatrist</option>
          <option value="Dermatologist">Dermatologist</option>          
          <option value="Gastroenterologist">Gastroenterologist</option>
          <option value="Ophthalologist">Ophthalologist</option>
          <option value="Urologist">Urologist</option>          
          <option value="Endocrinologist">Endocrinologist</option>
          <option value="Pulmonologist">Pulmonologist</option>
          <option value="Rheumatologist">Rheumatologist</option>
          <option value="Nephrologist">Nephrologist</option>
          <option value="Hematologist">Hematologist</option>
          <option value="Oncologist">Oncologist</option>
          <option value="Pediatrics">Pediatrics</option>

          <option value="General Physician">General Physician</option>
        </select>
            {/* <input type='text' placeholder='Enter department' name="department" onChange={fun} value={data.department}/> */}
            <input type='text' placeholder='Enter address' name="address" onChange={fun} value={data.address}/>

            <select name="department" onChange={fun} value={data.department}>
            <option value="">Select Department</option>
          <option value="Cardiologist">Cardiologist Department </option>
          <option value="Neurologist">Neurologist Department</option>
          <option value="Orthopedic">Orthopedic Department</option>
          <option value="Gynecologist">Gynecologist Department</option>
          <option value="Psychiatrist">Psychiatrist Department</option>
          <option value="Dermatologist">Dermatologist Department</option>          
          <option value="Gastroenterologist">Gastroenterologist Department</option>
          <option value="Ophthalologist">Ophthalologist Department</option>
          <option value="Urologist">Urologist Department</option>          
          <option value="Endocrinologist">Endocrinologist Department</option>
          <option value="Pulmonologist">Pulmonologist Department</option>
          <option value="Rheumatologist">Rheumatologist Department</option>
          <option value="Nephrologist">Nephrologist Department</option>
          <option value="Hematologist">Hematologist Department</option>
          <option value="Oncologist">Oncologist Department</option>
          <option value="Pediatrics Department">Pediatrics Department</option>
        </select>
            {/* <input type='text' placeholder='Enter role' name="role" onChange={fun} value={data.role}/> */}
            <button onClick={add}>Register</button>
        </div>
    </div>
  )
}
export default Doctor




