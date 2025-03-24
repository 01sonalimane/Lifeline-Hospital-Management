import React, { useContext, useState } from 'react';
import './Register.css';
import axios from 'axios';
import Ct from './Ct';

const AddBill = () => {
  let obj= useContext(Ct)
  const [data, setData] = useState({
    _id: '',
    appointment_date: '',
    billing_entries: [{ sr_no: 1, particular: '', amount: 0 }],
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBillingChange = (index, e) => {
    const newBillingEntries = [...data.billing_entries];
    newBillingEntries[index][e.target.name] = e.target.value;
    setData({ ...data, billing_entries: newBillingEntries });
  };

  const addBillingEntry = () => {
    setData({
      ...data,
      billing_entries: [
        ...data.billing_entries,
        { sr_no: data.billing_entries.length + 1, particular: '', amount: 0 },
      ],
    });
  };

  const removeBillingEntry = (index) => {
    const newBillingEntries = data.billing_entries.filter((_, i) => i !== index);
    setData({ ...data, billing_entries: newBillingEntries });
    console.log(data)
  };

  const add = () => {
    if (data._id && data.appointment_date && data.billing_entries.length > 0) {
      axios.post('http://localhost:5000/add_bill', data, {"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id}} ).then((res) => {
        setMsg(res.data.msg);
        if (res.data.msg === 'Bill added successfully.') {
          setData({ _id: '', appointment_date: '', billing_entries: [{ sr_no: 1, particular: '', amount: 0 }] });
        }
      });
    } else {
      setMsg('All details are required');
    }
  };

  return (
    <div className='abc_con'>
      <div className='msg'>{msg}</div>
      <input type='text' placeholder='ID' name='_id' onChange={handleChange} value={data._id} />
      <input type='date' name='appointment_date' onChange={handleChange} value={data.appointment_date} />
      
      {data.billing_entries.map((entry, index) => (
        <div key={index} className='billing-entry'>
          <input
            type='text'
            placeholder='Particular'
            name='particular'
            onChange={(e) => handleBillingChange(index, e)}
            value={entry.particular}
          />
          <input
            type='number'
            placeholder='Amount'
            name='amount'
            onChange={(e) => handleBillingChange(index, e)}
            value={entry.amount}
          />
          <button onClick={() => removeBillingEntry(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addBillingEntry}>Add Billing Entry</button>
      <button onClick={add}>Send</button>
    </div>
  );
};

export default AddBill;
