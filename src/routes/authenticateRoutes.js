import routes, { Router } from "express";
import AdminController from "../controllers/adminController.js";

const router = Router();
router.post("/login", AdminController.login);
router.register("/register", AdminController.login);



export default router;