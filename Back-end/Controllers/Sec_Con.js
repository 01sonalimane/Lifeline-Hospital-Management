let jwt=require("jsonwebtoken")
const { doctor_model, insurer_model } = require("../Model/Model")

let islogin=(req,res,next)=>{
    try{
            jwt.verify(req.headers.authorization,"123")
            next()
        }
    catch(err)
        {
            res.send("plz login")
        }
}

let is_doctor=async(req,res,next)=>{
    try{
      let obj=await doctor_model.findById({"_id":req.headers.doct_id})
      if(obj && obj.role=="doctor")
      {
        next()
      }
      else{
        res.send("you are not doctor")
      }
    }
    catch(err)
    {
        res.send("invalid req")
    }
}



let is_doc_or_ins = async (req, res, next) => {
    try {
        // console.log("Doctor ID:", req.headers.doct_id);
        // console.log("Insurer ID:", req.headers.insu_id);

        let obj1 = await doctor_model.findById(req.headers.doct_id);
        let obj2 = await insurer_model.findById(req.headers.insu_id);

        if ((obj1 && obj1.role === "doctor") || (obj2 && obj2.role === "insurer")) {
            next();
        } else {
            res.send("You are not a doctor or insurer");
        }
    } catch (err) {
        console.error("Error in is_doc_or_ins:", err);
        res.send("Invalid request");
    }
};

// module.exports = islogin
module.exports={islogin, is_doctor, is_doc_or_ins}