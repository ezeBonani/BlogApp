import User from "../models/user.model.js";
/* instalar el paquete bcryptjs para hashear password en base de datos */
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email }); //metodo de busqueda en mongoDB
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password); //comparo password con el hash password
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password, try again"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); //el campo _id lo genera mongoDB

    const { password: pass, ...rest } = validUser._doc; //saco el password

    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
