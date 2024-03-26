import express from "express";
import {
  signin,
  signup,
} from "../controllers/auth.controller.js"; /* no olvidar siempre poner la extension .js */

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
