let bcrypt=require("bcrypt")
let jwt = require("jsonwebtoken")
const { patient_model } = require("../Model/Model")

let reg_patient = async(req, res)=>{
    try{
        let obj = await patient_model.findById({"_id":req.body._id})
        if(obj){
            //if acc already exist display the msg
            res.json({"msg":"Account already exist.."})
        }
        else{
            //if not=> accept the details and replace the password with it's hashcode!
            let hashcode = await bcrypt.hash(req.body.password,10)
            let data = new patient_model({...req.body, "password":hashcode})
            await data.save()
            res.json({"msg":"Account Created Successfully..."})
        }
    }
    catch(e){
        console.log(e)
        res.json({"msg":"Error in Registration"})
    }
}

let login_patient=async(req,res)=>{
    try{
        let obj= await patient_model.findById({"_id":req.body._id})
        if(obj){
            let f = await bcrypt.compare(req.body.password, obj.password)
            if(f){
                res.json({"token":jwt.sign({"_id":req.body._id}, "123"),"_id":obj._id,"name":obj.name,"msg":"login Successfully","role":obj.role,"company":obj.company})
            }
            else{
                res.json({"msg":"Invalid Password"})
            }
        }
        else{
            res.json({"msg":"Check Id"})
        }
    }
    catch(e){
        res.json({"msg":"error in login"})
    }
}

let get_patient_self=async(req,res)=>{
    try{
        let data=await patient_model.findById(req.params._id)
        res.json(data)
    }
    catch(e){
        res.json({"msg":"error in fetching self data"})
    }
}


let get_patient=async(req,res)=>{
    try{
        let data=await patient_model.find()
        res.json(data)
    }
    catch(e){
        res.json({"msg":"error in fetching patient data"})
    }
}


let get_insured_patient  =async(req,res)=>{
    try{
        let data = await patient_model.find({"company":req.params.com})
        res.json(data)
    }
    catch(e){
        res.json({"msg":"error in getting the data"})
    }
}
module.exports={login_patient,reg_patient,get_patient,get_patient_self, get_insured_patient}