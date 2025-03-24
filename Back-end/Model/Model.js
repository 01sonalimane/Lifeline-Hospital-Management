let mongoose = require("mongoose");

// Patient Schema
let patientsch = new mongoose.Schema({
    "_id": { type: String, required: true }, // Patient ID
    "name": { type: String, required: true },
    "email": { type: String, required: true, unique: true },
    "password": { type: String, required: true }, // Hash before storing
    "phone_no": { type: String, required: true }, // Changed to String
    "dob": { type: Date, required: true },
    "gender": { type: String, required: true },
    "blood_grp": { type: String },
    "address": { type: String, required: true },
    "consulting_dr": { type: String, required: true },
    "company":String,
    "insurance_id": { type: String },
    "policy_id": { type: String },
    "admission_date": { type: Date },
    "role":{type:String, default:"patient"}

});

// Doctor Schema
let doctorsch = new mongoose.Schema({
    "_id": { type: String, required: true },
    "name": { type: String, required: true },
    "specialization": { type: String, required: true },
    "department": { type: String, required: true },
    "password": { type: String, required: true }, 
    "phone_no": { type: String, required: true }, 
    "address": { type: String, required: true },
    "role":{type:String, default:"doctor"},
    "approval":{
        type:Boolean,
        default:false
    }
});

// Insurer Schema
let insurersch = new mongoose.Schema({
    "_id": { type: String, required: true },
    "name": { type: String },
    "password": { type: String, required: true }, // Hash before storing
    "company": { type: String },
    "role":{type:String, default:"insurer"},
    "approval":{
        type:Boolean,
        default:false
    }
});

// Billing Schema
const billsch = new mongoose.Schema({
    "_id": { 
        type: String, 
        required: true, 
        ref: "patient"  // Reference to Patient ID
    },
    "appointment_date": { type: Date, required: true },
    "billing_entries": [{
        "sr_no": { type: Number, required: true },
        "particular": { type: String, required: true },
        "amount": { type: Number, required: true }
    }]
});

//Contact_Us Schema
let  contactusschm = new mongoose.Schema({
    "_id": String,
    "name":String,
    "email":String,
    "phone_no":String,
    "message":String,
    "reply": { type: String, default: "" }
})


let appointmentSchema = new mongoose.Schema({
    "_id": String,  // UUID for unique appointment ID   
    "patient_id": { type: String, required: true, ref: "patient" },
    "patient_name": { type: String, required: true },
    "doctor_name": { type: String, required: true },
    "time_slot": { type: String, required: true }, // e.g., "10:00 AM - 10:30 AM"
    "date": { type: String, required: true }  // e.g., "2025-02-07"
});


// // Models
// let patient_model = mongoose.model("patient", patientsch);
// let doctor_model = mongoose.model("doctor", doctorsch);
// let insurer_model = mongoose.model("insurer", insurersch);
// let bill_model = mongoose.model("bill", billsch); // Changed from "hospital" to "bill"
// let contactus_model = mongoose.model("contactus", contactusschm)
// let appointment_model = mongoose.model("appointment", appointmentSchema);


// Prevent Model Overwriting
let patient_model = mongoose.models.patient || mongoose.model("patient", patientsch);
let doctor_model = mongoose.models.doctor || mongoose.model("doctor", doctorsch);
let insurer_model = mongoose.models.insurer || mongoose.model("insurer", insurersch);
let bill_model = mongoose.models.bill || mongoose.model("bill", billsch);
let contactus_model = mongoose.models.contactus || mongoose.model("contactus", contactusschm);
let appointment_model = mongoose.models.appointment || mongoose.model("appointment", appointmentSchema);


module.exports = { patient_model, doctor_model, insurer_model, bill_model, contactus_model, appointment_model };