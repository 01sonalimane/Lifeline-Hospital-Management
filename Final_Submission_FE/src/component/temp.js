import React, { useEffect, useState } from 'react'
import './Register.css'
import axios from 'axios'


const AddBill = () => {
  let [data, setData] = useState({"_id":"","appointment_date":"", "billing_entries":{"sr_no":1,"particular":"","amount":0}})
  let [msg,setMsg] = useState("")
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let add=()=>{
        if(data._id!=""&&data.appointment_date!=""&&data.billing_entries!="")
        {
          axios.post("http://localhost:5000/add_bill",data).then((res)=>{
          setMsg(res.data.msg)

          if(res.data.msg=="Query added successfully")
              {
              setData({"_id":"","appointment_date":"", "billing_entries":{"sr_no":1,"particular":"","amount":0}})
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
      <input type='text' placeholder="id" name="_id" onChange={fun} value={data._id}/>
      <input type='date'  name='appointment_date' onChange={fun} value={data.appointment_date}/>
      {/* //input of the billing_entries */}
      <button onClick={add} >Send</button>
    </div>
    
  )
}


export default AddBill
