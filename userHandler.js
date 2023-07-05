const User= require("./userModel");

exports.createUser= async(req,res,next)=>{  
    try{
        const newUser= await User.create(req.body)

        res.status(200).json({
            status: "success",
            data: newUser
        })

    }
    catch{

        res.status(404).json({
            status: "fail"

        })


    }
}

exports.getUser = async(req,res,next)=>{  
   try{
    const pattern= req.params.first_name
    //console.log(pattern)
    const newUser= await User.find({first_name:{$regex: pattern}})  

    res.status(200).json({
        users: newUser,
        total: newUser.length
    })

   }
   catch{
    res.status(404).json({
        users: [],
        total: 0
    })

   }
    
}