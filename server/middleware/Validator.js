import {check,validationResult}from "express-validator";
class Validator{
    static validateInput  = (req,res,next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage = errors.errors.map((err) =>err.msg);
            return res.status(400).json({
                status:400,
                message:errorMessage
            })
        }
        return next();


    }
    static newAccountRules(){
        return[
            check("email","please enter correct emaill").isEmail(),
            check("firstName","please your firsname have special character").isAlpha(),
            check("lastname","please your firsname have special character").isAlpha(),
            check("gender","gender is not valid").isIn(('male','female')),
            check("phone","phone is not valid").isMobilePhone(),
            check("password","password is not strong").isStrongPassword(),
];

    }
    static checkId(){
        return[
            check("id","id should be mongoId").isMongoId(),
        ]
    }


}
export default Validator;