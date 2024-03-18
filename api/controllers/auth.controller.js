import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
/* instalar el paquete bcryptjs para hashear password en base de datos */

/* funcion asincrona, requiere procesamiento */
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "all fields are required" });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    hashedPassword,
  });

  try {
    await newUser.save();
    res.json("Signup successful");
  } catch (error) {
    /* si repito usuario o email */
    res.status(500).json({ message: error.message });
  }
};
