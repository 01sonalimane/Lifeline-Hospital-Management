import React, { useEffect, useState } from 'react'
import './Contact.css'
import axios from 'axios'
const Contact = () => {
  let [data, setData] = useState({"name":"", "email":"", "phone_no":"", "message":""})
  let [msg,setMsg] = useState("")
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        if(data.name!=""&&data.email!=""&&data.phone_no!=""&&data.message!="")
        {
          axios.post("http://localhost:5000/add_contact_us",data).then((res)=>{
          setMsg(res.data.msg)

          if(res.data.msg=="Query added successfully")
              {
              setData({"name":"", "email":"", "phone_no":"", "message":""})
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
      <input type='text' placeholder='Enter name' name="name" onChange={fun} value={data.name}/>
      <input type='text' placeholder='Enter Email' name='email' onChange={fun} value={data.email}/>
      <input type='text' placeholder='Enter phone no.' name='phone_no' onChange={fun} value={data.phone_no}/>
      <textarea type='text' placeholder='Message' name='message' onChange={fun} value={data.message}></textarea>
      {/* <input type='text' placeholder='Message' name='message' onChange={fun} value={data.message}/> */}
      <button onClick={add} >Send</button>
    </div>
    
  )
}


export default Contact