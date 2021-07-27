import UserInfos from "../model/user.js";

class UserController{
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

}
export default UserController;
