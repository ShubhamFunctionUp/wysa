const validator = require('../validator/valiator')
const UserModel = require('../model/UserModel')
const jwt = require('jsonwebtoken');



const signup  =async(req,res)=>{
    
    let {nickName,email,phoneNumber,password} = req.body;
    if(!validator.isValid(nickName)){
        return res.status(404).send({status:false,msg:"Please enter valid name"})
    }

    let isnickName = await UserModel.findOne({nickName:nickName});

    if(isnickName){
        return res.status(400).send({status:false,msg:"nickName is already present"})
    }

    if(!validator.isValid(email)){
        return res.status(404).send({status:false,msg:"Please enter valid email"})
    }

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        res.status(400).send({status:false, msg:"email is not valid"})
        return
    }

    let isEmailPresent = await UserModel.findOne({email:email});
    if(isEmailPresent){
        return res.status(400).send({status:false,msg:"Email is already present"})
    }



    if(!validator.isValid(phoneNumber)){
        return res.status(404).send({status:false,msg:"Please enter valid phoneNumber"})
    }


    if (!/^[1-9]{1}\d{9}$/.test(phoneNumber)) {
        return res.status(422).send({
          status: false,
          message:
            "please enter 10 digit number which does not contain 0 at starting position",
        });
      }


    let isPhoneNumber = await UserModel.findOne({phoneNumber:phoneNumber});

    if(isPhoneNumber){
        return res.status(400).send({status:false,msg:"phoneNumber is already present"})
    }


    if(!(password.length>7 && password.length<=16)){
        return res.status(400).send({status:false,msg:"Please follow correct password format"})
    }

    let customerIsAdded = await UserModel.create(req.body);

    return res.status(201).send({status:true,msg:customerIsAdded})

}



const login = async (req,res)=>{
    
    let nickName = req.body.nickName;
    let password = req.body.password;
     
    if (!validator.isValid(nickName)) {
        return res
          .status(400)
          .send({ status: false, message: "enter valid email" });
      }
     
     

      let userIsPresent = await UserModel.findOne({nickName:nickName});
    
      if(!userIsPresent){
        return res.status(400).send({status:false,msg:"false",data:"Email is not correct"})

      }
      let actualPassword = await userIsPresent.isValidPassword(password)

      if(!actualPassword){
        return res.status(400).send({status:false,msg:"false",data:"password is not correct"})

      }

    
      let token = jwt.sign({userId:userIsPresent._id},"Shubham");
      
      return res.status(200).send({status:true,message:"Token is generated Successfully",data:token});


}


module.exports.signup=signup
module.exports.login=login