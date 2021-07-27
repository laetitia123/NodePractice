import express from "express";
import UserController from "../controller/UserController.js";


const userRoute = express.Router();

userRoute.post("/signup",UserController.signupUser);
userRoute.get("/all",UserController.getAllUsers);
userRoute.get("/:id",UserController.getOneUser);
userRoute.patch("/:id",UserController.updateOneUser);
userRoute.delete("/:id",UserController.deleteOneUser);






export default userRoute;
