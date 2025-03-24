const { patient_model, bill_model } = require("../Model/Model");

let add_bill = async (req, res) => {
    try {
        let obj = await patient_model.findById(req.body._id);
        if (!obj) {
            return res.json({ "msg": "Patient does not exist." });
        }

        let bill = await bill_model.findById(req.body._id);
        if (!bill) {
            let newBill = new bill_model({
                _id: req.body._id,
                appointment_date: req.body.appointment_date,
                billing_entries: req.body.billing_entries
            });
            await newBill.save();
            res.json({ "msg": "Bill added successfully." });
        }
        else {
            bill.billing_entries.push(...req.body.billing_entries);
            await bill.save();
            res.json({ "msg": "Bill updated successfully." });
        }
    } catch (err) {
        res.json({ "msg": "Error in adding bill." });
    }
};

//get req /get_bill/:_id //patient id

let get_bill = async (req, res) => {
    try {
        let data = await bill_model.findById(req.params._id);
        if (!data) {
            return res.json({ "msg": "No bill found for this patient." });
        }
        res.json({ "data": data });
    } catch (err) {
        res.json({ "msg": "Error in fetching bill." });
    }
};


let get_all_bill = async (req, res) => {
    try {
        let data = await bill_model.find();
        if (!data) {
            return res.json({ "msg": "No bill found." });
        }
        res.json({ "data": data });
    } catch (err) {
        res.json({ "msg": "Error in fetching bill." });
    }
};


module.exports = {add_bill, get_bill, get_all_bill}