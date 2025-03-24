const { v4 } = require("uuid");
const { appointment_model } = require("../Model/Model");
const { sendMail } = require("./sendmail");
let book_appointment = async (req, res) => {
    try {
        const { patient_id, patient_name,email, doctor_name, time_slot, date } = req.body;
        // Check for missing fields
        if (!patient_id || !patient_name || !doctor_name || !time_slot || !date) {
            return res.json({ "msg": "All fields are required!" });
        }
        // Check if the doctor is available in the selected time slot
        let existingAppointment = await appointment_model.findOne({
            doctor_name,
            time_slot,
            date
        });

        if (existingAppointment) {
            return res.json({ "msg": "Time slot already booked! Choose another slot." });
        }

        // Book appointment
        let newAppointment = new appointment_model({
            _id: v4(),
            patient_id,
            patient_name,
            email,
            doctor_name,
            time_slot,
            date
        });

        await newAppointment.save();
        // sendMail(email,"Your appointment booked successfully",`Hello, Sir/Mam: ${patient_name} your appointment book with ${doctor_name} and slot time is ${time_slot} . Thank you so Much Have a nice day`)
        
        sendMail(email, "Appointment Confirmation",  
            `Dear ${patient_name},  
        
            Your appointment has been successfully booked with ${doctor_name} at ${time_slot}.  
        
            If you have any questions or need further assistance, feel free to reach out.  
        
            Thank you for choosing our services. We look forward to serving you.  
        
            Best regards,  
            ${doctor_name}
            Life Line Hospital`  
        );
        
        res.json({ "msg": "Appointment booked successfully!" });
    } catch (err) { 
        console.error("Error in booking appointment:", err);
        res.json({ "msg": "Error in booking appointment!" });
    }
};

let get_appointment = async(req,res) =>{
    try{
        let data = await appointment_model.find()
        res.json({"data":data})
    }
    catch(err){
        res.json({"msg":"Error in fetching the appointments"})
    }
}



module.exports = { book_appointment ,get_appointment };








