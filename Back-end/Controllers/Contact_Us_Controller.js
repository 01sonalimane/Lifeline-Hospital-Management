// let {v4}=require("uuid")
// const { contactus_model } = require("../Model/Model")


// let add_contact_us = async(req,res)=>{
//     try{
//         let data = new contactus_model({...req.body, "_id":v4()})
//         await data.save()
//         res.json({"msg":"Query added successfully"})
//     }
//     catch(err){
//         res.json({"msg":"error in sending the query..."})
//     }
// }


// let get_queries = async(req,res)=>{
//     try{
//         let data = await contactus_model.find()
//         res.json({"data":data})
//     }
//     catch(err){
//         res.json({"msg":"error in getting the query..."})
//     }
// }

// // New function to handle replies
// let reply_query = async (req, res) => {
//     try {
//         const { _id, reply } = req.body;
//         await contactus_model.updateOne({ _id }, { $set: { reply } });
//         res.json({ "msg": "Reply added successfully" });
//     } catch (err) {
//         res.json({ "msg": "Error in replying to the query..." });
//     }
// };


// module.exports = {add_contact_us, get_queries,reply_query}



let {v4}=require("uuid")
const { contactus_model } = require("../Model/Model")
const { sendMail } = require("./sendmail")


let add_contact_us = async(req,res)=>{
    try{
        let data = new contactus_model({...req.body, "_id":v4()})
        await data.save()
        res.json({"msg":"Query added successfully"})
    }
    catch(err){
        res.json({"msg":"error in sending the query..."})
    }
}


let get_queries = async(req,res)=>{
    try{
        let data = await contactus_model.find()
        res.json({"data":data})
    }
    catch(err){
        res.json({"msg":"error in getting the query..."})
    }
}

// New function to handle replies
let reply_query = async (req, res) => {
    try {
        const { _id, reply } = req.body;

        // Find the specific query by ID
        let data = await contactus_model.findOne({ _id });

        if (!data) {
            return res.json({ "msg": "Query not found" });
        }

        // Update the reply field
        await contactus_model.updateOne({ _id }, { $set: { reply } });

        // Send email to the person who asked the question
        let semail = data.email;
        await sendMail(semail, "Reply to Your Query", reply);

        res.json({ "msg": "Reply sent successfully" });
    } catch (err) {
        console.error(err);
        res.json({ "msg": "Error in replying to the query..." });
    }
};


module.exports = {add_contact_us, get_queries,reply_query}