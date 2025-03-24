let express = require("express");
const { login_patient, reg_patient, get_patient, get_patient_self, get_insured_patient } = require("../Controllers/Patient_Controllers");
const { login_doctor, reg_doctor, get_doctor } = require("../Controllers/Doctor_Controllers");
const { login_insurer, reg_insurer, get_insurer } = require("../Controllers/Insurer_Controllers");
const { add_bill, get_bill, get_all_bill } = require("../Controllers/Billing_Controllers");
const { get_queries, add_contact_us, reply_query } = require("../Controllers/Contact_Us_Controller");
const { get_appointment, book_appointment } = require("../Controllers/Appointment_Booking_Controller");
const { islogin, is_doctor, is_doc_or_ins } = require("../Controllers/Sec_Con");

let rt = express.Router();

// Patient Routes
rt.post("/reg_patient", reg_patient);
rt.post("/login_patient", login_patient);
rt.get("/get_patient",islogin,is_doc_or_ins, get_patient);

rt.get("/get_patient_self/:_id",islogin, get_patient_self)

rt.get("/get_insured_patient/:com",get_insured_patient)



// Doctor Routes
rt.post("/reg_doctor", reg_doctor);
rt.post("/login_doctor", login_doctor);
rt.get("/get_doctor",islogin, is_doctor, get_doctor);


// Insurance Routes
rt.post("/reg_insurer", reg_insurer);
rt.post("/login_insurer", login_insurer);
rt.get("/get_insurer",islogin, is_doctor, get_insurer);


// Billing Routes
rt.post("/add_bill",islogin, is_doctor, add_bill);
rt.get("/get_bill/:_id",islogin, get_bill);  //in header give _id of both
rt.get("/get_all_bill",islogin, is_doc_or_ins, get_all_bill)


//Contact_us Routes
rt.post("/add_contact_us", add_contact_us)
rt.get("/get_queries",islogin,is_doctor, get_queries)

rt.post("/reply_query",islogin,is_doctor,reply_query)



//Appointment Routes
rt.post("/book_appointment",islogin, book_appointment)
rt.get("/get_appointment",islogin, is_doctor ,get_appointment)

module.exports = rt;