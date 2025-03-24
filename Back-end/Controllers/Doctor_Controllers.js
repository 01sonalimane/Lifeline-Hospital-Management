let bcrypt=require("bcrypt")
let jwt = require("jsonwebtoken")
const { doctor_model } = require("../Model/Model")

let reg_doctor = async(req, res)=>{
    try{
        let obj = await doctor_model.findById({"_id":req.body._id})
        if(obj){
            //if acc already exist display the msg
            res.json({"msg":"Account already exist.."})
        }
        else{
            //if not=> accept the details and replace the password with it's hashcode!
            let hashcode = await bcrypt.hash(req.body.password,10)
            let data = new doctor_model({...req.body, "password":hashcode})
            await data.save()
            res.json({"msg":"Account Created Successfully..."})
        }
    }
    catch(e){
        res.json({"msg":"Error in Registration"})
    }
}


let login_doctor=async(req,res)=>{
    try{
        let obj= await doctor_model.findById({"_id":req.body._id})
        if(obj){
            if(obj.approval==true){
                let f = await bcrypt.compare(req.body.password, obj.password)
                if(f){
                    res.json({"token":jwt.sign({"_id":req.body._id}, "123"),"_id":obj._id,"name":obj.name,"msg":"login Successfully","role":obj.role})
                }
                else{
                    res.json({"msg":"Invalid Password"})
                }
            }
            else{
                res.json({"msg":"You are not a doctor..."})
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

let get_doctor=async(req,res)=>{
    try{
        let data=await doctor_model.find()
        res.json(data)
    }
    catch(e){
        res.json({"msg":"error in fetching doctor data"})
    }
}


module.exports={login_doctor,reg_doctor,get_doctor}