import express from "express";
import {login, registerUser} from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login",login );


export default userRoutes;         