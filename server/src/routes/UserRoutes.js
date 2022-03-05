import { register,login } from "../controllers/UserController.js";
import express from "express";

const UserRouter = express.Router();

UserRouter.post("/register", register);
UserRouter.post("/login", login);

export default UserRouter;