import User from "../models/user.model.js";
/* instalar el paquete bcryptjs para hashear password en base de datos */
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

/* funcion asincrona, requiere procesamiento */
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    /* si repito usuario o email salta error*/
    next(error);
  }
};
