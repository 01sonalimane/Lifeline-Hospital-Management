import React, { useContext, useEffect, useState } from 'react'
import './Register.css'
import axios from 'axios'
import Ct from '../component/Ct'
const Appointment = () => {
  let [data, setData] = useState({"patient_id":"", "patient_name":"","email":"", "doctor_name":"", "time_slot":"","date":""})
  let [msg,setMsg] = useState("")
  let obj = useContext(Ct)
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        if(data.patient_id!=""&&data.patient_name!=""&&data.doctor_name!=""&&data.time_slot!=""&&data.date!="")
        {
          axios.post("http://localhost:5000/book_appointment",data,{headers:{"Authorization":obj.state.token}}).then((res)=>{
          setMsg(res.data.msg)

          if(res.data.msg=="Appointment booked successfully!")
              {
              setData({"patient_id":"", "patient_name":"", "email":"","doctor_name":"", "time_slot":"","date":""})
              }
                  })
          }
        else{
              setMsg("all details are require")
        }
        }

  return (

    <div className='abc_con'>
      <div className='msg'>{msg}</div>
      <input type='text' placeholder='Enter patient_id' name="patient_id" onChange={fun} value={data.patient_id}/>
      <input type='text' placeholder='Enter patient_name' name='patient_name' onChange={fun} value={data.patient_name}/>
      <input type='text' placeholder='Enter email' name='email' onChange={fun} value={data.email}/>
      <select name="doctor_name" onChange={fun} value={data.doctor_name}>
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
      <input type='date' placeholder='date' name='date' onChange={fun} value={data.date}/>
      <select type='text' placeholder='time_slot' name='time_slot' onChange={fun} value={data.time_slot}>
      <option value="">Select Time Slot</option>
          <option value="10:00am -10:20am">10:00am -10:20am</option>
          <option value="10:20am -10:40am">10:20am -10:40am</option>
          <option value="10:40am -11:00am">10:40am -11:00am</option>
          <option value="11:00am -11:20am">11:00am -11:20am</option>
          <option value="11:20am -11:40am">11:20am -11:40am</option>
          <option value="11:40am -12:00pm">11:40am -12:00pm</option>
          <option value="12:00pm -12:20pm">12:00pm -12:20pm</option>
          <option value="12:20pm -12:40pm">12:20pm -12:40pm</option>
          <option value="12:40pm -01:00pm">12:40am -01:00pm</option>
          <option value="01:00pm -01:20pm">01:00pm -01:20pm</option>
          <option value="01:20pm -01:40pm">01:20pm -01:40pm</option>
          <option value="01:40pm -02:00pm">01:40am -02:00pm</option>
      </select>


      <button onClick={add} >Send</button>
    </div>
    
  )
}


export default Appointment


//  FE 

