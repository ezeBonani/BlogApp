import express from "express";
import { signup } from "../controllers/auth.controller.js"; /* no olvidar siempre poner la extension .js */

const router = express.Router();

router.post("/signup", signup);

export default router;
