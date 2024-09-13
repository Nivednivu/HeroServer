import express from "express";
import { adminlogin, registeradmin } from "../controllers/adminControllers.js";

const adminRoutes = express.Router();

adminRoutes.post("/register", registeradmin);
adminRoutes.post("/login",adminlogin );


export default adminRoutes;         