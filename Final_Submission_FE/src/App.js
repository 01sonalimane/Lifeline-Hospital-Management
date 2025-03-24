import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './component/About';
import DoctorDetail from './component/DoctorDetails';
import Services from './component/Services';
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
import AddBill from './component/AddBill';
import Hero from './component/Hero';
import HealthCare from './component/HealthCare';
import Ct from './component/Ct'
import Reg_patient from './component/Reg_patient';
import Regpatient_login from './component/Regpatient_login.';
import Logout from './component/Logout';

import Doctor from './component/Doctor';
import Doclogin from './component/Doclogin';
import Reg_insurer from './component/Reg_insurer';
import Login_insurer from './component/Login_insurer';
import Appointment from './component/Appointment';
import Patient_details from './component/Patient_details';
import Doctor_details from './component/Doctor_details';
import Insurer_detials from './component/Insurer_detials';
import Bill_patient from "./component/Bill_patient"
import Doc_Pat from './component/Doctor_Details/Doc_Pat';
import Doc_Doc from './component/Doctor_Details/Doc_Doc';
import Doc_Ins from './component/Doctor_Details/Doc_Ins';
import Doc_Queries from './component/Doctor_Details/Doc_Queries';
import Doc_Appointent from './component/Doctor_Details/Doc_Appointent';
import Doc_Bill from './component/Doctor_Details/Doc_Bill';
import DoctorInfo from "./component/DoctorInfo"

const App = () => {
// login credential
let [state,setState]=useState({"token":"","_id":"","name":"","role":""})
  let updstate=(obj)=>{
    setState({...state,...obj})
  }
  let obj={"state":state,"updstate":updstate}

  
 return (
    <BrowserRouter>
    <Ct.Provider value={obj}>
      <Navbar />
      {/* {state.token && <Logout setState={setState} />} */}
      <Routes>
        {/* these home path indicates that the the component Hero and HealthCare will only show on home if we click on other navbar component then 
        it will go to that page - gpt suggest - it we need two component on same so use these in element */}
        <Route path="/" element={<><Hero /><HealthCare /><Services/></>} />
        <Route path="/about" element={<About />} />
        <Route path="/doctor/:name" element={<DoctorDetail />} />
        <Route path="/doctor/:name" element={<DoctorInfo/>} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/addbill" element={<AddBill />} />
        {/* different 3 regestration */}
        <Route path="/reg_patient" element={<Reg_patient />} />
        <Route path="/login_patient" element={<Regpatient_login/>}/>
        <Route path="/reg_doctor" element={<Doctor/>} />
        <Route path="/login_doctor" element={<Doclogin/>} />
        <Route path="/reg_insurer" element={<Reg_insurer/>} />
        <Route path="/login_insurer" element={<Login_insurer/>} />
        <Route path="/Appointment" element={<Appointment/>} />
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/Patient_details' element={<Patient_details/>}/>
        <Route path='/Doctor_details' element={<Doctor_details/>}/>
        <Route path='/Insurer_details' element={<Insurer_detials/>}/>
        {/* <Route path='/Bill_patient' element={<Bill_patient/>}/> */}

        {/* Route to doctor_details */}
        <Route path='/Doc_Pat' element={<Doc_Pat/>}/>
        <Route path='/Doc_Doc' element={<Doc_Doc/>}/>
        <Route path='/Doc_Ins' element={<Doc_Ins/>}/>
        <Route path='/Doc_Bill' element={<Doc_Bill/>}/>
        <Route path='/Doc_Queries' element={<Doc_Queries/>}/>
        <Route path='/Doc_Appointment' element={<Doc_Appointent/>}/>  
      </Routes>
      <Footer />
      </Ct.Provider>
    </BrowserRouter>
  );
};

export default App;

