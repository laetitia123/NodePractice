import UserInfos from "../model/user";
class Datachecker{
    static validateEmailDuplication = async (req,res,next) => {
        const email =await UserInfos.findOne({email:req.body.email});
        console.log(email);

        if(!email){
            return next();
        }
        return res.status(404).json({
            status:404,
            message:"emailexist"
        })
    }
    static checkAge = async (req,res,next) => {
        
        if (req.body.age <18){
            return res.status(4040).json({
                status:404,
                message:"you are under age"
            })
            
        }
        return next();

        

    }

}
export default Datachecker;