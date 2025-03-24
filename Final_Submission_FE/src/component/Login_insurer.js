import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ct from './Ct';
import './Register.css'

const Login_insurer = () => {
  const [data, setData] = useState({ "_id": "", "password": "" });
  const [msg, setMsg] = useState("");
  const obj = useContext(Ct);
  const navigate = useNavigate();

  const fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let login=()=>{
    axios.post('http://localhost:5000/login_insurer', data).then((res)=>{
      if(res.data.token!=undefined)
      {
        obj.updstate(res.data)
        navigate('/Insurer_details')
      }
      else{
          setMsg(res.data.msg);
          setTimeout(() => {
            navigate('/Register');
          }, 2000);
      }
    })
  }

  return (
    <div className='con'>
      <div className='form'>
        <div className='msg'>{msg}</div>
       
        <input
          type='text'
          placeholder='Enter Email'
          name="_id"
          value={data._id}
          onChange={fun}
        />
        <input
          type='password'
          placeholder='Enter Password'
          name="password"
          value={data.password}
          onChange={fun}
        />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
};

export default Login_insurer;
