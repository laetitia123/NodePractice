import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    firstName:String,
    lastname:String,
    email:String,
    password:String,
    phone:String,
    gender:String
});
const UserInfos = mongoose.model("user" ,UserSchema);


export default UserInfos;