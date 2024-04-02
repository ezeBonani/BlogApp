import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

//aca chequeo que el usuario tenga una cuenta verificando el token

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  //se necesita paquete cookie-parser
  if (!token) {
    return next(errorHandler(404, "Please sign-in"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unauthorized!"));
    }
    req.user = user; //seteo el nombre del usuario en el equest y lo paso para la siguiente funcion, que es updateUser
    next();
  });
};
