import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
     firstName: {
        type: String,
        required: [true, "first-name is required"]
    },
    lastname:String,
     email: {
        type: String,
        unique: true
    },
     password: { 
        type: String, 
        default: "12345@@@" },
    phone:String,
      gender: {
        type: String,
        enum: ["male", "female"]
    },
     role:{
        type: String,
        enum:["admin","mentor","user"],
        default:"user"
    },
    status:{
        type: String,
        enum:["active","inactive"],
        default:"active"
    }
});
const UserInfos = mongoose.model("user" ,UserSchema);


export default UserInfos;