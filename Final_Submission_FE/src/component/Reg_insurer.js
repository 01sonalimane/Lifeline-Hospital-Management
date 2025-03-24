import axios from 'axios'
import React, { useState } from 'react'
import './Register.css'

import {useNavigate} from 'react-router-dom'

const Reg_insurer= () => {
    let [data,setData]=useState({"_id":"","name":"","password":"","company":""})
    let [msg,setMsg]=useState("")
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        if(data._id!=""&&data.name!=""&&data.password!="")
        {
            axios.post("http://localhost:5000/reg_insurer",data).then((res)=>{
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
            {/* <input type='text' placeholder='Enter Company' name="company" onChange={fun} value={data.company}/> */}
            <select name="company" onChange={fun} value={data.company}>
          <option value="">Select Insurance Company</option>
          <option value="LIC" >LIC</option>
          <option value="HDFC Ergo">HDFC Ergo</option>
          <option value="ICICI Lombard">ICICI Lombard</option>
          <option value="Bajaj Allianz">Bajaj Allianz</option>
          <option value="Star Health">Star Health</option>
        </select>
            <input type='password' placeholder='Enter password' name="password" onChange={fun} value={data.password}/>
            <button onClick={add}>Register</button>
        </div>
    </div>
  )
}
export default Reg_insurer




