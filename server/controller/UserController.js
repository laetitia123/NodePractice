import UserInfos from "../model/user.js";
import TokenAuth from "../helper/TokenAuth.js";


class UserController{

    static signinUser = async (req, res) => {

        const { email, password } = req.body;


        const user = await UserInfos.findOne({ email: email, password: password });

        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "user not exist"

            })
        }


        const token = TokenAuth.tokenGenerator({
            id:user._id,
            email:user.email,
            status:user.status,
            role:user.role
        })
        return res.status(200).json({
            status: 200,
            message: "Success login",
            token:token,
            data: user
        })
    }


    // function to register user in database
    static signupUser = async(req,res)=>{
        const user = await UserInfos.create(req.body);

        if(!user){
            res.status(400).json({
                status:400,
                error:"user failed to register"
            })
        }
        return res.status(201).json({
            status:201,
            message:"user registered succesfully",
            data:user
        })
    }
    static getAllUsers = async(req,res)=>{
        const users = await UserInfos.find();
        if(!users){
                res.status(400).json({
                    status:400,
                    error:" Failed to get all users registered",
                    
                })
            }
        return res.status(201).json({
                status:201,
                message:" All users registered succesfully",
                data:users
            })
        
    }

    static getOneUser = async(req,res)=>{
        const user = await UserInfos.findById(req.params.id);
        if(!user){
            return res.status(400).json({
                message:"user not founs"
            })
            
        }
        return res.status(201).json({
            status:201,
            message:"user found",
            data:user
        })
    }

    // update function

    static updateOneUser = async(req,res)=>{
        const user = await UserInfos.findByIdAndUpdate(req.params.id,req.body);
        if(!user){
            return res.status(400).json({
                message:"user not found"
            })
            
        }
        const updateUser = await UserInfos.findByIdAndUpdate(req.params.id)
        return res.status(201).json({
            status:201,
            message:"user updated successfuly",
            data:updateUser
        })
    }
// delete funstion
static deleteOneUser = async(req,res)=>{
    const user = await UserInfos.findByIdAndDelete(req.params.id);
    if(!user){
        return res.status(400).json({
            message:"user not deleted"
        })
        
    }
    return res.status(201).json({
        status:201,
        message:"user deleted susseccfuly",
        data:user
    })
}


//update role informations of user
static updateOneUserRole = async (req, res) => {

    const data = await UserInfos.findById(req.params.id);
   let role ;

   if(data.role=="user")
   role="mentor";
   else
   role= "user";

    const user = await UserInfos.findByIdAndUpdate(req.params.id,{role:role});
    if (!user) {
        return res.status(404).json({
            status: 404,
            message: "user not found"
        })
    }

    const updateUser = await UserInfos.findById(req.params.id);
    return res.status(200).json({
        status: 200,
        message: "Success",
        data: updateUser
    })

}


  

}
export default UserController;
