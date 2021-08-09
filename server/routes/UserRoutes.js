import express from "express";
import Validator from "../middleware/Validator";
import Datachecker from "../middleware/Datachecker"
import UserController from "../controller/UserController.js";


const userRoute = express.Router();

userRoute.post("/signup",
Validator.newAccountRules(),
Validator.validateInput,
Datachecker.validateEmailDuplication,
Datachecker.checkAge,
UserController.signupUser);
userRoute.get("/all",UserController.getAllUsers);
userRoute.get("/:id",UserController.getOneUser);
userRoute.patch("/:id",UserController.updateOneUser);
userRoute.delete("/:id",UserController.deleteOneUser);
userRoute.patch("/:id/role",UserController.updateOneUserRole);
userRoute.post("/signin", UserController.signinUser);






export default userRoute;

