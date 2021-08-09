  
import express from "express";
import SessionController from "../controller/SessionController";


const sessionRoute = express.Router();

sessionRoute.post("/request",SessionController.sessionRequest);
sessionRoute.get("/all",SessionController.getAllSessions);
sessionRoute.get("/:id", SessionController.getOneSession);
sessionRoute.patch("/:id", SessionController.updateOneSession);
sessionRoute.delete("/:id", SessionController.deleteOneSession);

export default sessionRoute;