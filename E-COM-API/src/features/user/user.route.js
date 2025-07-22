import express from "express";
import UserController from "./user.controller.js";
import { validateEmail } from "../../middlewares/emailvalidation.middleware.js";

const userRouter = express.Router();
const userController = new UserController();


userRouter.post("/signup",validateEmail,userController.signUp);
userRouter.post("/signin",userController.signIn);

export default userRouter;
